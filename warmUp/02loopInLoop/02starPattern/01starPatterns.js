// n = 4
// * * * *
// * * * *
// * * * *
// * * * *

function starPrinter(shape, n) {
    if (shape === "Square") {
        console.log("Square shaped star pattern is printing...")
        for (let i = 0; i < n; i++){
            let row = ""
            for (let j = 0; j < n; j++){
                row = row + "* "
            }
            console.log(row)
        }
        console.log(`\n+++++++++++++++++++++++++++\n`)
    } else if (shape === "RightAngledTraingle") {
        console.log("Right Angled Triangle is printing...")
        for (let i = 0; i < n; i++){
            let row = "";
            for (let j = 0; j <= i; j++){
                row = row + "* "
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } 
}

starPrinter("Square", 4)
starPrinter("RightAngledTraingle", 4);