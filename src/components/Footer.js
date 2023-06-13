import { Box, Container, Flex, SimpleGrid, Stack, Text, Button, Image } from "@chakra-ui/react";
import logo from "../media/images/logo.jpeg";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo1 from '../media/footerlogo/Group 51457.png'
import logo2 from '../media/footerlogo/razorpay.png'
import logo3 from '../media/footerlogo/Paytm.png'


const Footer = () => {
  return (

    <Box bg={"#000000"} color="white">
      <Container as={Stack} maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={70}>
          <Stack height="100%" style={{ marginTop: '20px' }}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={0}>
              <div>
                <Image src={logo} alt="Logo" height="40px" mr={5} mt="1rem" borderRadius="full" />
              </div>
            </Text>
            <Text>About guruji astro 2 to 3 lines what guruji astro works and what is guruji astro.</Text>
            <Text>
              <Flex >
                <Box mr={8}><FontAwesomeIcon icon={faFacebookF} /></Box>
                <Box mr={8}><FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} /></Box>
                <Box mr={8}><FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} /></Box>
              </Flex>
            </Text>
            <Text>Trusted and seals
              <Flex justifyContent="flex-start" flexWrap="wrap">
                <Box mr={2} mb={2}>
                  <Image src={logo1} alt="seal 1" w="50%" />
                </Box>
                <Box mr={2} mb={2}>
                  <Image src={logo2} alt="seal 2" w="50%" />
                </Box>
                <Box mr={2} mb={2}>
                  <Image src={logo3} alt="seal 3" w="50%" />
                </Box>
              </Flex>
            </Text>

          </Stack>

          <Stack align={"flex-start"} height="100%" style={{ marginTop: '20px' }}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={3}>
              <h1 className="header" style={{ fontSize: '24px' }}>Company</h1>
            </Text>
            <Text>Home</Text>
            <Text>Privacy policy</Text>
            <Text>T&C</Text>
            <Text>Varied Payment</Text>
            <h1 className="header" style={{ fontSize: '24px' }}>Collaborate</h1>
            <Text>Clever Top</Text>
            <Text>Exotel</Text>
            <Text>Facebook</Text>
            <Text>Quora</Text>
            <Text>Google</Text>
            <Text>Youtube</Text>
          </Stack>


          <Stack align={"flex-start"} height="100%" style={{ marginTop: '20px' }}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={3}>
              <h1 className="header" style={{ fontSize: '24px' }}>Support</h1>
            </Text>
            <Text>Home</Text>
            <Text>Privacy policy</Text>
            <Text>T&C</Text>
            <Text>Varied Payment</Text>
            <h1 className="header" style={{ fontSize: '24px' }}>Important Link</h1>
            <Text>tarot Reader</Text>
            <Text>Vedic Astrology</Text>
            <Text>Palmistry</Text>
            <Text>Gemology</Text>
            <Text>Vastu</Text>
            <Text>Numerology</Text>
          </Stack>

          <Stack align={"flex-start"} height="100%">
            <form style={{ marginTop: '20px' }}>
              <input type="text" id="name" name="name" className="form" placeholder="Your Name" /><br />

              <input type="email" id="email" name="email" className="form" placeholder="Your Email" /><br />

              <textarea id="query" name="query" className="form" placeholder="Write Query"></textarea><br />
              <Button type="submit" colorScheme="green">Submit</Button>

            </form>
          </Stack>

        </SimpleGrid>
      </Container>
      <Container textAlign="center" bg="white" color="black" py={4}>
        <Text>&copy; 2023 SellerManager. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
