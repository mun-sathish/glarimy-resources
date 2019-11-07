class Calendar {
    constructor() {
        this.days = {
            0: 'SUN',
            1: 'MON',
            2: 'TUE',
            3: 'WED',
            4: 'THU',
            5: 'FRI',
            6: 'SAT'
        }
        this.months = {
            0: 'JAN',
            1: 'FEB',
            2: 'MAR',
            3: 'APR',
            4: 'MAY',
            5: 'JUN',
            6: 'JUL',
            7: 'AUG',
            8: 'SEP',
            9: 'OCT',
            10: 'NOV',
            11: 'DEC'
        }
    }
    getDays(from, size) {
        const week = [];
        const date = new Date(from);
        date.setDate(date.getDate());
        week.push({
            date: date.getDate(),
            month: this.months[date.getMonth()],
            day: this.days[date.getDay()],
            key: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        });
        for (let i = 0; i < size; i++) {
            date.setDate(date.getDate() + 1);
            week.push({
                date: date.getDate(),
                month: this.months[date.getMonth()],
                day: this.days[date.getDay()],
                key: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            });
        }
        return week;
    }
}

export default Calendar;
