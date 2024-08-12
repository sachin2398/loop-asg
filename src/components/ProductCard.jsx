

const ProductCard = ({ title, description, price, imageUrl }) => {
    return (
        <div className="border-2 border-[#d0d070] rounded-xl p-4 bg-[#f5f59e] flex gap-4 items-center">
            {/* Product Image */}
            <div className="relative w-24 h-24">
                <img
                    src={imageUrl}
                    alt="Black Coffee by Loop"
                    className="rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#f5df63] text-center text-lg font-semibold">
                    1
                </div>
            </div>

            {/* Product Details */}
            <div className="flex-grow">
                <h2 className="text-lg font-semibold text-[#1a541d]">{ title}</h2>
                <p className="text-sm text-[#757b6a] mt-1">
                    <span role="img" aria-label="tag">🏷️</span>{description}
                </p>
                <div className="text-xl font-semibold text-[#1a541d] mt-2">
                    {price} <span className="line-through text-sm text-gray-500">{price}</span>
                </div>
            </div>

            {/* Edit Button */}
            <div>
                <button className="bg-[#1a541d] text-white rounded-full px-4 py-2">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
