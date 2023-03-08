//TODO: HACER ESTO
function calculofinal(){
    //obetencion de variables por medio del documento
    let cal1 = parseFloat(document.getElementById("cal1").value);
    let cal2 = parseFloat(document.getElementById("cal2").value);
    let cal3 = parseFloat(document.getElementById("cal1").value);
    let calExamenFinal = parseFloat(document.getElementById("calExamenFinal").value);
    let calTrabajoFinal = parseFloat(document.getElementById("calTrabajoFinal").value);
    
    //calculo de la nota 
    const promedioMaterias = (cal1 + cal2 + cal3)/3;
    let notaFinal= ((promedioMaterias * 0.55) + (calExamenFinal *0.3)+( calTrabajoFinal *0.15))
    notaFinal = notaFinal.toFixed(2)
    
    document.getElementById("resultado").innerHTML =`La calificacion final es 📕: ${notaFinal} `
}