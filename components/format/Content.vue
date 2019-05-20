<template>
	<div class="format-content my-3">
    <b-container>
			<b-row>
				<b-col
					cols="4"
					class="d-none d-md-block"
				>
					<img
						:src="renderData.thumbnail"
						fluid
						style="width: 100%;max-height: 300px"
					/>
				</b-col>
				<b-col>
					<p
						class="border-0"
						style="color:#999;"
					>{{ renderData.abstract | substr }}</p>
					<b-button
						variant="outline-info"
						block
						:to="renderData.href"
						class="position-absolute fixed-bottom"
					>{{ $t('content.more') }}</b-button>
				</b-col>
			</b-row>
    </b-container>
  </div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-content',
	filters: {
		substr(value) {
			return getSubStr(value, 370, 140);
		}
	},
	props: ['options'],
	async renderData({ options, lang, Article }) {
		return Article.get(options.articleId, lang).then(article => {
			return {
				href: (lang ? `/${lang}` : '') + `/article/${article.id}/${article.title}`,
				thumbnail: article.thumbnail,
				abstract: article.abstract
			};
		});
	}
};
</script>

<style lang="less">
.format-content {
	max-height: 350px;
	p {
		overflow: hidden;
		max-height: 200px;
		text-indent: 2em;
		font-size: 15px;
	}
}
</style>

