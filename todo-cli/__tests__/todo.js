const todoList = require("../todo");
const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

const {all, markAsComplete, add, overdue, dueToday, dueLater} = todoList();

describe("Todolist Test Suite", () => {
    test("Should add new todo", () => {
        expect(all.length).toBe(0);
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0, 10)
            }
        )
        expect(all.length).toBe(1);
    })

    test("Should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })

    test("Retrival of overdue item", () => {
        var dateToday = new Date()
        const yesterday = formattedDate(
            new Date(new Date().setDate(dateToday.getDate() - 1))
        )
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: yesterday
            }
        )
        let result = overdue();
        expect(result.length>0).toBe(true);
    })

    test("Retrival of due today items", ()=>{
        var dateToday = new Date()
        const today = formattedDate(dateToday)
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate:today
            }
        )
        let result = dueToday();
        expect(result.length>0).toBe(true);
    })

    test("Retrival of due later items", () => {
        var dateToday = new Date()
        const tomorrow = formattedDate(
            new Date(new Date().setDate(dateToday.getDate() + 1))
        )
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate:tomorrow
            }
        )
        let result = dueLater();
        expect(result.length>0).toBe(true);
    })

})