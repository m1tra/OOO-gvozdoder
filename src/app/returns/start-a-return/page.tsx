"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowRight } from "lucide-react"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const emailFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  action: z.enum(["track", "exchange"], {
    required_error: "Please select what you want to do",
  }),
})

const orderFormSchema = z.object({
    orderNumber: z.string()
      .min(1, "Order number is required")
      .regex(/^[a-zA-Z0-9]{100,101}$/, "Sorry, your order number seems to be incorrect. Please double check it. It should look like this: QQAAAEwNwAAADgAAAA="),
  });
  

export default function OrderTracking() {
  const [title, setTitle] = useState("START AN EXCHANGE OR RETURN")
  const [showOrderForm, setShowOrderForm] = useState(false)

  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      action: undefined,
    },
  })

  const orderForm = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      orderNumber: "",
    },
  })

  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    if (values.email && values.action) {
      setShowOrderForm(true)
    }
  }

  function onOrderSubmit(values: z.infer<typeof orderFormSchema>) {
    console.log("Order form submitted:", values)
  }

  const handleActionChange = (value: string) => {
    setTitle(value === "track" ? "TRACK AN ORDER" : "START AN EXCHANGE OR RETURN")
  }

  if (showOrderForm) {
    return (
      <div className="">
        <div className="pt-16">
            <h1 className="uppercase font-bold text-lg">MANAGE ORDERS AND RETURNS</h1>
            <p className="pt-3 text-neutral-300 text-sm">
              Enter your order number to track your order. If you don&apos;t want to look up your order number, you can also
              create an account.
            </p>
        </div>


        <Form {...orderForm}>
          <form onSubmit={orderForm.handleSubmit(onOrderSubmit)} className="py-16 max-w-2xl">
            <FormField
              control={orderForm.control}
              name="orderNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Order number *" className="w-full lg:w-1/2" {...field} />
                  </FormControl>
                  <p className="text-gray-500 text-sm mt-2">You can find this in your confirmation email</p>
                  <div className="h-5 text-wrap">
                    <FormMessage className=""/>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-12">
              CONTINUE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </div>
    )
  }

  return (
    <div className=" text-white ">
      <div className="pt-16">
        <h1 className="uppercase font-bold text-lg">{title}</h1>
        <p className="pt-3 text-neutral-300 text-sm">You can exchange or return an item within 30 days after receiving your order.</p>
      </div>
      <Form {...emailForm}>
        <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="">
          <div className="py-16">
            <h2 className="uppercase font-bold text-base">WHAT&apos;S YOUR EMAIL?</h2>
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="w-full lg:w-1/2 my-4"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-5">
                  <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <h2 className="uppercase font-bold text-base pb-5">WHAT DO YOU WANT TO DO</h2>
            <FormField
              control={emailForm.control}
              name="action"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value)
                        handleActionChange(value)
                      }}
                      value={field.value}
                      className=""
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="track" id="track" />
                        <Label htmlFor="track" className=" text-neutral-300 text-sm">
                          Track an order
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exchange" id="exchange" />
                        <Label htmlFor="exchange" className=" text-neutral-300 text-sm">
                          Start an exchange or return
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <div className="h-5">
                  <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button variant="outline" className="mt-10" size={'lg'}>
            Continue
          </Button>
        </form>
      </Form>
    </div>
  )
}

