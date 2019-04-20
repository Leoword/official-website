<template>
	<div class="format-content my-5">
    <b-container class="py-5">
			<h1 
			v-if="heading"
			class="text-center mb-5"
			>{{ heading }}</h1>
			<b-card 
				no-body 
				class="border-0"
				>
				<b-row>
					<b-col 
					cols="4"
					class="d-none d-md-block"
					>
						<b-img 
							:src="options[0].image" 
							fluid 
							style="max-width: 300px;"
							/>
					</b-col>
					<b-col>
						<h3>title</h3>	
						<b-card
							class="border-0"
							style="color:#999;"
							v-html="options[0].abstract"
							></b-card>
					</b-col>
				</b-row>
			</b-card>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'format-content',
	props: ['options'],
	data() {
		return {
			heading: 'Content'
		};
	},
	methods: {
    
	}
};
</script>

<style lang="less">

</style>

