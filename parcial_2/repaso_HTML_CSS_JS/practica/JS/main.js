//Esto es un comentario de una linea

/*
Esto es un comentario de varias lineas 
*/

//Alerta 
//alert("hola que tal soy un alerta")

//Variables
var nombre="Franco Páez Amparo";
let nombre2='Rodolfo el gay';
let edad=20;
let estatura=1.60;
let logico=true;

//Mostrar en consola
console.log ("Hola estoy en la consola.");
console.log ("Hola tengo "+edad+" años ");

//mostrar en pantalla
document.Write ("Hola estoy en la pantalla <br>");
document.Write ("Hola tengo "+edad+" años</h2>");

//mostrar en pantalla getElementByld
let datos=document.getElementById("informacion");
datos.innerHTML="hola este es el contenido de innerHTML";
datos.innerHTML+="<hr><h3>hola soy otro contenido de innerHTML</h3>";
datos.innerHTML+="<hr><h3>Mido: "+estatura+" metros</h3>";
datos.innerHTML+=`
<br>
<hr>
<h1>
    hola soy contenido de innerHTML mi nombre es: ${nombre}
     <br> y mi estatura es: ${estatura}
</h1>`;

//condicionales

if (edad>=18)
datos.innerHTML+=`
<hr>
soy mayor de edad
<hr>
`;
else
datos.innerHTML+=`
<hr>
soy menor de edad
<hr>
`;

//ciclos
//
for (let i=1; i<=200;i++)
{
    datos.innerHTML+=`<hr> <h3> el numero es: ${i}</h3>`
}



let i=1;
while (i<=5)
{
    datos.innerHTML+=`<hr> <h3> el numero es: ${i}</h3>`;
    i++
}



i=1;
do 
{
    datos.innerHTML+=`<hr> <h3>Do while el numero es: ${i}</h3>`;
    i++
}
while (i>5);


//Funciones
//1 funcion que no recibe parametros y no regresa valor

function suma1()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    datos.innerHTML+=<hr><h1>el resultado de la suma es ${suma}</h1></hr>;
}

suma1();


//2 funcion que no recibe parametros y  regresa valor
function suma2()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    
    return suma;
}

let sum=suma2();
datos.innerHTML+=<hr><h1>el resultado de la suma2 es ${sum}</h1></hr>;


//3 funcion que recibe parametros y no regresa valor
function suma3(numero1, numero2)
{
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    datos.innerHTML+=<hr><h1>el resultado de la suma3 es ${suma}</h1></hr>;
    return suma;
}
suma3(3,4);



//4 funcion que recibe parametros y regresa valor
function suma4(numero1, numero2)
{
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    return suma;
}
sum=suma4(4,4);

datos.innerHTML+=<hr><h1>el resultado de la suma4 es ${sum}</h1></hr>;

//Arreglos

let animales=[];
animales[0]="perro";
animales[1]="gato";
animales[2]="ave";


let animales2=["tigre", "leon", "elefante"];

for (let i=0; i<animales.length;i++)
{
    datos.innerHTML+=<hr><h1>el animal es : ${animales[i]}</h1></hr>
}


animales2.forEach(element => {
    datos.innerHTML+=<hr><h1>el animal es : ${animales[i]}</h1></hr>
});


