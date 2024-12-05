import React from "react";
import Dennis from "./Dennis.jpg"; // Import gambar Dennis
import "./Home.css"; // Import file CSS untuk styling

function Home() {
  return (
    <div className="home-container">
      <div className="content d-flex align-items-center">
        <img
          src={Dennis}
          alt="Dennis Dwi Musti"
          className="img-fluid rounded-circle"
          style={{ maxWidth: "150px", marginRight: "20px" }}
        />
        <div>
            <h6 className="mb-0 text-center">Hello Everyone!!!,</h6>
            <p className="mb-0">I'am Dennis Dwi Musti,</p>
            <p className="mb-0">A Junior Programmer,</p>
            <p className="mb-0">And i'am 16 years old.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
