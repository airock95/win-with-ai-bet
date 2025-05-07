
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const PredictionsTable = () => {
  const predictions = [
    {
      match: "Inter - Juventus",
      prediction: "Over 2.5",
      odds: 1.95,
      stake: 2.5,
      ev: "+12%",
      status: "win"
    },
    {
      match: "Milan - Napoli",
      prediction: "1X",
      odds: 1.75,
      stake: 2,
      ev: "+8%",
      status: "pending"
    },
    {
      match: "Roma - Lazio",
      prediction: "Gol",
      odds: 1.88,
      stake: 1.5,
      ev: "+5%",
      status: "pending"
    },
    {
      match: "Atalanta - Bologna",
      prediction: "1",
      odds: 1.67,
      stake: 1,
      ev: "+6%",
      status: "loss"
    }
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Match</TableHead>
            <TableHead className="w-1/5">Pronostico</TableHead>
            <TableHead className="w-1/6">Quota</TableHead>
            <TableHead className="w-1/6">Stake (u)</TableHead>
            <TableHead className="w-1/6">EV</TableHead>
            <TableHead className="w-1/6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {predictions.map((prediction, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-medium">{prediction.match}</TableCell>
              <TableCell>{prediction.prediction}</TableCell>
              <TableCell className="font-medium">{prediction.odds}</TableCell>
              <TableCell>{prediction.stake}</TableCell>
              <TableCell className="text-green-600">{prediction.ev}</TableCell>
              <TableCell>
                {prediction.status === "win" && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Vinta</Badge>
                )}
                {prediction.status === "loss" && (
                  <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">Persa</Badge>
                )}
                {prediction.status === "pending" && (
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-800 hover:bg-yellow-50">In attesa</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PredictionsTable;
