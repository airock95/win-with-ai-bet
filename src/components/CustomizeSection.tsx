
import { Card, CardContent } from "@/components/ui/card";

const CustomizeSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personalizza tutto, davvero tutto 🤩
          </h2>
          <p className="text-lg text-gray-700">
            Scegli campionati, tipologia di mercato (1X2, Over/Under, Gol/NoGol), range quote e rischio. 
            Il motore di AI WIN BET si adatta al tuo stile di gioco.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Quote live confrontate su 25 bookmaker ADM</h3>
              <p className="text-gray-600">
                Monitoriamo in tempo reale tutte le variazioni di quota per catturare value bet prima che spariscano
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="font-bold text-lg mb-2">Algoritmi proprietari "AI-first" addestrati su 10 anni di partite</h3>
              <p className="text-gray-600">
                Il nostro modello predittivo ha analizzato oltre 25.000 partite di Serie A e B per individuare pattern nascosti
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Filtro Value Bet: mostra solo EV positivi</h3>
              <p className="text-gray-600">
                Scommetti solo quando le probabilità reali sono superiori a quelle offerte dai bookmaker
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
