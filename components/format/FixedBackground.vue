<template>
	<div
		class="format-fixed-background py-5"
		style="min-height:500px;"
	>
    <b-container>
			<h2 
				class="text-center" 
				style="color:#fff;"
			>{{ $t('fixed.name') }}</h2>
			<div class="fixed-background-line"></div>
			<b-card-group>
				<b-card
					v-for="(article, index) in renderData"
					:key="index"
					class="mx-4 rounded position-relative"
					style="min-height:250px;"
					no-body
				>
					<b-card-text
						style="line-height:30px;color:#757575;font-size:15px;padding-bottom:4rem;"
						class="pt-4 px-4"
					>
						<i
							class="fas fa-quote-left pr-1"
							style="font-size:1.5em;"
						/>
						{{ article.abstract }}
					</b-card-text>
						<h4
							class="position-absolute fixed-bottom ml-4 mb-5"
						>{{ article.author }}</h4>
					<b-button
						variant="outline-secondary"
						size="lg"
						style="position:absolute;right:1rem;bottom:1rem;"
						:to="article.href"
					>{{ $t('fixed.see') }}</b-button>
				</b-card>
			</b-card-group>
		</b-container>
  </div>
</template>

<script>
const MAX_ITEM_LENGTH = 3;

export default {
	name: 'format-fixed-background',
	props: ['options'],
	async renderData({ options, lang, Article }) {
		const { selector } = options;

		return ({
			category(id) {
				return Article.list({
					categoryId: id,
					limit: MAX_ITEM_LENGTH,
					lang
				});
			},
			enum(list) {
				return Promise.all(list.slice(0, MAX_ITEM_LENGTH - 1).map(articalId => {
					return Article.get(articalId, lang);
				}));
			}
		})[selector.name].call(null, selector.payload).then(list => list.map(artical => {
			return {
				href: (lang ? `/${lang}` : '') + `/article/${artical.id}/${artical.title}`,
				author: artical.author,
				abstract: artical.abstract
			};
		}));
	}
};
</script>

<style lang="less">
	.format-fixed-background {
		background: url('../../assets/images/bg.jpg') fixed;
		background-size: cover;

		.fixed-background-line {
			height: 2px;
			width: 80px;
			background: #005DE8;
			margin: 0 auto 50px;
		}
	}
</style>
