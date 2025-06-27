//This file has (3) methods acts => Selection Sort => O(N^2)
//(selection sort algorithm) => find the smallest every time and swap its place


// FIRST==============================
export function selectionSort_1(arr): taskObj[] {
  // arr is [{id:5},{id:3},{id:2},{id:4},{id:1}]
  // output is 
  for (let i = 0; i < arr.length; i++) {
    let smallestInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].id < arr[smallestInd].id) {
        smallestInd = j;
      }
    }
    let temp = arr[i];
    // smallestInd = 4
    arr[i] = arr[smallestInd];
    arr[smallestInd] = temp;
  }
  console.log(arr);
  return arr; //[{id:1},{id:2},{id:3},{id:4},{id:5}]
}

// SECOND==============================
export function selectionSort(arr): taskObj[] {
  // arr is [{id:5},{id:3},{id:2},{id:4},{id:1}]
  const finalArr = [];
  let indexMove: number = 1;
  let smallest = { obj: arr[0], index: 0 };
  while (arr.length > 0) {
    //as long as there's element in the arr, the loop traverse inside
    if (smallest.obj.id > arr[indexMove].id) {
      smallest = { obj: arr[indexMove], index: indexMove };
    }
    const isLastStep = indexMove === arr.length - 1;
    if (isLastStep) {
      finalArr.push(smallest.obj);
      arr.splice(smallest.index, 1); //the array reduced
      indexMove = 0; //reset to loop again
      smallest = { obj: arr[0], index: 0 };
    } else {
      indexMove++;
    }
  }
  console.log(finalArr);
  return finalArr; //[{id:1},{id:2},{id:3},{id:4},{id:5}]
}

// THIRD==============================
export function selectionSort_3(arr): taskObj[] {
  // arr is [{id:5},{id:3},{id:2},{id:4},{id:1}]
  const finalArr: taskObj[] = [];
  for (let i = 0; i < arr.length; i++) {
    const { smallestObj, smallestIndex } = find_TheSmallest(arr);
    finalArr.push(smallestObj);
    arr.splice(smallestIndex, 1); //smallest obj got? Delete it from the arr
    --i; // no increase, because the array is reduced every time (start all loop again)
  }
  return finalArr; //[{id:1},{id:2},{id:3},{id:4},{id:5}]
}

function find_TheSmallest(arr) {
  let smallestObj = arr[0];
  let smallestIndex;
  for (let i = 0; i < arr.length; i++) {
    const isSmaller = smallestObj.id > arr[i].id;
    if (isSmaller) {
      smallestObj = arr[i];
      smallestIndex = i;
    }
  }
  return { smallestObj, smallestIndex }; // {smallestObj: {id:1}, smallestIndex: 4}
}
