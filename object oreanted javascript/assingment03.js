class Temperature{

    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    get getCelsius(){
        return this.celsius;
    }

    get getFahrenheit(){
        return this.fahrenheit;
    }

    set setCelsius(value){
        if(typeof value === 'number'){
            this.celsius = value;
            this.fahrenheit = (value * (9/5))+32;
            
        }else{
            console.log("Invalid Input !,Enter Numeric Value");
        }
    }

    set setFahrenheit(value){
        if(typeof value === 'number'){
            this.fahrenheit = value;
            this.celsius = (this.fahrenheit-32)*(5/9);
        }
        else{
            console.log("Invalid Input !,Enter Numeric Value");
        }
    }
}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius} C`);
console.log(`Initial Celsius: ${temperature.getFahrenheit} F`);

temperature.setCelsius = 25;

console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);

temperature.setFahrenheit = 68;

console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);