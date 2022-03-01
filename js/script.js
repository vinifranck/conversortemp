document.getElementById('calcular').onclick = tempConvert;
document.getElementById('limpar').onclick = limpar;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin = document.getElementById("kelvin").value;
    var rankine = document.getElementById("rankine").value;

    if(isNaN(fahrenheit) || isNaN(celsius) || isNaN(kelvin) || isNaN(rankine)){
        alert("Digite um valor válido")
    }else if(celsius!=""){
        fahrenheit = parseFloat(celsius*1.8)+32;
        kelvin = (parseFloat(celsius))+273;
        rankine = (parseFloat(celsius)+273.15)*1.8;
    }else if(fahrenheit!=""){
        celsius = (parseFloat(fahrenheit-32))/1.8;
        kelvin = ((parseFloat(fahrenheit-32))/1.8)+273;
        rankine = (parseFloat(fahrenheit)+459.67);
    }else if(kelvin!=""){
        celsius = (parseFloat(kelvin)-273);
        fahrenheit = (parseFloat(kelvin)-273)*1.8+32;
        rankine = (parseFloat(kelvin)*1.8);
    }else if(rankine!=""){
        celsius = (parseFloat((rankine)-491.67)/1.8);
        fahrenheit = (parseFloat(rankine-459.67));
        kelvin = (parseFloat(rankine/1.8))
    }
    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(2)
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(2)
    document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(2)
    document.getElementById("rankine").value = parseFloat(rankine).toFixed(2)
}
function limpar(){
    document.getElementById('fahrenheit').value = "";
    document.getElementById('celsius').value = "";
    document.getElementById('kelvin').value = "";
    document.getElementById('rankine').value = ""; 
}