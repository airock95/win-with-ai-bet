
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, TrendingUp, Calendar, DollarSign } from "lucide-react";

const data = [
  { name: 'Gen', value: 1000 },
  { name: 'Feb', value: 1200 },
  { name: 'Mar', value: 1100 },
  { name: 'Apr', value: 1400 },
  { name: 'Mag', value: 1600 },
  { name: 'Giu', value: 2000 },
];

const BankrollSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Gestione del bankroll</h2>
          <p className="text-center mb-10 text-muted-foreground max-w-2xl mx-auto">
            Con i nostri pronostici e una strategia di bankroll corretta, puoi vedere una crescita costante del tuo capitale.
          </p>
          
          <Card className="mb-10">
            <CardContent className="p-6">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0c8341" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-full bg-green-100">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-green-600 font-bold flex items-center">
                    +27% <ArrowUpRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
                <h3 className="font-bold mb-1">Crescita media</h3>
                <p className="text-sm text-muted-foreground">Crescita media mensile del bankroll seguendo le nostre strategie</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-bold">6 mesi</span>
                </div>
                <h3 className="font-bold mb-1">Periodo di valutazione</h3>
                <p className="text-sm text-muted-foreground">Risultati verificabili degli ultimi sei mesi</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-full bg-purple-100">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="font-bold">2.1x</span>
                </div>
                <h3 className="font-bold mb-1">Moltiplicatore</h3>
                <p className="text-sm text-muted-foreground">Fattore di crescita medio del bankroll iniziale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankrollSection;
