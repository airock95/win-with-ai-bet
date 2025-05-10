
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Zap } from "lucide-react";

const AISection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia AI avanzata</h2>
          <p className="text-lg mb-10 text-muted-foreground">
            La nostra tecnologia proprietaria analizza migliaia di variabili per generare pronostici con la massima confidenza.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Deep Learning</h3>
              <p className="text-sm text-muted-foreground">
                Modelli neurali che imparano dalle performance passate
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Potenza di calcolo</h3>
              <p className="text-sm text-muted-foreground">
                Analisi di migliaia di dati in tempo reale
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Aggiornamenti automatici</h3>
              <p className="text-sm text-muted-foreground">
                Il sistema si evolve e migliora costantemente
              </p>
            </div>
          </div>
          
          <Button size="lg" className="mt-4">
            Scopri la tecnologia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
