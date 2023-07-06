
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myforEach").addEventListener("click", function() {
        
        //callback function for forEach
        //for each element it prints a message
        function printLine(n)
        {
            console.log("Current element is "+ n);
        }
        function forEach(list, printLine)
        {
            for(let i=0; i<list.length; i++)
            {
                printLine(list[i]);
            }
        }
        const list = [1, 2, 3, 4, 5];
        console.log(list);
        forEach(list, printLine);
      });
    
    });