module.exports = function (name) {
    const regResults = new RegExp("^[A-Z0-9 .-]+$");
    return regResults.test(name);
};
