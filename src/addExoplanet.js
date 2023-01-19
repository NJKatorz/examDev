module.exports = function (name) {
        const regResults = new RegExp("^[A-Z0-9 .-]+$");
        if (regResults.test(name))
            return true;
        return false;
};
