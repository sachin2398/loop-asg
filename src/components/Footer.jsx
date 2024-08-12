

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-slate-100 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold mb-4 text-white">Resources</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Widgets Gallery [New]</a></li>
                            <li><a href="#" className="hover:underline">Subscription Gamification</a></li>
                            <li><a href="#" className="hover:underline">Unbundling of Box Subscription</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Migration</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Recharge</a></li>
                            <li><a href="#" className="hover:underline">Bold</a></li>
                            <li><a href="#" className="hover:underline">Migration reviews</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Compare Apps</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Recharge vs Bold vs Loop</a></li>
                            <li><a href="#" className="hover:underline">Recharge vs Skio vs Loop</a></li>
                            <li><a href="#" className="hover:underline">Ordergroove vs Recharge vs Loop</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Integrations</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Prediko for Inventory Management</a></li>
                            <li><a href="#" className="hover:underline">Upsell Widget Designer</a></li>
                            <li><a href="#" className="hover:underline">Littledata for BFCM analytics</a></li>
                            <li><a href="#" className="hover:underline">All Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Help</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Loop Help Centre</a></li>
                            <li><a href="#" className="hover:underline">How to setup subscription on Shopify</a></li>
                        </ul>
                        <h3 className="font-bold mb-4 mt-6">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Automatic Renewal Law (ARL)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="text-sm">Country/region</div>
                        <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                            <option>USD $ | United States</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <div className="text-sm">Language</div>
                        <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                            <option>English</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <a href="#" className="text-sm px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500">Follow on shop</a>
                    </div>
                </div>

                <div className="mt-6 flex justify-center space-x-6">
                    {/* Add payment icons here as <img> elements */}
                    {/* <img src="https://via.placeholder.com/40x24" alt="Payment method" />
                    <img src="https://via.placeholder.com/40x24" alt="Payment method" />
                    <img src="https://via.placeholder.com/40x24" alt="Payment method" />
                    <img src="https://via.placeholder.com/40x24" alt="Payment method" />
                    <img src="https://via.placeholder.com/40x24" alt="Payment method" /> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
