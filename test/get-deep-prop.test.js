const test = require('tape')

const getDeepProp = require('../get-deep-prop')

test('getDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }


  t.equal(
    getDeepProp(obj, ['order', 'customer', 'name']),
    'John Smith',
    'Should get a deeply nested object'
  )

  t.end()
})

test('getDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }


  t.equal(
    getDeepProp(obj, ['order', 'items', 0, 'fruit']),
    'apple',
    'Should work with objects nested in arrays'
  )

  t.end()
})

test('getDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        {
          fruit: 'apple',
          color: 'red',
          regions: [
            {
              state: 'Washington',
              city: 'Redmond'
            },
            {
              state: 'Maine',
              city: 'Portland'
            }
          ]
        },
        {
          fruit: 'grape',
          color: 'purple',
          regions: [
            {
              state: 'California',
              city: 'Sonoma'
            },
            {
              state: 'Oregon',
              city: 'Willamette'
            }
          ]
        }
      ]
    }
  }


  t.equal(
    getDeepProp(obj, ['order', 'items', 1, 'regions', 1, 'state']),
    'Oregon',
    'Should work for objects nested in arrays'
  )

  t.end()
})

test('getDeepProp', function(t) {
  const obj = {
    order: {
      number: 243,
      customer: {
        name: 'John Smith',
        email: 'j@smith.com',
        city: 'LA'
      },
      items: [
        'apple',
        'pear',
        'banana'
      ]
    }
  }


  t.equal(
    getDeepProp(obj, ['order', 'items', 1]),
    'pear',
    'Should work for array props'
  )

  t.end()
})
