import fs from 'fs';

// fs.readFile('fsmodule.txt',(err,data)=>{ // no such file or directory, open 'fsmodule.txt' -txt file does not exist
//     console.log(err,data);
// })

fs.readFile('fsmodule.js', 'utf8', (err,data)=>{ 
    console.log(err,data);
})
fs.readFile('index.js', (err,data)=>{ 
    console.log(err,data.toString()); // use utf-8 or toString to parse data from buffer to readable format
})

console.log('reading file completed')  
// node js executes log first before since readfile takes time to parse the file and only after 
// parsing the call back is called - this is due to non-vlocking i/o nature of node js - to avoid this and wait for the file to 
// completely execute use "readfilesync"

const a = fs.readFileSync('index.js', 'utf8');
console.log(a);
console.log('readfilesync - reading file completed') 

/*
Time →
1. fs.readFile A  → sent to event loop
2. fs.readFile B  → sent to event loop
3. console.log     → runs immediately
4. readFileSync    → blocks everything
   (even if A/B are done, they WAIT)
5. readFileSync finishes
6. Now callbacks for A & B run
*/

const data = `
Time →
1. fs.readFile A  → sent to event loop
2. fs.readFile B  → sent to event loop
3. console.log     → runs immediately
4. readFileSync    → blocks everything
   (even if A/B are done, they WAIT)
5. readFileSync finishes
6. Now callbacks for A & B run
`;

fs.writeFile('nonblockingio.txt', data, () => {
  console.log('✅ Finished writing to file!');
});
console.log( 'finished writingx')