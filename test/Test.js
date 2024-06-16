export const determineResult = (v, p, k) => {
    if (v > 14 && p < 13 && p > k) {
        return "Vatha Pitha";
    } else if (v > 14 && k < 13 && k > p) {
        return "Vatha Kapha";
    } else if (p > 14 && v < 13 && v > k) {
        return "Pitha Vatha";
    } else if (p > 14 && k < 13 && k > v) {
        return "Pitha Kapha";
    } else if (k > 14 && p < 13 && p > v) {
        return "Kapha Pitha";
    } else if (k > 14 && v < 13 && v > p) {
        return "Kapha Vatha";
    } else if (k <= 12 && v === p) {
        return "Vatha Pitha";
    } else if (p <= 12 && v === k) {
        return "Vatha Kapha";
    } else if (v <= 12 && p === k) {
        return "Pitha Kapha";
    } else if (
        (k === 14 && p === 13 && v === 13) ||
        (p === 14 && k === 13 && v === 13) ||
        (v === 14 && p === 13 && k === 13)
    ) {
        return "Thridosha";
    }
};
