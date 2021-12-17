var today = new Date();
//console.log(today);
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();
var date_actual =day+"/"+month+"/"+year;
//console.log(date_actual);


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let participantes = [`Brener`, `João`, `Marcelo`]

rl.question("Informe sua idade: ", function(idade) {
    if (idade >= 18){
        rl.question("Informe a data do evento: ", function(data) {
            if (data > date_actual){
                console.log(`Evento cadastrado`);
                rl.close();
            }else{
                console.log(`Cadastro não permitido pela data`);
                rl.close();                    
                };
            });
    }else{
        console.log(`Cadastro não permitido pela idade`);
        rl.close();
    };
});



rl.on("close", function() {
    console.log("\nFim");
    process.exit(0);
});
