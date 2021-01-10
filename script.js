function cadConverter(){
document.converter.dollar.value = document.converter.cad.value * .79
document.converter.pound.value = document.converter.cad.value * 0.58
document.converter.rupee.value = document.converter.cad.value * 57.83
}
function dollarConverter(){
document.converter.cad.value = document.converter.dollar.value * 1.27
document.converter.pound.value = document.converter.dollar.value * 0.74
document.converter.rupee.value = document.converter.dollar.value * 73.38
}
function poundConverter(){
document.converter.dollar.value = document.converter.pound.value * .74
document.converter.cad.value = document.converter.pound.value * .58
document.converter.rupee.value = document.converter.pound.value * 99.54
}
function rupeeConverter(){
document.converter.dollar.value = document.converter.rupee.value * 0.015
document.converter.pound.value = document.converter.rupee.value * 0.010
document.converter.cad.value = document.converter.rupee.value * 0.017
}
