//This is the  variables being set up
window.addEventListener('load', () => {
   //DOM Elements
   const form = document.getElementById("inputform");
   const input = document.getElementById("userinput");
   const list_el = document.getElementById("tasks");
   const filter = document.querySelectorAll(".filter span");
   const date = document.getElementById("datecal");
   const clearbtn = document.getElementById("clearbtn");
   const submit = document.getElementById("submitbtn");
   const new_task = document.querySelector("#inputform input");
   let task_box = document.querySelector('.taskdisplay');


   //Local Storage

   submit.addEventListener('click', e => {
      //getting local storage for the todo list
      let todo = JSON.parse(localStorage.getItem("task"));


      function showTasks() {
         let display = "";
         todo.forEach((todo, id) => {
            display += `<div class = "content">
                 <input 
                   type="text",
                   ${todo},
                   id ="${id}",
                   readonly
                       />
                 </div>
                 <div class="actions">
                     <button class="edit" type="submit">Edit</button>
                     <button class="delete" type="reset">Delete</button>
                    </div>`
         });

         task_box.innerHTML = display;
      }

      showTasks();
      let userTask = document.querySelector('.text');
      if (input == "submitbtn" && userTask);

      submit.value = "";
      if (!todo) {
         todo = [];//If no todo pass a empty array
      }
      let taskInfo = { name: userTask, status: "pending" };
      todo.push(taskInfo);
      localStorage.setItem("task", JSON.stringify(todo));

      showTasks();
   });

   //Form function 
   form.addEventListener('submit', (e) => {
      e.preventDefault();

      const task = input.value;
      const caldate = date.value;

      if (!task && !caldate) {
         alert("Please fill in task and select date")
         return

      }
      if (!task) {
         alert("Please fill in task")
         return
      }
      if (!caldate) {
         alert("Please fill select date")
         return
      }

      const task_element = document.createElement("div");
      task_element.classList.add("taskdisplay");

      const task_content = document.createElement("div")
      task_content.classList.add("content");

      const todo_date = document.createElement("div");
      todo_date.classList.add("datecal");

      task_element.appendChild(task_content);


      //Task List Functionality
      const task_input = document.createElement("input");
      task_input.classList.add("text");
      task_input.type = "text";
      task_input.value = task;
      task_input.setAttribute("readonly", "readonly");

      task_content.appendChild(task_input);


      //Buttons variables
      //DOM Elements
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

      //Controls
      filter.forEach(btn => {

         btn.addEventListener('click', () => {

            console.log(btn)
            document.querySelector("span.active").classList.remove("active");
            btn.classList.add("active")

         })

      })

      //Edit Button
      task_edit.addEventListener('click', () => {

         if (task_edit.innerText.toLowerCase() == "edit") {

            task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText = "Save";

         } else {
            task_input.setAttribute("readonly", "readonly");
            task_edit.innerText = "Edit";
         }

      });

      //Delete Button
      task_delete.addEventListener('click', () => {

         task_element.remove(list_el);

      });

      //Clear Button

      clearbtn.addEventListener('click', () => {

         task_element.remove(task_content);

      })

      //Cross Out

      task_input.addEventListener('click', () => {

         task_input.style.textDecoration = "line-through";
         due_date.style.textDecoration = "line-through";

      })

      task_input.addEventListener('click', () => {

         task_input.style.removeAttribute('line-through');
         due_date.style.removeAttribute('line-through')

      })
      //Time and Date Function

      const due_date = document.createElement('label');
      due_date.htmlFor = "text";
      due_date.classList.add('duedate');
      due_date.innerText = date.value;
      date.value = "";

      task_content.appendChild(due_date);
      function startTime() {
         const today = new Date();
         let hour = today.getHours();
         let minutes = today.getMinutes();
         let seconds = today.getSeconds();
         let day = today.getDay();
         let month = today.getMonth();
         let year = today.getFullYear();
         minutes = checkTime(minutes);
         seconds = checkTime(seconds);
         setTimeout(startTime, 1000);
      }

      setTimeout(startTime, 1000);

      function checkTime(i) {
         if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
         return i;
      }

   });

})
