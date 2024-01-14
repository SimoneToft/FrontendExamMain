import React from "react";

const HigherOrder = () => {
  let arr = [4, 1, -20, -7, 5, 9, -6];

  /* Higher order function that takes an array and a callback function
     It iterates through each element in the array and uses the callback 
     function to decide whether to include the element in the new array*/
     
  function removeNumbers(arr, callback) {
    let newArr = [];
    for (const x of arr) {
        if (callback(x)) {
            newArr.push(x);
          }
    }
    return newArr;
  }

  // Higher order function that returns a callback function
  function getNewNumbers(arr, callback) {
    return removeNumbers(arr, callback);
  }

  return (
    <>
      <div>
        <h1>Higher Order and callbacks</h1>
        <p>Remove negative numbers</p>
        <p>{removeNumbers(arr, (x) => x >= 0)}</p>

        <p>Remove postive numbers</p>
        <p>{removeNumbers(arr, (x) => x < 0)}</p>
        <button
          onClick={() =>
            console.log(getNewNumbers(arr, (x) => x < 0))
          }
        ></button>
      </div>
    </>
  );
};

export default HigherOrder;
