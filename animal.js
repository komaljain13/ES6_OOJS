function Animal(){
  this.eats = true;
}

function Rabbit(){
 this.canRunFast = true;
}
Rabbit.prototype = new Animal();

function WhiteRabbit(){
  this.color = "white";
  this.canRunFast=false
}
WhiteRabbit.prototype = new Rabbit();

var rabbit = new WhiteRabbit();
console.log(rabbit.eats);
console.log(rabbit.canRunFast);
console.log(rabbit.color);

console.log(typeOf rabbit)
