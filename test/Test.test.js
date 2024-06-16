import { describe, it, expect } from 'vitest'
import { determineResult } from './Test';

describe('determineResult', () => {
    it('returns "Vatha Pitha" when Vatha > 14, Pitha < 13, and Pitha > Kapha', () => {
        expect(determineResult(15, 12, 10)).toBe('Vatha Pitha');
    });

    it('returns "Vatha Kapha" when Vatha > 14, Kapha < 13, and Kapha > Pitha', () => {
        expect(determineResult(15, 10, 12)).toBe('Vatha Kapha');
    });

    it('returns "Pitha Vatha" when Pitha > 14, Vatha < 13, and Vatha > Kapha', () => {
        expect(determineResult(12, 15, 10)).toBe('Pitha Vatha');
    });

    it('returns "Pitha Kapha" when Pitha > 14, Kapha < 13, and Kapha > Vatha', () => {
        expect(determineResult(10, 15, 12)).toBe('Pitha Kapha');
    });

    it('returns "Kapha Pitha" when Kapha > 14, Pitha < 13, and Pitha > Vatha', () => {
        expect(determineResult(10, 12, 15)).toBe('Kapha Pitha');
    });

    it('returns "Kapha Vatha" when Kapha > 14, Vatha < 13, and Vatha > Pitha', () => {
        expect(determineResult(12, 10, 15)).toBe('Kapha Vatha');
    });

    it('returns "Vatha Pitha" when Kapha <= 12 and Vatha == Pitha', () => {
        expect(determineResult(12, 12, 10)).toBe('Vatha Pitha');
    });

    it('returns "Vatha Kapha" when Pitha <= 12 and Vatha == Kapha', () => {
        expect(determineResult(12, 10, 12)).toBe('Vatha Kapha');
    });

    it('returns "Pitha Kapha" when Vatha <= 12 and Pitha == Kapha', () => {
        expect(determineResult(10, 12, 12)).toBe('Pitha Kapha');
    });

    it('returns "Thridosha" when Vatha, Pitha, and Kapha are in specific conditions', () => {
        expect(determineResult(14, 13, 13)).toBe('Thridosha');
        expect(determineResult(13, 14, 13)).toBe('Thridosha');
        expect(determineResult(13, 13, 14)).toBe('Thridosha');
    });

});
