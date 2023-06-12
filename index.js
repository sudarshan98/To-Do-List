const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");



function addTask(){
    if(inputBox.value ===''){
        alert(" You must enter Task!")
    }
    else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    },false);

/// store user data 
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML)
        
    }

/// display the data whenever user opne other time

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showData()

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = 'Date:'+ day + "/" + month + "/" + year ;
