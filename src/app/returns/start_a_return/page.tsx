import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const ReturnsSection = () => {
    return (
        <main className=" ">
            <div className="pt-16">
                <h1 className="uppercase font-bold text-lg">Start an exchange or return</h1>
                <p className="pt-3 text-neutral-300 text-sm">You can exchange or return an item within 30 days after receiving your order.</p>
            </div>
            <div className="py-16">
                <h2 className="uppercase font-bold text-base">What’s your email?</h2>
                <Input className="w-1/2 my-4" type="email" placeholder="Email" />
            </div>
            <div className="">
                <h2 className="uppercase font-bold text-base">What do you want to do</h2>
                <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-300 "
                    >
                    Track an order
                    </label>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-300 "
                    >
                    Start an exchange or return
                    </label>
                </div>
            </div>
            <Button variant="outline" className="mt-10" size={'lg'}>Continue</Button>
        </main>
    );
};

export default ReturnsSection;
