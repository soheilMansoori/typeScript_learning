interface Car {
  compony: string;
  color: string;
  year: number;
  model: string;
  drive(speed: number): void;
  stop(): void;
}

interface Peugeot extends Car {
  passengers: number;
}

let Peugeot206: Peugeot;
Peugeot206 = {
  compony: "peugeot",
  color: "white",
  year: 95,
  model: "206",
  passengers: 4,
  drive(speed) {
    console.log(`${this.model} Drive ${speed} KM/H`);
  },
  stop() {
    console.log(`${this.model} Stop Drive`);
  },
};
