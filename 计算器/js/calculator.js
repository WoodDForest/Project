
//第一次输入的数字
var number1 = "";
//第二次输入的数字
var number2 = "";
//输入符号
var operational = "";
//获取元素
var label = document.getElementById("screen");
var btns = document.getElementsByTagName("a");
//遍历，得到所有的a标签
for(var i=0;i<btns.length;i++){
	//当前点击的下标
	var btn = btns[i];
	btn.onclick = function(){
		//提取按钮a标签上的内容
		var txt = this.innerHTML;
		//从表达式值等于某一个case语句后的值开始，
		//他下方的所有语句都会一直运行,直到遇到一个break为止
		switch(txt){
			case "%":
			    label.innerHTML = number1*0.01;
			break;
			case "AC":
			    number1 = "";
			    number2 = "";
			    operational = "";
			    label.innerHTML = "0";
			break;
			case "＋":
			    operational = "+";
			break;
			case "－":
			    operational = "-";
			break;
			case "×":
			    operational = "*";
			break;
			case "÷":
			    operational = "/";
			break;
			case "=":
			    var num1 = parseFloat(number1);
			    var num2 = parseFloat(number2);
			    //判断当前的符号
	         switch(operational){
			     case "+":
			         label.innerHTML = num1+num2;
			     break;
			     case "-":
			         label.innerHTML = num1-num2;
			     break;
			     case "*":
			         label.innerHTML = num1*num2;
			     break;
			     case "/":
			         label.innerHTML = num1/num2;
			     break;
		     }
	         break;
	       default:
	         //如果不点击符号，连着显示数字
	         if(operational == ""){
	         	//第一组数字
	         	number1 = number1+txt;
	         	label.innerHTML = number1;
	         }else{
	         	//第二组数字
	         	number2 = number2+txt;
	         	label.innerHTML = number2;
	         }
	       break;
		}
	}
}
