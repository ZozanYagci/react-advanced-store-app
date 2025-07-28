import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router";
import { currenyTRY } from "../utils/formats";
import { useState } from "react";
import requests from "../api/apiClient";
import { useCartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(false);
  const { setCart } = useCartContext();
  function handleAddItem(productId) {
    setLoading(true);
    requests.cart
      .addItem(productId)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return (
    <Card>
      <CardActionArea component={Link} to={"/products/" + product.id}>
        <CardMedia
          sx={{ height: 160, backgroundSize: "contain" }}
          image={`http://localhost:5000/images/${product.image}`}
        ></CardMedia>

        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            color="primary.dark"
          >
            {product.title}
          </Typography>

          <Typography variant="body1" color="secondary.dark">
            {currenyTRY.format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton>
          {/* <FavoriteIcon></FavoriteIcon> */}
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </IconButton>
        <Button onClick={() => handleAddItem(product.id)}>
          {loading ? <CircularProgress size="20px" /> : "Sepete Ekle"}
        </Button>
      </CardActions>
    </Card>
  );
}
