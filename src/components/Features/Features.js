import React, { useEffect, useRef, useState } from "react";
import "./Features.css";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`features ${isVisible ? "visible" : ""}`}
    >
      <h2 className="features-title">Why Choose Our Stock Predictor?</h2>
      <ul className="features-list">
        <li>📈 Get ML-powered stock trend predictions in seconds.</li>
        <li>⚡ Simple & intuitive interface—no trading expertise required.</li>
        <li>🔍 Supports multiple stock symbols for quick insights.</li>
        <li>💡 Remember: These are predictions, not financial guarantees.</li>
      </ul>
    </section>
  );
};

export default Features;
