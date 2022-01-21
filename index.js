let arr = []
let Task =document.getElementById("task")
let Tex =document.getElementById("tex")
const Note=localStorage.getItem("note")
if (Note) {
    console.log("");
    arr =JSON.parse(Note) 
    display(arr)    
}


function submit() {
    arr.push(Tex.value)
    localStorage.setItem("note",JSON.stringify(arr))
    display(arr)
    Tex.value=""

}
function clearr(a) {
    console.log("arrr")
        arr.splice(a,1);
        localStorage.setItem("note",JSON.stringify(arr))
        display(arr)
}
function clearall() {
    arr= []
    Task.innerHTML = arr
    localStorage.clear("note")
}
var c ;
function display(r) {
    var a =""
   
    for (let i =0 ; i <r.length;i++){
        c=i
        a +="<tr><td>"+r[i]+'<td><button onclick="clearr('+c+')" class ="but">'+ "Delete" +  '</button></td>' +            "</td></tr>"   
} 
Task.innerHTML= a

}