//dry run the loop before running 

for (i = 0; i < 3; i++){
    for (j = 0; j < i; j++){
        // console.log(i, j);
    }
}
//(i, j) -> (0, Not execute) -> (1, 0) -> (2, 0) -> (2, 1)


for (i = 0; i < 3; i++) {
  for (j = 0; j <= i; j++) {
    // console.log(i, j);
  }
}

for (i = 0; i < 3; i++) {
    for (j = i; j > 0; j--) {
        // console.log(i, j);
    }
}



for (i = 5; i > 0; i--) {
    for (j = 0; j < i; j++) {
        console.log(i, j);
    }
}