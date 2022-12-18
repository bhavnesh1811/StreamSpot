import React from "react";
import logo from "../logo/logo-no-background.png";
import {
  Box,
  Flex,
  InputLeftElement,
  Button,
  InputGroup,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";

import { QueryContext } from "../Context/QueryContextProvider";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { handleQuery, closeQuery } = useContext(QueryContext);
  const navigate = useNavigate();
  const {authState,logOutUser}=useContext(AuthContext);

  const handleSearch = (e) => {
    setTimeout(() => {
      // console.log("check");
      handleQuery(e);
    }, 3000);

    navigate("/search");
  };

  const logoClick = () => {
    navigate("/");
  };

  const callLogin=()=>{
    navigate("/login");
  }

  // const [data,setData]=useState([]);

  return (
    <>
      <Box bg={useColorModeValue("gray.400", "black")} px={6}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image style={{ height: "80px" }} src={logo} onClick={logoClick} />
          </Box>
          <Flex alignItems={"center"}>
            <Box>
              <InputGroup>
                <InputLeftElement
                  color="gray.300"
                  fontSize="1.2em"
                  children={
                    <SearchIcon
                      onClick={(e) => handleSearch(e)}
                      color="gray.500"
                    />
                  }
                />
                <Input
                  placeholder="Search Movies"
                  name="query"
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                />
                <InputRightElement
                  color="gray.500"
                  children={<CloseIcon onClick={closeQuery} />}
                />
              </InputGroup>
            </Box>

            <Stack direction={"row"} spacing={7}>
              <Button color="gray.500" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {authState.token===null?
              <Button
                leftIcon={<BiUserPlus />}
                colorScheme="teal"
                variant="solid"
                  onClick={callLogin}
              >
                SignIn
              </Button>:
              <Button
              leftIcon={<AiOutlineLogout />}
              colorScheme="teal"
              variant="solid"
                onClick={logOutUser}
            >
              {authState.username || "Logout"}
            </Button>
}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
