const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const expresionRegular = /^(?=.{1,35}$).+/;

const regexTexto = /^[a-zA-Z0-9\s!:]+$/;

const textnume = /^[a-zA-Z0-9\s!-,]+$/;
const regexfloat = /^([0-5](\.[0-9])?|[0-4]\.)$/;

const regexImage = /^(ftp|http|https):\/\/[^ "]+$/;

const regexFecha =  /^\d{4}-\d{2}-\d{2}$/;

const regexNum = /^(100|\d{1,2})$/;
const regexNumN = /^(5000|[1-4]?\d{1,3}|[1-9])$/
const regexLetras = /^[a-zA-Z]{1,20}$/;

function validation(data) {
   const errors = {}; 
 // Validacion de nombre de juego  
   if (!regexLetras.test(data.name)) {
    errors.name = 'Sólo puede contener letras A-Z y hasta 20 Caracteres'
   }else{ errors.name= ""; }
   // if (!expresionRegular.test(data.name)) {
   //  errors.name = 'Longitud debe ser entre 1 - 20 caracteres'
   // }else{ errors.name= ""; }
   if (data.name === "") errors.name="";
// validacion de imagen 
   if (!regexImage.test(data.image)) {
    errors.image = 'Debe ingresar una URL válida"'
   }else{ errors.image = ""; }
   if (data.image === "") errors.image="";   
// validacion Vida

if (!regexNum.test(data.hp)) {
    errors.hp= 'Sólo puede contener números de 0 a 100"'
   }else{ errors.hp = ""; }
   if (data.hp === "") errors.hp="";  
// Validacion de ataque

if (!regexNum.test(data.attack)) {
   errors.attack = 'Sólo puede contener números de 0 a 100"'
} else { errors.attack = ""; }
if (data.attack === "") errors.attack = "";

// validacion de defensa
if (!regexNum.test(data.defense)) {
   errors.defense = 'Sólo puede contener números de 0 a 100"'
} else { errors.defense = ""; }
if (data.defense === "") errors.defense = "";

// validacion de Velocidad
if (!regexNum.test(data.speed)) {
   errors.speed = 'Sólo puede contener números de 0 a 100"'
} else { errors.speed = ""; }
if (data.speed === "") errors.speed = "";

// validacion de Altura
if (!regexNum.test(data.height)) {
   errors.height = 'Sólo puede contener números de 0 a 100"'
} else { errors.height = ""; }
if (data.height === "") errors.height = "";

// validacion de Peso
if (!regexNumN.test(data.weight)) {
   errors.weight = 'Sólo puede contener números de 0 a 5000"'
} else { errors.weight = ""; }
if (data.weight === "") errors.weight = "";


    
return errors
}
export default validation