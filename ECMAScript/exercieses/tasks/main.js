"use strict"

import CalendarView from './CalendarView';

document.getElementById('tasks').appendChild(new CalendarView().root);
console.log('new version');