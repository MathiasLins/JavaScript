class ControladorCalculadora {

    constructor(){
        
        this.locale = 'pt-br'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{

            btn.addEventListener('click', e => {
                
                console.log(btn.className.baseVal.replace("btn-", "")); /* chamando a classe dos botões vai fazer com que eu receba os numeros de cada botão fazendo com que recebe a class inteira, para receber apenas o numero do botão na classe utilize replace */

                /* forEach é usado para percorrer cada um dos "buttons" que possuem "btn=>" ele vai executar o codigo dentro do addEventListener que tem como clicar */
            });
        })

    }

    setDisplayDateTime(){

        this.displayDate = this._currentDate.toLocaleDateString('pt-br');
        this.displayTime = this._currentDate.toLocaleTimeString('pt-br');
    }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        return this._timeEl.innerHTML = value;

    }

    get displayDate(){

        return this._dateEl.innerHTML;
    
    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;
    
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        his._displayCalcEl.innerHTML = value;

    }

    get _currentDate(){
        
        return new Date;
    
    }

    set _currentDate(value){
        
        this._currentDate = value;
    
    }
}

/* 

atributo = similar a uma varaivel, porém com mais recurso

this = faz referencia ao objeto colocado na classe (referencia atributos e objetos)



Encapsulamento = controla o acesso dos atributos e metodos

public = todos acessam

protected = atributos e metodos da mesma classe e classe Pai

private = somente atributos e metodos da propria classe (usar o "_")

atribuir ou recuperar valores dos atributos


getters e setters = permitem definir como acessar os valores

get = acessa ps valores

set = permite modificar os valores

inves de valores, como chamariamos a data atual?

res

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._dataAtual = valor
        }
*/

/*

setInterval = função executada em um intervalo de tempo que é mercado em milisegundos

setTimeOut = função executada em um intervalo de tempo determinado

caso queira colocar a data por extenso, use o seguinte metodo:

this.displayDate = this._currentDate.toLocaleDateString(this.locale,{

day: "2-digit",
mounth: "long",
year: "numeric"

});

document.querySelector = usado para selecionar apenas um elemento
document.querySelectorAll = usado para selecionar todos os elementos relacionados

*/