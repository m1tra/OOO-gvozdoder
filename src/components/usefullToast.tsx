"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export function UsefullAgreeToast() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      className="w-20 px-3"
      onClick={() => {
        toast({
          title: "Thanks for your opinion!",
          description: "it is very important",
        })
      }}
    >
      Yes
    </Button>
  )
}


export function UsefullDisAgreeToast() {
  const { toast } = useToast()

  return (
    <Button
      className="w-20 px-3"
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Kill yourself</ToastAction>,
        })
      }}
    >
      No
    </Button>
  )
}

interface IErrors{
    emailError:string|undefined,
    usernameError:string|undefined, 
    passwordError:string|undefined,
}

export function ValidateToast({ emailError, usernameError, passwordError }:IErrors) {
    const { toast } = useToast()
    const handleClick = () => {
        // Создаем массив ошибок
        const errors = [];
        if (emailError) errors.push(`Email: ${emailError}`);
        if (usernameError) errors.push(`Username: ${usernameError}`);
        if (passwordError) errors.push(`Password: ${passwordError}`);
    
        if (errors.length === 0) return;
        const errorMessage = errors.join(' ') ;
        console.log(errorMessage)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      };
    return (
      <Button
        className="w-20 px-3"
        variant="outline"
        onClick={handleClick}
      >
        Sign in
      </Button>
    )
  }

  