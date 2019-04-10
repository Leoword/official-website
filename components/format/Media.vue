<template>
	<b-container class="py-5">

		<h2 style="text-align:center;padding-bottom:20px;">Media</h2>
		<b-card style="border:none;" no-body>
			<b-row>
				<b-col cols="4">
					<b-link>
						<b-img src="https://placekitten.com/300/300" rounded></b-img>
					</b-link>
				</b-col>
				<b-col>
					<b-card-text>
						HTML 标签原本被设计为用于定义文档内容。通过使用这样的标签，HTML 的初衷是表达“这是标题”、“这是段落”、“这是表格”之类的信息。同时文档布局由浏览器来完成，
						而不使用任何的格式化标签。由于两种主要的浏览器（Netscape 和 Internet Explorer）不断地将新的 HTML 标签和属性（比如字体标签和颜色属性）添加到 HTML 规范中，创建文档内容清
						晰地独立于文档表现层的站点变得越来越困难。为了解决这个问题，万维网联盟（W3C），这个非营利的标准化联盟，肩负起了 HTML 标准化的使命，并在 HTML 4.0 之外创造出样式（Style）。
						所有的主流浏览器均支持层叠样式表。
					</b-card-text>
				</b-col>
			</b-row>
		</b-card>

	</b-container>
</template>

<script>
export default {
	name: 'format-media'
	
}
</script>
