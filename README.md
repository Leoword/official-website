# Page config

```
{
	"name": "page name", (required)
	"title": "page title",
	"meta": [
		// page meta information
	],
	"router": "/index", (required)
	"body": [
		//format config
		{
			"name": "format name", (required)
			"options": {
				// format config (required)
			},
			"classList": [] //for format
		}
	]
}
```

# format (format name and options)

## format-header

```
{
    "zh-CN":[
    	// 点击 link
        {
            "url": "http://xxxx.com",
            "label": "标签1"
        },
        // 点击 dropdown
        {
            "label": "标签2",
            "children": [
                {
                    "url": "http://xxxx.com",
                    "label": "标签3"
                },
                {
                    ...
                }
            ]
        }
    ],
    "en": [
        {
            "url": "http://xxxx.com",
            "label": "label1"
        },
        {
            "label": "label2",
            "children": [
                {
                    "url": "http://xxxx.com",
                    "label": "label3"
                },
                {
                    ...
                }
            ]
        }
    ]
}

```

## format-footer

```
{
	"zh-CN": {
		"start": Company registration time,
		"tel": phone number,
		"email": email,
		"address": Company address
	},
	"en": {
		"start": Company registration time,
		"tel": phone number,
		"email": email,
		"address": Company address
	}
}
```

## format-banner

```
{
	"zh-CN": {
        "image": "http://xxxx",
		"text": "测试"
	},
	"en": {
        "image": "http://xxxx",
		"text": "test"
	}
}
```

## format-carousel

```
{
	"zh-CN": [
        {
            "image": "http://xxxx",
            "text": "测试"
        },
        {
            ...
        }
	],
	"en": [
        {
            "image": "http://xxxx",
            "text": "test"
        },
        {
            ...
        }
	]
}
```

## format-article

```
{
	"articleId": [the id of article],
	"recommend": {
		"categoryId": the id of category,
		"limit": the limit of article length,
		"keyword": keyword of title or abstract
	} 
	OR 
	{
		"articleId": the id of article, id...
	}
}
```

## format-article-list

```
{
	articleList: {
		"categoryId": the id of category,
		"limit": the limit of article length,
		"keyword": keyword of title or abstract,
	},
	recommend: {
		"categoryId": the id of category,
		"limit": the limit of article length,
		"keyword": keyword of title or abstract
	} 
	OR 
	{
		"articleId": [the id of article, id...]
	}
}
```

## format-card
```
{
	"categoryId": the id of category,
	"limit": the length of article list,
	"keyword": search article list,
}
OR
{
	"articleId": [the id of article, id, id, id],
}
```

## format-card-circle
```
{
	"categoryId": the id of category,
	"limit": the length of article list,
	"keyword": search article list,
}
OR
{
	"articleId": [the id of article, id, id, id],
}
```

## format-card-extend
```
{
	"categoryId": the id of category,
	"limit": the length of article list,
	"keyword": search article list,
}
OR
{
	"articleId": [the id of article, id, id, id],
}
```

## format-card-transparent
```
{
	"articleId": [the id of article]
}
```

## format-category
```
{
	"image": background-image,
	"zh-CN": [
        {
            "label": "类别1",
            "categoryId": ""
        },
        {
            ...
        }
	],
	"en": [
		{
			"label": "category1",
			"categoryId": ""
		},
		{
            ...
		}
	]
}
```

## format-category-card
```
{
	"zh-CN": [
		{
			"label": "你好",
			"categoryId": "",
			"image": ""
		}
	],
	"en": [
		{
			"label": "hello",
			"categoryId": "",
			"image": ""
		}
	]
}
```

## format-content
```
{
	"articleId": [the id of article]
}
```

## format-fixed-background
```
{
	"categoryId": the id of category,
	"limit": the length of article list,
	"keyword": search article list,
}
OR
{
	"articleId": [the id of article, id, ...],
}
```