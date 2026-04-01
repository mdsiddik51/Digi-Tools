const Plans = () => {
  return (
    <div className="md:pt-10 pt-5 w-11/12 mx-auto pb-6 ">
      <div className="text-center space-y-4">
        <h1 className="text-[#101727] font-extrabold text-3xl md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="md:pt-10 pt-3 grid grid-cols-1 md:grid-cols-3 gap-10  md:gap-5 ">
        <div className="p-6 bg-[#F2F2F2] rounded-lg ">
          <div className="pt-6">
            <h4 className="text-[#101727] font-bold text-2xl">Starter</h4>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>

          <div className="pt-6 pb-6">
            <h1 className="text-[40px] font-bold text-[#101727]">
              $0<small className="text-[#627382] text-[20px]">/month</small>
            </h1>
          </div>

          <div className="pb-4 md:pb-10">
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">
                Access to 10 free tools
              </p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">Basic templates</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">Community support</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">1 project per month</p>
            </h3>
          </div>

          <div className="pt-6 md:pt-10">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-4 w-full font-bold text-white rounded-full">
              Get Started Free
            </button>
          </div>
        </div>

        {/* card - 2 */}

        <div className="p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-lg">
            <div className="text-center">
                <span className="text-[#BB4D00] relative -top-9.5 rounded-full p-2 bg-[#FEF3C6]">Most Popular</span>
            </div>
          <div>
            <h4 className="text-white font-bold text-2xl">Starter</h4>
            <p className="text-white/50">Perfect for getting started</p>
          </div>

          <div className="pt-6 pb-6">
            <h1 className="text-[40px] font-bold text-white">
              $0<small className="text-white/50 text-[20px]">/month</small>
            </h1>
          </div>

          <div className="pb-4 md:pb-10">
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-white"></i>
              </small>
              <p className="font-medium text-white">
                Access to 10 free tools
              </p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-white"></i>
              </small>
              <p className="font-medium text-white">Basic templates</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-white"></i>
              </small>
              <p className="font-medium text-white">Community support</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-white"></i>
              </small>
              <p className="font-medium text-white">1 project per month</p>
            </h3>
          </div>

          <div className="pt-6 md:pt-10">
            <button className="bg-white rounded-full w-full py-2 px-4" >
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  font-bold"> Get Started Free</span>
            </button>
          </div>
        </div>

        {/* card - 3 */}

        <div className="p-6 bg-[#F2F2F2] rounded-lg">
          <div className="pt-6">
            <h4 className="text-[#101727] font-bold text-2xl">Starter</h4>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>

          <div className="pt-6 pb-6">
            <h1 className="text-[40px] font-bold text-[#101727]">
              $0<small className="text-[#627382] text-[20px]">/month</small>
            </h1>
          </div>

          <div className="pb-4 md:pb-10">
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">
                Access to 10 free tools
              </p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">Basic templates</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">Community support</p>
            </h3>
            <h3 className="flex items-center gap-1">
              <small>
                <i className="fa-solid fa-check text-[#30B868]"></i>
              </small>
              <p className="font-medium text-[#627382]">1 project per month</p>
            </h3>
          </div>

          <div className="pt-6 md:pt-10">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-4 w-full font-bold text-white rounded-full">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
