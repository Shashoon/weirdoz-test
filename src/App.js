import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [matrix, setMatrix] = useState();
  const [sum, setSum] = useState();

  const initializeMatrix = (matrix, sum) => {
    setMatrix(matrix);
    setSum(sum);
  }

  const checkInsertion = (rowIndex, colIndex, value) => {
    const rowsNum = matrix.length, colsNum = matrix[0].length;
    var tempSum = 0;
    var i = 0, j = 0;

    //check row sum
    for (i = 0; i < colsNum; i++) {
      tempSum += matrix[rowIndex][i] ? matrix[rowIndex][i] : 0;

      if (tempSum + value > sum)
        return false
    }


    //check column sum
    for (i = 0, tempSum = 0; i < rowsNum; i++) {
      tempSum += matrix[i][colIndex] ? matrix[i][colIndex] : 0;

      if (tempSum + value > sum)
        return false
    }

    //check left diagonal
    for (i = rowIndex, j = colIndex, tempSum = 0; i >= 0 && j >= 0; i--, j--) {
      tempSum += matrix[i][j] ? matrix[i][j] : 0;
    }

    for (i = rowIndex, j = colIndex; i < rowsNum && j < colsNum; i++, j++) {
      tempSum += matrix[i][j] ? matrix[i][j] : 0;

      if (tempSum + value > sum)
        return false
    }

    //check right diagonal
    for (i = rowIndex, j = colIndex, tempSum = 0; i >= 0 && j < matrix[0].length; i--, j++) {
      tempSum += matrix[i][j] ? matrix[i][j] : 0;
    }

    for (i = rowIndex, j = colIndex; i < matrix.length && j >= 0; i++, j--) {
      tempSum += matrix[i][j] ? matrix[i][j] : 0;

      if (tempSum + value > sum)
        return false
    }


    return true
  }

  const handleInsertion = (rowIndex, colIndex) => {
    const tempMatrix = [...matrix];

    var input = parseInt(prompt('Enter number:'));

    if (checkInsertion(rowIndex, colIndex, input))
      tempMatrix[rowIndex][colIndex] = input;

    setMatrix(tempMatrix);
  }

  return (
    <div className="App">
      <div className="container">
        <div className='matrix'>
          {
            matrix && matrix.map((row, rowIndex) => {
              return (
                <div className='row' key={rowIndex}>
                  {
                    row.map((col, colIndex) => {
                      return (
                        <div key={rowIndex + '-' + colIndex}
                          id={'row-' + rowIndex + '-col-' + colIndex}
                          className='cell'
                          onClick={() => handleInsertion(rowIndex, colIndex)}
                        >
                          {col}
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <Form initializeMatrix={initializeMatrix} />
      </div>
    </div>
  );
}

export default App;
