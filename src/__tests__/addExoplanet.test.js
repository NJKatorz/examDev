const addExoplanet = require("../addExoplanet");

describe("addExoplanet tests suites", () => {
    it("should return false as the string is empty", () => {
        const result = addExoplanet("");
        expect(result).toBe(false);
    });

    it("should return false as the characters are not in uppercase", () => {
        const result = addExoplanet("trappist");
        expect(result).toBe(false);
    });

});
