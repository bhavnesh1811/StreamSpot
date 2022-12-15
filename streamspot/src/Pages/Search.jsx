import axios from "axios";
import {Grid, Image, Text} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
// import {defaultSearchMovies} from "../Components/Navbar"

export const searchedMovies=()=>{

}


const Search = () => {
    // const [searchStatus,setSearchStatus] =useState(true);
   const[data,setData]=useState([]);

   const getData=()=>{
    axios
    .get(`https://streamspot.onrender.com/searchData`)
    .then((res) => {setData(res.data)})
    .catch((err) => console.error);
   }

   useEffect(()=>{
    getData()
   },[])
 


  return (
    <div>
        
        <Text margin={"20px"}>Explore Popular Series and Films</Text>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} p={"20px"} >
        {data?.map(({image}) =>
        <Image key={image} borderRadius={"20px"} src={image} alt={image}/>
        
        )}</Grid>
    </div>
  )
}

export default Search;