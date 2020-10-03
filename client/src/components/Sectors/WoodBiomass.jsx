import React from "react";

const WoodBiomass = (props) => {
    return (
        <div>
            <div className="montserrat-font">
                <div className="animal-feed-info container">
                    <h2 className="h2-responsive">
                        MACHINERY AND EQUIPMENT FOR WOOD & BIOMASS
                    </h2>
                    <p className="mt-4">
                        Based on the long experience as a starting point,
                        careful looking at the future, combined with the study
                        and design of new technologies to improve production
                        processes in animal feed: this is the mix that makes
                        Madina Engineering a pioneer in the field of plants for
                        feed mills
                    </p>
                    <h3 className="h3-responsive mt-5">Machines</h3>
                    <p className="mt-4">
                        By clicking on the picture of each plant you can touch
                        the quality of Madina Engineering and the technical
                        characteristics of each machine
                    </p>
                    <br />
                    {/* ------------1st Row------------ */}
                    <div className="row">
                        <div className="card animal-feed-card col-sm mr-2">
                            <h5 className="h5-responsive mb-5">Pellet Mill</h5>
                            <img
                                className="card-img-top "
                                src={require("../../images/sectors/pellet-mill-wood-and-biomass.png")}
                                alt="pellet-mill"
                            />
                        </div>

                        <div className="card animal-feed-card col-sm mr-2">
                            <h5 className="h5-responsive mb-5">Hammer Mill</h5>
                            <img
                                className="card-img-top "
                                src={require("../../images/sectors/hammer-mill-wood-and-biomass.png")}
                                alt="pellet-mill"
                            />
                        </div>

                        <div className="card animal-feed-card col-sm mr-2">
                            <h5 className="h5-responsive mb-5">
                                Counterflow Cooler
                            </h5>
                            <img
                                className="card-img-top "
                                src={require("../../images/sectors/counterflow-cooler.png")}
                                alt="pellet-mill"
                            />
                        </div>
                        <div className="card animal-feed-card col-sm mr-2">
                            <h5 className="h5-responsive mb-5">
                                Vibrating Sifter
                            </h5>
                            <img
                                className="card-img-top "
                                src={require("../../images/sectors/vibrating-sifter.png")}
                                alt="pellet-mill"
                            />
                        </div>
                    </div>
                    {/* ------------2nd Row------------ */}
                    <div className="row mt-2">
                        <div className="card animal-feed-card col-sm mr-2">
                            <h5 className="h5-responsive mb-5">
                                Rotary Screener
                            </h5>
                            <img
                                className="card-img-top "
                                src={require("../../images/sectors/rotary-screener.png")}
                                alt="pellet-mill"
                            />
                        </div>
                        <div className="col-sm mr-2"></div>
                        <div className="col-sm mr-2"></div>
                        <div className="col-sm mr-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WoodBiomass;
