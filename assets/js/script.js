function  passewordmatch() {
var elem1 = document.getElementById('password').value;
var elem2 = document.getElementById('confirmPassword').value;
if (elem1 == elem2){
document.getElementById('password').style.border= 'solid green';
document.getElementById('confirmPassword').style.border= 'solid green';
}else {
document.getElementById('password').style.border= 'solid red';
document.getElementById('confirmPassword').style.border= 'solid red';
}
}
