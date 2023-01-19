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

    it("should return true as the characters are in uppercase", () => {
        const result = addExoplanet("TRAPPIST");
        expect(result).toBe(true);
    });

    it("should return true as there is a special character like '.'", () => {
        const result = addExoplanet("TRAP.PIST");
        expect(result).toBe(true);
    });

    it("should return true as there is a special character like '-'", () => {
        const result = addExoplanet("TRAP-PIST");
        expect(result).toBe(true);
    });


});
