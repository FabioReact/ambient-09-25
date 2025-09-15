// Spread Operator
const user = {
    name: 'John',
    age: 30,
    isMarried: false,
    allergies: ['peanuts', 'eggs'],
};

const updatedUser = {
    ...user,
    // name: user.name,
    // age: user.age,
    // allergies: user.allergies,
    isMarried: true,
};

console.log(updatedUser);

// const name = user.name;
// const age = user.age;
// const allergies = user.allergies;
const { name, age, allergies } = user;

const color = [255, 0, 255];
// const red = color[0];
// const green = color[1];
// const blue = color[2];
const [red, green, blue] = color;
const colorWithAlpha = [...color, 0.5];
