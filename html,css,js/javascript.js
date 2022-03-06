function Buyornot(){
	var result=confirm("Bạn có muốn mua mặt hàng này không ?");
	if(result){
		alert("Cảm ơn bạn đã mua hàng");
	}else{
		alert("Cảm ơn và hẹn gặp lại bạn lần sau!");
	}
}


function infor(){
var u =document.getElementById("name").value;
var p1=document.getElementById("email").value;
var p2=document.getElementById("phone").value;
var p3=document.getElementById("comment").value;

if(u==""){
	alert("Vui lòng nhập Họ tên của bạn!");
	return false;
}
if(p1==""){
	alert("Vui lòng nhập gmail của bạn!");
	return false;
}
if(p2==""){
	alert("Vui lòng nhập số điện thoại của bạn!");
	return false;
}
if(p3==""){
	alert("Vui lòng để lại ý kiến của bạn!");
	return false;
}
}