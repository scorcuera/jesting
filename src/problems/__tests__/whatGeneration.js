import { whatGeneration } from '../whatGeneration';

describe('whatGeneration function', () => {
    test('should return \'Generation X\' if year of birth is 1968', () => {
        expect(whatGeneration(1968)).toBe('Generation X')
    });
    
    test('...', () => {
        expect(whatGeneration(1989)).toBe('Millennial');
    });
    
    test('should return \'Generation Z\' if year of birth is 2002', () => {
        
    });
});
