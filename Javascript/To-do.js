let addtaskbutton = document.getElementById('submitbtn');
let task_el = document.getElementById('task');
let input = document.getElementById('userinput');

addtaskbutton.addEventListener('click', function (){
   let paragraph = document.createElement('p');
   task_el.appendChild(paragraph)
})





/*window.addEventListener('load', () => {
   const form = document.getElementById('taskform');
   const input = document.getElementById("userinput");
   const list_el = document.getElementById("tasks");
form.addEventListener('submit', (e) => {
      e.preventDefault();

      const task = input.value;

      if (!task) {
         alert("Please input a task");
         return;
      }

      const task_el = document.createElement("div");
      task_el.classList.add("task")

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_content_el.innerText = task;

      task_el.appendChild(task_content_el);

      list_el.appendChild(task_el);

   })

})*/