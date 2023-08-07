document.querySelector("form").addEventListener("submit",todoApp);

let taskArr;
if (localStorage.getItem("todoList")==null){
    taskArr = [];
}else{
    taskArr =  JSON.parse(localStorage.getItem("todoList"));
}
 displayTable(taskArr)
function todoApp(event){
    event.preventDefault();
    let taskNmae=document.querySelector("#task").value;
    let priority=document.querySelector("#priority").value;
    let taskObj={
        task:taskNmae,
        prior:priority,
    };
    taskArr.push(taskObj);
    localStorage.setItem("todoList",JSON.stringify(taskArr));
    // console.log(taskArr);
    displayTable(taskArr);
}

function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
   taskArr.forEach(function(elem, index) {
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=elem.task;
        let col2=document.createElement("td");
        col2.innerText=elem.prior;
        if(elem.prior=="High"){
            col2.style.backgroundColor="red";
        } else{
            col2.style.backgroundColor="green";
        }

        let col3=document.createElement("td");
        col3.innerText="delete";
        col3.addEventListener("click", function() {
            // event.target.parentNode.remove()
            deleteRow(index);
        });
        col3.style.color="blue";
        col3.style.cursor="pointer";
        row.append(col1,col2,col3);
        document.querySelector("tbody").append(row);
    });
}

function deleteRow(index){
    console.log(taskArr);
    taskArr.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(taskArr));
    displayTable(taskArr);
}
