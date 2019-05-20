<template>
	<div class="my-3">
    <b-container class="pb-5">
      <div 
        class="pb-3"
				>
        <b-link :to="renderData.href">{{ $t('article.list') }}</b-link>
        <i class="fas fa-angle-right px-2"></i>
        <small style="color:#999">{{ renderData.article.title }}</small>
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
					>{{ renderData.article.title }}</h3>
					<b-card-text 
            class="pl-3 pb-3"
            style="color:#999;"
					>{{ $t('article.by') }}&nbsp;{{ renderData.article.author }}&nbsp;{{ $t('article.published') }}&nbsp;{{ renderData.article.createdAt }}</b-card-text>
					<b-card 
						class="border-0 p-3"
						v-html="render(renderData.article.text)"
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
								:to="item.href"
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
const MAX_ITEM_LENGTH = 4;

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
	async renderData({ options, mapping, params, Article }) {
		const articleId = params[mapping['articleId']];
		const lang = params.lang;
		let recommend = [];

		const article = await Article.get(articleId, lang);

		if (options.recommend) {
			const { selector } = options.recommend;

			recommend = await ({
				category(id) {
					return Article.list({
						categoryId: id,
						limit: MAX_ITEM_LENGTH,
						lang
					});
				},
				enum(list) {
					return Promise.all(list.slice(0, MAX_ITEM_LENGTH - 1).map(articleId => {
						return Article.get(articleId, lang);
					}));
				}
			})[selector.name].call(null, selector.payload).then(list => list.map(article => {
				return {
					href: (lang ? `/${lang}` : '') + `/article/${article.id}/${article.title}`,
					thumbnail: article.thumbnail,
					title: article.title
				};
			}));
		}

		return {
			href: (lang ? `/${lang}` : '') + '/category',
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

