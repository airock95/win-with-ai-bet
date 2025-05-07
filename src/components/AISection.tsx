
import { Button } from "@/components/ui/button";

const AISection = () => {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Chiedi qualsiasi cosa alla nostra AI e ottieni risposte, subito.
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Digita "Perché consigli il Gol/NoGol?" o "Mostrami le value bet di oggi sopra il 5%" — 
            il nostro assistente ti risponde in linguaggio naturale.
          </p>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700 max-w-2xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-700 rounded-lg p-4 ml-auto max-w-[80%]">
                <p className="text-gray-200">Mostrami le value bet di oggi sopra il 5%</p>
              </div>
              
              <div className="bg-gradient-to-r from-aiwinbet-blue to-aiwinbet-purple rounded-lg p-4 mr-auto max-w-[80%]">
                <p className="text-white">
                  Ho trovato 3 value bet sopra il 5% per oggi:
                  <br /><br />
                  1. Inter vs Juventus: Over 2.5 (Quota 1.95, EV +12%)
                  <br />
                  2. Milan vs Napoli: 1X (Quota 1.75, EV +8%)
                  <br />
                  3. Roma vs Lazio: Gol (Quota 1.88, EV +5%)
                  <br /><br />
                  Vuoi che ti mostri i dettagli dell'analisi per ciascuna partita?
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center">
              <input
                type="text"
                placeholder="Scrivi la tua domanda qui..."
                className="flex-1 py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-aiwinbet-blue"
              />
              <Button className="ml-2 gradient-bg">
                Invia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
