
function controlformulario(){
let a = document.getElementById("fusuario").value;
let b = document.getElementById("password").value;
  if (a=="") {
    alert("Falta completar usuario");
  }
    else{
      if (!a.includes("@") ){
      alert("falta @ en usuario")
    }
    if(b==""){
      alert("Falta completar password");
    }
}
}