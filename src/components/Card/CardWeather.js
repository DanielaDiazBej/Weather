import React, { Component } from 'react';
import axios from 'axios';
import './CardWeather.css';
import { Card } from 'react-bootstrap';
import City from '../City/City.js';
import Date from '../Date/DateW.js';
import Temp from '../Temp/Temp.js';
import WeatherBar from '../WeatherBar/WeatherBar.js';
import RowDetailWeather from '../RowDetailWeather/RowDetailWeather.js';
import { arrayVar } from './../../const/arrayVar';

import background from '../../resources/imgs/background.png'


class CardWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then((response) => {
                // handle success
                this.setState({
                    data: response.data
                })
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    render() {
        return (
            <Card className="o-card text-center mt-5">
                <div class="h-100">
                    {
                        this.state.data &&
                        <>
                            <Card.Img className="o-cardImage" variant="top" src={background} />
                            <Card.ImgOverlay>
                                <div>
                                    <Card.Title className="m-0">
                                       <City name={this.state.data.name} />
                                    </Card.Title>
                                    <Card.Text>
                                        <Date />
                                        <Temp Temp={this.state.data.main.temp} />
                                    </Card.Text>
                                </div>
                                <div className="o-barW">
                                    <WeatherBar weather={this.state.data.weather.main} />
                                </div>
                            </Card.ImgOverlay>
                        </>
                    }
                </div>
                <Card.Body>
                    {
                        this.state.data &&
                        <>
                            <span className="d-flex"><RowDetailWeather icon={arrayVar[0].iconVar} variableW={arrayVar[0].variableW} value={this.state.data.main.temp} /> <p>º</p></span>
                            <span className="d-flex"><RowDetailWeather icon={arrayVar[1].iconVar} variableW={arrayVar[1].variableW} value={this.state.data.main.humidity} /><p>%</p></span>
                            <span className="d-flex"><RowDetailWeather icon={arrayVar[2].iconVar} variableW={arrayVar[2].variableW} value={this.state.data.wind.speed} /><p>m/s</p></span>
                        </>
                    }
                </Card.Body>
            </Card>
        )
    }


};

export default CardWeather;