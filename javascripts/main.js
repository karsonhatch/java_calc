var display = document.getElementById("display")
var arr = []
function num(i){
  display.value += i 
}

function razzle() {
  if (display.value == ''){
    alert("there is nothing to calclulate.")
  // } else if{
  //   arr.push(display.value)

  } else {
  var answer = eval(display.value)
  display.value = answer
  arr.push(answer)
  }
}

function dazzle() {
  display.value = ""
}


function last(){
  if (arr.length != 0){
    display.value = arr.slice(-1)[0]
  } else {
    alert("nothing to display.")
  }


}