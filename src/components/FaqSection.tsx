
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "L'IA garantisce che vinco sempre?",
      answer: "No. Lo sport resta imprevedibile. Ma selezionare solo scommesse con EV positivo aumenta statisticamente le tue probabilità di profitto nel lungo termine."
    },
    {
      question: "È legale usare il vostro servizio?",
      answer: "Assolutamente sì. Forniamo analisi statistiche: le puntate vengono piazzate su bookmaker ADM regolarmente autorizzati in Italia."
    },
    {
      question: "Quanto costa il servizio?",
      answer: "Zero. Scommessa Intelligente è gratuito: puoi registrarti, ricevere i pronostici a EV positivo e usarli subito senza alcun abbonamento né carta di credito."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Domande frequenti
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
