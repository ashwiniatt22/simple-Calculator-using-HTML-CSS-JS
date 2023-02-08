var outputStr ="";

var buttonArr = document.querySelectorAll("button");
Array.from(buttonArr).forEach((button) => {
    button.addEventListener("click", (text) => {
        
        if (text.target.innerHTML == "C") {
            outputStr = "";
            document.querySelector("p").innerHTML = outputStr;
        }
        else if(text.target.innerHTML == "="){
            try{
                outputStr = eval(outputStr);
                document.querySelector("p").innerHTML = outputStr;
            }catch(error){
                outputStr = "Syntax Error"
                document.querySelector("p").innerHTML = outputStr;
            };
            
            
        }
        else if(text.target.innerHTML == "CE"){
            outputStr = outputStr.toString();
            outputStr = outputStr.substring(0,outputStr.length-1)
            document.querySelector("p").innerHTML = outputStr
        }
        else {
            outputStr = outputStr + text.target.innerHTML;
            document.querySelector("p").innerHTML = outputStr
        }
    })

})
