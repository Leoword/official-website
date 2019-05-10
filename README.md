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
no config
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
[
	{
		label: '',
		url: '',
		image: '
	}
]
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