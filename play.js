function PrintHello(){
    console.log('welcome to javascript basics...');
}


function PrintArray(){
  
    let data = ['apple','mango','orange'];
    console.table(data);
    
}

function SumofArray()
{
    try {
        let numbers = [1,2,3,4,5,6,7,8,9,10];
        console.log(numbers.reduce((previous,current)=>{
            return previous+current;
        }))
    } catch (error) {
        console.log(error);
    }
}

function ConcatArray(){
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];

    const array3 = array1.concat(array2); // merge 2 array
    const array4 = [...array1,...array2]; // spread operator

    console.log(array3);
    console.log(array4);

    array1.push('100');
    console.log(array1);
}