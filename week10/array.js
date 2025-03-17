let scores = [60,50,40,58,54,54,
    58,50,52,54,40,69,
    53,64,75,42,54,54,
    43,53,64,53,25,64,
    25,64,65,53,42,64,
    24,45,65,53,42,75
];

let i =0;
let highscore =0;
while(i< scores.length){
    console.log("bubble solution #" + i + " score: " + scores[i]);
    if (scores[i]>highscore){
        highScore = scores[i];
    }
    i = i+1;
}

console.log("Bubble test: " + scores.lenght);
console.log("Highest bubble score: " + highscore);

let bestSolu =[];
for(let i; i<scores.length; i++){
    if (scores[i] == highscore){
        bestSolu.push(i);
    }
}

console.log("solutions with the highes score: " + bestSolu);