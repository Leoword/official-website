<template>
	<div class="my-3">
    <b-container class="pb-5">
      <div 
        class="pb-3"
				>
        <b-link to="/category">{{ $t('article.list') }}</b-link>
        <i class="fas fa-angle-right px-2"></i>
        <small style="color:#999">{{ renderData.article[0].title }}</small>
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
					>{{ renderData.article[0].title }}</h3>
					<b-card-text 
            class="pl-3 pb-3"
            style="color:#999;"
					>{{ $t('article.by') }}&nbsp;{{ renderData.article[0].author }}&nbsp;{{ $t('article.published') }}&nbsp;{{ renderData.article[0].createdAt }}</b-card-text>
					<b-card 
						class="border-0 p-3"
						v-html="render(renderData.article[0].text)"
					></b-card>
        </b-col>

        <!-- 推荐阅读 -->
        <b-col 
					v-if="renderData.recommend.length !== 0"
          cols="3"
          class="d-none d-md-block"
				>
          <b-card 
            class="border rounded-0"
            body-class="pb-0"
					>
            <h5 class="mb-4">{{ $t('article.recommend') }}</h5>
            <b-card
              v-for="(item, index) in renderData.recommend"
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
	async renderData(options, context, getArticle, getArticleList) {
		const articleId = context.params.id ? context.params.id : options.articleId;
		const lang = context.query.lang ? context.query.lang : context.params.lang;

		const article = await getArticle([articleId], lang);
		let recommend = [];

		if (options.recommend) {
			const { articleId,categoryId, limit, keyword } = options.recommend;

			if (articleId) {
				recommend = await getArticle(articleId, context.params.lang);
			} else {
				recommend = await getArticleList({
					categoryId, 
					limit: limit ? limit : 4, 
					keyword, 
					lang: context.params.lang
				});
			}
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

