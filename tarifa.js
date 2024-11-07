let pagoMes= 16000;
let consumoKWH= 30;

console.log((consumoKWH > 300 ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}KWH, 
en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un 
aumento del 20%), cumplimos con informarle que se ha ajustado el total a
pagar, que será de $${((pagoMes*20)/100)+pagoMes}`: "como no excedio el limite de 300KWH, no se aplicara ningun aumento"));




