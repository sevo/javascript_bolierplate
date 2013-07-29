define(["../src/scripts/two"], function (two) {
    describe ("multiply", function(){
        it ("should correctly multiply two numbers", function(){
            expect(two.multiply(4,5)).toBe(20);
        });
    });

    return {
        name: "modulespec"
    }
});