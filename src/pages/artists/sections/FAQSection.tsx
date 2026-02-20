import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionContainer from "./SectionContainer";
import { faqItems } from "../data";

export default function FAQSection() {
  return (
    <SectionContainer>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Answers to common questions about distribution, compliance, and plans.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionContainer>
  );
}
