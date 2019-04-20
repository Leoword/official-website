<template>
<div class="py-5 format-card-extend">
	<b-container>
		<h1 
			class="text-center mb-5"
			v-if="heading">{{heading}}</h1>
		<b-card-group
			deck 
			class="py-4">
			<b-card v-for="(item,index) in options"
				:key="index"
				no-body
				class="rounded-0 position-relative">
				<b-link :href="item.url">
					<b-img :src="item.url" fluid></b-img>
				</b-link>
				<h3 class="pl-3 pt-3" style="color:#999;">title</h3>
				<b-card-text 
					class="p-3 pb-4" 
					style="color:#999;">
					{{item.text}}
				</b-card-text>
				<b-button
					variant="primary"
					class="position-absolute w-50 rounded-0 ml-4 card-extend-button"
					style="bottom:-20px"
					:href="item.url">
					{{item.target}}
				</b-button>
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
			heading: 'format-card-extend'
		}
	}
}
</script>

<style lang="less">
.format-card-extend {
	background-color: #f6f6f6;
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

