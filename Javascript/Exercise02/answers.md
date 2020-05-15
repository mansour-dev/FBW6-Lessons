## The Assignments Answer
![enter image description here](https://media.giphy.com/media/ukMiDlCmdv2og/giphy.gif)

1- 
  ```javascript
const isArray1 = [4, 8, 9];
const isArray2 = [2, 6, 8];
const array3 = [];
function combineArray(array1, array2) {
    for (let i=0; i<array1.length; i+=1){
        array3.push(array1[i]);
    }
    for (let i=0; i<array2.length; i+=1){
        array3.push(array2[i]);
    }
    return array3;
}
  console.log('result:', combineArray(isArray1, isArray2));

  ```
  2-
  ```javascript
  const arr = ["cat", "rabbit", "penguin", "test"];
function index(arr) {
    const a = arr.length-1;
    console.log(arr[a]);
}
index(arr);
  ```