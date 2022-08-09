import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Footer.css";

// import svgs
import { ReactComponent as Menu } from "./SVG/menu.svg";
import { ReactComponent as App } from "./SVG/app.svg";
import { ReactComponent as Home } from "./SVG/home.svg";
import { ReactComponent as Profile } from "./SVG/profile.svg";
import { ReactComponent as Calender } from "./SVG/calender.svg";

export default class Footer extends Component {
    render() {
        return (
            <Grid container className="footer__main">
                <Grid xs={12} item className="footer__main__box">
                    <Menu />
                    <App />
                    <Home />
                    <Calender />
                    <Profile />
                </Grid>
            </Grid>
        );
    }
}
