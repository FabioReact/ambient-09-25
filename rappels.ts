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
