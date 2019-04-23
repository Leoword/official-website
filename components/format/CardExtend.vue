<template>
<div class="py-5 format-card-extend">
	<b-container>
		<h1
			v-if="heading"
			class="text-center mb-3"
			>{{ heading }}</h1>
		<b-card-group
			deck
			>
			<b-card
				v-for="(item,index) in options"
				:key="index"
				no-body
				class="rounded-0 position-relative my-4"
				style="min-height:240px;"
				>
				<h4 class="pl-3 pt-3 text-center">{{ item.title }}</h4>
				<i
					class="fas fa-quote-left pl-3 py-3"
					style="color:#007BFF;font-size:1.3em;"
					></i>
				<b-card-text
					class="px-3 pb-4"
					style="color:#999;"
					>{{ item.abstract }}</b-card-text>
				<b-button
					variant="primary"
					class="position-absolute w-50 rounded-0 ml-4 card-extend-button"
					style="bottom:-20px"
					:href="item.url"
					:to="item.url"
					>{{ item.target }}</b-button>
			</b-card>
		</b-card-group>
	</b-container>
</div>
</template>

<script>
export default {
	name: 'format-card-extend',
	props: ['options'],
	data () {
		return {
			heading: ''
		};
	}
};
</script>

<style lang="less">
.format-card-extend {
	background-color: #DCE6EA;
	// background-image: url('https://picsum.photos/1024/480/?image=10');
	// background-position: center top;
	// background-repeat: no-repeat;
	// background-size: cover;
	img {
		height: 230px;
	}
	.card-extend-button {
		&:hover {
			width: 100%;
		}
	}
}
</style>