import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";



const fruits = [
  { value: "Apple", name:"Apple" },
  { value: "Banana", name:"Banana" },
  { value: "Blueberry", name:"Blueberry" },
  { value: "Grapes", name:"Grapes" },
  { value: "Pineapple", name:"Pineapple" },
]

const MySelect = () => {
  const [selectedFruit, setSelectedFruit] = useState(fruits[0].value);

  console.log("selectedFruit => ", selectedFruit);

  return (
    <Select  value={selectedFruit} onValueChange={setSelectedFruit} >
        <SelectTrigger id="status" aria-label="Select status" className="h-14" >
          <div className="flex flex-col gap-1 items-start">
              <Label htmlFor="status" className="w-full text-left font-normal mt-1 text-slate-500">Select fruit</Label>
              <SelectValue placeholder="Select status" />
          </div>
            </SelectTrigger>
        <SelectContent>{
          fruits.map(fruit => <SelectItem key={fruit.value} value={fruit.value}>{fruit.name}</SelectItem>)
        }
            </SelectContent>
    </Select>
  )
}

export default MySelect
