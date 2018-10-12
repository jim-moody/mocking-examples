// here we tell jest to mock the entire math module
// as far as i know there is no way to mock a single function from a
// module using Jest
jest.mock("./moduleToMock");
const moduleToMock = require("./moduleToMock");

// require the function you want to actually test
const { sum } = require("./moduleToTest");

// set up how you want your mock function to behave
const mockAddFunction = (a, b) => {
  return a * b;
};

moduleToMock.add.mockImplementation(mockAddFunction);

describe("mock sum using Jest", () => {
  it("should multiply two numbers when mocked", () => {
    expect(sum(3, 2)).toBe(6);
  });
});
