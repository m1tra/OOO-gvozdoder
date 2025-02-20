import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { DropdownMenuLabel } from "./ui/dropdown-menu"

interface HoverCardDemoProps {
    name: string;
    description: string;
  }
export function HoverCardDemo({name,description}:HoverCardDemoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <DropdownMenuLabel className="cursor-pointer underline-offset-4 hover:underline">Description</DropdownMenuLabel>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <h4 className="text-sm font-bold">{name}</h4>
        <div className=" text-sm">{description}</div>
      </HoverCardContent>
    </HoverCard>
  )
}
