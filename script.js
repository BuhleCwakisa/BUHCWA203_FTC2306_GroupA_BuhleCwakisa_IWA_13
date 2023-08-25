let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
    const isString = typeof calculated === 'string'; // Corrected the assignment operator
    const calculatedAsNumber = isString ? parseInt(calculated) : parseFloat(calculated); // Corrected the function name and added parseFloat for decimal values
    calculated = calculatedAsNumber + 1; // Corrected the comparison operator
};



const calcUser = () => {
    logCalc(); // Corrected the missing function call parentheses
    if (calculated > 2) user = 'John';
    if (calculated > 2) state = 'requesting';
    if (calculated > 3) state = 'idle';
};

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
