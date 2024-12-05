import React from "react";

import Project1 from "./Project1.png"; // Adjust path as necessary
import Project2 from "./Project2.png"; // Adjust path as necessary
import Project3 from "./Project3.png"; // Adjust path as necessary
import Project4 from "./Project4.png"; // Adjust path as necessary

function Projects() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">My Projects</h1>

            {/* Create a row for the projects */}
            <div className="row row-cols-1 row-cols-sm-2 g-4">
                {/* Project 1 */}
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">db_bioskop Project</h5>
                            <p className="card-text">A project related to movie databases.</p>
                            <img
                                src={Project1}
                                alt="Project 1"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Kompensasi Pegawai</h5>
                            <p className="card-text">A project for calculating employee compensation.</p>
                            <img
                                src={Project2}
                                alt="Project 2"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Membandingkan Nama</h5>
                            <p className="card-text">A project to compare the length of names.</p>
                            <img
                                src={Project3}
                                alt="Project 3"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Menghitung Pecahan Uang Lembar</h5>
                            <p className="card-text">A project to calculate the breakdown of currency notes.</p>
                            <img
                                src={Project4}
                                alt="Project 4"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Styles */}
            <style>
                {`
                .project-img {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    max-height: 300px;
                    object-fit: cover;
                }

                .project-img:hover {
                    transform: scale(1.1); /* Scales up the image by 10% */
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add a shadow for depth */
                }
                `}
            </style>
        </div>
    );
}

export default Projects;
