import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title} num={index} key={el.title}>{el.text}</AccordionItem>
      ))}
    </div>
  );
}
