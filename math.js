function maximoComunDivisor(int1, int2) {
    while (int2) {
        const temp = int2;
        int2 = int1 % int2;
        int1 = temp;
    }
    return int1;
}

function comprobarPrimo(int){
    if (int <= 1) return true;

    for(let i = 2; i*i<=int; i++){
        if(int % i == 0){
            return false;
        }
    }
    return true;
}

module.exports = {maximoComunDivisor, comprobarPrimo};