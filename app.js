const fs = require ('fs')
const {list} = require ("./funciones/list")
const {find} = require ("./funciones/find")
const {edit} = require ("./funciones/edit")


console.log (list())
console.log (find("sacar el gato"))
console.log (edit ("sacar basura","nueva descripcion"))