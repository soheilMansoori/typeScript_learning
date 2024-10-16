// parameter Decorator
function email(target: any, methodName: string, parameterIndex: number) {
  const metadataKey = `__validate_email_${methodName}_parameter`;

  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(parameterIndex);
  } else {
    target[metadataKey] = [parameterIndex];
  }
}
// parameter Decorator
function required(target: any, methodName: string, parameterIndex: number) {
  const metadataKey = `__validate_required_${methodName}_parameter`;

  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(parameterIndex);
  } else {
    target[metadataKey] = [parameterIndex];
  }
}

// method Decorator
function validate(
  target: any,
  methodName: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  const method = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const metadataKey = `__validate_email_${methodName}_parameter`;
    const emailParams: number[] = target[metadataKey];

    if (emailParams) {
      for (const index of emailParams) {
        const paramValue = args[index];
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(paramValue)) {
          throw new Error(
            `Invalid email address provided for parameter at index ${index}`
          );
        }
      }
    }

    const requiredMetaKey = `__validate_required_${methodName}_parameter`;
    const requiredParams: number[] = target[requiredMetaKey];

    if (requiredParams) {
      for (const index of requiredParams) {
        const paramValue = args[index];

        if (!paramValue) {
          throw new Error(`Missing required parameter: ${index}`);
        }
      }
    }

    return method.apply(this, args);
  };
}

class Email {
  constructor(private email: string) {
    this.email = email;
  }

  // send email
  @validate
  send(@email email: string, @required subject: string) {
    return `email send successfully from ${this.email} to ${email} with subject ${subject}`;
  }
}

try {
  const email = new Email("soheil@gmail.com");
  console.log("email => ", email);
  console.log(
    "send result => ",
    email.send("ahad@gmail.com", "send test email")
  );
} catch (error) {
  console.log("error => ", error.message);
}

export {};
