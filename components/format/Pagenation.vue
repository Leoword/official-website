<template>
	<b-container>
		<div class="py-5">
      <h2 class="text-center mb-5">Pagenation</h2>
      <b-pagination v-model="currentPage" :total-rows="rows" align="fill"></b-pagination>
    </div>
	</b-container>
</template>

<script>
export default {
	data () {
		return {
			rows: 100,
			currentPage: 3
		}
	},
	name: 'format-page'
	
}
</script>
