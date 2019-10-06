const express = require('express')
const router = express.Router()
const SCGController = require('../controllers/SCGController')

/**
 * @api {get} /find_number_from_sequence_pattern
 * @apiVersion 0.0.1
 * @apiName fine number from sequence pattern
 * @apiGroup User
 *
 * @apiParam {Text} input           ex: 'X,5,9,15,23,Y,Z' or '3,5,9,15,X,Y,Z'
 *
 * result format: {"X":3,"Y":33,"Z":45}
 */

router.get('/find_number_from_sequence_pattern', SCGController.findNumberFromSequencePattern)

module.exports = router
