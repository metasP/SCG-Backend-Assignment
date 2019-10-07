const chai = require('chai')
const expect = chai.expect
const SCGService = require('../main/services/SCGService')

describe('SCG Service', () => {
  describe('findNumberFromSequencePattern', () => {
    it('should success on input X,5,9,15,23,Y,Z', async () => {
      let result = SCGService.findNumberFromSequencePattern({inputString: 'X,5,9,15,23,Y,Z'})
      expect(result.X).to.equal(3)
      expect(result.Y).to.equal(33)
      expect(result.Z).to.equal(45)
    })

    it('should success on input 3,5,9,15,X,Y,Z', async () => {
      let result = SCGService.findNumberFromSequencePattern({inputString: '3,5,9,15,X,Y,Z'})
      expect(result.X).to.equal(23)
      expect(result.Y).to.equal(33)
      expect(result.Z).to.equal(45)
    })

    it('should success on input X,5,9,15,23', async () => {
      let result = SCGService.findNumberFromSequencePattern({inputString: 'X,5,9,15,23'})
      expect(result.X).to.equal(3)
    })

    it('should success on input 3,5,9,15,X', async () => {
      let result = SCGService.findNumberFromSequencePattern({inputString: '3,5,9,15,X'})
      expect(result.X).to.equal(23)
    })

    it('should error on input X,Y,Z (get null)', async () => {
      let result = SCGService.findNumberFromSequencePattern({inputString: 'X,Y,Z'})
      expect(isNaN(result.X)).to.equal(true)
    })

  })
})
