class SearchSuggestionSystem {
    constructor(products) {
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = '';
        for (const char of searchWord) {
            prefix += char;
            const matchedProducts = [];
            for (const product of this.products) {
                if (product.startsWith(prefix)) {
                    matchedProducts.push(product);
                    if (matchedProducts.length === 3) {
                        break;
                    }
                }
            }
            suggestions.push(matchedProducts);
        }
        return suggestions;
    }
}
