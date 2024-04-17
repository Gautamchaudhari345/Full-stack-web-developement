const productDetails = {
    name : "Apple 2020 MacBook Air Laptop",
    price : 82000,
    color : "Grey",
    hardDisk : "256 GB"
};

function showProductDetails(){

    console.log(`
    Below are the product details.\n
    name: ${this.name}
    price : ${this.price.toLocaleString('en-IN')}
    color : ${this.color}
    hardDisk: ${this.hardDisk}
    `);
}

showProductDetails.call(productDetails);