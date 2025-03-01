// MaxAge Decorator
function MaxAge(limit: number) {
  return (target: any, propertyKey: string) => {
    const metadataKey = `__metadata__max__${propertyKey}`;
    target.constructor[metadataKey] = {
      key: propertyKey,
      limit,
      message: null,
      checkValue: function (value: number): boolean {
        if (value > limit) {
          this.message = `${propertyKey} must be maximum ${limit}`;
          return false;
        }
        return true;
      },
    };
  };
}

// MinAge Decorator
function MinAge(limit: number) {
  return (target: any, propertyKey: string) => {
    const metadataKey = `__metadata__min__${propertyKey}`;
    target.constructor[metadataKey] = {
      key: propertyKey,
      limit,
      message: null,
      checkValue: function (value: number): boolean {
        if (limit > value) {
          this.message = `${propertyKey} must be minimum ${limit}`;
          return false;
        }
        return true;
      },
    };
  };
}

// MinLength Decorator
function MaxLength(limit: number) {
  return (target: any, propertyKey: string) => {
    const metadataKey = `__metadata__maxLength__${propertyKey}`;
    target.constructor[metadataKey] = {
      key: propertyKey,
      limit,
      message: null,
      checkValue: function (value: string): boolean {
        if (value.length > limit) {
          this.message = `${propertyKey} must be maximum length ${limit}`;
          return false;
        }
        return true;
      },
    };
  };
}

// MaxLength Decorator
function MinLength(limit: number) {
  return (target: any, propertyKey: string) => {
    const metadataKey = `__metadata__minLength__${propertyKey}`;
    target.constructor[metadataKey] = {
      key: propertyKey,
      limit,
      message: null,
      checkValue: function (value: string): boolean {
        if (value.length < limit) {
          this.message = `${propertyKey} must be minimum length ${limit}`;
          return false;
        }
        return true;
      },
    };
  };
}

// external validate
const AgeValidator = (instance: any) => {
  const constructor = instance.constructor;
  const metadataKeys = Object.keys(constructor);

  for (const metadataKey of metadataKeys) {
    const mainMetadata = constructor[metadataKey];
    const value = instance[mainMetadata.key];
    const validationResult = mainMetadata.checkValue(value);

    // check result
    if (!validationResult) {
      const message = mainMetadata.message;
      throw new Error(message);
    }
  }
};

class User {
  // properties
  @MaxAge(100)
  @MinAge(18)
  private age: number;

  @MaxLength(12)
  @MinLength(4)
  private name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    // run internal validate
    this.validate();
  }

  // internal validate
  private validate(): void {
    const constructor = this.constructor as any;
    const metadataKeys = Object.keys(constructor);

    for (const metadataKey of metadataKeys) {
      const mainMetadata = constructor[metadataKey];
      const value = (this as any)[mainMetadata.key];
      const validationResult = mainMetadata.checkValue(value);

      // check error messages
      if (!validationResult) {
        const message = mainMetadata.message;
        throw new Error(message);
      }
    }
  }

  // get info
  info() {
    return `name:${this.name} age:${this.age}`;
  }
}

try {
  const soheilUser = new User("soheil", 21);

  // run external validation
  // AgeValidator(soheilUser);

  console.log("soheilUser => ", soheilUser.info());
} catch (error) {
  console.log("error => ", error.message);
}

export default User;
