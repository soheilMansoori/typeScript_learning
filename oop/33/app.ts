let car = "pride";
// let car = "206"; // error

namespace IranKhodro {
  export let car = "Pars";
  export class Body {
    constructor(public name: string, public color: string) {
      this.name = name;
      this.color = color;
    }

    make(): void {
      console.log(`${this.name} Created Successfully`);
    }
  }
}

namespace Saipa {
  export let car = "pride";
}

console.log(IranKhodro.car);
console.log(Saipa.car);

let Pars = new IranKhodro.Body("TU5", "red");
Pars.make();
