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
const ResultCard = (props) => {
  let result = props.result;
  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.data.favorites);
  const timePass = (publish_date) => {
    let now = moment();
    let publi = moment(publish_date, "DD-MM-YYYY");
    let days = now.diff(publi, "days");
    return `Publicado hace ${days} dias`;
  };

  const getDestacado = () => {
    switch (result.publication_plan) {
      case "HIGHLIGHTED":
        return "Destacado";
      case "SUPERHIGHLIGHTED":
        return "Super Destacado";

      default:
        return "";
    }
  };

  const getHlight = () => {
    switch (result.publication_plan) {
      case "HIGHLIGHTED":
        return "highligthed";
      case "SUPERHIGHLIGHTED":
        return "super-highligthted";
      case "SIMPLE":
        return "no-highlighted";
      default:
        return false;
    }
  };

  return (
    <Card className={`${getHlight(result.publication_plan)}`}>
      <CardContent className='item-list'>
        <div className='container-img-carousel'>
          <div className='heart-liked'>
            <IconButton style={{ backgroundColor: "#ccc" }}>
              {/* <FavoriteIcon style={{ fill: "red" }} /> */}
              <FavoriteBorderIcon style={{ fill: "black" }} />
            </IconButton>
          </div>
          <div className='destacado'>
            <p style={{ color: "white", fontWeight: "20px" }}>{`${getDestacado(
              result.publication_plan,
            )}`}</p>
          </div>
          <img className='gil' src={result.posting_picture} alt='' />
          <div className='border'>
            <h1>{`${
              result.posting_prices[0].price.currency === "USD" ? "US" : ""
            }$${result.posting_prices[0].price.amount}`}</h1>
            {result.posting_prices[0].expenses ? (
              <p>{`+ ${
                result.posting_prices[0].expenses.currency === "USD" ? "US" : ""
              }$${result.posting_prices[0].expenses.amount} Expensas`}</p>
            ) : (
              <p>{"Sin expensas"}</p>
            )}
          </div>
        </div>

        <div className='container-info'>
          <Typography className='title-item'>{result.title}</Typography>
          <div className='ubication-title'>
            <p>{`${result.posting_location.zone} - ${result.posting_location.city}`}</p>
          </div>
          <Typography className='description'>
            {result.posting_description}
          </Typography>

          <CardActions className='footer-item'>
            <RestoreIcon />
            <h4>{timePass(result.publish_date)}</h4>
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
