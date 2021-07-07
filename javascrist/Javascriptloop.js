/*var i=1;
while(i<=100){
	i++;//變數i一直重複+1
	
}
alert(i);//結果數字是101
*/
/*var a=10;//宣告變數a是10
var i;//宣告變數i;
for(i=1;i<=100;i++){
	a=a+1;
	break;//多了強制停止
}
alert(a);//結果數字是11
document.write("結果數字是11");*/
var name1 = "tony";
var i=prompt("多少");
while(i){
	if(i==10){
		alert("親4次");
	}
	else if(i>=4){
		alert("親2次")
	}
	else{
		alert("好啊，就不要親啊");
		
	}
	break;
}
alert(name1,i);