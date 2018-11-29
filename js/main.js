var texts = `/*
 * 大家好，我是王伟超。
 * 这是我的简历。
 * 来点代码来渲染气氛吧。
 * 让我们嗨起来~~~
 */
/* 看我变个身 */
html {
	color:rgb(222,222,222);
	background:rgb(90, 99, 68);
}

/* 先加个过渡吧!免得晃瞎眼~~~ */
* {
	transition:all 1s;
}
	
/* 再加个框框,免得跑偏 */
.tag {
	margin:20px;
	width:600px;
	overflow: auto;
	height:666px;
	border:2px solid #f082;
	border-radius:5px;
	padding:30px;
	font-size:20px;
	background: #f082;
}

/* 好吧,进入正题吧。让这个框框滚一边去 */
.tag {
	position: fixed;
	right: 0;
}
`;

var writeCode = function(prefix, texts, fn) {
	var n = 0;
	let tag = document.querySelector(".tag");
	var id = setInterval(function() {

		tag.innerHTML = Prism.highlight(prefix + texts.substring(0, n), Prism.languages.css, 'css');

		styles.innerHTML = prefix + texts.substring(0, n);

		tag.scrollTop = tag.scrollHeight;

		if(n >= texts.length) {
			clearInterval(id);
			fn();
		}
		n += 1;
	}, 10)
}

var info_css = `
/* 现在需要另外一个框框来显示我的信息了  */
.info {
	padding:20px;
	position: fixed;
	left: 0;
	margin:20px;
	width:50%;
	height:666px;
	border:3px solid #fff;
	border-radius:5px;
	overflow:auto;
}

/* 加点样式美化一下 */
.info {
 	transform: rotateY(360deg);
	font-family: 幼圆;
}
.info p{
	padding-left:20px;
}
.info img {
	position: fixed;
    right: 5%;
    top: 5%;
    border-radius: 10px;
}
/*  ~~~出来吧!光能使者~~~  */
`;

var md = `## 自我介绍 ## 
我叫王伟超
92 年 10月 出生
自学前端半年
![Alt](https://avatar.csdn.net/7/7/B/1_ralf_hx163com.jpg)
## 技能  ##
熟练使用JavaScript、CSS、HTML
熟练使用PHP,有项目经验  
## 项目经验  ##
暂无
## 联系方式 ##
QQ:447154678
电话:1891108
`;
writeCode('', texts, function() {
	createPro(() => {
		writeCode(texts, info_css, function() {
			markdow(md, () => {});
		});
	});
})

function createPro(fn) {
	var n = 0;
	let creat_tag = document.createElement('pre');
	creat_tag.className = 'info';
	document.body.appendChild(creat_tag);
	fn.call();
}

function markdow(markdow, fn) {
	let info = document.querySelector(".info");
	var n = 0;
	var id = setInterval(function() {

		info.innerHTML = marked(markdow.substring(0, n));

		info.scrollTop = info.scrollHeight;

		if(n >= markdow.length) {
			clearInterval(id);
			fn();
		}
		n += 1;
	}, 10)
}