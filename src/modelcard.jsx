import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, currentCard, setCurrentCard }) => {
  const [isBuy, buy] = useState(false);

  const handlebuy = () => {
    buy(true);

    const isFound = currentCard.find((card) => card.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCurrentCard([...currentCard, model]);
    toast.success("Added to cart! 🛒");
  };

  return (
    <div
      className="rounded-md border border-[#62738280]  p-6 transition-all duration-300 ease-in-out 
  hover:-translate-y-2  hover:border-[#9514FA] hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]"
    >
      <div className="h-fit">
        <div className="flex justify-between">
          <span className="rounded-full p-3 border border-[#62738280] ">
            <img className="w-5 h-5" src={model.icon} />
          </span>
          <div>
            <div
              className={`${
                model.tagType === "best-seller"
                  ? "bg-[#FEF3C6]"
                  : model.tagType === "popular"
                    ? " bg-[#9514FA70]"
                    : " bg-green-300"
              } rounded-full px-3 py-1 flex items-center justify-center`}
            >
              <span
                className={`${
                  model.tagType === "best-seller"
                    ? "text-[#BB4D00] "
                    : model.tagType.trim().toLowerCase() === "popular"
                      ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
                      : "text-green-600 "
                } `}
              >
                {model.tagType}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h1 className="text-[#101727] font-bold text-2xl ">{model.name}</h1>
        <p className="text-[#627382]">{model.description}</p>

        <h1 className="text-[#101727] font-bold text-2xl">
          {model.price}
          <small className="text-[#627382]">/mo</small>
        </h1>

        <div>
          <small className="text-[#30B868] flex gap-2 items-center">
            <i className="fa-solid fa-check"></i>
            <p className="text-[#627382]">{model.features[0]}</p>
          </small>

          <small className="text-[#30B868] flex gap-2 items-center">
            <i className="fa-solid fa-check"></i>
            <p className="text-[#627382]">{model.features[1]}</p>
          </small>

          <small className="text-[#30B868] flex gap-2 items-center">
            <i className="fa-solid fa-check"></i>
            <p className="text-[#627382]">{model.features[2]}</p>
          </small>

          <div className="text-center pt-4">
            <button
              onClick={handlebuy}
              className={`${isBuy ? "bg-green-500 text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"} rounded-full text-white font-bold w-full py-3 transition "} rounded-full text-white font-bold w-full py-3`}
            >
              {isBuy ? (
                <span className="flex items-center justify-center gap-1 ">
                  <i className="fa-solid fa-check"></i>
                  <span> Added to cart!</span>
                </span>
              ) : (
                "Buy Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
