let pedro={
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar","squash","piano"]
};
pedro.estatura=1.8;
pedro.saluda="Hola, me llamo ";
delete pedro.activo;
console.log(pedro.edad);

function saludar(saludo){
    console.log(pedro.saluda+saludo)
}
saludar(pedro.nombre)