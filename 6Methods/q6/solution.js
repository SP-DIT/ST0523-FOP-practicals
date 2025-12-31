function createShop(items) {
    return {
        buyItem(itemName, quantity) {
            for (let item of items) {
                if (item.name === itemName) {
                    if (item.quantity >= quantity) {
                        item.quantity -= quantity;
                        return item.price * quantity;
                    } else {
                        return `Insufficient stock for ${itemName}`;
                    }
                }
            }
            return `Insufficient stock for ${itemName}`;
        },
        getAvailableItemList() {
            return items.filter((item) => item.quantity > 0);
        },
    };
}

module.exports = createShop;
