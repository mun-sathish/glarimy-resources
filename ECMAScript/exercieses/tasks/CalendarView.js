"use strict"
import Calendar from './Calendar';

class CalendarView {
    constructor() {
        this.onTask = e => {
            const url = `task-${e.currentTarget.id}.json`;
            fetch(url).then(response=>{
                response.json().then(json => {
                    json.tasks.forEach(task => {
                        const div = document.createElement('div');
                        div.innerHTML = `<input type='checkbox' id='${task.id}'> ${task.description}`;
                        e.target.appendChild(div);
                    });
                }).catch(e=>console.log('error'));
            })
        }
        this.root = document.createElement('table');
        let days = new Calendar().getDays('2019-7-19', 7);
        days.forEach(d => {
            const tr = document.createElement('tr');
            tr.id = d.key;
            tr.addEventListener('click', this.onTask);
            tr.innerHTML = `<td class='date'>${d.date} ${d.month}</td>
                <td class='day'>${d.day}</td>
                <td class='tasks'>
                    <div id='${d.key}-count'></div>
                </td>
            `;
            this.root.appendChild(tr);
        });
        fetch("tasks.json").then(response=>{
            response.json().then(json => {
                console.log(json);
                json.forEach(task => {
                    console.log(task);
                    document.getElementById(task.date+'-count').innerHTML = `Number of Tasks: ${task.count}`;
                });
            }).catch(e=>console.log('taskss error'));
        })

    }
}

export default CalendarView;