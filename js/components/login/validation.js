
export function checkLenght(value, len) {
    if (value.trim().length > len) {
        return false;
    } else {
        return true;
    }
}

export function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
