

const Tabs = ({ activeTab, setActiveTab , currentCard }) => {


  return (
    <div className="tabs pt-4 md:pt-6 flex justify-center gap-10 pb-10">
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-2 px-6 text-white font-bold" : "rounded-full py-2 px-6 text-black font-bold bg-white"}`}
        aria-label="Products"
        defaultChecked
        onClick={() => setActiveTab("products")}
      />
      <input
        onClick={() => setActiveTab("Cart")}
        type="radio"
        name="my_tabs_1"
        className={`tab ${activeTab === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-2 px-6 text-white font-bold" : "rounded-full py-2 px-6 text-black font-bold bg-white"}`}
        aria-label={`${currentCard.length === 0 ? "Cart" : `Cart (${currentCard.length})`}`}
      />
    </div>
  );
};

export default Tabs;
