import React from "react";

import "../../css/animalfeed.css";

const AnimalFeed = (props) => {
    return (
        <div className="montserrat-font">
            <div className="animal-feed-info container">
                <h2 className="h2-responsive">
                    MACHINERY AND EQUIPMENT FOR ANIMAL FEED
                </h2>
                <p className="mt-4">
                    Biomass processing is one of the most interesting challenges
                    for the present and for the years to come. Even today,
                    biomass is the 15% of primary energy use in the world: one
                    of the most important resource available to man. One way to
                    put the focus on the environment and energy savings
                </p>
                <h3 className="h3-responsive mt-5">Machines</h3>
                <p className="mt-4">
                    By clicking on the picture of each plant you can touch the
                    quality of Madina Engineering and the technical
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
                            Pellet Mill CLM 630 Xperience
                        </h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/pellet-mill-clm-630.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Crumbler</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/crumbler.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Hammer Mill</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/hammer-mill.png")}
                            alt="pellet-mill"
                        />
                    </div>
                </div>
                {/* ------------2nd Row------------ */}
                <div className="row mt-2">
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Ribbon Mixer</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/ribbon-mixer.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Paddles Mixer</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/paddles-mixer.png")}
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
                            Vertical Cooling Group
                        </h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/vetical-cooling-group.png")}
                            alt="pellet-mill"
                        />
                    </div>
                </div>
                {/* ------------3rd Row------------ */}
                <div className="row mt-2">
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">
                            Horizontal Cooler
                        </h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/horizontal-cooler.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Vibrating Sifter</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/vibrating-sifter.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Rotary Screener</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/rotary-screener.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">STHT Processor</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/stht-processor.png")}
                            alt="pellet-mill"
                        />
                    </div>
                </div>
                {/* ------------4th Row------------ */}
                <div className="row mt-2">
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Super Sanitizer</h5>
                        <img
                            className="card-img-top"
                            src={require("../../images/sectors/super-sanitizer.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">
                            Vacuum Fat Addition
                        </h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/vacuum-fat-addition.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">
                            Continuous Cold Fat Addition
                        </h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/continuous-cold-fat-addition.png")}
                            alt="pellet-mill"
                        />
                    </div>
                    <div className="card animal-feed-card col-sm mr-2">
                        <h5 className="h5-responsive mb-5">Molasses Mixer</h5>
                        <img
                            className="card-img-top "
                            src={require("../../images/sectors/molasses-mixer.png")}
                            alt="pellet-mill"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalFeed;
