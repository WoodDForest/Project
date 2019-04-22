
//计时器
var clearTime = null;
//当前显示的
var nowIndex = 0;
//即将显示
var index = 0;

autoPlay();
//计时器，开始滑动
function autoPlay(){
	clearTime = setInterval(function(){
		index++;
		if(index > 7){
			index = 0;
		}
		//滑动动画
		scrollPlay();
		nowIndex = index;
	},1500);
}


//滑动动画
function scrollPlay(){
	//滑动的同时，li变色
	//siblings()过滤、.removeClass("bg")清除
	$("#list li").eq(index).addClass("bg").siblings().removeClass("bg");
	//如果当前显示小于即将显示，向左滑,大于向右滑
	if(nowIndex < index){
		//当前显示的.left=-720
		$("#imgbox img").eq(nowIndex).stop(true,true).animate({left:"-720px"});
		$("#imgbox img").eq(index).css("left","720px").stop(true,true).animate({left:"0"});
	}else if(nowIndex > index){
		$("#imgbox img").eq(nowIndex).stop(true,true).animate({left:"720px"});
		$("#imgbox img").eq(index).css("left","-720px").stop(true,true).animate({left:"0"});
	}
}

//鼠标经过li
$("#list li").mouseover(function(){
	//清除计时器
	clearInterval(clearTime);
	//获取下标
	index = $(this).index();
	scrollPlay();
	nowIndex = index;
}).mouseout(function(){
	//鼠标离开，继续轮播
	autoPlay();
});

//点击左箭头
$("#box .btnleft").click(function(){
	index--;
	if(index < 0){
		index = 7;
	}
	scrollPlay();
	nowIndex = index;
	clearInterval(clearTime);
});

//点击右箭头
$("#box .btnright").click(function(){
	index++;
	if(index > 7){
		index = 0;
	}
	scrollPlay();
	nowIndex = index;
	clearInterval(clearTime);
});
