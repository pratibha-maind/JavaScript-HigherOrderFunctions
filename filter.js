
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myfilter").addEventListener("click", function() {
        
        //callback function for filter
        //returns only those numbers back which are multiples of 5
        function divisors(n){
            if(n%5 == 0)
            {
                return true;
            }
            return false;
        }
        function filter(list, divisors){
            const newList = [];
            for(let i=0; i<list.length; i++)
            {
                if(divisors(list[i])){
                    newList.push(list[i]);
                }
                
            }
            return newList;
        }
        const list = [1, 2, 3, 4, 5];
        console.log(list);
        const NewList2 = filter(list, divisors);
        console.log(NewList2);
      });
    
    });