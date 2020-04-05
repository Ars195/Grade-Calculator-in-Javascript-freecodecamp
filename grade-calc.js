let calc =function(score ,totalscore){
    let percent =(score/totalscore)*100;
    
if (percent>=90){
    return `You got a A ${percent}%!`;
}
else if(percent>=80){
    return `You got a B ${percent}%!`;
}else if(percent>=70){
    return `You got a C ${percent}%!`;
}else if(percent>=60){
    return `You got a D ${percent}%!`;
}else if(percent>=0){
    return `You got a F ${percent}%!`;
}

}
let result = calc(18,20);
console.log(result);