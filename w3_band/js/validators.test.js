import { validateEmail, calculatePrice,} from './validators.js';

describe('Ticket utils', () => {
    test('should return true for valid quantities', () => {
        expect(isValidQuantity('1')).toBe(true);
        expect(isValidQuantity('5')).toBe(true);
        expect(isValidQuantity('10')).toBe(true);
        expect(isValidQuantity(1)).toBe(true);
        expect(isValidQuantity(10)).toBe(true);
    });

    test('should return false for invalid quantities', () => {
        expect(isValidQuantity('0')).toBe(false);
        expect(isValidQuantity('-1')).toBe(false);
        expect(isValidQuantity('11')).toBe(false);
        expect(isValidQuantity('abc')).toBe(false);
        expect(isValidQuantity('')).toBe(false);
        expect(isValidQuantity('1.5')).toBe(false);
    });

    test('should handle edge cases', () => {
        expect(isValidQuantity(null)).toBe(false);
        expect(isValidQuantity(undefined)).toBe(false);
        expect(isValidQuantity('   ')).toBe(false);
    });

    test('should return true for valid emails', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.co.uk')).toBe(true);
        expect(validateEmail('user+tag@example.org')).toBe(true);
        expect(validateEmail('123@456.com')).toBe(true);
    });

    test('should return false for invalid emails', () => {
        expect(isValidEmail('invalid-email')).toBe(false);
        expect(isValidEmail('test@')).toBe(false);
        expect(isValidEmail('@domain.com')).toBe(false);
        expect(isValidEmail('test@domain')).toBe(false);
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail('   ')).toBe(false);
    });

    test('should calculate correct price', () => {
        expect(calculatePrice('1')).toBe(15);
        expect(calculatePrice('5')).toBe(75);
        expect(calculatePrice('10')).toBe(150);
        expect(calculatePrice(2)).toBe(30);
    });

    test('should handle edge cases', () => {
        expect(calculatePrice('0')).toBe(0);
        expect(calculatePrice('-1')).toBe(-15);
        expect(calculatePrice('abc')).toBe(NaN);
    });

});

