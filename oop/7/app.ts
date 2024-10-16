class Cars {
  constructor(
    public name: string,
    protected brand: string,
    readonly color: string
  ) {
    this.name = name;
    this.brand = brand;
    this.color = color;
  }
}

const toyotaCar = new Cars("sopra", "toyota", "red");
console.log(toyotaCar);
