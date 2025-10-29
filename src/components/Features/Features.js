import React from "react";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll"; 
import "./Features.css";

const Features = () => {
  const featureItems = [
    { content: <div>📈 Get ML-powered stock trend predictions in seconds.</div> },
    { content: <div>⚡ Simple & intuitive interface—no trading expertise required.</div> },
    { content: <div>🔍 Supports multiple stock symbols for quick insights.</div> },
    { content: <div>💡 Remember: These are predictions, not financial guarantees.</div> },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose Our Stock Predictor?</h2>

      <div className="scroll-container">
        <InfiniteScroll
          width="28rem"
          maxHeight="500px"
          negativeMargin="-1.2em"
          items={featureItems}
          itemMinHeight={120}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.7}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default Features;
