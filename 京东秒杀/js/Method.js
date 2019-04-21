// var Method=(function{
//     return{
//                             结构
//     }
// })();

var Method=(function(){
    return{
        loadImage:function(arr,callback){
            var img=new Image();
            img.arr=arr;
            img.list=[];
            img.num=0;
            img.callback=callback;
            // 如果DOM对象下的事件侦听没有被删除掉，将会常驻堆中，会出现内存泄漏
            // 一旦触发了这个事件需要的条件，就会继续执行事件函数4
            img.addEventListener("load",this.loadHandler);
            img.self=this;
            img.src=arr[img.num];
        },
        loadHandler:function(e){
            this.list.push(this.cloneNode(false));
            this.num++;
            if(this.num>this.arr.length-1){
                // console.log("加载完成了");
                this.removeEventListener("load",this.self.loadHandler);
                this.callback(this.list);
                return;
            }
            this.src=this.arr[this.num];
        },
        $c:function(type,parent,style){
            var elem=document.createElement(type);
            if(parent) parent.appendChild(elem);
            for(var key in style){
                elem.style[key]=style[key];
            }
            return elem;
        }
    }
})();