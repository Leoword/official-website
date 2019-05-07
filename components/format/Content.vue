<template>
	<div class="format-content py-5">
    <b-container>
			<b-card
				no-body
				class="border-0"
				>
				<b-row>
					<b-col
					cols="4"
					class="d-none d-md-block"
					>
						<b-img
							:src="renderData.thumbnail"
							fluid
							style="max-width:300px;"
							/>
					</b-col>
					<b-col class="position-relative pb-5">
						<h3>{{ renderData.title }}</h3>
						<b-card
							class="border-0"
							style="color:#999;"
							>{{renderData.abstract}}</b-card>
						<b-button
							variant="outline-info"
							block
							class="position-absolute fixed-bottom"
							:to="`/article/${renderData.hash}`"
							>More</b-button>
					</b-col>
				</b-row>
			</b-card>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'format-content',
	props: ['options'],
	data() {
		return {
		};
	},
	computed: {
		renderData() {
			const {thumbnail, abstract, hash} = this.options;

			return {
				hash: hash ? hash : '#',
				thumbnail: thumbnail ? thumbnail : '~/assets/images/placeholder',
				abstract: abstract ? abstract : this.$t('card.abstract')
			};
		}
	},
	methods: {

	}
};
</script>

<style lang="less">
.format-content {
	p {
		text-indent: 2em;
	}
}
</style>

