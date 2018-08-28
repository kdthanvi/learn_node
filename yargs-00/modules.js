//modules.js

var add = (title, body) => {
    console.log("Adding notes: ", title, body);
}

var remove =  (title) => {
    console.log("Remove notes: ", title);
}

var read = (title) => {
    console.log("Reading notes: ", title);
}

var list = () => {
    console.log("Listing the notes...");
}

module.exports = {
    add,
    remove,
    read,
    list
}

