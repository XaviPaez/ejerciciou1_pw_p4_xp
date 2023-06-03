function contestar(nombre){

    if(nombre=="excadrill"){

        document.getElementById('elemento').innerHTML = '<strong>Felicitaciones has seleccionado el pokemon correcto</strong>';
        document.getElementById('idImagen').src='../img/pokecolor.jfif';
        document.getElementById('elemento').style.border='solid black';
        document.getElementById('elemento').style.backgroundColor='blue';
        

    }else {

        document.getElementById('elemento').innerHTML = '<strong>Pokémon incorrecto, la respuesta es: excadrill</strong>';
        document.getElementById('idImagen').src='../img/pokecolor.jfif';
        document.getElementById('elemento').style.border='none'
        document.getElementById('elemento').style.backgroundColor='none';

    }

}
function reiniciar(){


    document.getElementById('elemento').innerHTML = '';
    document.getElementById('idImagen').src='../img/pokenegro.jfif';
    document.getElementById('elemento').style.border='none';
}


