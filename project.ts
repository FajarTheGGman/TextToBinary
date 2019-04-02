var req = require("request");
var war = require("colors");
var p = require("readline");

console.log("        ____")
console.log("       ||  ||")
console.log("       ||__||")
console.log("       [ -=.] )")
console.log("       ====== 0")
console.log("");
console.log(war.rainbow("    Text To Binary"));
console.log("");
console.log(war.rainbow("[======================]"));
console.log(war.green("Coder : Fajar Firdaus"));
console.log(war.green("Fb : Fajar Firdaus"));
console.log(war.green("YT : iTech7732"));
console.log(war.green("IG : fajar_firdaus_7"));
console.log(war.rainbow("[======================]"));

let s = p.createInterface({
    input : process.stdin,
    output : process.stdout
});

s.question("Masukan Text : ", (text) => {
    req("https://newtrooper731.000webhostapp.com/data/biner.php?text=" + `${text}`, function(error, response, body){
    f = JSON.parse(body)
    console.log("Hasil : " + f['Hasil']);
    });
});