var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
  
function addChocolates(chocolates,color, count){
    
    if( count <=0)
    return "Number cannot be zero/negative";
    else
    for (var i=0;i<count;i++)
    {
    chocolates.unshift(color);
    }
}


//Progression 2: Remove ___ chocolates from the top the dispenser
  
function removeChocolates(chocolates,number)
{
    var array=[];
     if(number>chocolates.length)
     {
         return "Insufficient chocolates in the dispenser";
     }
     else if(number>0){
        for (var i=0;i<number;i++)
       {
        array[i]=chocolates.shift();
      
       }
       return array;
      }
     else 
     {
         return "Number cannot be zero/negative";
     }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    var array=[];
     if(number>chocolates.length)
     {
         return "Insufficient chocolates in the dispenser";
     }
     else if(number>0){
        for (var i=0;i<number;i++)
       {
        array[i]=chocolates.pop();
      
       }
       return array;
      }
     else 
     {
         return "Number cannot be zero/negative";
     }
}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color)
{
    var array=[];
     if(number>chocolates.length)
     {
         return "Insufficient chocolates in the dispenser";
     }
     else if(number>0){
        for (var i=0;i<number;i++)
       {
        array[i]=chocolates.pop();
      
       }
       return array;
      }
     else 
     {
         return "Number cannot be zero/negative";
     }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates,number, color)
{
    var array =["green","silver","blue","crimson","purple","red","pink"];
    
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let chocolatesObj = chocolates.reduce(function (sortedChoc, choc) {
        if (choc in sortedChoc) {
            sortedChoc[choc]++;
        } else {
            sortedChoc[choc] = 1;
        }
        return sortedChoc;
    }, {});
    let sortedArray = chocolates.sort((a, b) => {
        if (chocolatesObj[b] > chocolatesObj[a]) {
            return 1;
        }
        if (chocolatesObj[b] < chocolatesObj[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sortedArray;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {
    let chocChanged = 0;
    chocolates = chocolates.map((e) => {
        if (e == color) {
            chocChanged++;
            if (chocChanged <= number)
                return finalColor;
            else
                return e;
        } else {
            return e;
        }
    });
    return chocolates;
}



//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let changed = chocolates.map(e => (e == color) ? finalColor : e);
    let count = changed.reduce((acc, val) => acc += (val == finalColor) ? 1 : 0, 0);
    return [count, changed];
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
