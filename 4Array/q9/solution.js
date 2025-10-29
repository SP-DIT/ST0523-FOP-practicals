function isConstant(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[0]) {
            return false;
        }
    }
    return true;
}

function isAscending(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) {
            return false;
        }
    }
    return true;
}

function isDescending(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[i - 1]) {
            return false;
        }
    }
    return true;
}

function isNonDescending(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

function isNonAscending(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            return false;
        }
    }
    return true;
}

function checkArray(array) {
    // Check patterns in order of specificity
    // More specific patterns should be checked first
    
    if (isConstant(array)) {
        return 'Constant';
    }
    
    if (isAscending(array)) {
        return 'Ascending';
    }
    
    if (isDescending(array)) {
        return 'Descending';
    }
    
    if (isNonDescending(array)) {
        return 'Non-descending';
    }
    
    if (isNonAscending(array)) {
        return 'Non-ascending';
    }
    
    return 'Unsorted';
}

module.exports = checkArray;