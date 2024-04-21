import { useState } from "react";
import { Input } from "./ui/input";




const MyInput = () => {
  const [value, setValue] = useState("");

  console.log("value => ", value);

  return <Input label="Email" type="email" placeholder="Enter your email" value={value} onChange={e => setValue(e.target.value)} />
}

export default MyInput
