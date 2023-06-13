import { Box, Flex, Heading, Image, Spacer, Tabs, TabList, Tab, Avatar, Button } from "@chakra-ui/react";
import bg from "../media/images/heading-bg.jpg";
import logo from "../media/images/logo.jpeg";
import userLogo from "../media/images/userlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMoneyBill, faUnlockAlt, faScroll, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const iconAndText = [
  { icon: faHeadphones, text: "24x7 customer support" },
  { icon: faMoneyBill, text: "100% refund if Unsatisfied" },
  { icon: faUnlockAlt, text: "Private and confidential" },
  { icon: faScroll, text: "Verified Astrologer" },
  { icon: faShieldAlt, text: "Secure Payment" },
];

function Navbar() {
  return (
    <Box
      as="nav"
      backgroundImage={`url(${bg})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="auto"
      px={6}
    >
      <Flex alignItems="top">
        <Image src={logo} alt="Logo" height="40px" mr={5} mt="1rem" borderRadius="full" />
        <Heading size="md" color="white" mt="2rem">
          Guruji
        </Heading>
        <Spacer />
        <Tabs variant="unstyled" color="white" mt="2rem">
          <TabList w="100%" justifyContent="center">
            <Tab
              sx={{
                fontSize: "xl",
                _hover: { bg: "rgba(0, 0, 0, 0.5)", fontWeight: "bold", color: "yellow" },
              }}
            >
              Home
            </Tab>
            <Tab
              sx={{
                fontSize: "xl",
                _hover: { bg: "rgba(0, 0, 0, 0.5)", fontWeight: "bold", color: "yellow" },
              }}
            >
              Call with Astrologer
            </Tab>
            <Tab
              sx={{
                fontSize: "xl",
                _hover: { bg: "rgba(0, 0, 0, 0.5)", fontWeight: "bold", color: "yellow" },
              }}
            >
              Live (Coming Soon)
            </Tab>
          </TabList>
        </Tabs>

        <Spacer />
        <Avatar size="md" name="User" src={userLogo} ml={6} mt="1rem" />
      </Flex>
      <Box textAlign="center" mt="2rem" color="white">
        <Heading size="2xl" mt="1rem">
          "Astrology for Clarity"
        </Heading>
        <Box mt={4}>Your Name is a Vedic astrologer and has expertise in vaastu and mantra therapy</Box>
        <Button colorScheme="orange" mt={4} size="xl" borderRadius="full" px={8} py={4}>
          Book a Consultation
        </Button>
      </Box>

      <Flex alignItems="center" justifyContent="center" mt="2rem">
        {iconAndText.map(({ icon, text }) => (
          <Box key={text} display="flex" alignItems="center" textAlign="center" width="100%" maxWidth="150px" mt="2rem" color="white" mb={8} mx={2} >
            <Box as={FontAwesomeIcon} icon={icon} style={{ color: "#ffffff" }} fontSize="xl" mr={2} />
            <Box ml={2} fontSize="sm" whiteSpace="wrap">
              {text}
            </Box>
          </Box>
        ))}
      </Flex>

    </Box>
  );
}

export default Navbar;
