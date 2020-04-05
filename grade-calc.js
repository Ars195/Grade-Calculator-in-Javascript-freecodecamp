let calc =function(score ,totalscore){
    let percent =(score/totalscore)*100;
    let Grade = '';
if (percent>=90){
  Grade = 'A'; 
}
else if(percent>=80){
  Grade = 'B';
}else if(percent>=70){
    Grade = 'C';
}else if(percent>=60){
    Grade = 'D';
}else if(percent>=0){
    Grade = 'F';
} 
return `You got a ${Grade} ${percent}%!`;
}
let result = calc(18,20);
console.log(result);