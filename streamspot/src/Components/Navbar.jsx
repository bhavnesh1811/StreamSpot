// import axios from "axios";
import logo from "../logo/logo-no-background.png";
import {
  Box,
  Flex,
  Avatar,
  InputLeftElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { QueryContext } from "../Context/QueryContextProvider";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {handleQuery, closeQuery } = useContext(QueryContext);
  const navigate = useNavigate();
  // console.log(query)
  const handleSearch = (e) => {
    setTimeout(() => {
      // console.log("check");
      handleQuery(e);
    }, 3000);

    navigate("/search");
  };

  const logoClick=()=>{
    navigate("/");
  }
  // const [data,setData]=useState([]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "black")} px={6}>
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
                <InputRightElement color="gray.500"
                  children={<CloseIcon onClick={closeQuery} />}
                />
              </InputGroup>
            </Box>

            <Stack direction={"row"} spacing={7}>
              <Button color="gray.500" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Login</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
