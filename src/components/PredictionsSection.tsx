import PredictionsTable from "./PredictionsTable";
const PredictionsSection = () => {
  return <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">La nostra AI lavora H24, tu ottieni il dato che conta.</h2>
          <p className="text-lg text-gray-700 text-center mb-8">Crea una singola o una multipla.  Collega limiti di stake, tagga partite, monitora il ROI in tempo reale.</p>
          
          <div className="rounded-xl overflow-hidden">
            <PredictionsTable />
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
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
        </div>
      </div>
    </section>;
};
export default PredictionsSection;