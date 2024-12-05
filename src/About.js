import React from "react";
import Dennis from "./Dennis.jpg"; // Import gambar Dennis
import Wikrama from "./wikrama.png"; // Import gambar Wikrama
import Certificate from "./sertifikat.png"; // Import gambar sertifikat
import Coding from "./coding.jpg"; // Import gambar coding
import Music from "./music.jpg"; // Import gambar music
import Games from "./games.jpg"; // Import gambar games
import Books from "./books.jpg"; // Import gambar books
import { Card } from "react-bootstrap"; // Import Card dari react-bootstrap

function About() {
  return (
    <div>
      <h1 className="text-center my-3">About Me</h1>
      
      {/* Introduction Section */}
      <Card className="my-3 p-3">
        <h6 className="text-center mb-3">Introduction</h6>
        <div className="d-flex align-items-center">
          <img
            src={Dennis}
            alt="Dennis Dwi Musti"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "120px", marginRight: "20px" }}
          />
          <p className="mb-0">
            My name is Dennis Dwi Musti, you can call me Dennis. I'm 16 years old, and I live in Bogor district, West Java, Indonesia.
          </p>
        </div>
      </Card>

      {/* Education Section */}
      <Card className="my-3 p-3">
        <h6 className="text-center mb-3">Education</h6>
        <div className="d-flex align-items-center">
          <img
            src={Wikrama}
            alt="Wikrama Bogor"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "130px", marginRight: "20px" }}
          />
          <p className="mb-0">
            Currently, I'm studying at Wikrama Bogor Vocational High School, majoring in Game and Software Development.
          </p>
        </div>
      </Card>

      {/* Certificate Section */}
      <Card className="my-3 p-3">
        <h6 className="text-center mb-3">My Certificate</h6>
        <div className="text-center">
          <img
            src={Certificate}
            alt="Certificate"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </Card>

      {/* Skills Section */}
      <Card className="my-3 p-3">
        <h6 className="text-center mb-3">My Skills</h6>
        <div className="d-flex align-items-center">
          <img
            src={Coding}
            alt="Coding"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "130px", marginRight: "20px" }}
          />
          <p className="mb-0">
            I have some skills in programming. The skills I have are HTML, CSS, PHP, Laravel, and JS.
          </p>
        </div>
      </Card>

      {/* Hobby and Interests Section */}
      <h6 className="text-center my-3">My Hobbies and Interests</h6>
      <div className="d-flex justify-content-between">
        {/* Card for Listening to Music */}
        <Card className="p-3" style={{ width: "30%" }}>
          <h6 className="text-center">Listening to Music</h6>
          <div className="text-center">
            <img
              src={Music}
              alt="Music"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </Card>

        {/* Card for Playing Games */}
        <Card className="p-3" style={{ width: "30%" }}>
          <h6 className="text-center">Playing Games</h6>
          <div className="text-center">
            <img
              src={Games}
              alt="Games"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </Card>

        {/* Card for Reading Books */}
        <Card className="p-3" style={{ width: "30%" }}>
          <h6 className="text-center">Reading Books</h6>
          <div className="text-center">
            <img
              src={Books}
              alt="Books"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </Card>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5 p-3 bg-light">
        <p className="mb-0">&copy; 2024 Dennis Dwi Musti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
