const SCGService = require('../services/SCGService')

exports.findNumberFromSequencePattern = async (req, res) => {
  const inputNumbers = req.query.input
  const result = SCGService.findNumberFromSequencePattern({inputString: inputNumbers})
  res.send(result)
}
