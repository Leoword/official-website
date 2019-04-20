<template>
	<div class="format-card">
		<b-container class="py-5">
			<h1 
				class="text-center mb-5"
				v-if="heading">{{heading}}</h1>
			<b-card-group 
				deck
				class="animated bounceInLeft mb-5">
				<b-card 
					v-for="(item,index) in options"
					:key="index"
					no-body>
					<b-link :href="item.url">
						<b-img 
							:src="item.url" 
							fluid/>
					</b-link>
					<b-card-text class="p-3">{{item.text}}</b-card-text>
				</b-card>
			</b-card-group>
		</b-container>	
	</div>
</template>

<script>
export default {
	name: 'format-card',
	props: ['options'],
	data () {
		return {
			heading: 'Card'
		}
	}
}
</script>

<style lang="less">
.format-card {
	background-color: #f6f6f6;
	.card {
		transition: all 0.3s;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
		}
	}
	
	img {
		height: 180px;
	}	
}
</style>

