function colorirDia(){

    //pegar valor de campo de dia
    let days = document.getElementById('days').value;
    //pegar valor do campor de cor
    let color = document.getElementById('color').value;
    //pega os elementos da tabela calendario
    let calendar = document.getElementById('calendar');

    //verifica se o campo de dia foi preenchido
    if(!days){

        alert('favor informar o dia!');
   
    }else if((days >0) && (days < 31)){
       
            //se o numero de dias esta no intervalo 
            //aplicara a cor na celula do calendario 
            let td = calendar.getElementsByTagName('td');
            td.style.backgroundColor = color;

    }else(days > 31){

        alert('favor informar um dia valido!');

    }

    //guarda  a celula da tabela
    let elementos = document.querySelectorAll('td');
    

}     
