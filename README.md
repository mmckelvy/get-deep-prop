# get-deep-prop
Gets the value for a deeply nested objects and arrays.

## Example
```
const getDeepProp = require('get-deep-prop')

const obj = {
  order: {
    number: 123,
    items: [
      {
        sku: 1,
        description: 'shirt',
      },
      {
        sku: 2,
        description: 'pants'
      }
    ]
  }
}

getDeepProp(obj, ['order', 'items', 1, 'description'])
console.log(obj.order.items[1].description) // 'pants'

```

See test/get-deep-prop.test.js for more examples.

## Installation
```
npm install --save get-deep-prop
```

## API
```
setDeepProp(obj, path, value)
@param {object} obj -- A deeply nested object
@param {array} path -- The path to the object as an array. Ex: ['topkey', 'nextkey', 0, 'nestedKey']

@return {any} -- The value of the prop.
```

## Test
```
npm test
```

## License
MIT
