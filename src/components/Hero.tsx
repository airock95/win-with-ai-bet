import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden decorative-lines">
      <div className="absolute inset-0 w-full h-full decorative-lines opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Basta perdite. Vinci con i pronostici scientifici di Scommessa Intelligente 🤖</h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700">La nostra Intelligenza Artificiale analizza migliaia di dati per ogni match e ti consegna solo scommesse di valore. Dì addio ai tipster "truffatori" e alle schedine casuali.</h2>
          
          <div className="space-y-3 pt-4">
            <Button size="lg" className="gradient-bg text-white font-medium text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">Iniza ora gratis</Button>
            <p className="text-sm text-gray-600 flex items-center justify-center md:justify-start">
              <span className="mr-2">💳</span> Nessuna carta di credito richiesta
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 animate-float">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-2 border-b flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="text-xs text-gray-500 ml-2">AI WIN BET Dashboard</div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Pronostici della giornata</h3>
                  <span className="text-green-500 font-medium">ROI: +18.7%</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded border border-green-100">
                    <div>
                      <span className="font-medium">Inter - Juventus</span>
                      <span className="text-sm text-gray-500 ml-2">Over 2.5</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-green-600 mr-2">1.95</span>
                      <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">EV +12%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded border border-green-100">
                    <div>
                      <span className="font-medium">Milan - Napoli</span>
                      <span className="text-sm text-gray-500 ml-2">1X</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-green-600 mr-2">1.75</span>
                      <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">EV +8%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 rounded border border-gray-200">
                    <div>
                      <span className="font-medium">Roma - Lazio</span>
                      <span className="text-sm text-gray-500 ml-2">Gol</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-blue-600 mr-2">1.88</span>
                      <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">EV +5%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">Probabilità di vincita</span>
                    <span className="text-green-500">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full" style={{
                    width: '68%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-gray-100 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;