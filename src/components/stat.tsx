"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "September", gvozdoder: 111, concurrent: 121 },
  { month: "October", gvozdoder: 123, concurrent: 101 },
  { month: "November", gvozdoder: 155, concurrent: 99 },
  { month: "December", gvozdoder: 178, concurrent: 89 },
  { month: "January", gvozdoder: 175, concurrent: 79 },
  { month: "February", gvozdoder: 229, concurrent: 44 },
]

const chartConfig = {
  desktop: {
    label: "Gvozdoder",
    color: "#606060",
  },
  mobile: {
    label: "Concurrent",
    color: "#404040",
  },
} satisfies ChartConfig

export function Stats() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="gvozdoder" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="concurrent" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
