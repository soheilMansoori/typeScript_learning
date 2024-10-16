interface Car {
  compony: string;
  color: string;
  year: number;
  model: string;
  drive(speed: number): void;
  stop(): void;
}

class PeugeotTU5 implements Car {
  constructor(
    public compony: string,
    public color: string,
    public year: number,
    public model: string
  ) {
    this.compony = compony;
    this.color = color;
    this.year = year;
    this.model = model;
  }
  drive(speed: number): void {
    console.log(`${this.model} Drive ${speed} KM/H`);
  }
  stop(): void {
    console.log(`${this.model} Stop Drive`);
  }
}

const TU5 = new PeugeotTU5("peugeot", "white", 1402, "TU5");
