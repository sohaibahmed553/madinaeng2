import React from "react";

import "../css/home.css";

import ContactForm from "./Contact/ContactForm";

const Home = (props) => {
    return (
        <div>
            <div className="row sectors">
                <div
                    className="col-lg animal-feed"
                    onClick={() => {
                        props.history.push("/sectors/animal-feed");
                    }}
                >
                    <h5 className="h5-responsive font-weight-bold text-white ">
                        ANIMAL FEED
                    </h5>
                    <div className="animal-feed-overlay"></div>
                </div>
                <div
                    className="col-lg wood-biomass"
                    onClick={() => {
                        props.history.push("/sectors/wood-biomass");
                    }}
                >
                    <h5 className="h5-responsive font-weight-bold text-white">
                        WOOD & BIOMASS
                    </h5>
                    <div className="wood-biomass-overlay"></div>
                </div>
                <div
                    className="col-lg fertilizers"
                    onClick={() => {
                        props.history.push("/sectors/fertilizers");
                    }}
                >
                    <h5 className="h5-responsive font-weight-bold text-white">
                        FERTILIZERS
                    </h5>
                    <div className="fertilizers-overlay"></div>
                </div>
                <div
                    className="col-lg recycling"
                    onClick={() => {
                        props.history.push("/sectors/recycling");
                    }}
                >
                    <h5 className="h5-responsive font-weight-bold text-white">
                        RECYCLING
                    </h5>
                    <div className="recycling-overlay"></div>
                </div>
                <div
                    className="col-lg dies-rolls"
                    onClick={() => {
                        props.history.push("/sectors/dies-rolls");
                    }}
                >
                    <h5 className="h5-responsive font-weight-bold text-white">
                        DIES & ROLLS
                    </h5>
                    <div className="dies-rolls-overlay"></div>
                </div>
            </div>
            <div className="about-info container">
                <h2 className="h2-responsive">
                    Welcome To Madina Engineering Pvt. Ltd.
                </h2>
                <p className="mt-4">
                    Madina Engineering Pvt. Ltd. is one of the best feed
                    machinery manufacturing company in Pakistan. Madina
                    Engineering is largest suppliers of Poultry Feed Plant,
                    Cattle Feed Unit & Aqua Feed Unit. Madina Engineering also
                    supplies other industrial equipment and manufacturing plant
                    of Single Super Phosphate (SSP), Bio Organic Phosphate (BOP)
                    Plant, Formulation Tanks, Oil Tanks, and Micro Nutrients
                    Plant in Pakistan.
                </p>
            </div>
            <ContactForm />
        </div>
    );
};

export default Home;
