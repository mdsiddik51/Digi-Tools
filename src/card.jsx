const Card = ({ currentCard }) => {

  return (
    <div className="rounded-md bg-white border border-[#62738280] mb-5 p-5 md:p-10 w-11/12 mx-auto ">
      <div className="">
        <h1 className="text-2xl font-bold text-[#101727] pb-6 ">Your Cart</h1>

        <div className="grid gap-6">

          {currentCard.map((buycard) => (
            <div
              key={buycard.id}
              className=" shadow-sm p-2 md:p-5 flex justify-between items-center"
            >
              <div className="flex gap-4 ">
                <div className="border border-[#62738280] rounded-full p-3">
                  <img src={buycard.icon} className="w-7 h-7" alt="" />
                </div>
                <div>
                  <h1 className="font-bold  text-[16px]  md:text-[20px}">{buycard.name}</h1>
                  <small className="text-[#627382] font-medium">
                    ${buycard.price}
                  </small>
                </div>
              </div>
              <div>
                <button className="font-bold text-[13px] md:text-[16px] text-[#FF3980]">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-6">
          <h4 className="text-[#627382]">Total:</h4>
          <h2 className="font-bold text-2xl">$79</h2>
        </div>

        <div className=" flex justify-center pt-6">
          <button className="w-full font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-3 rounded-full ">
            Proceed to Checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
