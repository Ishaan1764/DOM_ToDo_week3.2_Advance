// let ctr=1;
// function addTodo(){
//     const  element = document.querySelector("input").value;
//     const spanEl=document.createElement("span");
//     const buttonEl=document.createElement("button");
//     spanEl.innerHTML=element;
//     buttonEl.innerHTML="delete";
//     // 1 first
//     const divEle=document.createElement("div");
//     // 2
//     divEle.appendChild(spanEl);
//     divEle.appendChild(buttonEl);
//     //3
//     document.querySelector("body").appendChild(divEle);

// }
// function deleteTodo(index){
//     const elem=document.getElementById("todo-"+index);
//     elem.parentNode.removeChild(elem);
// }

//make it easy and resuable like react but not react.

let toDo=[]
function addTodo(){
    toDo.push({
        title:document.querySelector("input").value
    })
    render();
}

function render(){
    document.querySelector("#todos").innerHTML=""
    // let ctr=1;
    for(let i=0;i<toDo.length;i++){
        const todo=toDo[i];
        const div=document.createElement("div");
        // div.setAttribute("id",ctr);
        const h1=document.createElement("h1");
        const button=document.createElement("button");
        button.addEventListener("click",()=>{
            deleteT(i);
        })
        button.innerHTML="delete";
        h1.innerHTML=todo.title;
        div.append(h1);
        div.append(button);
        document.querySelector("#todos").appendChild(div);
        // ctr++;
    }
}
function deleteT(index){
    toDo.splice(index,1);
    return render()
}
//donot do any DOM manipulation for delete just change the array and call render function OK?