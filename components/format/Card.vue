<template>
	<b-container class="py-5 format-card">
		<h1 
			class="text-center my-5"
			v-if="heading">{{heading}}</h1>
		<b-card-group 
			deck
			class="animated bounceInLeft mb-5">
			<b-card v-for="(item,index) in cardData"
				:key="index"
				no-body
				class="rounded-0">
				<b-link :href="item.url">
					<b-img :src="item.url" fluid></b-img>
				</b-link>
				<b-card-text class="p-3">{{item.text}}</b-card-text>
			</b-card>
		</b-card-group>
	</b-container>	
</template>

<script>
export default {
	name: 'format-card',
	props: ['cardData'],
	data () {
		return {
			heading: 'Card'
		}
	},
	methods: {
		
	}
}
</script>

<style lang="less">
.format-card {
	.card {
		transition: all 0.1s;

		&:hover {
			transform: scale(1.02);
			box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
		}
	}
	
	img {
		height: 180px;
	}	
}
</style>

