var pregunta = prompt("Pequeño animalito de la creación, pregunta tus dudas:");
var computadoraElige = Math.random(); //esta función toma valores entre cero y uno


var responder = function(){
    if (computadoraElige <0.15) {
    alert("Estás loco, eso ni en tus sueños.");
    }else if (computadoraElige <= 0.15) {
        alert("Claro que sí, la vida te ama. <3");
    }else if (computadoraElige<=0.30){
        alert("Ni que tuvieras tanta suerte...");
    }else if (computadoraElige<=0.45) {
        alert("No lo sé, vuelve a preguntar");
    }else if (computadoraElige<=.60) {
        alert("Probablemente...");
    }else if (computadoraElige<=.75) {
        alert("No, bitch.");
    }else if (computadoraElige<=.90) {
        alert("Yo creo que no...");
    }else if (computadoraElige<=1) {
        alert("Tal vez.");
    }
}
console.log(responder());