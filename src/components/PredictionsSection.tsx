import PredictionsTable from "./PredictionsTable";
import { Database, Search, Award, History, Check } from "lucide-react";
import { cn } from "@/lib/utils";
const PredictionsSection = () => {
  return <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">La nostra AI lavora H24, tu ottieni il dato che conta.</h2>
          <p className="text-lg text-gray-700 text-center mb-8">Crea una singola o una multipla. Collega limiti di stake, tagga partite, monitora il ROI in tempo reale.</p>
          
          {/* Solution Section - 4 Column Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[{
            icon: Database,
            title: "Data Crunching",
            desc: "Analisi di migliaia di dati storici"
          }, {
            icon: Search,
            title: "Pattern Detection",
            desc: "Riconoscimento di modelli vincenti"
          }, {
            icon: Award,
            title: "Highest Confidence",
            desc: "Solo pronostici ad alta confidenza"
          }, {
            icon: History,
            title: "Storico Pubblico",
            desc: "Trasparenza totale sui risultati"
          }].map((item, i) => <div key={i} className="flex flex-col items-center text-center p-3">
                <div className="bg-muted rounded-full p-3 mb-3">
                  <item.icon className="h-7 w-7 text-aiwinbet-green" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>)}
          </div>
          
          <div className="rounded-xl overflow-hidden overflow-x-auto">
            <PredictionsTable />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pronostici vinti</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pronostici persi</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">In attesa</span>
            </div>
          </div>
          
          {/* Benefits Section - Checklist style */}
          
          
          {/* How It Works - Timeline */}
          <div className="my-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Come funziona</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
                num: "①",
                title: "Raccogliamo statistiche",
                desc: "Dati storici e performance delle squadre"
              }, {
                num: "②",
                title: "Il modello calcola le probabilità",
                desc: "L'AI elabora i dati e identifica le quote di valore"
              }, {
                num: "③",
                title: "Ti inviamo il pronostico",
                desc: "Ricevi il pick con maggior confidenza"
              }].map((step, i) => <div key={i} className={cn("flex flex-col items-center text-center relative")}>
                    <div className="bg-aiwinbet-green text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10">
                      {step.num}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PredictionsSection;