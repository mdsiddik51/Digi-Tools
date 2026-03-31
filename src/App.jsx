import Navbar from "./navbar";
import Hero from "./hero";
import Status from "./status";
import Tools from "./tools";
import { useState } from "react";
import ToolsTitles from "./tootlstitle";
import Tabs from "./tabs";
import Card from "./card";

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
      <Navbar />
      <Hero />
      <Status />
      <ToolsTitles />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "products" && <Tools toolsPromise={toolsPromise} currentCard={currentCard} setCurrentCard={setCurrentCard} />}
      {activeTab === "Cart" && <Card currentCard={currentCard} setCurrentCard={setCurrentCard} />}
    </>
  );
}

export default App;
