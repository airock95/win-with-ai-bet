
import { Shield, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection = () => {
  return (
    <section className="section-padding bg-aiwinbet-light">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sicurezza Garantita</h2>
          <p className="text-lg text-gray-700 mb-8">
            La tua esperienza di scommessa sicura e protetta è la nostra priorità assoluta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-aiwinbet-green/10 flex items-center justify-center mb-4">
                <Shield className="text-aiwinbet-green" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Dati protetti al 100%</h3>
              <p className="text-gray-600">
                Utilizziamo standard di sicurezza bancari per proteggere tutti i tuoi dati e le tue transazioni
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-aiwinbet-blue/10 flex items-center justify-center mb-4">
                <FileText className="text-aiwinbet-blue" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Conformità ADM</h3>
              <p className="text-gray-600">
                Operiamo in piena conformità con le normative italiane sul gioco responsabile
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-aiwinbet-lime/30 flex items-center justify-center mb-4">
                <Users className="text-aiwinbet-dark" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Community verificata</h3>
              <p className="text-gray-600">
                Una community di utenti verificati che condividono strategie e risultati in tempo reale
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
