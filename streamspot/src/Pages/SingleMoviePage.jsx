import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Stack, Text, Image, Grid } from "@chakra-ui/react";

const SingleMoviePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = (id) => {
    // console.log(id);
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=fc759f3b`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  // console.log(id);

  useEffect(() => {
    getData(id);
  }, [id]);

  const {
    Actors,
    Genre,
    Country,
    BoxOffice,
    Director,
    Poster,
    Released,
    Title,
    Writer,
    imdbRating,
    Rated,
    Plot,
    Language,
  } = data;
  return (
    <div>
      <Text align={"center"}>Single Movie Details Page</Text>
      <Stack align={"center"} m={"20px"} key={imdbRating}>
        <Image w={"25%"} h={"500px"} src={Poster} alt={Actors} />
      </Stack>
      <div style={{ paddingLeft: "50px", fontWeight: "bolder" }}>
        About
        <Grid
          templateColumns={"repeat(3,1fr)"}
          gap={"20px"}
          p={"15px"}
          m={"10px"}
          fontWeight={"500"}
        >
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Text>{Title}</Text>
            <Text>{Genre}</Text>
            <Text>{Plot}</Text>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Text>Director:-{Director}</Text>
            <Text>Writer:-{Writer}</Text>
            <Text>BoxOffice:-{BoxOffice}</Text>
          </div>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "10px",
          fontWeight:"bolder"
        }}
      >
        <div style={{ paddingInline: "20px",fontWeight:"500" }}>
          Information
          <Text >
            Genre<br></br>
            {Genre}
          </Text>
          <Text>
            Released Date<br></br>
            {Released}
          </Text>
          <Text>
            Overall Rated<br></br>
            {Rated}
          </Text>
          <Text>
            Country<br></br>
            {Country}
          </Text>
        </div>
        <div style={{ paddingInline: "50px" }}>
          Languages
          <Text>
            Original Audio<br></br>
            {Language}
          </Text>
          <Text>
            Audio<br></br>
            {Language}
          </Text>
          <Text>
            Subtitles<br></br>
            {Language}
          </Text>
        </div>
        <div>
          <Text>Total Collection :- {BoxOffice}</Text>
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
