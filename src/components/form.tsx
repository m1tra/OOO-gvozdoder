'use client'
import { ChangeEvent, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, UserRound } from 'lucide-react';
import { InputOTPDemo } from './input_otp';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { ValidateToast } from './usefullToast';

interface IAForm {
    email: string;
    username: string;
    password: string;
  }

export function DialoAuth() {
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLogDialogOpen, setIsLogDialogOpen] = useState(false);
  const handleClick = () =>{
    setIsDialogOpen(false)
    setIsLogDialogOpen(true)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
    }
  
  const {register,handleSubmit, formState} = useForm<IAForm>({
    defaultValues:{
        'email':'michail@mail.ru',
        'username':'misha'
    },
    mode:'onChange',

  })
  const emailError = formState.errors['email']?.message
  const usernameError = formState.errors['username']?.message
  const passwordError = formState.errors['password']?.message
  const onSubmit:SubmitHandler<IAForm> = (data:any)=>{
    console.log(data)
  }
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <User className='cursor-pointer text-neutral-300' strokeWidth={1}  size={26}/>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to OOO "gvozdoder"</DialogTitle>
            <DialogDescription>
              Create your account.
            </DialogDescription>
          </DialogHeader>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-4 items-center gap-4 ">
                    <Label htmlFor="email" className="text-right ">Email</Label>
                    <Input 
                        id="email" 
                            {...register ('email',{
                                required:"The field is required",
                                pattern:{
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address',
                                }
                            }
                        )} 
                        className="col-span-3 " />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 ">
                    <Label htmlFor="username" className="text-right ">Username</Label>
                    <Input 
                        id="username" 
                            {...register ('username',{
                                required:"The field is required",
                                minLength:{
                                    value:4,
                                    message:'The minimum username length is 4'
                                }
                            }
                        )} 
                        className="col-span-3 " />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4 ">
                    <Label htmlFor="password" className="text-right ">Password</Label>
                    <Input 
                        {...register ('password',{
                            required:"The field is required",
                            minLength:{
                                value:6,
                                message:'The minimum username length is 4'
                            },
                            maxLength:{
                                value:10,
                                message:'The minimum username length is 10'
                            }
                            }
                        )}                         
                        className="col-span-3 " />
                  </div>
                </div>
                <DialogFooter className="flex justify-between w-full gap-2">
                  <Button type="button" onClick={() => { setIsDialogOpen(false); setIsLogDialogOpen(true);}}>
                    Quick sign in
                  </Button>
                  <ValidateToast 
                    emailError={emailError} 
                    usernameError={usernameError} 
                    passwordError={passwordError} 
                    />
                </DialogFooter>
            </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isLogDialogOpen} onOpenChange={setIsLogDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to OOO "gvozdoder"</DialogTitle>
            <DialogDescription>
              Login to your account.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" defaultValue="Michael" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">Password</Label>
              <InputOTPDemo/>
            </div>
          </form>
          <DialogFooter className="flex justify-between w-full">
            <Button variant="link" onClick={() => { setIsLogDialogOpen(false); setIsDialogOpen(true); }}>
              Back to sign up
            </Button>
            <Button type="submit">Sign in</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
