<template>
	<b-container class="py-5">
		<h2 class="text-center pb-3">新闻资讯</h2>
		<b-row>
			<b-col cols="6" v-for="(item,index) in data" :key="index">
				<b-card class="border-top-0 border-left-0 border-right-0">
					<b-link>
						<b-card-text class="float-left">{{item.text}}</b-card-text>
					</b-link>
					<b-card-text class="float-right">{{item.date}}</b-card-text>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import data from "../staticdata/list.json"
export default {
	data () {
		return {
			data
		}
	},
	name: 'format-list-a'
	
}
</script>
