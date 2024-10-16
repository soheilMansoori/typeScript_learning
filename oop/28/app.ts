// * 3

class Car {
  constructor(public name: string, public color: string, public model: number) {
    this.name = name;
    this.color = color;
    this.model = model;
  }

  drive(speed: number) {
    console.log(`${this.name} drive ${speed}(Km/h)`);
  }
}

class Truck extends Car {
  constructor(public name: string, public color: string, public model: number) {
    super(name, color, model);
  }

  load(weight: number) {
    console.log(`set ${weight}(Kg) load on ${this.name}`);
  }
}

const useCar = (car: Car | Truck) => {
  if (car instanceof Car) {
    // car.drive(100);
  } else if (car instanceof Truck) {
    // car.load(200);
  }
};

const pride = new Car("Pride", "Black", 1403);
const FH = new Truck("FH", "White", 2022);

// useCar(FH);
useCar(pride);
