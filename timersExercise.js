
function countDown(num){
    const count = setInterval(
        function(){
            num--;
            if(num <= 0){
                clearInterval(count);
                console.log('DONE!');
            }else { console.log(num);}
        }
    ,1000)
  }


function randoms(){

let counter = 0;
const rnd = setInterval(function(){
    
    if(Math.random()<0.75){
        counter++
        console.log('less than .75')
    }
    else{console.log(counter);
        clearInterval(rnd);}
},1000);


}