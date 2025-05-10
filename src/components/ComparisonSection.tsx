import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
const ComparisonSection = () => {
  const isMobile = useIsMobile();
  const comparisons = [{
    feature: "Basato su dati",
    telegram: false,
    excel: "Parziale",
    aiwinbet: "120 var/match"
  }, {
    feature: "Quote live",
    telegram: false,
    excel: false,
    aiwinbet: "0,1 sec"
  }, {
    feature: "EV% calcolato",
    telegram: false,
    excel: false,
    aiwinbet: "Visibile"
  }, {
    feature: "Alert push",
    telegram: false,
    excel: false,
    aiwinbet: "Immediati"
  }];
  return;
};
export default ComparisonSection;