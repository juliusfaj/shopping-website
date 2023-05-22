import React from "react";
import { Link } from "react-router-dom";

const BeforeFooter = () => {
  return (
    <section className="before-footer">
      <div className="second-container">
        <div className="overlay">
          <p>save 20%</p>
          <p>special offer</p>
          <button>
            <Link to="/">shop now</Link>
          </button>
        </div>
      </div>

      <div className="third-container">
        <div className="overlay">
          <p>save 20%</p>
          <p>special offer</p>
          <button>
            <Link to="/">shop now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;
