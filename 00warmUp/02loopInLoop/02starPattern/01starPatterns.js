// n = 4
// * * * *
// * * * *
// * * * *
// * * * *

//*
//* *
//* * *
//* * * *

//1
//1 2
//1 2 3
//1 2 3 4

//1
//2 2
//3 3 3
//4 4 4 4

//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1

//* * * *
//* * *
//* *
//*

//        *
//     * *
//   * * *
//* * * *

//1
//1 0
//1 0 1
//1 0 1 0
//1 0 1 0 1

//1
//0 1
//0 1 0
//1 0 1 0 
//1 0 1 0 1

function starPrinter(shape, n) {
    if (shape === "Square") {
        console.log(`Square shaped star pattern is printing...\n`);
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j < n; j++) {
                row = row + "* ";
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "RightAngledTraingle") {
        console.log("Right Angled Triangle is printing...\n");
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + "* ";
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "HorizontalIncNumRAT") {
        console.log(
            "Horizontal Increasing Number Right Angled Triangle is printing...\n"
        );
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + (j + 1 + " ");
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "VerticalIncNumRAT") {
        console.log(
            "Vertically Increasing Number Right Angled Triangle is printing...\n"
        );
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + (i + 1 + " ");
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "FlippedHoriIncNumRAT") {
        console.log(
            "Flipped Horizontal Increasing Number Right Angled Triangle is printing...\n"
        );
        for (let i = 0;  i < n;  i++) {
            let row = "";
            for (let j = 0; j < n-i;  j++) {
                row = row + (j + 1 + " ");
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "FlippedRAT") {
        console.log(
            "Flipped Right Angled Triangle is printing...\n"
        );
        for (let i = 0;  i < n;  i++) {
            let row = "";
            for (let j = 0; j < n-i;  j++) {
                row = row + "* ";
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "RightAlignedRAT") {
        console.log(
            "Right Aligned Right Angled Triangle is printing...\n"
        );
        for (let i = 0;  i < n;  i++) {
            let row = "";
            for (let j = 0; j < n; j++) {
                if (j < n - i  - 1) {
                    row = row + "  ";
                } else {
                    row = row + "* "
                }
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "OneZeroRAT") {
        console.log(
            "One Zero Right Angled Triangle is printing...\n"
        );
        for (let i = 0;  i < n;  i++) {
            let row = "";
            for (let j = 0;  j <= i;  j++) {
                if (j % 2 == 0) {
                    row = row + "1 ";
                } else {
                    row = row + "0 "
                }
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    } else if (shape === "OneAndTwoZeroRAT") {
        console.log(
            "One And Two Zero Right Angled Triangle is printing...\n"
        );
        let toggle = 1;
        for (let i = 0;  i < n;  i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + toggle;
                if (toggle == 1) {
                    toggle = 0
                } else {
                    toggle = 1;
                }
            }
            console.log(row);
        }
        console.log(`\n+++++++++++++++++++++++++++\n`);
    }
}

starPrinter("Square", 4)
starPrinter("RightAngledTraingle", 4);
starPrinter("HorizontalIncNumRAT", 4);
starPrinter("VerticalIncNumRAT", 4);
starPrinter("FlippedRAT", 4);
starPrinter("RightAlignedRAT", 4);
starPrinter("OneZeroRAT", 6);
starPrinter("OneAndTwoZeroRAT", 6);
