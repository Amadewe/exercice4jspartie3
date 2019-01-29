// mettre les bordures des inputs en rouge si les mots de passe sont différents. Sinon les mettre en vert.
// je récupères les deux valeurs de mes éléments avec .value
function  passewordmatch() {
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
// On crée une bouche if si la condition est bonne alors la propriété style.border exécute la valeur : vert
if (password === confirmPassword){
document.getElementById('password').style.border= 'solid green';
document.getElementById('confirmPassword').style.border= 'solid green';
// si elle ne correspond pas alors la propriété style.border exécute la valeur : rouge
}else {
document.getElementById('password').style.border= 'solid red';
document.getElementById('confirmPassword').style.border= 'solid red';
}
}
