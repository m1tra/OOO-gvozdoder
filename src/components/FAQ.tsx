import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const FAQ = [
    {
        "title": "What types of nails do you offer?",
        "description": "We offer a wide range of nails, including construction, roofing, finishing, and specialty nails for various applications."
    },
    {
        "title": "How do I choose the right size of nails?",
        "description": "The size of nails depends on the material you are working with. We recommend checking our nail selection guide on the website."
    },
    {
        "title": "Do you offer bulk discounts?",
        "description": "Yes, we provide special terms for bulk buyers. Please contact our support team for more information."
    },
    {
        "title": "How can I place an order?",
        "description": "You can place an order through our website by selecting the desired products and adding them to your cart. Then follow the instructions to complete your purchase."
    },
    {
        "title": "What is your return policy?",
        "description": "We accept returns within 30 days of purchase if the product is unused and in its original packaging. Please review our return policy for details."
    },
    {
        "title": "What delivery options do you offer?",
        "description": "We offer various delivery options, including courier service, postal delivery, and pickup from our store."
    },
    {
        "title": "Can I order nails in custom sizes?",
        "description": "Yes, we can manufacture nails in custom sizes. Please contact us to discuss your requirements."
    },
    {
        "title": "What are your payment terms?",
        "description": "We accept various payment methods, including credit cards, e-wallets, and cash upon pickup."
    },
    {
        "title": "Do you have quality certificates for your products?",
        "description": "Yes, all our nails are certified and meet quality standards. We can provide copies of the certificates upon request."
    },
    {
        "title": "How long does it take to process an order?",
        "description": "Orders are processed within 1-3 business days. You will receive a notification about the status of your order via email."
    }
]


  
export function Faq() {
  return (
    <div className=' py-16'>
    <h2 className='uppercase font-bold'>Need Help?</h2>
    <Accordion type="single" collapsible className="">

        {FAQ.map((item,index)=>(
            <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='text-base text-neutral-300'>{item.title}</AccordionTrigger>
                <AccordionContent className='text-neutral-500'>
                    {item.description}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
</div>
  )
}
  