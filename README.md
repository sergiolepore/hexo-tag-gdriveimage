## Introduction

This is a [hexo](https://github.com/tommy351/hexo)
tag plugin which allows you to embed an image stored on your Google Drive account.

## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-tag-gdriveimage --save
```

And add this plugin in your ``_config.yml``.

```
plugins:
  - hexo-tag-gdriveimage
```

## Usage

```
{% gdimg imageId [class1,class2] [JSONImageAttibutes] %}
```

How to get the `imageId`:

![](http://drive.google.com/uc?export=view&id=0B5NCrwMAnvEzdEYzOWVuM3ZBWnc)

Example:

```
{% gdimg 0B5NCrwMAnvEzaW14ZVJlODlkbUE center,custom_class1,custom_class2 {"width":450,"height":450,"alt":"Image Alt"} %}
```

Will output:

```
<img width="450" height="450" alt="Image Alt" src="http://drive.google.com/uc?export=view&id=0B5NCrwMAnvEzaW14ZVJlODlkbUE" class="center custom_class1 custom_class2">
```

__IMPORTANT__

Classes must be comma-separated and without spaces. Same as JSONImageAttibutes.

### Known Issues

* Fancybox does not work with Google Drive images :/