import { Box, Flex, Image, Stack, Text,Divider } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Freemode from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "../Components/Card";

// import {defaultSearchMovies} from "../Components/Navbar"
const premieres = [
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    id: 15,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
    id: 16,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/738x416.webp",
    id: 17,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/738x416.webp",
    id: 18,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp",
    id: 19,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/738x416.webp",
    id: 20,
  },
];
const mostPopular = [
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    id: 15,
  },
];

const seasons = [
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/f5MpOY_Tglwyv9W9lwutqg/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
    id: 15,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
    id: 16,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
    id: 17,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    id: 18,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
    id: 19,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
    id: 20,
  },
];

const originals = [
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1478x832.webp",
    id: 1,
    Genre: "DRAMA",
    Title: "Emancipation",
    Info: "Will Smith stars as an enslaved man on a journey to reunite with his family.",
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/1478x832.webp",
    Genre: "COMEDY",
    Title: "Little America",
    Info: "Eight funny and heartfelt stories about immigrants in America.",
    id: 2,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/h3TFbeh9Dz-zmR7hMf0Jcw/1478x832.webp",
    Genre: "COMEDY",
    Title: "Carpool Karaoke: The Series",
    Info: "Go on a star-studded, song-filled car ride in this Emmy®-winning series.",
    id: 3,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/ba3Q2gHzrcpC69JvKRy_bg/1478x832.webp",
    Genre: "KIDS & FAMILY",
    Title: "Puppy Place",
    Info: "Dog loving siblings Charles and Lizzie are back for a new season of foster-pup fun.",
    id: 4,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/1478x832.webp",
    Genre: "THRILLER",
    Title: " Slow Horses",
    Info: "The stakes get higher for Jackson Lamb and his team in the sly second season.",
    id: 5,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/1478x832.webp",
    Genre: "THRILLER",
    Title: "Echo 3",
    Info: "When a scientist goes missing, her husband and brother unite to find her.",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/1478x832.webp",
    Genre: "COMEDY",
    Title: "Spirited",
    Info: "Will Ferrell, Ryan Reynolds, and Octavia Spencer shine in a hilarious holiday adventure.",
    id: 7,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Ogd5vHGYkYpUIzgQCTqBXQ/1478x832.webp",
    Genre: "KIDS & FAMILY",
    Title: "Interrupting Chicken",
    Info: "Classic stories inspire creative adventures for a young chicken.",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/xEt4MZZlgE0IeQMnUSG65Q/1478x832.webp",
    Genre: "COMEDY",
    Title: "Mythic Quest",
    Info: "Dive into new opportunities with Ian, Poppy, and the MQ crew in Season 3.",
    id: 9,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
    Genre: "KIDS & FAMILY",
    Title: "Circuit Breakers",
    Info: "In the near future, students experience mysterious events.",
    id: 10,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1478x832.webp",
    Genre: "DRAMA",
    Title: "Causeway",
    Info: "Jennifer Lawrence stars as a soldier struggling to adjust back home after an injury.",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1478x832.webp",
    Genre: "DOCUMENTARY",
    Title: "Selena Gomez: My Mind & Me",
    Info: "Follow Selena’s six-year journey from darkness into a new light.",
    id: 12,
  },
];

const appleTv = [
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/ce/7b/70/ce7b7099-6a2c-9183-0da7-40fb57571a00/Bourne_Ultimatum_3840x2160_CoverArt.lsr/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/uOy_uvKZZkurSII-QkH1cg/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/8CWKYRVlULbruOTTdkrGLg/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/a4/39/be/a439be29-4c3b-278f-194f-b914d7fa5bd7/PAR_MISSION_IMPOSSIBLE_3_WW_ARTWORK_EN_3840x2160_1MF9LK000000CH.lsr/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/uAYqXpEFOAAc24vKK-dCCw/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/i3-hIW27SBl3wPL7E_j6yQ/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/4a/9c/3f/4a9c3ffb-967e-434d-4159-87c6af100b9f/Bourne_Legacy_3840x2160_CoverArt.lsr/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Video123/v4/b0/b0/3b/b0b03b51-a34c-4eef-2b2d-db25e87e2371/PAR_RON_BUR_WW_ARTWORK_EN_3840x2160_1MC8ZR000000CL.lsr/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/lZToYMV0Lfuk_UdUBl_QIA/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/ofDY_rzY40a6IueKUtbiog/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/uaSHpZb6h7ya_VYLO_kcCw/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/qOEFNUs-ZST5f22Azlc0lw/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/MrBBAvK_IzPmL1x5NOktag/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/4npuGnQJGvWXSpLsEjgtXQ/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c0/fe/b7/c0feb738-c4eb-b4eb-21f7-0ddcd32dfff6/89R30_EN_E1_artwork_CoverArt_en.lsr/738x416.webp",
    id: 15,
  },
];

