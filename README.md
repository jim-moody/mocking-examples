# Stubbing/Mocking

This repository shows examples of mocking a function using Jest vs using Sinon.

The use case is you have some `functionA` that calls `functionB` and you want to mock out `functionB` while testing `functionA`.

Jest and Sinon both support this but there are a couple caveats.

## Caveat #1

Jest (to the best of my knowledge) does not support mocking a single function in a module without also mocking all other functions in the module.

So for example, if the module containing `functionB` had some other functions, they will become mocked when you mock `functionB`.

### Example

```js
// moduleA.js
const functionA = () => 1
const functionB = () => 2

// moduleB.js
const functionC = () => {
  let a = functionA()
  let b = functionB()

  return a + b;
}

// moduleB.test.js
jest.mock('./moduleA');
const moduleA = require('./moduleA')
const moduleB = require('./moduleB');

moduleA.functionA.mockImplementation(() => 0)

console.log(funcB()) // returns undefined
```

## Caveat #2
