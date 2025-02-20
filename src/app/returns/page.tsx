import { Button } from '@/components/ui/button';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Textarea } from '@/components/ui/textarea';
import { UsefullAgreeToast, UsefullDisAgreeToast } from '@/components/usefullToast';
import Link from 'next/link';
const data = [
    {
        "title": "Personalised items",
        "description": "Unique items, created specifically for you, can only be returned if there’s a manufacturing defect."
    },
    {
        "title": "Limited items",
        "description": "Some exclusive items have a limited return period and can only be returned within 14 days after receiving your order. You’ll find out while ordering if there’s a shorter return period."
    },
    {
        "title": "Protective lining",
        "description": "Did your item have protective lining? We can only accept a return if this protection hasn’t been removed due to health reasons."
    },
    {
        "title": "Resellers",
        "description": "We reserve the right to deny resellers the benefit of our returns and refund policy. See our Return Policy for details."
    },
    {
        "title": "e-Gift card refunds",
        "description": "We reserve the right to make refunds through an adidas e-gift card in some cases. See our Return Policy for details."
    },
    {
        "title": "Final Sale",
        "description": "Certain items are designated as final sale and not eligible for returns or exchanges. The product page indicates whether an item is a final sale item. Money Can't Buy Product items ('MCBP'), Points for Products items ('P x P'), and Yeezy products are also final sale."
    }
]
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

const ReturnsSection = () => {
    return (
        <main className=" ">
            <div className='border-b border-neutral-700 py-16'>
                <h2 className='font-bold text-lg'>RETURNING AN ITEM</h2>
                <p className='pt-4 text-neutral-300 text-sm'>You can return an item for free within 30 days after receiving your order. It's also possible to return something to one of our stores if your order didn't have a delivery fee.</p>
            </div>
            <div className='border-b border-neutral-700 py-16'>
                <div>
                    <h2 className='font-bold text-lg'>HOW TO RETURN</h2>
                    <p className='pt-4 text-neutral-300 text-sm'>Everything you return should be in good condition. Make sure you don’t cut off tags if there are any. Pack all items in their original packaging.</p>
                </div>
                <div className='pt-5'>
                    <h3 className='font-bold'>By post</h3>
                    <p className='pt-4 text-neutral-300 text-sm'>Start a return on our website or on the app and follow the instructions. You’ll receive all the details you need before dropping off your parcel at the drop-off point. 
                        Did you buy something in one of our stores? You cannot return this by post.</p>
                    <p className='pt-4 text-neutral-300 text-sm'>Did you buy something in one of our stores? You cannot return this by post.</p>
                    <Link href='/returns/start-a-return'>
                        <Button className='mt-2 font-bold rounded-none'>START A RETURN</Button>
                    </Link>
                </div>
            </div>
            <div className='border-b border-neutral-700 py-16'>
                <h2 className='font-bold text-lg uppercase'>REFUNDS</h2>
                <p className='pt-4 text-neutral-300 text-sm'>Once your return arrives at one of our warehouses and the quality has been approved, we’ll initiate your refund.</p>
                <p className='pt-4 text-neutral-300 text-sm'>If you chose an e-gift card as the refund method, you’ll receive this via email immediately after your return was approved.</p>
                <p className='pt-4 text-neutral-300 text-sm'>Did you choose to get a refund issued to your original payment method? Then it can take up to 14 business days until you see the amount on your account, depending on your bank.</p>
            </div>
            <div className='border-b border-neutral-700 py-16'>
                <h2 className='font-bold text-lg uppercase'>RESTRICTIONS</h2>
                <p className='pt-4 py-6 text-neutral-300 text-sm'>There can be additional guidelines for your return.</p>
                {data.map((item)=>(
                    <div key={item.title} className='pt-5'>
                        <h3 className='font-bold'>{item.title}</h3>
                        <p className='pt-2 text-neutral-300 text-sm'>{item.description}</p>
                    </div>
                ))}            
            </div>
            <div className='border-b border-neutral-700 py-16'>
                <h2 className='uppercase font-bold'>DID YOU FIND THIS ARTICLE HELPFUL?</h2>
                <div className='flex justify-between w-28 pt-4 gap-2'>
                    <UsefullAgreeToast/>
                    <UsefullDisAgreeToast/>
                </div>
            </div>
            <div className='border border-neutral-700 mb-10 p-8'>
                <div className=''>
                    <h3 className='font-bold'>Ask customer care</h3>
                    <p className='pt-2 text-neutral-300 text-sm'>No answer to your question? Ask our customer care.</p>
                </div>
                <div className='pt-5'>
                    <h3 className='font-bold'>Please use the chat button on the lower hand corner</h3>
                    <p className='pt-2 text-neutral-300 text-sm'>Chatbot Support: Available 24/7</p>
                </div>
                <div className='pt-5'>
                    <h3 className='font-bold'>Call: 1-800-982-9337 </h3>
                    <p className='pt-2 text-neutral-300 text-sm'>5:00 am - 8:00 pm PT, Mon - Sun</p>
                </div>
                
            </div>
        </main>
    );
};

export default ReturnsSection;
