import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.responsive.css";
import "./App.css";
import Header from "../../UI/molecules/Header/Header";
import Footer from "../../UI/molecules/Footer/Footer";
import axios from "../../../utils/axios";

// import SVG
import { ReactComponent as ImageApp } from "./SVG/imageApp.svg";
import { ReactComponent as Filter } from "./SVG/filter.svg";
import { ReactComponent as Menu } from "./SVG/menu.svg";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selfWorthGet: {},
        };
    }
    async componentDidMount() {
        try {
            let { data } = await axios.get("goldon/selfworth/getSelfKnowledge", {
                // withCredentials: true,
            });
            let { session, courseTeacher, fileType, courseTime, courseTopics, icon, link, courseRecommended } = data.SelfKnowledge;
            this.setState(
                {
                    selfWorthGet: {
                        session,
                        courseTeacher,
                        fileType,
                        courseTime,
                        courseTopics,
                        icon,
                        link,
                        courseRecommended,
                    },
                },
                () => console.log(this.state.selfWorthGet)
            );
        } catch (error) {
            console.log(error);
        }
        if (this.state.selfWorthGet.fileType === 1) {
            this.state.selfWorthGet.fileType = "صوتی";
        }
    }
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
                    <Grid xs={5} item className="App__item__box" id={this.state.selfWorthGet.courseRecommended === true ? "courseRecommended" : ""}>
                        <Grid item xs={12} className="App__item__box__menu">
                            <Menu fill={this.state.selfWorthGet.courseRecommended === true ? "white" : "#5B6762"} />
                        </Grid>
                        <Grid item xs={12} className="App__item__box__header">
                            <Grid item xs={8} className="">
                                <a href="goldon/#/app/assessment">
                                    <span className="App__item__box__title">{this.state.selfWorthGet.session ? this.state.selfWorthGet.session.courseName : "عنوان تعریف نشده است"}</span>
                                    <br />
                                    <span className="App__item__box__description">{this.state.selfWorthGet.session ? this.state.selfWorthGet.session.courseDescription : "عنوان تعریف نشده است"}</span>
                                </a>
                            </Grid>
                            <Grid item xs={3} className="">
                                <span className="App__item__box__title">{this.state.selfWorthGet.icon ? this.state.selfWorthGet.icon : "آیکون موجود نیست"}</span>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className="App__item__box__info">
                            <Grid item xs={8} className="">
                                <span className="">تعداد جلسات : {this.state.selfWorthGet.session ? this.state.selfWorthGet.session.sessionCount : "عنوان تعریف نشده است"}</span>
                            </Grid>
                            <Grid item xs={3}>
                                <span>نوع فایل {this.state.selfWorthGet.fileType ? this.state.selfWorthGet.fileType : "تعریف نشده است"}</span>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className="App__item__box__time">
                            <span className="">زمان برنامه : {this.state.selfWorthGet.courseTime ? this.state.selfWorthGet.courseTime.hour + "ساعت و " + this.state.selfWorthGet.courseTime.minutes + "دقیقه" : "عنوان تعریف نشده است"}</span>
                        </Grid>
                        <Grid item xs={12} className="App__item__box__link">
                            <a>ورود به سایت {this.state.selfWorthGet.link.webSite.name ? this.state.selfWorthGet.link.webSite.name : null}</a>
                        </Grid>
                    </Grid>
                    <Grid xs={5} item className="App__item__box" id={this.state.selfWorthGet.courseRecommended === true ? "courseRecommended" : ""}>
                        <Grid item xs={12} className="App__item__box__menu">
                            <Menu fill={this.state.selfWorthGet.courseRecommended === true ? "white" : "#5B6762"} />
                        </Grid>
                        <Grid item xs={12} className="App__item__box__header">
                            <Grid item xs={8} className="">
                                <a href="goldon/#/app/assessment">
                                    <span className="App__item__box__title">{this.state.selfWorthGet.session ? this.state.selfWorthGet.session.courseName : "عنوان تعریف نشده است"}</span>
                                    <br />
                                    <span className="App__item__box__description">{this.state.selfWorthGet.session ? this.state.selfWorthGet.session.courseDescription : "عنوان تعریف نشده است"}</span>
                                </a>
                            </Grid>
                            <Grid item xs={3} className="">
                                <span className="App__item__box__title">{this.state.selfWorthGet.icon ? this.state.selfWorthGet.icon : "آیکون موجود نیست"}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid xs={12} item className="App__item">
                    <Grid xs={5.5} item className="App__item__box">
                        <span className="App__item__box__title">جذابـیـت درونـی</span>
                    </Grid>
                    <Grid xs={5.5} item className="App__item__box">
                        <span className="App__item__box__title">جذابـیـت درونـی</span>
                    </Grid>
                </Grid> */}
            </Grid>
        );
    }
}
