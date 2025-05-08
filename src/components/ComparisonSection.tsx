
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

const ComparisonSection = () => {
  const isMobile = useIsMobile();
  
  const comparisons = [{
    feature: "Basato su dati",
    telegram: false,
    excel: "✔️ parziale",
    aiwinbet: "✔️ 120 variabili/match"
  }, {
    feature: "Aggiornamento quote live",
    telegram: false,
    excel: false,
    aiwinbet: "✔️ ogni 0,1 s"
  }, {
    feature: "EV% calcolato e mostrato",
    telegram: false,
    excel: false,
    aiwinbet: "✔️ visibile"
  }, {
    feature: "Alert push",
    telegram: false,
    excel: false,
    aiwinbet: "✔️ immediati"
  }];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
          
          <p className="text-gray-700 text-center mb-8 font-medium text-2xl md:text-3xl">
            Scopri perché Scommessa Intelligente è superiore ad altre soluzioni per le tue scommesse
          </p>
          
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <div className="min-w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className={`${isMobile ? 'w-2/5' : 'w-1/4'} bg-gray-100`}>Caratteristiche</TableHead>
                    <TableHead className={`${isMobile ? 'w-1/5' : 'w-1/4'} bg-gray-100 text-center`}>
                      {isMobile ? 'Telegram' : 'Tipster su Telegram'}
                    </TableHead>
                    <TableHead className={`${isMobile ? 'w-1/5' : 'w-1/4'} bg-gray-100 text-center`}>
                      {isMobile ? 'Excel' : 'Fogli Excel fai-da-te'}
                    </TableHead>
                    <TableHead className={`${isMobile ? 'w-1/5' : 'w-1/4'} bg-gray-100 text-center bg-aiwinbet-green text-white`}>
                      {isMobile ? 'Noi' : 'Scommessa Intelligente'}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisons.map(item => (
                    <TableRow key={item.feature}>
                      <TableCell className="font-medium text-sm md:text-base">{item.feature}</TableCell>
                      <TableCell className="text-center">
                        {typeof item.telegram === "boolean" ? 
                          item.telegram ? 
                            <Check className="h-5 w-5 text-aiwinbet-green mx-auto" /> : 
                            <X className="h-5 w-5 text-red-500 mx-auto" /> : 
                          item.telegram}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof item.excel === "boolean" ? 
                          item.excel ? 
                            <Check className="h-5 w-5 text-aiwinbet-green mx-auto" /> : 
                            <X className="h-5 w-5 text-red-500 mx-auto" /> : 
                          item.excel}
                      </TableCell>
                      <TableCell className="text-center font-medium text-sm md:text-base">
                        {typeof item.aiwinbet === "boolean" ? 
                          item.aiwinbet ? 
                            <Check className="h-5 w-5 text-aiwinbet-green mx-auto" /> : 
                            <X className="h-5 w-5 text-red-500 mx-auto" /> : 
                          item.aiwinbet}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
