function EvenCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }
    console.log("Count of even numbers is "+count);
  }

  const numbers = [21,55,23,76,14];
  EvenCount(numbers);   