//This is the  variables being set up
window.addEventListener('load', () => {
   const form = document.getElementById("inputform");
   const input = document.getElementById("userinput");
   const list_el = document.getElementById("tasks");
   const sub_btn = document.getElementById("submitbtn");

//Form function 
form.addEventListener('submit', (e) => {
      e.preventDefault();

      const task = input.value;

      if (!task) {
         alert("Please input a task");
         return;
      }

     const task_element = document.createElement("div");
      task_element.classList.add("taskdisplay");

      const task_content = document.createElement("div")
      task_content.classList.add("content");

      task_element.appendChild(task_content);

      //Task List Functionality
      const task_input = document.createElement("input");
      task_input.classList.add("text");
      task_input.type = "text";
      task_input.value = task;
      task_input.setAttribute("readonly","readonly");

      task_content.appendChild(task_input);

      //Buttons variables
      const task_actions = document.createElement("div");
      task_actions.classList.add("actions");

      const task_edit = document.createElement("button");
      task_edit.classList.add("edit");
      task_edit.innerHTML = "Edit";

      const task_delete = document.createElement("button");
      task_delete.classList.add("delete");
      task_delete.innerHTML = "Delete";

      task_actions.appendChild(task_edit);
      task_actions.appendChild(task_delete);
      

      task_element.appendChild(task_actions);

      list_el.appendChild(task_element);

      input.value = "";

      //Buttons Functionality

      //Edit Button
      task_edit.addEventListener('click', () => {

         if (task_edit.innerText.toLowerCase() == "edit") {

            task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText = "Save"; 

         }else{
            task_input.setAttribute("readonly", "readonly");
            task_edit.innerText = "Edit";
         }
              
      });

      //Delete Button
      task_delete.addEventListener('click' , () => {

         task_element.remove(list_el);
      
      });
      
      //Cross Out

    task_input.addEventListener('click', () => {
       
         task_input.style.textDecoration = "line-through";

      })

    task_input.addEventListener('click', () => {
       
         task_input.removeAttribute("line- through");

      })


   });

})

/*let paragraph = document.getElementById("tasks");
      paragraph.innerText = task;
      list_el.appendChild(paragraph);*/


      /*let addtaskbutton = document.getElementById('submitbtn');
let task_el = document.getElementById('task');
let input = document.getElementById('userinput');

addtaskbutton.addEventListener('click', function () {
   let paragraph = document.createElement('p');
    paragraph.innerText = userinput.value;
    task_el.appendChild(paragraph);
})*/