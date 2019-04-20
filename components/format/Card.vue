<template>
	<div class="format-card">
		<b-container class="py-5">
			<h1 
				v-if="heading"
				class="text-center mb-5"
				>{{ heading }}</h1>
			<b-card-group 
				deck
				class="animated bounceInLeft slower mb-5"
				>
				<b-card 
					v-for="(item,index) in options"
					:key="index"
					no-body
					>
					<b-link :href="item.image">
						<b-img 
							:src="item.image" 
							fluid
							/>
					</b-link>
					<b-card-text class="p-3">{{ item.abstract }}</b-card-text>
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
		};
	}
};
</script>

<style lang="less">
.format-card {
	background-color: #F2F4F5;
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

