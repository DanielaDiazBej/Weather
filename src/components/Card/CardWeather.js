import React, {Component} from 'react';
import './CardWeather.css';
import { Card } from 'react-bootstrap';
import City from '../City/City.js';
import Date from '../Date/Date.js';
import Temp from '../Temp/Temp.js';
import WeatherBar from '../WeatherBar/WeatherBar.js';
import RowDetailWeather from '../RowDetailWeather/RowDetailWeather.js';


import background from '../../resources/imgs/background.png'


class CardWeather extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return(
        <Card className="o-card text-center mt-5">
        <div class="h-100">
            <Card.Img className ="o-cardImage" variant="top" src={background} />
            <Card.ImgOverlay>
                    <div>
                    <Card.Title className= "m-0">
                        <City/>
                    </Card.Title>
                    <Card.Text>
                        <Date/>
                        <Temp/>
                    </Card.Text>
                    </div>
                    <div className="o-barW">
                        <WeatherBar />
                    </div>
            </Card.ImgOverlay>
        </div>
        <Card.Body>
            <RowDetailWeather/>
            <RowDetailWeather/>
            <RowDetailWeather/>
        </Card.Body>
        </Card>
        )
    }


};

export default CardWeather;