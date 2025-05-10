
import { Shield, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sicurezza e Trasparenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Dati Protetti</h3>
                <p className="text-muted-foreground">I tuoi dati sono completamente protetti e non condivisi con terze parti.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Documentazione</h3>
                <p className="text-muted-foreground">Accedi a documenti dettagliati sul nostro modello AI.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Supporto Clienti</h3>
                <p className="text-muted-foreground">Team dedicato per rispondere a ogni tua domanda.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
