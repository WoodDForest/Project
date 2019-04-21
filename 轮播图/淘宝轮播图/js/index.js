var oPrev = document.getElementById("prev"),
    oNext = document.getElementById("next"),
    oMain = document.getElementsByClassName("main")[0],
    oList = document.getElementsByClassName("list")[0],
    oLi = document.getElementsByTagName("li"),
    oContainer = document.getElementsByClassName("container")[0];

var timer,timer2,
    oLiLength = oLi.length,
    index = 0,
    flag =true;
function moveImg(dis) {//dis是差值
    flag = false;
    var time = 400;//每次轮播需要的时间
    var eachTime = 20;//每一小次移动的时间
    var eachDis = dis/(time/eachTime);//每一小次移动的距离
    var newLeft = oMain.offsetLeft + dis;
    function eachMove(){
        if(dis > 0 && oMain.offsetLeft < newLeft ||dis < 0 && oMain.offsetLeft > newLeft){
            oMain.style.left = oMain.offsetLeft + eachDis +"px";
        }else{
            clearInterval(timer);
            oMain.style.left = newLeft + "px";

            if(newLeft == -3990){
                oMain.style.left = -570 + "px";
            }
            if(newLeft == 0){
                oMain.style.left = -3420 + "px";
            }
            flag = true;
        }
    }
    timer = setInterval(eachMove,eachTime);
}

oPrev.onclick = function(){
    if(flag == false) return;
    moveImg(570);
    if(index == 0){
        index = 5;
    }else{
        index--;
    }
    console.log(index);
    oLiStyle();
}
oNext.onclick = function(){
    if(flag == false) return;
    moveImg(-570);
    if(index == 5){
        index = 0;
    }else{
        index++;
    }
    console.log(index);
    oLiStyle();
}

function oLiStyle(){
    oList.getElementsByClassName("active")[0].className = "";
    // console.dir(oLi[index]);
    oLi[index].className = "active";
}

for(var i = 0; i < oLiLength; i++){
    (function (j) {
        oLi[j].onclick = function(){
            var offset = (j - index)* -570;//只要没更新index拿到的都是上一个的索引值
            index = j;
            oLiStyle();
            moveImg(offset);
        }
    })(i);
}
timer2 = setInterval(oNext.onclick,2000);
oContainer.onmouseover = function(){
    clearInterval(timer2);
}
oContainer.onmouseout = function(){
    timer2 = setInterval(oNext.onclick,2000);
}