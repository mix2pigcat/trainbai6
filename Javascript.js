let a=parseInt(prompt('Nhap gia tri a'));
let b=parseInt(prompt('Nhap gia tri b'));
x=(-b/a);
if (a==0){
    alert("Phuong trinh vo nghiem");
}else if(a==b==0){
    alert('Phuong trinh vo so nghiem');
}else {
    alert('Nghiem cua phuong trinh la:'+x)
}