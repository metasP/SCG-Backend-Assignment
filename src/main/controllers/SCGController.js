const SCGService = require('../services/SCGService')

exports.findNumberFromSequencePattern = async (req, res) => {
  const inputNumbers = req.query.input
  const result = SCGService.findNumberFromSequencePattern({ inputString: inputNumbers })
  res.send(result)
}

exports.searchPlace = async (req, res) => {
  try {
    const keyword = req.query.keyword
    const result = await SCGService.searchPlace({ keyword })
    res.send(result)
  } catch (err) {
    res.send(err)
  }

}
