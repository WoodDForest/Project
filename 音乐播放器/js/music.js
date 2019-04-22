//定义数据数组
var musicModels = [];
//创建对象 Player()自己起的
var player = new Player();
//启用进度条
player.rangeUpData();
//定义一个播放器的类
function Player(){
	//获取元素
    this.audio = document.getElementById("audio");
    this.PlayIndex = 0;
    //播放音乐的方法
    this.playMusic = function(){
    	//修改audio的src路径
    	$(this.audio).attr("src",musicModels[this.PlayIndex].src);
    	//播放音乐
    	this.audio.play();
    	//替换footer里面的pic
    	$(".footer .pic img").attr("src",musicModels[this.PlayIndex].img);
    }
    //控制音乐的播放和暂停
    this.stopMusic = function(){
    	if(this.audio.paused){
    		this.audio.play();
    		$(".footer .pause img").attr("src","img/pause.png");
    	}else{
    		this.audio.pause();
    		$(".footer .pause img").attr("src","img/stop.png");
    	}
    }
    //进度条
    this.rangeUpData = function(){
    	//监听audio元素的播放
    	this.audio.ontimeupdate = function(){
    		$(".footer .range").attr("max",this.duration);
    		$(".footer .range").val()
    	}
    }
    //下一首
    this.nextMusic = function(){
    	if(this.PlayIndex == musicModels.length-1){
    		this.PlayIndex = 0;
    	}else{
    		this.PlayIndex++;
    	}
    	//播放音乐
    	this.playMusic();
    	//带着背景颜色一起动
    	$(".musicbox .musicDiv").eq(this.PlayIndex).addClass("playing").siblings().removeClass("playing");
    }
}

//调用读取数据的函数
getData();
//定义函数，读取数据
function getData(){
	//getJSON(json文件路径，解析成功执行的函数)
	//data就是我们拿到的数据
	$.getJSON("pbl.json",function(data){
		//遍历读取数据
		for(var i=0;i<data.length;i++){
			var music = new Music(data[i].src,data[i].img,data[i].num,data[i].musicName,data[i].name);
			//将读取的数据存入数组
			musicModels.push(music);
		}
		//向页面插入数据
		insertData();
		//播放音乐
		player.playMusic();
	});
}

//定义函数，向页面插入数据
function insertData(){
	//遍历从数组里面读取数据
	for(var i=0;i<musicModels.length;i++){
		//创建div
		var musicDiv = $("<div class='musicDiv' data-index="+i+"</div>");
		//判断是否为第一个
		if(i == 0){
			musicDiv.addClass("playing");
		}
		//插入页面
		$(".page .musicbox").append(musicDiv);
		//创建图片
		var musicImg = $("<img src="+musicModels[i].img+" />")
		musicDiv.append(musicImg);
		//创建P标签
		var musicP = $("<p>"+musicModels[i].musicName+"--"+musicModels[i].name+"</p>");
		musicDiv.append(musicP);
		
		//给musicDiv添加点击事件
		musicDiv.click(function(){
			//点击哪个，哪个换背景颜色
			$(this).addClass("playing").siblings().removeClass("playing");
			//获取下标
			player.PlayIndex = $(this).data("index");
			player.playMusic();
		});
	}
}

//本类用于描述数据
function Music(src,img,num,musicName,name){
	this.src = src;
	this.img = img;
	this.num = num;
	this.musicName = musicName;
	this.name = name;
}

//点击暂停音乐按钮
$(".footer .pause").click(function(){
	player.stopMusic();
});
//点击下一曲
$(".footer .next").click(function(){
	player.nextMusic();
})
