export class ProductsService {
    static #instance;
    constructor() {
        if (!ProductsService.#instance) ProductsService.#instance = this;
        return ProductsService.#instance;
    }

    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('api/products.json')).json();
        }
        return this.products;
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }
}
