import axios from "axios";
import { Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { QueryContext } from "../Context/QueryContextProvider";
import { Link } from "react-router-dom";

const Search = () => {
  // const [searchStatus,setSearchStatus] =useState(true);
  const [data, setData] = useState([]);
  const { query } = useContext(QueryContext);
  // console.log(query);

  const getData = (query) => {
    if (query === "") {
      // console.log(query);
      axios
        .get(`https://streamspot.onrender.com/searchData`)
        .then((res) => {
          setData(res.data);
          // console.log(data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=fc759f3b&s=${query}`)
        .then((res) => {
          // console.log(res.data);
          setData(res.data.Search);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getData(query);
  },[query]);

  return (
    <div>
      <Text margin={"20px"}>Explore Popular Series and Films</Text>
      <Grid 
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={12}
        p={"20px"}
      >
        {data.map((el) => (
          <Link to={`/movies/${el.imdbID}`} key={el.Poster + Date.now() + Math.random() * el.imdbID}>
          <Image h={{base:"400px",sm:"300px",lg:"200px"}} w={{base:"100%",sm:"100%",lg:"100%"}}
            
            borderRadius={"20px"}
            src={el.Poster}
            alt={el.Poster}
          />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Search;
