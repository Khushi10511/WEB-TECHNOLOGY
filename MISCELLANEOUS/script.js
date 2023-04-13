let element = document.getElementById("box");
function func1() {
  if (element.style.backgroundColor == "red")
    element.style.backgroundColor = "yellow";
  else 
    element.style.backgroundColor = "red";
}

const func2 = () => {
    element.style.transform += "rotate(45deg)";
};
