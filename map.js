
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("mymap").addEventListener("click", function() {
    
    //returns the square of given number
    function makeSquare(n){
        return n*n;
    }

    function map(list, makeSquare) {
        const newList = [];
        for(let i=0; i<list.length; i++)
        {
            newList.push(makeSquare(list[i]));
        }
        return newList;
    }
    const list = [1, 2, 3, 4, 5];
    console.log(list);

    const NewList = map(list, makeSquare);
    console.log(NewList);
  });

});