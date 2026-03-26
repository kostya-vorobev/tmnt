// Export an array of 50 turtle names (including Leonardo)
const turtles = [];

// Ensure Leonardo is present
turtles.push("Leonardo");

// Add other named turtles and fill up to 50 entries
const baseNames = [
    "Raphael",
    "Donatello",
    "Michelangelo",
    "Splinter",
    "April",
    "Casey",
    "Bebop",
    "Rocksteady",
    "Shredder",
    "Baxter",
    "Karai",
    "Metalhead",
    "Mikey Jr",
    "Wingnut",
    "Honeycutt",
    "Foot Soldier",
    "Slash",
    "Leatherhead",
    "Alopex",
    "Bebop Jr"
];

let idx = 0;
while (turtles.length < 50) {
    const name = baseNames[idx % baseNames.length] + (Math.floor(idx / baseNames.length) === 0 ? "" : " " + (Math.floor(idx / baseNames.length) + 1));
    if (!turtles.includes(name)) {
        turtles.push(name);
    }
    idx++;
}

module.exports = turtles;