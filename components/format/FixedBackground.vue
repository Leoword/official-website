<template>
	<div
		class="format-fixed-background py-5"
		style="min-height:500px;"
	>
    <b-container>
			<h1
				v-if="heading"
				class="text-center mb-4"
				style="color:#fff;"
				>{{ heading }}</h1>
			<div class="fixed-background-line"></div>
			<b-card-group>
				<b-card
					v-for="(item, index) in options"
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
						></i>
						{{ item.abstract }}
					</b-card-text>
						<h4
							class="position-absolute fixed-bottom ml-4 mb-5"
						>{{ item.author }}</h4>
					<b-button
						variant="outline-secondary"
						size="lg"
						style="position:absolute;right:1rem;bottom:1rem;"
						to=""
					>To See</b-button>
				</b-card>
			</b-card-group>
		</b-container>
  </div>
</template>

<script>
export default {
	name: 'format-fixed-background',
	props: ['options'],
	data () {
		return {
			heading: 'Fixed Background'
		};
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
