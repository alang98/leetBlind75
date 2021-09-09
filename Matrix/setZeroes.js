/*
Given an m x n integer matrix matrix, if an element is 0,
set its entire row and column to 0's, and return the matrix.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

*/

// we want to iterate across the matrix
  // iterate across each item in the matrix
    //if an individual value in an item is equal to 0
     //call a helper function that will mark all the values in the current row as null
     //and the values in the same column as null

// iterate over across the matrix again
  // iterate across each item again
    // if an individual value is equal to null
      //set the value equal to 0


// create a helper function that takes in the matrix, the row and the column as args
  // check the row
    // iterate over the current row
      //if the individual values in the row are not equal to 0 mark the values = null

   // iterate over the matrix
     // if the column with the of our current index is not equal to 0, the value = null

const setZeroes = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        markAsNull(matrix, i, j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix;
}

const markAsNull = (matrix, row, col) => {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[row][j] !== 0) {
      matrix[row][j] = null;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] !== 0) {
        matrix[i][col] = null;
      }
    }
  }
}


console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
