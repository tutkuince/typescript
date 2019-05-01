interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

function save(product: Product) {
    console.log(product.name + " saved!");
}

save({id:1, name: 'MSI Laptop', unitPrice: 5000});


interface ProductService {
    save();
}

class ProductServiceImpl implements ProductService {
    save() {
        console.log("Saved!");
    }
}