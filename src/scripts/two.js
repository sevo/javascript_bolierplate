define(["one"], function(one) {
    var multiply = function(a,b){
        var result = 0;
        for(var i = 0;i<b;i++){
            result=one.add(result, a);
        }
        return result;
    };

    return {multiply: multiply};
});