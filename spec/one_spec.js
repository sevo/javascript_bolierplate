define(["../src/scripts/one"], function (one) {
    describe ("add", function(){
        it ("should correctly add two numbers", function(){
            expect(one.add(2,3)).toBe(5);
        });
    });
});