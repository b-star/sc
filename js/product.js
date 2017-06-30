/*
* @Author: Marte
* @Date:   2017-05-14 20:19:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-18 10:43:34
*/
function Product(data){
    this.data = data;
}

Product.prototype = {
    bindDom:function(){
        var str = '';
    for(var i = 0; i<this.data.length;i++){
       str+='<li>'
       str+='<a class="pic" href="#">'
       str+='<img alt="" src="'+this.data[i].imgsrc+'"/>'
       str+='</a>'
       str+='<h3 class="title">'
       str+='<a href="#">'+this.data[i].title+'</a>'
       str+='</h3>'
       str+='<p class="desc">'+this.data[i].description+'</p>'
       str+='<p class="price">'+this.data[i].price+'</p>'
       str+='</li>'
    }
 return  str;

    }
}

