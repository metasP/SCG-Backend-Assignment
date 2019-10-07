# SCG-Backend-Assignment
Backend Assignment for SCG

## Install 
```
$ npm install
```

### Running the service
```
$ node app.js
Or
$ npm run dev
```

## Running the tests
```
$ npm run test
```

## Functions
Function for finding X, Y, Z value from _'X, 5, 9, 15, 23, Y, Z'_
[/src/main/service/SCGService.js](https://github.com/metasP/SCG-Backend-Assignment/blob/develop/src/main/services/SCGService.js)
```
/**
 * @api {get} /scg/find_number_from_sequence_pattern
 * @apiVersion 0.0.1
 * @apiName find number from sequence pattern
 * @apiGroup User
 *
 * @apiParam {Text} input           ex: 'X,5,9,15,23,Y,Z' or '3,5,9,15,X,Y,Z'
 *
 * result format: {"X":3,"Y":33,"Z":45}
 */
```

Search place(restaurants) in Bangsue from Google Place API
```
/**
 * @api {get} /place/search
 * @apiVersion 0.0.1
 * @apiName search place(restaurants) in Bangsue from Google Place API
 * @apiGroup Place
 *
 * @apiParam {Text} keyword          
 */
```
## Authors

* **Metas Phongmetha**
