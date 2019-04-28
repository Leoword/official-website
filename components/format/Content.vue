<template>
	<div class="format-content py-5">
    <b-container>
			<h1
			v-if="heading"
			class="text-center mb-5"
			>{{ heading }}</h1>
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
							:src="options[0].thumbnail"
							fluid
							style="max-width:300px;"
							/>
					</b-col>
					<b-col class="position-relative pb-5">
						<h3>{{ options[0].title }}</h3>
						<b-card
							class="border-0"
							style="color:#999;"
							v-html="options[0].abstract"
							></b-card>
						<b-button
							variant="outline-info"
							block
							class="position-absolute fixed-bottom"
							:to="options[0].url"
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
			heading: 'Content'
		};
	},
	methods: {

	}
};
</script>

<style lang="less">

</style>

