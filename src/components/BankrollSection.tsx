
import { Card, CardContent } from "@/components/ui/card";

const BankrollSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bankroll sotto controllo 💰
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <Card className="border border-gray-200 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Grafico a torta "Stake distribuiti"</h3>
                <div className="relative p-4 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center relative">
                    <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#5E7BFF"
                        strokeWidth="3"
                        strokeDasharray="60, 100"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#BD5EFF"
                        strokeWidth="3"
                        strokeDasharray="25, 100"
                        strokeDashoffset="-60"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#AAAAAA"
                        strokeWidth="3"
                        strokeDasharray="15, 100"
                        strokeDashoffset="-85"
                      />
                    </svg>
                    <div className="text-center">
                      <div className="text-3xl font-bold">75%</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aiwinbet-blue rounded-full mr-2"></div>
                    <span className="text-sm">Over/Under (60%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-aiwinbet-purple rounded-full mr-2"></div>
                    <span className="text-sm">1X2 (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-sm">Altro (15%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="col-span-1">
            <div className="space-y-6">
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Alert automatici</h3>
                  <p className="text-gray-600 mb-4">
                    Ricevi notifiche se superi la % di rischio impostata
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                    <p className="text-yellow-700 text-sm">
                      Attenzione: stai utilizzando il 12% della bankroll su mercati ad alto rischio
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Suggerimenti AI</h3>
                  <p className="text-gray-600 mb-4">
                    Sizing ottimale basato su Kelly fraction
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <p className="text-green-700 text-sm">
                      Punta 2,5u su Inter-Juventus per ottimizzare il rapporto rischio/rendimento
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankrollSection;
