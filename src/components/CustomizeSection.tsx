import { Card, CardContent } from "@/components/ui/card";
const CustomizeSection = () => {
  return <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Tipster a sentimento? È ora di cambiare.
        </h2>
          <p className="text-lg text-gray-700">
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Pronostici fumosi</h3>
              <p className="text-gray-600">Molti tipster condividono previsioni basate sul sentimento o intuizioni personali, senza basi analitiche solide.</p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="font-bold text-lg mb-2">Tempo sprecato</h3>
              <p className="text-gray-600">Ore perse a confrontare statistiche e opinioni contraddittorie che spesso portano a decisioni confuse.</p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Mancanza di trasparenza</h3>
              <p className="text-gray-600">
                Scommetti solo quando le probabilità reali sono superiori a quelle offerte dai bookmaker
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default CustomizeSection;