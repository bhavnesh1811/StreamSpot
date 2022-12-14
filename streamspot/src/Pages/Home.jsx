import { Flex ,Image,Text} from "@chakra-ui/react";
import React from "react";
import Search from "./Search";
// import {defaultSearchMovies} from "../Components/Navbar"
const sliderOne = [
  {
   " image":
      "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
  "id":1},
  {
    "image":
      "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
  "id":2},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp",
  "id":3},
  {
    "image":
      "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp",
  "id":4},
  {
    "image":
      "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
  "id":5},
  {
    "image":
      "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp",
  "id":6},
  {
    "image":
      "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
  "id":7},
  {
    "image":
      "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp",
  "id":8},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
  "id":9},
  {
    "image":
      "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
  "id":10},
  {
    "image":
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
  "id":11},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
  "id":12},
  {
    "image":
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
  "id":13},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
  "id":14},
  {
    "image":
      "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
  "id":15},
  {
    "image":
      "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
  "id":16},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/738x416.webp",
  "id":17},
  {
    "image":
      "https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/738x416.webp",
  "id":18},
  {
    "image":
      "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp",
  "id":19},
  {
    "image":
      "https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/738x416.webp","id":20
  }
  
];
const Home = () => {


  return (
    <div>
      <Text>Watch Premieres for Free</Text>
      <Flex w={"100%"} border={"5px solid red"} scrollMarginX={"200px"}>
      {sliderOne.map(({image,id})=>
      <Image key={id} w={"20%"} p={"20px"} src={image} alt={id}/>
        )}
        </Flex>
      <Search />
    </div>
  );
};

export default Home;
