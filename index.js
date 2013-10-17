var htmlTag = hexo.util.html_tag;
var googleDriveResourceUrl = "http://drive.google.com/uc?export=view&id=";

/**
 * Google Drive Image tag
 *
 * Syntax:
 *   {% gdimg imageID [class1,class2,classN] [JSONImageAttributes] %}
 */
hexo.extend.tag.register('gdimg', function(args, content){
    var imageId = args[0];
    var classes = args[1] || "";
    var imgAttr = args[2] || "{}";

    classes = classes.split(',');
    imgAttr = JSON.parse(imgAttr);

    imgAttr.src   = googleDriveResourceUrl + imageId;
    imgAttr.class = classes.join(' ');

    return htmlTag('img', imgAttr);
});