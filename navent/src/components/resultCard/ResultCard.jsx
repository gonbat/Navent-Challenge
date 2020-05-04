import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ResultCard.css";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Input,
  BorderTop,
} from "@material-ui/core";
var moment = require("moment");
const ResultCard = () => {
  // let result = props.result;
  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.data.favorites);
  const timePass = (publish_date) => {
    let now = moment();
    let pDay = moment(publish_date, "DD-MM-YYYY");
    let days = now.diff(pDay, "days");
    return `Publicado hace ${days} dias`;
  };
  return (
    <Card className='result-card-super-highligthted'>
      <CardContent className='item-list'>
        <div className='container-info'>
          <Typography className='title-item'>
            Si vas a utilizar un pasaje de Lorem Ipsum, necesitás esta izar un
            pasaje de Lorem Ipsum, necesitás esta
          </Typography>
          <div className='ubication-title'>
            <p>Juan Francisco Seguí 3900, Palermo Chico, Palermo</p>
          </div>
          <Typography className='description'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta)
          </Typography>
          <div className='price-info'>
            <Input placeholder='Ingrese un precio' type='number'></Input>

            <Typography className='sub-price'>$/m23.680</Typography>
          </div>
          <CardActions className='footer-item'>
            <div className='amenities-content'>
              <ul>
                <li>380 m2</li>
                <li>3 Dormitorios</li>
                <li>2 Baños</li>
                <li>2 Cocheras</li>
              </ul>
            </div>
            <Button size='small'>CONTACTAR</Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};
export default ResultCard;
