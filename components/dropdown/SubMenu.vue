<template>
	<a v-if="menu.children.length === 0" href="#" class="custom-dropdown-item">{{menu.name}}</a>
	<div v-else @mousemove="isHover = true" @mouseout="isHover = false" class="second-menu">
		<a href="#" class="custom-dropdown-item">
			{{menu.name}}
			<span class="icon-left">
				<i class="fa fa-angle-right"></i>
			</span>
		</a>
		<div class="content" :class="isHover ? 'show' : 'hidden'">
			<sub-menu v-for="(item, index) in menu.children" :key="index" :menu="item"></sub-menu>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sub-menu',
	props: ['menu'],
	data() {
		return {
			isHover: false
		}
	}
}
</script>

<style lang="less">
.second-menu {
	position: relative;
	.content {
		top:0;
		left: 99%;
	}
}

#nav-collapse.show ul li .content .second-menu {
	.content {
		position: relative;
		float: none;
		top: auto;
		right: auto;
	}
}
</style>
