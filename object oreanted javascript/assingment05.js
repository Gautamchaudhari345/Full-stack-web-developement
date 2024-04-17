class Product{
    constructor(name,category,price,stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}

class Inventory{
    constructor() {

        this.inventory = [];

    }

    deleteProduct(ProductName){
        let index=0;
        for(let product of this.inventory){
            
            if(product.name === ProductName){
                this.inventory.splice(index,1);
                console.log(`Deleted ${ProductName} from the inventory.`);
                break;
            }
            index++;
        }

    }
}
//Extending Inventory Prototype:-
Inventory.prototype.addProduct = function(product){

    if(product instanceof Product){            
        this.inventory.push(product);
        console.log(`Added ${product.name} to the inventory`);
    }
    else{
        console.log("Invalid Input lease Enter A Valid Product");
    }

}

const inventory = new Inventory();

const product1 = new Product("Laptop","Electronics",899,10);
const product2 = new Product("Book","Books",20,50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop');







