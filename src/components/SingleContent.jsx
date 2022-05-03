import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function SingleContent({ title, description }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <article className="content">
      <header>
        <h3>{title}</h3>

        <button onClick={() => setShowContent(!showContent)} className="btn">
          {showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showContent && <p>{description}</p>}
    </article>
  );
}

export default SingleContent;
