const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
const writeGreetingssTofile = (name) =>{
    fs.writeFile('greeting.txt',`Hello ${name}!`, err =>{
        if(err){
            console.log("Error occured while writing the file");
        }
    });
}
rl.question("what is your name? ", (name) =>{
    writeGreetingssTofile(name);
    rl.close();
})
