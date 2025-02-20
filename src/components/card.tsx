"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { HoverCardDemo } from "./hover-card"

const data =  [
        {
            id: 1,
            type: "A123",
            length: "30 мм",
            diameter: "2.0 мм",
            material: "Нержавеющая сталь",
            quantity: 200,
            price: 5.75,
            description: "Оптимальны для крепления фанеры и древесных плит."
        },
        {
            id: 2,
            type: "B456",
            length: "25 мм",
            diameter: "1.6 мм",
            material: "Сталь",
            quantity: 250,
            price: 4.50,
            description: "Легкие и прочные, идеально подходят для гипсокартонных конструкций."
        },
        {
            id: 3,
            type: "C789",
            length: "40 мм",
            diameter: "3.5 мм",
            material: "Сталь",
            quantity: 90,
            price: 8.70,
            description: "Дополнительная шляпка обеспечивает лучшее распределение нагрузки."
        },
        {
            id: 4,
            type: "D012",
            length: "55 мм",
            diameter: "3.0 мм",
            material: "Цинк",
            quantity: 120,
            price: 7.90,
            description: "Предназначены для крепления компонента на обшивку."
        },
        {
            id: 5,
            type: "E345",
            length: "30 мм",
            diameter: "2.5 мм",
            material: "Сталь",
            quantity: 180,
            price: 6.80,
            description: "Используются для крепления электрических и телефонных кабелей."
        },
        {
            id: 6,
            type: "F678",
            length: "65 мм",
            diameter: "4.0 мм",
            material: "Нержавеющая сталь",
            quantity: 85,
            price: 9.50,
            description: "Устойчивы к внешней среде, идеальны для террас."
        },
        {
            id: 7,
            type: "G901",
            length: "40 мм",
            diameter: "2.2 мм",
            material: "Цинк",
            quantity: 200,
            price: 5.99,
            description: "Специально для монтажа настенных панелей."
        },
        {
            id: 8,
            type: "H234",
            length: "25 мм",
            diameter: "2.0 мм",
            material: "Дерево",
            quantity: 150,
            price: 4.20,
            description: "Специально разработаны для крепления ящиков и садовых конструкций."
        },
        {
            id: 9,
            type: "I567",
            length: "45 мм",
            diameter: "3.0 мм",
            material: "Сталь",
            quantity: 100,
            price: 6.25,
            description: "Идеальны для крепления твердых древесных плит."
        },
        {
            id: 10,
            type: "J890",
            length: "20 мм",
            diameter: "1.5 мм",
            material: "Пластик",
            quantity: 500,
            price: 3.00,
            description: "Легкие и не подвержены ржавчине, идеальны для временных работ."
        },
        {
            id: 11,
            type: "Z001",
            length: "50 мм",
            diameter: "2.5 мм",
            material: "Космический сплав",
            quantity: 60,
            price: 20.00,
            description: "Созданы для использования в условиях космоса."
        },
        {
            id: 12,
            type: "X002",
            length: "30 мм",
            diameter: "1.8 мм",
            material: "Радужный металл",
            quantity: 100,
            price: 12.50,
            description: "Идеальны для создания ярких и необычных проектов."
        },
        {
            id: 13,
            type: "Y003",
            length: "55 мм",
            diameter: "3.2 мм",
            material: "Алюминий",
            quantity: 90,
            price: 7.00,
            description: "Легкие и удобные для строительных работ."
        },
        {
            id: 14,
            type: "W004",
            length: "25 мм",
            diameter: "1.5 мм",
            material: "Зеленый пластик",
            quantity: 300,
            price: 2.50,
            description: "Экологически чистые, подходят для временных конструкций."
        },
        {
            id: 15,
            type: "V005",
            length: "40 мм",
            diameter: "2.0 мм",
            material: "Углеродное волокно",
            quantity: 120,
            price: 15.00,
            description: "Супер легкие и прочные, идеально подходят для современных проектов."
        },
        {
            id: 16,
            type: "U006",
            length: "35 мм",
            diameter: "2.2 мм",
            material: "Титан",
            quantity: 50,
            price: 25.00,
            description: "Идеальные гвозди для высокотехнологичных изделий."
        },
        {
            id: 17,
            type: "T007",
            length: "60 мм",
            diameter: "3.5 мм",
            material: "Наноматериалы",
            quantity: 30,
            price: 40.00,
            description: "Гвозди с особыми свойствами для специфических использований."
        },
        {
            id: 18,
            type: "S008",
            length: "20 мм",
            diameter: "1.0 мм",
            material: "Силикон",
            quantity: 200,
            price: 1.80,
            description: "Гибкие и удобные, идеальны для креативных решений."
        },
        {
            id: 19,
            type: "R009",
            length: "45 мм",
            diameter: "4.0 мм",
            material: "Цветной металл",
            quantity: 70,
            price: 9.00,
            description: "Придают дополнительный стиль любому проекту."
        },
        {
            id: 20,
            type: "Q010",
            length: "80 мм",
            diameter: "5.0 мм",
            material: "Кобальт",
            quantity: 40,
            price: 30.00,
            description: "Идеальные для тяжелых строительных работ."
        }
    ]
;


export type Payment = {
    id: number,
    type: string,
    length: string,
    diameter: string,
    material: string,
    quantity: number,
    price: number,
    description: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          type
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Copy gvozd' id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <HoverCardDemo name={payment.type} description={payment.description}/>
            <DropdownMenuItem>
              <div className="flex justify-between w-full gap-2">
                <span>lenght:</span>
                <span>{payment.length}</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-between w-full gap-2">
                <span>diameter:</span>
                <span>{payment.diameter}</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-between w-full gap-2">
                <span>quantity:</span>
                <span>{payment.quantity}</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-between w-full gap-2">
                <span>material:</span>
                <span>{payment.material}</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full  bg-neutral-950">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filter types..."
          value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("type")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
