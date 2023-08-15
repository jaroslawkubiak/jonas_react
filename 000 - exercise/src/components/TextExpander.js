import { useState } from "react";
const styleContainer = {
  padding: "20px",
};

function ExpandBtn({ expandButtonText, collapseButtonText, expanded, buttonColor, onClick }) {
  const btnTextColor = {
    color: buttonColor,
    cursor: "pointer",
  };
  return (
    <span style={btnTextColor} onClick={onClick}>
      {expanded ? collapseButtonText : expandButtonText}
    </span>
  );
}

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Pokaż",
  collapseButtonText = "Zwiń",
  buttonColor = "#00F",
  expanded = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const displayText = isOpen
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...   `;
  return (
    <div style={styleContainer} className={className}>
      {displayText}
      {
        <ExpandBtn
          expandButtonText={expandButtonText}
          collapseButtonText={collapseButtonText}
          expanded={isOpen}
          buttonColor={buttonColor}
          onClick={handleClick}
        />
      }
    </div>
  );
}
