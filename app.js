function dis(val)
{
document.getElementById("val").value+=val
 }
function solve()
{
let x = document.getElementById("val").value
let y = eval(x)
document.getElementById("val").value = y
}
function clr()
{
document.getElementById("val").value = ""
}
