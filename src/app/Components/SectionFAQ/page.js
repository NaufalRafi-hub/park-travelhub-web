import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion"

export default function SectionFAQ() {
  
    return (
        <div className="mt-300">
            <h1 className="italic font-bold w-[115px] mb-20">
                FREQUENTLY ASK QUESTIONS
            </h1>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Why Us?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Can we request a refund?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What will you get?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}