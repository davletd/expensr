// Combobox.tsx
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import classnames from "classnames"
import { Button } from "./button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
	CommandList,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

interface ComboboxProps {
  options: { value: string, label: string }[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export function Combobox({ options, onSelect, placeholder }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? options?.find((option) => option.value === value)?.label
            : (placeholder || "Select...")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No options found.</CommandEmpty>
          <CommandGroup>
					<CommandList>
            {options?.map((option) => (
              <CommandItem
                key={option?.value}
                value={option?.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  onSelect(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={classnames(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option?.label}
              </CommandItem>
            ))}
						</CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
