// const fs = require("fs");

// fs.readFile("./test.json", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const file = JSON.parse(jsonString);
//     console.log(file.map((i) => i.name).join(","));
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });

////////////////////////////////////////////////////////////////////////////
//const { exec } = require("child_process");
// exec("npx lerna changed --json", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     try {
//       const jsonArray = JSON.parse(stdout);
//       console.log(jsonArray.map(x => x.name).join(","));
//     } catch (e) {
//       console.error(e)
//     }
// });

const { exec } = require("child_process");

exec("npx lerna changed --json", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    try {
      const jsonArray = JSON.parse(stdout);
      console.log(jsonArray.map(x => x.name).join(",\n"));
    } catch (e) {
      console.error(e)
    }
});
