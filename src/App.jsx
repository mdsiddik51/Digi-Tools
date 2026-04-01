import Navbar from "./navbar";
import Hero from "./hero";
import Status from "./status";
import Tools from "./tools";
import { useState } from "react";
import ToolsTitles from "./tootlstitle";
import Tabs from "./tabs";
import Card from "./card";
import Steps from "./steps";
import Plans from "./plan";
import Footer from "./footer";
import Workflow from "./workflow";

// api call
const getTools = async () => {
  const responce = await fetch("/tools.json");
  return responce.json();
};

const toolsPromise = getTools();

function App() {
  // usestate for tab
  const [activeTab, setActiveTab] = useState("products");

  // usestate for cards
  const [currentCard, setCurrentCard] = useState([]);

  return (
    <>
      <Navbar currentCard={currentCard} />
      <Hero />
      <Status />
      <ToolsTitles />
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentCard={currentCard}
      />
      {activeTab === "products" && (
        <Tools
          toolsPromise={toolsPromise}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        />
      )}
      {activeTab === "Cart" && (
        <Card currentCard={currentCard} setCurrentCard={setCurrentCard} />
      )}

      <Steps />
      <Plans />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
