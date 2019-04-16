<template>
	<div class="format-content my-5 border-top border-bottom">
    <b-container class="pb-5">
			<h1 
			class="text-center my-5"
			v-if="heading">{{heading}}</h1>
			<b-card 
				no-body 
				class="border-0">
				<b-row>
					<b-col cols="5">
						<b-img src="https://placekitten.com/300/300" fluid></b-img>
					</b-col>
					<b-col>
						<h3>title</h3>	
						<b-card-text style="color:#999;">Some quick example text to build on the card and make up the bulk of the card's content.Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
						<b-card-text style="color:#999;">Some quick example text to build on the card and maext to build on the card and maext to build on the card and maext to build on the card and make up the bulk of the card's content.Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
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

</style>

