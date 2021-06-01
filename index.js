

//Producer
function getTodo(id){
    const p = new Promise(function(resolve,reject){
        if (id>0){
            setTimeout(function(){
                const todo = {id,title:`Todo id : ${id}`}
                resolve(todo)
        
            },1000)

        }
        else{
            reject({error:`error ! id : ${id}`})
        }
        
    })
    return p
}

//Consumer 1 avec then
const pTodo = getTodo(1)
pTodo
.then(function(todo){
    console.log(todo)
    return getTodo(todo.id+1)
})
.then(function(todo){
    console.log(todo)
    return getTodo(todo.id+1)
})
.catch(function(err){
    console.error(err)
})

//Consumer 2 avec async
async function loadTodos(){
    const todo1 = await getTodo(1)
    console.log(todo1)
    const todo2 = await getTodo(2)
    console.log(todo2)
}
loadTodos()

//Consumer 3 avec race
Promise.race([getTodo(1), getTodo(2)]).then(function(arr){
    console.log(arr)
})


//Consumer 4 avec all
Promise.all([getTodo(1), getTodo(2)]).then(function(arr){
    console.log(arr)
})

var add = (a,b) => `${a} + ${b} = ${a+b}`

console.log(add(5,7))

