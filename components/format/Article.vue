<template>
	<div class="my-3">
    <b-container class="pb-5">
      <div 
        class="pb-3"
				>
        <b-link to="/article">{{ $t('article.list') }}</b-link>
        <i class="fas fa-angle-right px-2"></i>
        <small style="color:#999">{{ options.article.title }}</small>
      </div>
			<b-row>
        <!-- 文章内容 -->
        <b-col 
					cols="9" 
					class="p-0"
				>
					<h3 
            class="p-3"
            style="font-weight:bold;"
					>{{ options.article.title }}</h3>
					<b-card-text 
            class="pl-3 pb-3"
            style="color:#999;"
					>{{ $t('article.by') }}&nbsp;{{ options.article.author }}&nbsp;{{ $t('article.published') }}&nbsp;{{ options.article.createdAt }}</b-card-text>
					<b-card 
						class="border-0 p-3"
						v-html="render(options.article.text)"
					></b-card>
        </b-col>

        <!-- 推荐阅读 -->
        <b-col 
					v-if="options.recommend.length !== 0"
          cols="3"
          class="d-none d-md-block"
				>
          <b-card 
            class="border rounded-0"
            body-class="pb-0"
					>
            <h5 class="mb-4">{{ $t('article.recommend') }}</h5>
            <b-card
              v-for="(item, index) in options.recommend"
              :key="index"
              no-body
              class="border-0 pb-4"
						>
              <b-link 
                target="_blank"
								:to="`/article/${item.id}?lang=${item.lang}`"
              >
                <b-img 
									:src="item.thumbnail" 
									fluid
								/>
              </b-link>
              <b-card-text class="text-center mt-3">
								<small>{{ item.title }}</small>
							</b-card-text>
            </b-card>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios.js';
import Markdown from 'markdown-it';

const md = new Markdown();

export default {
	name: 'format-article',
	props: [
		'options'
	],
	methods: {
		render(content = '') {
			return md.render(content);
		}
	},
	async getRenderData(options, {
		id
	}, { lang }) {
		const articleId = id ? id : options.articleId;
		const article = await axios.getArticle(articleId, lang ? lang : options.lang);
		let recommend = [];

		if (options.recommend) {
			const { categoryId, limit, keyword, lang } = options.recommend;

			recommend = await axios.getArticleList({categoryId, limit, keyword, lang});
		}

		return {
			article,
			recommend
		};
	}
};
</script>

<style lang="less">
img {
	width: 100%
}
</style>

