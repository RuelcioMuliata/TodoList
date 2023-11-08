const button = document.querySelector('#theButton');
const taskInput = document.querySelector('#textInput');
const taskPlace = document.querySelector('#taskList');

let inputValue = [];

function getInputValue() {
    const theTask = taskInput.value;
    if (theTask.trim() !== '') {
        inputValue.push(theTask);
        taskInput.value = '';
        showInputValue();
    } else {
        alert('Você precisa digitar uma tarefa antes de adicionar.');
    }
}

function showInputValue() {
        
        let result = '';
            
            inputValue.forEach(valor => {
                result += `
                    <ul id="taskList">
                        <li id="task" class="taskItem">
                            <img src="./img/aceitar.png" alt="" id="firstimg">
                            <p id="paragrafo">${valor}</p>
                            <img src="./img/cruz.png" alt="" id="secondimg">
                        </li>
                    </ul>`;
            });

            taskPlace.innerHTML = result;
}

button.addEventListener('click', getInputValue);

taskPlace.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'firstimg') {
        
        const taskItem = e.target.closest('.taskItem');
        if (taskItem) {
            taskItem.classList.toggle('green-task');
        }

    } else if (e.target && e.target.id === 'secondimg') {
        
        const taskItem = e.target.closest('.taskItem');
        
        if (taskItem) {
            const taskText = taskItem.querySelector('#paragrafo').textContent;
            const index = inputValue.indexOf(taskText);
            
        if (index !== -1) {
                inputValue.splice(index, 1);
                showInputValue();
            }
        }
    }
});