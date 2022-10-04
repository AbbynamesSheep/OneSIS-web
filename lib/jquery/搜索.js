function $(id){

return document.getElementById(id)

}

var putWordsObj = $('key-word');

putWordsObj.onfocus = function(){

if(this.value == '请输入搜索内容')this.value='';

}

putWordsObj.onblur = function(){

if(!this.value)this.value='请输入搜索内容';

}

//search

$('search-button').onclick = function(){

var content = $('content').innerHTML;

var keyWord = $('key-word').value;

content = search_do(content, keyWord);

$('content').innerHTML = content;

//alert(content)

}

function search_do(content,keyWord){

var keyWordArr = keyWord.replace(/[\s]+/g,' ').split(' ');

var re;

for(var n = 0; n < keyWordArr.length; n ++) {

//re = new RegExp(">[\s\S]*?"+keyWordArr[n]+"[\s\S]*?<\S","gmi");

re = new RegExp(""+keyWordArr[n]+"","gmi");

content = content.replace(re,'<span style="color:#0f0;background-color:#ff0">'+keyWordArr[n]+'</span>');

}

return content;

}