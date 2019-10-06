const memoize = require('memoizee')
const _ = require('underscore')

let input = 'X,5,9,15,23,Y,Z' // for test
/*
  5,  9,  15, 23
    4,  6,  8
      2,  2   <---  2 is a constance

  ref-> https://stackoverflow.com/questions/2465196/algorithm-to-find-the-next-number-in-a-sequence
 */
findNumberFromSequencePattern = ({inputString}) => {
  if (!inputString) return {}
  let numberArray = inputString.split(',')
  let needToFind = []
  let tempArray = []
  let rawSequence = []
  let tempRawSequence = []
  let startIndex = null
  let tempStartIndex = null
  let endIndex = null
  let tempEndIndex = null
  for(let i = 0; i < numberArray.length; i++) {
    let number = numberArray[i]
    if (isNaN(+number) || (rawSequence.length < 1 && i === numberArray.length-1)) {
      let object = Object.assign({}, {char: number, index: i})
      needToFind.push(object)
      if (rawSequence.length < tempRawSequence.length) {
        rawSequence = tempRawSequence
        tempRawSequence = []
        startIndex = tempStartIndex
        tempStartIndex = null
        endIndex = tempEndIndex
        tempEndIndex = null
      }
    } else {
      if (!tempStartIndex) {
        tempStartIndex = i
      }
      tempEndIndex = i
      tempRawSequence.push(+number)
    }
  }
  tempArray.push(rawSequence)
  let result = {}
  for (let obj of needToFind) {
    let indexToFind = obj.index
    let constance = findSequenceConstance({arrayOfArraySequence: tempArray})
    if (indexToFind < startIndex) {
      result[obj.char] = findPreviousNumber({arrayOfArraySequence: tempArray, constance})
    } else {
      result[obj.char] = findNextNumber({arrayOfArraySequence: tempArray, constance})
    }
    rawSequence.splice(indexToFind, 0, result[obj.char])
    tempArray = []
    tempArray.push(rawSequence)
  }
  return result
}

findSequenceConstance = ({arrayOfArraySequence}) => {
  let currentSequenceRow = 0
  let tempArray = arrayOfArraySequence
  while(true) {
    let sequence = tempArray[currentSequenceRow]
    if (sequence.length < 1) break
    let nextSequenceRow = []
    for (let i = 0; i < sequence.length; i++) {
      // to make sure that we have next number
      if (i + 1 < sequence.length) {
        let number1 = +sequence[i]
        let number2 = +sequence[i + 1]
        nextSequenceRow.push(number2 - number1)
      } else {
        // do nothing
      }
    }

    if (nextSequenceRow.length > 0 && _.uniq(nextSequenceRow).length === 1) {
      return _.first(nextSequenceRow) // <- this is constance of sequence
    } else {
      tempArray.push(nextSequenceRow)
      currentSequenceRow += 1
    }
  }
}

findNextNumber = ({arrayOfArraySequence, constance}) => {
  let currentSequenceRow = arrayOfArraySequence.length - 1
  let _constance = constance
  while(true) {
    let currentSequence = arrayOfArraySequence[currentSequenceRow]
    _constance = +currentSequence[currentSequence.length-1] + _constance
    if (currentSequenceRow === 0) {
      return +_constance
    } else {
      currentSequenceRow -= 1
    }
  }
}

findPreviousNumber = ({arrayOfArraySequence, constance}) => {
  let currentSequenceRow = arrayOfArraySequence.length - 1
  let _constance = constance
  while(true) {
    let currentSequence = arrayOfArraySequence[currentSequenceRow]
    _constance = +currentSequence[0] - _constance
    if (currentSequenceRow === 0) {
      return +_constance
    } else {
      currentSequenceRow -= 1
    }
  }
}

const SCGService = {
  findNumberFromSequencePattern: memoize(findNumberFromSequencePattern),
}

module.exports = SCGService
