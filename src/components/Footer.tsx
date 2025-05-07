
const Footer = () => {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© 2025 AI WIN BET</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800">Termini</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800">Gioco Responsabile</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800">Contatti</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
