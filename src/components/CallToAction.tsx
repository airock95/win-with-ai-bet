
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a scommettere con metodo scientifico? 🚀
          </h2>
          
          <Button size="lg" className="gradient-bg text-white font-medium text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            Sì, voglio la prova gratuita
          </Button>
          
          <div className="flex justify-center mt-4 space-x-6">
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">⏱️</span> 0 rischi
            </span>
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">🔄</span> Disdici in un clic
            </span>
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">💬</span> Supporto 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
