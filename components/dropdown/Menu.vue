<template>
	<li @mousemove="isHover = true" @mouseout="isHover = false">
		<a href="#" class="custom-dropdown-item">
				{{menu.name}}
				<span class="icon-left">
					<i v-if="isHover" class="fa fa-angle-up"></i>
					<i v-else class="fa fa-angle-down"></i>
				</span>
		</a>
		<div class="content" :class="isHover ? 'show' : 'hidden'">
			<sub-menu v-for="(item, index) in menu.children" :key="index" :menu="item"></sub-menu>
		</div>
	</li>
</template>

<script>
import SubMenu from './Submenu.vue';

export default {
	data() {
		return {
			menu: {
				name: 'testtest',
				children: [
					{
							name: 'test2',
							children: []
						},
					{
							name: 'test1',
							children: [
								{
									name: 'test1_2',
									children: []
								},
								{
									name: 'test1_1',
									children: [{
										name: 'test2_2',
										children: []
									}]
								},
								
							]
						},
				]
			},
			isHover: true
		}
	},
	components: {SubMenu}
}
</script>

<style lang="less">
li {
	position: relative;
}

.custom-dropdown-item {
	padding: 0 10px !important;
}

.content {
	position: absolute;
	top: 97%;
	right: 0;
	z-index: 1000;
	// float: left;
	min-width: 6rem;
	font-size: 1rem;
	color: #212529;
	text-align: left;
	background-color: #f5f5f5;
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

	.custom-dropdown-item {
		display: block;
		background-color: #f5f5f5;
	}

	a {
		line-height: 30px;
	}
}

#nav-collapse.show ul li {
	.content {
		position: relative;
		float: none;
		margin: 0 20px 10px;
		border: none;
		box-shadow: none;
	}
}

.content.show{
	display: block;
}
.content.hidden{
	display: none;
}
a:hover {
	text-decoration: none;
}
.icon-left {
	display: inline-block;
	padding-left: 3px;
}
</style>