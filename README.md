# Page config

```
{
	name: 'page name', (required)
	title: 'page title',
	meta: [
		// page meta information
	],
	router: '/index', (required)
	body: [
		//format config
		{
			name: 'format name', (required)
			options: {
				// format config (required)
			},
			classList: [] //for format
		}
	]
}
```

# format (format name and options)

## format-header

```
[
	{
		url: 'http://xxxx.com',
		label: 'label1'
	},
	{
		label: 'label2',
		children: [
			{
				url: 'http://xxxx.com',
				label: 'label3'
			},
			{
				url: 'http://xxxx.com',
				label: 'label4'
			}
		]
	}
]
```

## format-footer

```
{
	"zh-CN": {
		"start": 2014,
		"tel": "022-27956116",
		"email": "lemonce@or-change.cn",
		"address": "天津市西青区李七庄街凌奥创意产业园一期7号楼一层101室"
	},
	"en": {
		"start": 2014,
		"tel": "022-27956116",
		"email": "lemonce@or-change.cn",
		"address": "Room 101, Building 7, Li Qi Zhuang Street Lingao Creative Industry Park,Tianjin"
	}
}
```

## format-banner

```
{
	image: 'http://xxxx',
	text: 'test'
}
```

## format-carousel

```
[
	{
		image: 'http://xxxx',
		text: 'test'
	},
	{
		image: 'http://xxxx',
		text: 'test'
	},
	{
		image: 'http://xxxx',
		text: 'test'
	}
]
```

## format-article

```
{
	articleId: the id of article,
	lang: the lang of article,
	recommend: {
		categoryId: the id of category,
		limit: the limit of article length,
		keyword: keyword of title or abstract,
		lang: the lang of article
	}
}
```

## format-article-list

```
{
	articleList: {
		categoryId: the id of category,
		limit: the length fo article,
		keyword: the keyword to find article,
		lang: the lang of article
	},
	recommend: {
		categoryId: the id of category,
		limit: the length fo article,
		keyword: the keyword to find article,
		lang: the lang of article
	}
}
```

## format-card
```
{
	categoryId: the id of category,
	limit: the length of article list,
	keyword: search article list,
	lang: the lang of article
}
```

## format-card-circle
```
{
	categoryId: the id of category,
	limit: the length of article list,
	keyword: search article list,
	lang: the lang of article
}
```

## format-card-extend
```
{
	categoryId: the id of category,
	limit: the length of article list,
	keyword: search article list,
	lang: the lang of article
}
```

## format-card-transparent
```
{
	articleId: the id of article,
	categoryId: the id of category,
	keyword: search article list,
	lang: the lang of article
}
```

## format-category
```
{
	image: background-image,
	navbar: [
		{
			label: '',
			url: ''
		}
	]
}
```

## format-category-card
```
{
	"zh-CN": [
		{
			label: '你好',
			url: '',
			image: ''
		}
	],
	"en": [
		{
			label: 'hello',
			url: '',
			image: ''
		}
	]
}
```

## format-content
```
{
	articleId: the id of article,
	categoryId: the id of category,
	keyword: search article list,
	lang: the lang of article
}
```

## format-fixed-background
```
{
	articleId: the id of article,
	categoryId: the id of category,
	limit: the length of article list,
	keyword: search article list,
	lang: the lang of article
}
```