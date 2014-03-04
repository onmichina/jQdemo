jQdemo
======

jQuery 练习
今天去面试，面试官严重鄙视了我的交互设计，是呀，我一个前端工程师，怎么会对交互设计这么重视呢，JQuery不是很熟悉，我下定决心，学好jQuery ,开始了我的恶补jQuery课程！
下面开始学习纪录！
## 大纲 

----------
2014-03-04 11:17:48 

- 需要准备的知识：html，css，js 和php
- 常见的js开发库Dojo Prototype、YUI、Mootools、jQuery
- ##  ##

##1.基本语法

$(选择器).方法（function（）｛｝）

举例：

    $('button').click(function(){
		alert('###');
	});
说明：$是jQuery的简写
##2.连缀方法

$(选择器).方法（function（）｛｝）.方法（function（）｛｝）...

举例：

    $('div').click(function(){
		//代码	
	}).mouseover(function（）｛
		//代码	
	｝)；

##.3隐式迭代

    $.('div').css('color','red');

##.4.$(this)

##5.ready()//页面载入选择

    $(document).ready(function(){
    	//代码
    	$('div').css.('color','red');
    })
    
# 2.内容过滤选择器 

- :contains(text）选择包涵某个文本的特定元素：例如

$('td':contains('中午'))返回文本中含有“日本”的td元素

- :empty 选取不包涵任何子元素或者文本的空元素，列如
$(':empty') 返回空元素

- :hai(selector) 选取包涵选择器所匹配的元素的元素，列如
$('tr:has('th')') 返回包涵th元素的tr元素

- :parent 选取保护子元素或者文本的元素，列如：
$(':parent') 返回非空元素
