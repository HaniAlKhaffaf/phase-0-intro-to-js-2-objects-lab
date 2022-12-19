// Write your solution in this file!
 
let employee = {
    name : "Hani",
    streetAdress : "suli"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newObject = {...obj};
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
