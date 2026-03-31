import { use } from "react";

const Tools = ({ toolsPromise }) => {
  const findToolsdata = use(toolsPromise);
  console.log(findToolsdata);
  return (
    <div className=" pt-20 md:pt-30 w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-6xl  font-semibold text-[#101727] pb-5">
          Premium Digital Tools
        </h1>
        <span className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designedto <br /> boost your productivity and creativity.
        </span>

        <div className="pt-4 flex justify-center gap-10 pb-10">
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-2 px-6 text-white font-bold">
            Products
          </button>
          <button className="btn btn-ghost rounded-full px-6 text-[#25065D] font-medium">
            Cart (2)
          </button>
        </div>
      </div>


      {/* card div */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {findToolsdata.map((model) => (
          <div className="rounded-md border border-[#62738280] p-6 ">
            <div>
              <div className="flex justify-between">
                <span className="rounded-full p-3 border border-[#62738280] ">
                  <img className="w-5 h-5" src={model.icon} />
                </span>
                <div>
                  <span className="text-[#BB4D00] bg-[#FEF3C6] rounded-full px-3 py-1">
                    {model.tagType}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h1 className="text-[#101727] font-bold text-2xl">
                {model.name}
              </h1>
              <p className="text-[#627382]">{model.description}</p>

              <h1 className="text-[#101727] font-bold text-2xl">
                {model.price}<small className="text-[#627382]">/mo</small>
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
                  <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-bold  w-full py-3">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
