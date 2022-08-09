import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./Assessment.css";
import "./Assessment.responsive.css";
import Header from "../../UI/molecules/Header/Header";
import Footer from "../../UI/molecules/Footer/Footer";
import Assessment_box from "../../UI/molecules/Assessment/Assessment_box";

export default class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date().toLocaleDateString("fa-IR"),
        };
    }
    async componentDidMount() {}
    render() {
        return (
            <Grid container>
                <Header title="خودشـنـاسـی" />
                <Grid xs={12} item style={{'padding': '40px 0 60px 0'}}>
                <Assessment_box/>
                <Assessment_box/>
                <Assessment_box/>
                </Grid>
                <Footer/>
            </Grid>
        );
    }
}
