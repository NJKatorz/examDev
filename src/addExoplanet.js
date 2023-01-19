module.exports = function (name) {
        const regResults = new RegExp("^[A-Z]+$");
        if (regResults.test(name))
            return true;
        return false;
};
