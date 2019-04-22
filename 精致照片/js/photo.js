
//点击九宫格的某张图片
$("#picList img").click(function(){
	//显示遮光板
	$("#pan").fadeIn(500);
	//显示详情层
    $("#show").fadeIn(500);
    //获取当前点击的图片的下标
    var index = $(this).index();
    //遍历五张图片的路径
    for(var i=0;i<5;i++){
    	//拼接图片路径
    	//img/show/0/1.jpg
    	var url = "img/show/"+index+"/"+(i+1)+".jpg";
    	//替换路径
    	//eq()得到当前的
    	//attr()替换
    	$("#showImage img").eq(i).attr("src",url);
    }
});

//点击遮光板，消失
$("#pan").click(function(){
	$("#pan").fadeOut(500);//或者$("this").fadeOut(500);
	//详情层消失
	$("#show").fadeOut(500);
});

//点击上一张
$("#prev").click(function(){
	//移动第一张
	$("#showImage img:first").animate({left:"-650px"},500,function(){
		$(this).animate({left:"0px"},500);
		//在showImage最前面显示,插在最后面
		$("#showImage").append($(this));
	});
	//其余图片向右移动一下
	$("#showImage").animate({left:"60%"},500,function(){
		$("#showImage").animate({left:"50%"},500);
	});
});

//点击下一张
$("#next").click(function(){
	//最后一张向右移动
	$("#showImage img:last").animate({left:"650px"},500,function(){
		$(this).animate({left:"0px"},500);
		//插入在最后面，第一张
		$("#showImage").prepend($(this));
		});
	$("#showImage").animate({left:"40%"},500,function(){
		$("#showImage").animate({left:"50%"},500);
	});
})
