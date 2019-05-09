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

## format-banner
```
```