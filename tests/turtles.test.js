const turtles = require("../src/turtles");

function testTurtlesCount() {
    if (turtles.length !== 51) {
        throw new Error("Test failed: incorrect number of turtles");
    }
}

function testLeonardoExists() {
    if (!turtles.includes("Leonardo")) {
        throw new Error("Test failed: Leonardo missing");
    }
}

testTurtlesCount();
testLeonardoExists();

console.log("All tests passed");