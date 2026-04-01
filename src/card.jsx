import { toast } from "react-toastify";

const Card = ({ currentCard, setCurrentCard }) => {
  const totalprice = currentCard.reduce((sum, item) => sum + item.price, 0);

  //  Proceed to Checkout function
  const handlepayment = () => {
    setCurrentCard([]);

    if (currentCard.length === 0) {
      toast.error("Cart is empty add items to checkout!");
      return;
    }

    toast.success("🎉 Checkout successful!");
  };

  // one item delet function

  const handleDelete = (item) => {
    const filterArray = currentCard.filter((card) => card.id !== item.id);
    setCurrentCard(filterArray);
    toast.success("Item removed from cart! 🗑");
  };

  return (
    <div
      className="rounded-md hover:shadow-[0_0_20px_rgba(149,20,250,0.5)] bg-white border border-[#62738280] mb-5 p-5 md:p-10 w-11/12 mx-auto  transition-all duration-300 ease-in-out 
  hover:-translate-y-2 hover:border-[#9514FA]"
    >
      <div className="">
        <h1 className="text-2xl font-bold text-[#101727] pb-6 ">Your Cart</h1>

        {currentCard.length === 0 ? (
          <h1 className="text-center p-4 font-bold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            No cards selected. Please select some cards.
          </h1>
        ) : (
          <>
            <div className="grid gap-6">
              {currentCard.map((buycard) => (
                <div
                  key={buycard.id}
                  className=" shadow-sm p-2 md:p-5 flex justify-between items-center transition-all duration-300 ease-in-out hover:-translate-y-2 border border-white/50 rounded-md hover:border-[#9514FA] hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]"
                >
                  <div className="flex gap-4 ">
                    <div className="border border-[#62738280] rounded-full p-3">
                      <img src={buycard.icon} className="w-7 h-7" alt="" />
                    </div>
                    <div>
                      <h1 className="font-bold  text-[16px]  md:text-[20px]">
                        {buycard.name}
                      </h1>
                      <small className="text-[#627382] font-medium">
                        ${buycard.price}
                      </small>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        handleDelete(buycard);
                      }}
                      className="font-bold transition-all  duration-300 hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-clip-text hover:text-transparent text-[13px] md:text-[16px] text-[#FF3980]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6">
              <h4 className="text-[#627382]">Total:</h4>
              <h2 className="font-bold text-2xl">${totalprice}</h2>
            </div>
          </>
        )}

        <div className=" flex justify-center pt-6">
          <button
            onClick={handlepayment}
            className="w-full font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 rounded-full   py-3 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
