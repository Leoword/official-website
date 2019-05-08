<template>
	<div class="format-card-transparent py-5">
    <b-container>
			<b-card class="card-transparent-content position-relative pt-4 px-5">
				<h1>{{ options.title }}</h1>
				<b-card-text style="padding-bottom:4rem;">{{ options.abstract }}</b-card-text>
				<b-button
					class="card-transparent-button"
					variant="primary"
					size="lg"
				>More</b-button>
			</b-card>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'format-card-transparent',
	props: ['options']
}; 
</script>

<style lang='less'>
  .format-card-transparent {
		min-height: 400px;
		background: url('../../assets/images/bg2.jpg') center center;
		.card-transparent-content {
			min-height:300px;
			color: #ffffff;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.card-transparent-button {
			position: absolute;
			left:4rem;
			bottom:2rem;
			padding: 0.5rem 3rem;
		}
  }
</style>
