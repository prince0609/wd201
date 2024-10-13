const todoList = () => {
    all = [];
    const formattedDate = d => {
        return d.toISOString().split("T")[0]
    }

    var dateToday = new Date()
    const today = formattedDate(dateToday)
    const yesterday = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() - 1))
    )
    const tomorrow = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() + 1))
    )
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }

    const overdue = () => {
        // Write the date check condition here and return the array
        // of overdue items accordingly.
        let ans = all.filter( (val) => {
            return val.dueDate == yesterday;
        });
        return ans;
    }

    const dueToday = () => {
        // Write the date check condition here and return the array
        // of todo items that are due today accordingly.
        let ans = all.filter( (val) => {
            return val.dueDate == today;
        });
        return ans;
    }

    const dueLater = () => {
        // Write the date check condition here and return the array
        // of todo items that are due later accordingly.
        let ans = all.filter( (val) => {
            return val.dueDate == tomorrow;
        });
        return ans;
    }

    const toDisplayableList = (list) => {
        // Format the To-Do list here, and return the output string
        // as per the format given above.
        let ans = list.map( (val) => {
            let checkbox = ' ';
            if(val.completed) checkbox = 'x';
            if(val.dueDate == today){
                let str = `[${checkbox}] ${val.title}`;
                return str;
            }else{
                let str = `[${checkbox}] ${val.title} ${val.dueDate}`;
                return str;
            }
            
        }).join("\n");
        return ans;
    }

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")