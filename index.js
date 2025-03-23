let cats = ['Milo', 'Otis', 'Garfield'];

// Destructive append: Adds a cat to the end of the array and modifies the original array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Destructive prepend: Adds a cat to the beginning of the array and modifies the original array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Destructive remove last: Removes the last cat from the array and modifies the original array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Destructive remove first: Removes the first cat from the array and modifies the original array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Append cat (returns a new array): Adds a cat to the end without modifying the original array
function appendCat(name) {
    return [...cats, name];
}

// Prepend cat (returns a new array): Adds a cat to the beginning without modifying the original array
function prependCat(name) {
    return [name, ...cats];
}

// Remove last cat (returns a new array): Removes the last cat without modifying the original array
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Remove first cat (returns a new array): Removes the first cat without modifying the original array
function removeFirstCat() {
    return cats.slice(1);
}
