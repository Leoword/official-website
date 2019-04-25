<template>
	<div>
		<page-header></page-header>
		<nuxt id="container" />
		<page-footer></page-footer>
	</div>
</template>

<script>
import PageHeader from '~/components/Header.vue';
import PageFooter from '~/components/Footer.vue';

export default {
	components: {
		PageHeader,
		PageFooter
	}
};
</script>


<style>
#container {
	min-height: 600px;
	padding-top: 56px;
}
</style>
