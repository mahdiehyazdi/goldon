import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Footer.css";

// import svgs
import { ReactComponent as Learn } from "./SVG/learn.svg";
import { ReactComponent as App } from "./SVG/app.svg";
import { ReactComponent as Setting } from "./SVG/settings.svg";
import { ReactComponent as Profile } from "./SVG/profile.svg";
import { ReactComponent as Calender } from "./SVG/calender.svg";
import { ReactComponent as AppHome } from "./SVG/appHome.svg";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingIcon: false,
            appIcon: false,
            calenderIcon: false,
            learnIcon: false,
            profileIcon: false,
            homeFooter: true,
        };
    }
    componentDidMount() {
        let getUrl = window.location.hash.split("/");
        if (getUrl[1] === "app" || getUrl[0] === "") {
            this.setState({ appIcon: true });
        }
        if (getUrl[1] === "setting") {
            this.setState({ settingIcon: true });
        }
        if (getUrl[1] === "profile") {
            this.setState({ profileIcon: true });
        }
        if (getUrl[1] === "learn") {
            this.setState({ learnIcon: true });
        }
        if (getUrl[1] === "celender") {
            this.setState({ calenderIcon: true });
        }
    }

    settingHandler() {
        this.setState({ settingIcon: true });
        window.location.href = "/setting";
    }

    appHandler() {
        this.setState({ appIcon: true });
        window.location.href = "/app";
    }

    profileHandler() {
        this.setState({ profileIcon: true });
        window.location.href = "/profile";
    }

    learnHandler() {
        this.setState({ learnIcon: true });
        window.location.href = "/learn";
    }

    calenderHandler() {
        this.setState({ calenderIcon: true });
        window.location.href = "/calender";
    }

    render() {
        return (
            <Grid container className="footer__main">
                <Grid xs={12} item className="footer__main__box" style={{ display: this.props.homeFooter ? "none" : "flex" }}>
                    <div onClick={this.calenderHandler.bind(this)}>
                        <Calender fill={this.state.calenderIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.calenderIcon === true ? "#0C3877" : "#9DA6AD" }}>تقویم</span>
                    </div>
                    <div onClick={this.learnHandler.bind(this)}>
                        <Learn fill={this.state.learnIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.learnIcon === true ? "#0C3877" : "#9DA6AD" }}>آموزش</span>
                    </div>
                    <div onClick={this.appHandler.bind(this)}>
                        <App stroke={this.state.appIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.appIcon === true ? "#0C3877" : "#9DA6AD" }}>برنامه ها</span>
                    </div>
                    <div onClick={this.settingHandler.bind(this)}>
                        <Setting stroke={this.state.settingIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.settingIcon === true ? "#0C3877" : "#9DA6AD" }}>تنظیمات</span>
                    </div>
                    <div onClick={this.profileHandler.bind(this)}>
                        <Profile fill={this.state.profileIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.profileIcon === true ? "#0C3877" : "#9DA6AD" }}>پروفایل</span>
                    </div>
                </Grid>

                <Grid xs={12} item className="footer__main__box__back" style={{ display: this.props.homeFooter ? "flex" : "none" }}>
                    <div onClick={this.calenderHandler.bind(this)}>
                        <Calender fill={this.state.calenderIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.calenderIcon === true ? "#0C3877" : "#9DA6AD" }}>تقویم</span>
                    </div>
                    <div onClick={this.learnHandler.bind(this)}>
                        <Learn fill={this.state.learnIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.learnIcon === true ? "#0C3877" : "#9DA6AD" }}>آموزش</span>
                    </div>
                    <div onClick={this.appHandler.bind(this)} id="App__home__icon">
                        <AppHome />
                    </div>
                    <div onClick={this.settingHandler.bind(this)} id="setting__icon__home">
                        <Setting stroke={this.state.settingIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.settingIcon === true ? "#0C3877" : "#9DA6AD" }}>تنظیمات</span>
                    </div>
                    <div onClick={this.profileHandler.bind(this)}>
                        <Profile fill={this.state.profileIcon === true ? "#0C3877" : "#9DA6AD"} />
                        <span style={{ color: this.state.profileIcon === true ? "#0C3877" : "#9DA6AD" }}>پروفایل</span>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
