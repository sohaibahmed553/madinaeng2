import React from "react";

const Recycling = (props) => {
    return (
        <div>
            <div className="montserrat-font">
                <div className="animal-feed-info container">
                    <h2 className="h2-responsive">
                        MACHINERY AND EQUIPMENT FOR RECYCLING
                    </h2>
                    <p className="mt-4">
                        The recycling of waste has become a key asset where to
                        invest Madina Engineering considers this matter very
                        seriously , projecting and producing plants for the
                        recycling of plastics and waste. Thanks to a constant
                        research, all the plants are able to reach high quality
                        standards
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
                                src={require("../../images/sectors/pellet-mill.png")}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recycling;
