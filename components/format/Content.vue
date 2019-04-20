<template>
	<div class="format-content my-5">
    <b-container class="py-5">
			<h1 
			class="text-center mb-5"
			v-if="heading">{{heading}}</h1>
			<b-card 
				no-body 
				class="border-0">
				<b-row>
					<b-col cols="4">
						<b-img 
							:src="options[0].url" 
							fluid 
							style="max-width: 300px;"/>
					</b-col>
					<b-col>
						<h3>title</h3>	
						<b-card-text 
							style="color:#999;"
							v-html="options[0].text"></b-card-text>
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
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.format-content {
}
</style>

