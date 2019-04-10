<template>
	<div id="card-box">
		<b-container>

			<h2 class="text-center pb-3">Card</h2>
			<b-card-group deck>

				<b-card v-for="(item,index) in data"
					:key="index"
					no-body>
					<b-link :href="item.url">
						<b-img :src="item.url" fluid></b-img>
					</b-link>
					<b-card-text class="p-3">
						 {{item.text}}
					</b-card-text>
				</b-card>

			</b-card-group>

		</b-container>	
	</div>
</template>

<script>
import data from "../staticdata/card.json"

export default {
	data () {
		return {
			data
		}
	},
	name: 'format-card',
	props: ['options']
}
</script>

<style lang="less">
#card-box {
	padding: 70px 0;

	img {
		height: 150px
	}
	
}
</style>

