const timeWord = require('./timeWord');

describe('timeWords', () => {
    it('converts 08:45 to "Eight Forty Five AM"', () => {
        const result = timeToWords('08:45');
        expect(result).toBe('Eight Forty Five AM');
    });

    it('converts 15:30 to "Three Thirty PM"', () => {
        const result = timeToWords('15:30');
        expect(result).toBe('Three Thirty PM');
    });

    // Add more test cases as needed
});
