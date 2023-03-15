function receivesAFunction(callback){
    callback();
} 

function returnsANamedFunction() {
    return function helloWorld(){

    };
}

function returnsAnAnonymousFunction() {
    return () => {};
}


