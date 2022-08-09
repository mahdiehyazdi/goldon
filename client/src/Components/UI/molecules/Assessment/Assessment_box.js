import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./Assessment_box.css";
import "./Assessment_box.responsive.css";

// import svg
import { ReactComponent as ArrowLeft } from "./SVG/arrow_left.svg";
import { ReactComponent as ArrowRight } from "./SVG/arrow_right.svg";
import { ReactComponent as ImageTest } from "./SVG/image_test.svg";

export default class Assessment_box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionTitle: "عنوانی تعریف نشده است",
            selectedNumber: 0,
            countBox: 0,
            totalBox: 0,
        };
    }

    async componentDidMount() {
        if (this.state.selectedNumber === 0) {
            for (let i = 1; i <= 10; i++) {
                document.querySelector(`.Assessment__main__box__slider__form label:nth-of-type(${i})`).style.background = "#D9D9D9";
            }
        }
    }
    originalBackground() {
        for (let i = 1; i <= 10; i++) {
            document.querySelector(`.Assessment__main__box__slider__form label:nth-of-type(${i})`).style.background = "";
        }
    }
    render() {
        return (
            <Grid xs={12} item className="Assessment__main">
                <Grid xs={11} item className="Assessment__main__box">
                    <Grid xs={12} item className="Assessment__box__header">
                        <Grid xs={3} item className="Assessment__box__header__count">
                            <p>
                                {this.state.countBox} از {this.state.totalBox}
                            </p>
                        </Grid>
                        <Grid xs={9} item className="Assessment__box__header__title">
                            <p>{this.state.questionTitle}</p>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item className="Assessment__box__middle">
                        <Grid xs={7} item className="Assessment__box__description">
                            <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </Grid>
                        <Grid xs={5} item className="Assessment__box__imge">
                            <ImageTest/>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item className="Assessment__main__box__slider">
                        <ArrowLeft />
                        <form action="" className="Assessment__main__box__slider__form" onClick={this.originalBackground.bind(this)}>
                            <input type="radio" id="1" name="sld" onClick={() => this.setState({ selectedNumber: 1 })} />
                            <label for="1">1</label>
                            <input type="radio" id="2" name="sld" onClick={() => this.setState({ selectedNumber: 2 })} />
                            <label for="2">2</label>
                            <input type="radio" id="3" name="sld" onClick={() => this.setState({ selectedNumber: 3 })} />
                            <label for="3">3</label>
                            <input type="radio" id="4" name="sld" onClick={() => this.setState({ selectedNumber: 4 })} />
                            <label for="4">4</label>
                            <input type="radio" id="5" name="sld" onClick={() => this.setState({ selectedNumber: 5 })} />
                            <label for="5">5</label>
                            <input type="radio" id="6" name="sld" onClick={() => this.setState({ selectedNumber: 6 })} checked={this.state.selectedNumber === 0 || this.state.selectedNumber === 6} />
                            <label for="6">6</label>
                            <input type="radio" id="7" name="sld" onClick={() => this.setState({ selectedNumber: 7 })} />
                            <label for="7">7</label>
                            <input type="radio" id="8" name="sld" onClick={() => this.setState({ selectedNumber: 8 })} />
                            <label for="8">8</label>
                            <input type="radio" id="9" name="sld" onClick={() => this.setState({ selectedNumber: 9 })} />
                            <label for="9">9</label>
                            <input type="radio" id="10" name="sld" onClick={() => this.setState({ selectedNumber: 10 })} />
                            <label for="10">10</label>
                        </form>
                        <ArrowRight />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
