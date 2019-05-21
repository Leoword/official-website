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
			"mapping": {
				// mapping of router params
			}
			"classList": [] //for format
		}
	]
}
```

# format (format name and options and mapping)

## format-header
```
{
    "zh-CN":[
    	// link
        {
            "url": "http://xxxx.com",
            "label": "标签1"
        },
        // dropdown
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

### options:

```
{
	"articleId": [the id of article],
	"recommend": {
		"selector": {
            "name": "category",
            "payload": the id of category
		}
	} 
}
```

```
{
	"articleId": [the id of article],
	"recommend": {
		"selector": {
            "name": "enum",
            "payload": [articleIdList]
		}
	} 
}
```

### mapping:

```
{
    "articleId": "id"
}
```

## format-article-list

### options:

```
{
	articleList: {
		"categoryId": the id of category,
		"keyword": keyword of title or abstract,
	},
	"recommend": {
		"selector": {
            "name": "category",
            "payload": the id of category
		}
	} 
}
```

``` 
{
	articleList: {
		"categoryId": the id of category,
		"keyword": keyword of title or abstract,
	},
	"recommend": {
		"selector": {
            "name": "enum",
            "payload": [articleIdList]
		}
	} 
}
```

### mapping:

```
{
    "category": "id"
}
```

## format-card

```
{
	"selector" {
        "name": "category",
		"payload": categoryId
	}	
}
```
```
{
	"selector" {
        "name": "enum",
		"payload": [articleIdList]
	}
}
```

## format-card-circle
```
{
	"selector" {
        "name": "category",
		"payload": categoryId
	}	
}
```

```
{
	"selector" {
        "name": "enum",
		"payload": [articleIdList]
	}
}
```

## format-card-extend

```
{
	"selector" {
        "name": "category",
		"payload": categoryId
	}	
}
```

``` 
{
	"selector" {
        "name": "enum",
		"payload": [articleIdList]
	}
}
```

## format-card-transparent

```
{
	"articleId": the id of article
}
```

## format-category

### options:

```
{
	"image": background-image,
	"zh-CN": [
        {
            "label": "类别1",
            "categoryId": the id of category
        },
        {
            ...
        }
	],
	"en": [
		{
			"label": "category1",
			"categoryId": the id of category
		},
		{
            ...
		}
	]
}
```

### mapping:

```
{
    "category": "id"
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
	"articleId": the id of article
}
```

## format-fixed-background
```
{
	"selector" {
        "name": "category",
		"payload": categoryId
	}	
}
```
```
{
	"selector" {
        "name": "enum",
		"payload": [articleIdList]
	}
}
```