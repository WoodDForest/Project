//获取抢购时间列表栏
var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);

//获取商品列表属性
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
//点击事件 遍历时间栏每一列
for(var i = 0; i< tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for(var i = 0; i< tabs.length; i++){
        if( tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}

//获取抢购时间栏
var seckillNav = document.getElementById("seckillNav");
//页面滚动事件
window.onscroll = function(){
    //获取页面高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
    // IE老版本支持 ->浏览器兼容性问题
    // document.body.scrollTop;
    // window.pageYOffset;
    if( scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed";
    }else{
        seckillNav.className = "seckill-nav";
    }
    //console.log(scrollTop);
}