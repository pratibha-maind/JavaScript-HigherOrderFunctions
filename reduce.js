
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myreduce").addEventListener("click", function() {
        //callback function for reduce
        //it adds the current element to previous sum
        function sum(n, sum)
        {
            return (n+sum);
        }
        function reduce(list, sum)
        {
            let summation=0;
            for(let i=0; i<list.length; i++)
            {
                summation = sum(list[i], summation);
            }
            return summation;
        }

        const list = [1, 2, 3, 4, 5];
        console.log(list);
        let summation = reduce(list, sum);
        console.log(summation);
      });
    
    });