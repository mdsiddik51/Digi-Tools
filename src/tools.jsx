import { use } from "react";
import ModelCard from "./modelcard";

const Tools = ({ toolsPromise,currentCard, setCurrentCard }) => {
  const findToolsdata = use(toolsPromise);

 

  return (
    <div className=" w-11/12 mx-auto pb-5 md:pb-10">

      {/* card div */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {findToolsdata.map((model) => (
            <ModelCard key={model.id} model={model} currentCard={currentCard} setCurrentCard={setCurrentCard} />
        ))}

      </div>
      
    </div>
  );
};

export default Tools;
