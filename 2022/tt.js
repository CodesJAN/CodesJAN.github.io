function getRandomInt() {
    let str = '';
    let arr = [];
    for (i = 0; i < 4; i++) {
        str = Math.floor(Math.random() * 10);
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }
    console.log(arr)
}
