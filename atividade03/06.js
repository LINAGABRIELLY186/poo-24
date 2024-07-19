"use strict";
function exibir(...strings) {
    strings.forEach((str) => {
        console.log(str);
    });
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
