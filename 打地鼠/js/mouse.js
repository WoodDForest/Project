//记录上一次已经变成地鼠的位置
var lastIndex = 0;
var count = 0;
//倒计时变量
var countDown = 60;
//计时器
var clock = null;
//获取元素
var btn = document.getElementById("btn");
btn.onclick = function(){
//	alert("点我？")
    if(count == 0){
    	//  设置计时器
    clock = setInterval(timer,700);
    count = 1;         //保证计时器只走一次
    }
}
//封装函数，用于随机出现地鼠
function timer(){
	countDown--;
	var timer = document.getElementById("time");
	timer.innerHTML = "倒计时："+countDown+"s";
	if(countDown <= 0){
		//清除计时器
		clearInterval(clock);
		alert("游戏结束！");
	}
//	随机产生一个0~8的随机数
	var temp = Math.random()*8;
//	alert(temp);
//  四舍五入取整数
    var index = Math.round(temp);
//  alert(index);
//  获取gameDiv元素
    var contentDiv = document.getElementById("gameDiv");
//  找到整数的子类
    var child = contentDiv.children[index];
//  将草坪路径替换成地鼠的路径
    child.src = "img/2.gif";
//  如果两次取值不是同一个位置
    if(lastIndex != index){
//     将上一次已经变成地鼠的位置变回草坪
       var lastChild = contentDiv.children[lastIndex];
       //图片换成草坪路径
       lastChild.src = "img/5.jpg";
       if(countDown <= 0){
       	child.src = "img/5.jpg";
       }
    }
//     将已经显示过地鼠的位置，赋值成上一次
    lastIndex = index;
}

//计分
var x = 0;
//实现图片的点击事件
//参数随便写，只要能把beat接过来就行
function beat(img){
//	alert("打到我了！");
//  取出图片路径
    var srcstr = img.src;
    //如果图片路径的倒数第五位是2，说明是地鼠
    if(srcstr.charAt(srcstr.length-5 == "2")){
    	x++;
    	//当点到地鼠，立刻变回草坪
    	img.src = "img/5.jpg";
    	//获取计分框元素
    	var score = document.getElementById("score");
    	score.innerHTML = "得分："+x+"分";
    }
}
