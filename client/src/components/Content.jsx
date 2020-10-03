import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import AnimalFeed from "./Sectors/AnimalFeed";
import DiesRolls from "./Sectors/DiesRolls";
import Fertilizers from "./Sectors/Fertilizers";
import Recycling from "./Sectors/Recycling";
import WoodBiomass from "./Sectors/WoodBiomass";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/sectors/animal-feed" component={AnimalFeed} />
                <Route path="/sectors/wood-biomass" component={WoodBiomass} />
                <Route path="/sectors/fertilizers" component={Fertilizers} />
                <Route path="/sectors/dies-rolls" component={DiesRolls} />
                <Route path="/sectors/recycling" component={Recycling} />
            </Switch>
        </div>
    );
};

export default Content;
