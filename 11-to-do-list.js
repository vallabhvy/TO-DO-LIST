const ToDoList = JSON.parse(localStorage.getItem('tasks')) || [];
RenderTodoList();
console.log(localStorage.getItem('tasks'));

function RenderTodoList(){

let todohtml='';

for(let i=0;i<ToDoList.length;i++){
    const todoobject = ToDoList[i];
    const name = todoobject.name;
    const duedate = todoobject.duedate;
    let html = `

    <div> ${name} </div>
    <div> ${duedate} </div>
    <div> <button onclick = " 
     ToDoList.splice(${i},1);
     localStorage.setItem('tasks', JSON.stringify(ToDoList));
     RenderTodoList();
     " class="delete-button"> Delete </button> 
     </div>`
     ;

    todohtml += html;
    
   }
   console.log(todohtml);

   
   document.querySelector('.js-todo-list').innerHTML = todohtml;
}

function AddTodo(){
    const InputElement = document.querySelector('.js-name-input');
   const task = InputElement.value;
   const dateinput = document.querySelector('.js-duedate');
   const duedate = dateinput.value;
   if(task !== '' && duedate !== ''){
    
   console.log(task);
   ToDoList.push({
    name: task,
duedate: duedate});
   console.log(ToDoList);
   localStorage.setItem('tasks', JSON.stringify(ToDoList));

   RenderTodoList();
   InputElement.value = '';
   dateinput.value = '';
   }
   else{
    alert('task or date missing')
   }


    
}