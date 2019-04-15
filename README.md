# official-website

## need to connect api

### 获取渲染页面列表

GET /api/page
```
数据：
{
	id: int,
	path: string,//页面路径,
	sectionList: array,//页面要渲染的版块,
	comment: string,//页面描述
}
```

### 获取某个渲染页面

GET /api/page/:id
```
数据：
{
	path: string, //页面路径
	sectionList: array, //页面要渲染的版块
	comment: string
}
```

### 获取要渲染版块的详细信息

GET /api/section/:id
```
数据：
{
	name: string, //板块名
	format: int, //版式id
	collection: string, //一个对象字符串，获取所需的渲染数据
	comment: string， //版块描述
}
```
### 获取版块渲染数据

GET /api/section/:id/collaction
```
数据：
{
	
}
```

### 获取需要版式的详细信息

GET /api/format/:id
```
数据：
{
	name: string, //名称
	comment: string//描述
}
```

### 获取文章列表

GET /api/article
```
数据：
{

}
```

### 获取某类的文章列表

GET /api/category/:id/article
```
数据：
{

}
```

### 获取某个文章详细信息

GET /api/article/:articleId/language/:languageId
```
数据：
{

}
```

