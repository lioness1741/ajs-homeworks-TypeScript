import Buyable from '../domain/buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get sum(): number {
        const result = this._items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        return result;
    }

    sumDiscount(discount: number) {
        return this.sum - discount;
    }

    remove(id: number): void {
        this._items = this._items.filter((el: Buyable) => el.id !== id);
    }
}