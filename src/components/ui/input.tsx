import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from '@/components/ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { label: string }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label ,...props }, ref) => {
    return (
      <div className="relative">
      <input
          type={type}
        className={cn(
          "flex h-14 w-full rounded-md border border-input bg-background px-3 pb-2 pt-7 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        />
        <Label className="absolute top-3 left-3 font-normal text-slate-500" >{ label}</Label>
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
