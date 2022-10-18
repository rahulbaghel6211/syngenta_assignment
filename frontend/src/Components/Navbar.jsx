import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchData, setSearchData] = useState("");

  const handleSearch = () => {
    console.log(searchData);
    setSearchData("");
  }

  const navigate = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("blue")}
        px={4}
        w="90%"
        m="auto"
        borderRadius="10px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontSize="2xl"
            fontWeight="600"
            fontFamily="cursive"
            onClick={() => navigate("/")}
            cursor='pointer'
          >
          Sygenta
          </Box>

          <Box
            display="flex"
            w="60%"
            h="100%"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text
              fontSize="xl"
              fontWeight="500"
              fontStyle="italic"
              cursor="pointer"
              onClick={() => navigate("/")}
            >
            Home
            </Text>
            <Input w='30%' placeholder = "Search" onChange={(e)=> setSearchData(e.target.value)} value={searchData}></Input>
            <Button onClick={handleSearch}>Search</Button>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}