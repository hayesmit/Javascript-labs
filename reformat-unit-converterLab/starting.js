//lab09-Unit_Converter.py

let distance = parseFloat(prompt("what distance in do you want to convert to meters? example 167 >> "))
let currentUnits = prompt("what is the current unit of measurement, ft, mi, m, km, yd, in?")
let finalUnits = prompt("What units would you like the result to be in? in, ft, yd, m, mi, km? >> ")
let conversion;

if (currentUnits === "ft"){
    conversion = distance * .3048
    }
else if (currentUnits == "mi"){
    conversion = distance * 1609.34
    }
else if (currentUnits =="m"){
    conversion = distance
    }
else if (currentUnits == "km"){
    conversion = distance * 1000
    }
else if (currentUnits == "yd"){
    conversion = distance * 0.9144
    }
else if (currentUnits == "in"){
    conversion = distance * 0.0254
    }

if (finalUnits == "ft"){
    conversion /= .3048
    }
else if (finalUnits == "mi"){
    conversion /= 1609.34
    }
else if (finalUnits == "km"){
    conversion /= 1000
    }
else if (finalUnits == "yd"){
    conversion /= 0.9144
    }
else if (finalUnits == "in"){
    conversion /= 0.0254
    }

alert(`${distance}  ${currentUnits} equals ${conversion} ${finalUnits}`)
