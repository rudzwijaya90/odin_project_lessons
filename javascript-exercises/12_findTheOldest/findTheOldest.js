const findTheOldest = function(people) {
    let oldest = null; // Variable to keep track of the oldest person
    let maxAge = -1; // Initialize the maximum age
    const currentYear = new Date().getFullYear(); // Get the current year

    for (let i = 0; i < people.length; i++) {
        // Use yearOfDeath or currentYear if yearOfDeath is undefined
        const yearOfDeath = people[i].yearOfDeath !== undefined ? people[i].yearOfDeath : currentYear;
        const age = yearOfDeath - people[i].yearOfBirth; 

        // Check if this person is older than the current oldest
        if (age > maxAge) {
            maxAge = age; // Update maxAge
            oldest = people[i]; // Update oldest person
        }
    }

    return oldest; // Return the oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
