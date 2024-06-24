//const todos = {};
const todos = [];
const todo1 = {
    text: 'Wash the dishes',
    complete: false
}; 
const todo2 = {
    text: 'DO laundry',
    complete: false
};

todos.push(todo1, todo2)

// todos[1] = todo1;
// todos[2] = todo2;
console.log(todos)
const index = [todos.length - 1];


console.log(todos[index]) 


// that is the same of performing the pop function
todos.pop()

console.log(todos)