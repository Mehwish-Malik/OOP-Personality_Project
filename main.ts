#! /usr/bin/env node
import {input} from "@inquirer/prompts"
import { select } from "@inquirer/prompts";
import chalk from "chalk"
class Person{
    private personality:string;
    constructor(){
        this.personality= "Mystery"
    }
    userInput(input:string){
        if(input.includes("Talk to Others about my Self ")){
            this.personality = "Extrovert";
        }else if (input.includes("Keep Quite and dont ask anything ")){
this.personality = "Introvert"
        }
    }
// return function
get _personality(){
return this.personality
}
}
// Create Object
class Main{
    public async main(){
       
        
      const mesSage = await select({
        message:chalk.yellow("Tell Your Behavior?"),
        choices:[{name:"Talk to Others about my self",value:"Talk to Others about my self",},
            { name:"Keep Quite and dont ask anything",value:"Keep Quite and dont ask anything",}]
 

      })
      
      
        // Creating Person Class
let myPerson = new Person()

myPerson.userInput(mesSage);

console.log(chalk.yellow(`You are Still a ${myPerson._personality}!!`));

    }
}const myObject = new Main()
myObject.main();
