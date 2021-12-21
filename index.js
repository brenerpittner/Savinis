var today = new Date();
var date_actual = today.getDate() + "/" + (today.getMonth()+1) + "/" +today.getFullYear();
//console.log(date_actual);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let participantes = ['Brener','João','Fabiana','Marcelo','Bruna','Valéria','Vitor','Luiz','Amanda']
let palestrantes = ['Gabriel', 'Vitor', 'Henrique']

if (participantes.length < 10){
    rl.question('Informe sua idade: ', function(idade) {
        if (idade >= 18){
            rl.question('Informe a data do evento: ', function(data) {
                if (data > date_actual){
                    participantes.push('José')  
                    console.log('Evento cadastrado');
                    rl.close();
                }else{
                    console.log('Cadastro não permitido pela data');
                    rl.close();                    
                    };
                });
        }else{
            console.log('Cadastro não permitido pela idade');
            rl.close();
        };
    });
}else{
    console.log('Cadastro não permitido por excedido o limite');
    rl.close();  
};

rl.on('close', function() {
    console.log(participantes);
    console.log(palestrantes);
    console.log('\nFim');
    process.exit(0);
});
