import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Header.css";
import { ReactComponent as Logo } from "./SVG/logo.svg";
import { ReactComponent as Menu } from "./SVG/menu.svg";

export default class Header extends Component {
    render() {
        return (
            <Grid container className="header__main">
                <Grid xs={11} item className="header__box">
                    <Logo />
                    <div className="header__box__title">{this.props.title ? this.props.title : "تعریف نشده"}</div>
                    <Menu />
                </Grid>
            </Grid>
        );
    }
}
