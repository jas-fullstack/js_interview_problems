let arr = [10,29,19,80,70,32];
arr.sort();
let firstLargest = arr[arr.length-1];
let secLargest = 0;
for(i=0; i < arr.length;i++)
{
    if(arr[i] > secLargest &&  arr[i] != firstLargest)
    {
        secLargest = arr[i];
    }
}
console.log(secLargest) //70