const historicalDramas = [
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/jvpbfkNAZaLIN3DZJUDX8Q/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/2hSgeI8AyyKcpu_6Rhwg1w/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/ofDY_rzY40a6IueKUtbiog/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/uaSHpZb6h7ya_VYLO_kcCw/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/qOEFNUs-ZST5f22Azlc0lw/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/MrBBAvK_IzPmL1x5NOktag/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/4npuGnQJGvWXSpLsEjgtXQ/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c0/fe/b7/c0feb738-c4eb-b4eb-21f7-0ddcd32dfff6/89R30_EN_E1_artwork_CoverArt_en.lsr/738x416.webp",
    id: 15,
  },
];

const comedy = [
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/XoJp7FzEyuPeFp3nZZMHJw/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/f5MpOY_Tglwyv9W9lwutqg/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/MrBBAvK_IzPmL1x5NOktag/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/4npuGnQJGvWXSpLsEjgtXQ/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Video124/v4/c0/fe/b7/c0feb738-c4eb-b4eb-21f7-0ddcd32dfff6/89R30_EN_E1_artwork_CoverArt_en.lsr/738x416.webp",
    id: 15,
  },
];

const nonFiction = [
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/rbA884KpTpFowJZ9t08rhw/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/XtNPMhEaBU1FKkk_QK-DeA/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/q15eqXAa_XH-L0KIDkPBJA/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Ulms3rha_yDCvDVlZyYUoQ/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/h3TFbeh9Dz-zmR7hMf0Jcw/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/6kPVBOcFxH5eWRVp9Vy9BA/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/xW-YFC38wO80XQewW5Mn7A/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PzRfPYv8-A3pM1Uafiv1qQ/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/KS0pkmrVEdO4uYZA5CpRZA/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/VlRkLTAvxgEml_ZmCcmP1Q/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/MP-C7FdZjq2Clj0BSxDbXg/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/izP6zMmzs-m3VCjcOvM-DQ/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/GwU4Qm-NLXeNi7M5bxpX-g/738x416.webp",
    id: 15,
  },
];

const feature = [
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/_vkF4kzNiSCdmWsVNp0gjw/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/xwiVfxV1l5Tfy6-1uQ25_Q/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/d6sprLP3-1W-OlED4ZlzOg/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/McXcp2YSeuDh16Oph0nt6g/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/zRCSBlp0LjwClRXsjyDNYQ/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/DCj5c2CndQsWCj9zkGGa5Q/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/k-4X4dDwJrtXlsgr1VI_0w/738x416.webp",
    id: 15,
  },
];

const dramas = [
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp",
    id: 1,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp",
    id: 2,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/PWsYggMXgU6kQrxaB3MZPQ/738x416.webp",
    id: 3,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp",
    id: 4,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp",
    id: 5,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/738x416.webp",
    id: 6,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp",
    id: 7,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    id: 8,
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    id: 9,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp",
    id: 10,
  },
  {
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp",
    id: 11,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Jj8T9VNcfHfMQ4fDwp31-Q/738x416.webp",
    id: 12,
  },
  {
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    id: 13,
  },
  {
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/738x416.webp",
    id: 14,
  },
  {
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/k-4X4dDwJrtXlsgr1VI_0w/738x416.webp",
    id: 15,
  },
];

const Home = () => {
  return (
    <Box padding={"20px"}  >
      <Text margin={"20px"}>Watch Premieres for Free</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          zIndex="-1"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {premieres.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>
    
      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>Most Popular</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {mostPopular.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>Watch Entire Seasons</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {seasons.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>Latest Originals</Text>
      <Flex>
        {originals.map(({ image, id, Genre, Title, Info }) => (
          <Stack minW={"300px"} key={id}>
            <Image p={"20px"} src={image} alt={id} />
            <Text>{Genre}</Text>
            <Text>{Title}</Text>
            <Text>{Info}</Text>
          </Stack>
        ))}
      </Flex>
      <Divider borderColor={"white.300"}/>

      <Text margin={"20px"} fontWeight={"800"}>
        Inclusive With StreamSpot
      </Text>
      <Text margin={"15px"}>
        Watch unforgettable hits as a limited-time subscriber bonus.
      </Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {appleTv.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>Historical Dramas</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {historicalDramas.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>All Feature Films</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {feature.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>All Drama Series</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {dramas.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>All Comedy Series</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {comedy.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>

      <Text margin={"20px"}>All Nonfiction Series</Text>
      <Swiper 
          freeMode={true}
          grabCursor={true}
          modules={Freemode}
          className="mySwiper"
          // slidesPerView={5}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:30,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:15,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:5,
              spaceBetween:30,
            },
          }}
        >
          
        {nonFiction.map(({ image, id }) => (
          
          <SwiperSlide key={id}><MovieCard key={id} id={id} image={image}/></SwiperSlide>
          ))}
          </Swiper>

      <Divider borderColor={"white.300"} margin={"20px"}/>
      
    </Box>
  );
};

export default Home;
