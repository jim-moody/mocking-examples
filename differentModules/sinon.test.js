const sinon = require("sinon");
// require the module that needs to be mocked
const moduleToMock = require("./moduleToMock");
// set up how you want your mock function to behave
const mockAddFunction = (a, b) => a - b;
// set up the sinon stub
sinon.stub(moduleToMock, 'add').callsFake(mockAddFunction);
// require the function you want to actually test
// needs to be required after the stub happens
const { sum } = require("./moduleToTest");
// write your test
describe("mock sum using Sinon", () => {
  it("should multiply two numbers when mocked", () => {
    expect(sum(3, 2)).toBe(1);
  });
});
