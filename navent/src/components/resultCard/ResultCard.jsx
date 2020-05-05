import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ResultCard.css";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import RestoreIcon from "@material-ui/icons/Restore";

import descarga from "../../descarga.jpeg";
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

  const getDestacado = () => {
    switch ("r") {
      case "HIGHLIGHTED":
        return "Destacado";
      case "SUPERHIGHLIGHTED":
        return "Super Destacado";
      default:
        return undefined;
    }
  };

  const getHlight = () => {
    switch ("f") {
      case "HIGHLIGHTED":
        return "result-card-highligth result-card-highligthed";
      case "SUPERHIGHLIGHTED":
        return "result-card-highligth result-card-super-highligthted";
      case "SIMPLE":
        return "";
      default:
        return false;
    }
  };

  return (
    <Card className='result-card-super-highligthted'>
      <CardContent className='item-list'>
        <div className='container-img-carousel'>
          <div className='heart-liked'>
            <IconButton style={{ backgroundColor: "#ccc" }}>
              {/* <FavoriteIcon style={{ fill: "red" }} /> */}
              <FavoriteBorderIcon style={{ fill: "black" }} />
            </IconButton>
          </div>
          <div className='destacado'>
            <p>super-destacado</p>
          </div>
          <img className='gil' src={descarga} alt='' />
          <div classname='border'>
            <h1>$21.000</h1>
            <p>comisiones</p>
          </div>
        </div>

        <div className='container-info'>
          <Typography className='title-item'>
            Si vas a utilizar un pasaje de Lorem Ipsum, necesitás esta izar un
            pasaje de Lorem Ipsum, necesitás esta
          </Typography>
          <div className='ubication-title'>
            <p>Juan Francisco Seguí 3900, Palermo Chico, Palermo</p>
          </div>
          <Typography className='description'>
            "Sed in felis nec lorem imperdiet euismod. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar,
            mattis id orci. In ut aliquam orci. Cras vitae risus posuere,
            ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus
            et maximus. Duis non magna mattis, mattis neque eu, dictum dui.
            Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula
            odio. Integer id tempor ipsum. Phasellus maximus quam felis, id
            vulputate massa ullamcorper id."
          </Typography>

          <CardActions className='footer-item'>
            <RestoreIcon />
            <h4>Publicado hace 12 dias</h4>
            <Button className='button' size='small'>
              CONTACTAR
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};
export default ResultCard;
