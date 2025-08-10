const { maximoComunDivisor, comprobarPrimo } = require('./math');

describe('Pruebas de la funcion para encontrar el maximo comun divisor entre dos numeros', () => { 
        test('El maximo comun divisor entre 48 y 18 debe dar 6', () => {
            expect(maximoComunDivisor(48, 18)).toBe(6);
        });
        
        test('El maximo comun divisor 10 y 6 debe dar 2', () => {
            expect(maximoComunDivisor(10, 6)).toBe(2);
        });
    }
);

describe('Pruebas de la funcion para comprobar si un numero es primo', () => { 
        test('La comprobación de primo de 4 debe ser verdadero', () => {
            expect(comprobarPrimo(4)).toBe(true);
        });
        
        test('La comprobación de primo de 17 debe ser verdadero', () => {
            expect(comprobarPrimo(17)).toBe(true);
        });
    }
);
