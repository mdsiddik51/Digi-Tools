const Workflow = () => {
  return (
    <div className="mt-7 md:mt-15  bg-linear-to-r from-[#4F39F6] to-[#9514FA] md:p-25 p-10">
      <div className="w-11/12 mx-auto text-center">
        <h1 className="font-extrabold md:pb-0 pb-3 text-white text-3xl md:text-[40px]">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white/50 ">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="flex gap-5 md:pt-10 pt-6 justify-center">
          <div className="rounded-full  bg-white p-3 transition-all duration-300 hover:scale-105 ">
            <button className="font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              Explore Products
            </button>
          </div>
          <button className="font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105  text-white px-4 py-3  rounded-full border border-white">
            View Pricing
          </button>
        </div>
        <div className="pt-4">
          <h5 className="text-white/50 ">
            14-day free trial • No credit card required • Cancel anytime
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
