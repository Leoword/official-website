<template>
	<b-container class="py-5">

		<h2 style="text-align:center;padding-bottom:20px;">Inline</h2>

		<b-row>
			<b-col cols="3" class="my-3">
				<a href="">
					<b-img
						src="https://picsum.photos/600/200/?image=26"
						fluid
						class="h-100"
						rounded />
				</a>
			</b-col>
			<b-col>
				<b-row>
					<b-col
						cols="4"
						v-for="(item,index) in data"
						class="my-3"
						:key="index">
						<b-card no-body>
							<b-link :href="item.url">
								<b-img :src="item.url" fluid></b-img>
							</b-link>
							<b-card-text class="p-3">
								Some quick example text to build on the card
							</b-card-text>
						</b-card>
					</b-col>
				</b-row>
			</b-col>
		</b-row>

	</b-container>
</template>

<script>
import data from "../staticdata/inline.json"

export default {
	data () {
		return {
			data
		}
	},
	name: 'format-inline'
	
}
</script>
