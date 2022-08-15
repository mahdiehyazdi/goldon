import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.responsive.css";
import "./App.css";
import Header from "../../UI/molecules/Header/Header";
import Footer from "../../UI/molecules/Footer/Footer";

// import SVG
import { ReactComponent as ImageApp } from "./SVG/imageApp.svg";
import { ReactComponent as Filter } from "./SVG/filter.svg";

export default class App extends Component {
    render() {
        return (
            <Grid container>
                <Grid xs={12} item>
                    <Header backIcon="false" title="برنامه ها" />
                    <Footer homeFooter="true" />
                </Grid>
                <Grid xs={12} item className="App__Title">
                    <span>لورم ایپسوم!</span>
                    <p>لورم ایپسوم!</p>
                </Grid>
                <Grid xs={12} item style={{ display: "flex", justifyContent: "center" }}>
                    <Grid xs={11} item className="App__boxInfo">
                        <Grid xs={4} item>
                            <ImageApp />
                        </Grid>
                        <Grid xs={8} item>
                            <span>لورم ایپسوم!</span>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} item className="App__filterBox">
                    <div className="App__filterbox__filterIcon">
                        <span>فیلتر</span>
                        <Filter />
                    </div>
                    <p>مشاهده همه</p>
                </Grid>
                <Grid xs={12} item className="App__item">
                    <Grid xs={5.5} item className="App__item__box" id="courseRecommended">
                        <a href="goldon/#/app/assessment">
                            <span className="App__item__box__title">جذابـیـت درونـی</span>
                        </a>
                    </Grid>
                    <Grid xs={5.5} item className="App__item__box">
                        <span className="App__item__box__title">جذابـیـت درونـی</span>
                    </Grid>
                </Grid>
                <Grid xs={12} item className="App__item">
                    <Grid xs={5.5} item className="App__item__box">
                        <span className="App__item__box__title">جذابـیـت درونـی</span>
                    </Grid>
                    <Grid xs={5.5} item className="App__item__box">
                        <span className="App__item__box__title">جذابـیـت درونـی</span>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
