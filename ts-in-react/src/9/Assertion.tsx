import { useState } from "react";

export default function Assertion() {
  type UserInfo = {
    name: string;
    family: string;
    age: number;
    password: string | number;
  };
  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.family}</li>
      <li>{user.age}</li>
      <li>{user.password}</li>
    </ul>
  );
}
