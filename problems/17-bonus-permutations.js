/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  if (array.length === 0) {
    return []
  }
  if(array.length === 1) {
    return [array]
  }

  let perm = []
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let remainingNums = array.slice(0, i).concat(array.slice(i + 1))
    let permuted = permutations(remainingNums)

    for (let j = 0; j < permuted.length; j++) {
      let permArr = [num].concat(permuted[j])
      perm.push(permArr)
      
    }
  }
  return perm
};

console.log(permutations([1, 2, 3]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
