function fullName (firstName, secondName) {
    console.log(`${firstName} ${secondName}`)
}

let firstName = "Tamba";
const secondName = "Barquoi";
fullName(firstName, secondName)

fullName = function (firstName, secondName) {
    console.log(`${firstName} ${secondName}`)
};

fullName(firstName, secondName);

function nameChange (name) {
    firstName = name
}

nameChange("Grace")

console.log(firstName)

fullName = (firstName, secondName) => {console.log(`${firstName} ${secondName}`)}

fullName(firstName, secondName)

document.TEXT_NODE = fullName(firstName, secondName)