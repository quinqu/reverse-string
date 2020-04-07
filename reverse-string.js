//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {

  const array = string.split("");
  for(let i = 0; i < string.length/2; i++){
    let temp = array[i];
    array[i] = array[string.length- i -1];
    array[string.length - i -1] = temp;
  }

  string = array.join("");

  return string;

};
