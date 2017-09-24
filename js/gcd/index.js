

function findGcd(a, b){
    const k=Math.min(a,b);
    let result;
   
    for(let i=0;i<k;i++){
        if(a%i==0 && b%i==0){
            result=i;
        }
    }
    return result;
}