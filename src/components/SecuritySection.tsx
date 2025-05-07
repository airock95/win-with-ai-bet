
import { Shield, FileText, Users } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sicurezza incrollabile, trasparenza radicale 🔒
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-blue-50">
              <Shield className="w-8 h-8 text-aiwinbet-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">SSL & crittografia AES 256</h3>
            <p className="text-gray-600">
              Tutti i tuoi dati sono protetti con i più alti standard di sicurezza del settore
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-blue-50">
              <FileText className="w-8 h-8 text-aiwinbet-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">Server EU GDPR-compliant</h3>
            <p className="text-gray-600">
              I nostri server sono situati in Europa e rispettano tutte le normative sulla privacy
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-full bg-blue-50">
              <Users className="w-8 h-8 text-aiwinbet-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">Storico pronostici pubblico</h3>
            <p className="text-gray-600">
              Verifica ogni momento il track record completo dei nostri pronostici, senza manipolazioni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
