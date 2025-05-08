import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const ComparisonSection = () => {
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
  return <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
          
          <p className="text-gray-700 text-center mb-8 font-medium text-3xl">
            Scopri perché Scommessa Intelligente è superiore ad altre soluzioni per le tue scommesse
          </p>
          
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 bg-gray-100">Caratteristiche</TableHead>
                  <TableHead className="w-1/4 bg-gray-100 text-center">Tipster su Telegram</TableHead>
                  <TableHead className="w-1/4 bg-gray-100 text-center">Fogli Excel fai-da-te</TableHead>
                  <TableHead className="w-1/4 bg-gray-100 text-center gradient-bg text-white">Scommessa Intelligente</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map(item => <TableRow key={item.feature}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="text-center">
                      {typeof item.telegram === "boolean" ? item.telegram ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" /> : item.telegram}
                    </TableCell>
                    <TableCell className="text-center">
                      {typeof item.excel === "boolean" ? item.excel ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" /> : item.excel}
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      {typeof item.aiwinbet === "boolean" ? item.aiwinbet ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" /> : item.aiwinbet}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;