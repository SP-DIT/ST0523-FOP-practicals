function wrapper(a, b, c, message) {}

module.exports = wrapper;

// examples

console.log(wrapper('#', '%', '*', 'message')); // "###%%*message*%%###"
