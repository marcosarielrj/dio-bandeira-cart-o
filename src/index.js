function getCardFlag(cardNumber) {
    const cardPatterns = {
        Visa: /^4/,
        Mastercard: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/,
        Elo: /^(4011|4312|4389|4576|5041|5066|5090|6277|6362|6363|6504|6505|6506|6507|6508|6516|6550|6551|6552)/,
        Amex: /^3[47]/,
        Discover: /^(6011|65|64[4-9])/,
        Hipercard: /^6062/,
        JCB: /^(352[8-9]|35[3-8][0-9])/,
        Aura: /^50[0-9]{4}/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])/,
        UnionPay: /^(62|81)/
    };

    for (const [flag, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber.replace(/\s+/g, ''))) {
            return flag;
        }
    }

    return 'unknown';
}

// Exemplo de uso:
const cardNumber = '5077 7859 0858 6863';
const cardFlag = getCardFlag(cardNumber);
console.log(`A bandeira do cartão é: ${cardFlag}`);