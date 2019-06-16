function simpleSymbols(str){
count = 0;
for(var i = 0; i < str.length; i++){
    // zorgt ervoor dat er door de hele lengte van de string geloopt wordt
    if(str.charAt(i)==='+'){
        count++
        // is er een plus dan wordt count 1
    }
    if(str.charAt(i)!=='+'){
        count--
        // is er geen plus dan wordt er 1 van de count afgehaald
    }
    if(count ===1 ){
        // om door twee plussen te zijn omringd moet count altijd eindigen met een + v
        return true;
    }
    else{
       return false;
    }
} 
}