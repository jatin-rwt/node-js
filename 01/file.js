//file handling -- requires modules fs, built in
const fs = require("fs");

//sync 
//overrides the existing content
//fs.writeFileSync("./test.txt", "Hey there");//created a file test.txt in root directory

//async 
//fs.writeFile("./test.txt", "Hey there async", (err) => {});

//read file
//sync returns
const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);

//async dont return anything
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err) {
        console.log("Error", err);
    } else {
        console.log(result);
        
    }
})

//appends in the existing
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

