
    function alerta(){

        if( document.querySelector('#texto') ){

            let texto : HTMLInputElement | null = document.querySelector('#texto');
            alert(texto?.value);

        }

        else{

            return alert ("não existe");


        }

    }