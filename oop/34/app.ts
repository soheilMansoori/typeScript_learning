namespace Saipa {
  export let name = "saipa";
  export class Car {
    constructor(
      public name: string,
      public color: string,
      public brand: string
    ) {
      this.name = name;
      this.color = color;
      this.brand = brand;
    }

    make(): void {
      console.log(`${this.name} make and ready to run`);
    }
  }
}

const myCar = new Saipa.Car("pride", "white", "saipa");
console.log("myCar is => ", myCar);
