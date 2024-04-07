import inquirer from "inquirer"
import chalk from "chalk"
let todo:any[]=[];

 function addTask(task:string):void{
    todo.push(task)
    console.log(chalk.green("Task Added."))
}

function removeTask(index:number):void{
    let value=index-1
    if(value>=0 && value<todo.length){
        let value=index-1
        todo.splice(value,1)
        console.log(chalk.red("Task Removed."))
}
else(
    console.log(chalk.red("No Task to delete"))
)
    }

function displayTask():void{
    if(todo.length===0){
        console.log(chalk.blue("Task list empty."))
}
else{
console.log("******************************************")
console.log(chalk.blue("\t   Todo List\t"))
console.log("******************************************")
    for(let i=0;i<todo.length;i++)
        {
        console.log(i+1+". "+todo[i])
    }
}
}

let Exit:boolean=true

while(Exit===true){
console.log("******************************************")
console.log(chalk.yellowBright("\t   Todo App\t"))
console.log("******************************************")
console.log("\t1.Add Tasks\t")
console.log("\t2.Remove Tasks\t")
console.log("\t3.Display Tasks\t")
console.log("\t4.Exit App\t")

const choice = await inquirer.prompt([
    {
        message:chalk.bgCyan("Enter your choice: "),
        name:"option",
        type:"number"
    }
])
switch(choice.option){
    case 1 :  const addToTask=await inquirer.prompt([{
        message:"Enter task: ",
        name:"task",
        type:"input"
    }])
    addTask(addToTask.task)
    break;
    case 2 :  const RemoveTask=await inquirer.prompt([{
        message:"Enter index of task to delete: ",
        name:"task",
        type:"number"
    }])
    removeTask(RemoveTask.task)
    break;
    case 3 :  
    displayTask()
    break;
    case 4 :
        Exit=false

}
}


