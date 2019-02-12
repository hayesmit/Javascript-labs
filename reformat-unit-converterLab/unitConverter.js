//lab09-Unit_Converter.py

let distance = document.getElementById("distance")
let currentUnits = document.getElementById("Sunits")
let finalUnits = document.getElementById("Funits")

document.getElementById("submit").addEventListener("click", function(e){
let conversion;

if (currentUnits.value === "ft"){
    conversion = distance.value * .3048
    }
else if (currentUnits.value == "mi"){
    conversion = distance.value * 1609.34
    }
else if (currentUnits.value =="m"){
    conversion = distance.value
    }
else if (currentUnits.value == "km"){
    conversion = distance.value * 1000
    }
else if (currentUnits.value == "yd"){
    conversion = distance.value * 0.9144
    }
else if (currentUnits.value == "in"){
    conversion = distance.value * 0.0254
    }

if (finalUnits.value == "ft"){
    conversion /= .3048
    }
else if (finalUnits.value == "mi"){
    conversion /= 1609.34
    }
else if (finalUnits.value == "km"){
    conversion /= 1000
    }
else if (finalUnits.value == "yd"){
    conversion /= 0.9144
    }
else if (finalUnits.value == "in"){
    conversion /= 0.0254
    }

                    e.preventDefault();
                    let final = document.createElement("li");
                    final.innerText = `${distance.value}  ${currentUnits.value} equals ${conversion} ${finalUnits.value}`;
                    document.getElementById("ul").appendChild(final);
});

