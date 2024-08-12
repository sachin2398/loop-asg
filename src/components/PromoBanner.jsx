

const PromoBanner = () => {
    return (
        <div className="bg-purple-600 text-white py-8 text-center w-full">
            <div className="flex justify-center items-center mb-4">
                <span className="text-lg mr-2">Rated</span>
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>
                <span className="text-lg ml-2">on Shopify App Store</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">This store is powered by Loop subscriptions!</h1>
            <p className="text-lg mb-6">Turn your customers into subscribers and drive recurring revenue for your DTC brand.</p>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Book a Demo
            </button>
        </div>
    );
};

export default PromoBanner;
