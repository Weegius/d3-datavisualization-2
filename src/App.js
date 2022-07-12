import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import VisualOne from "./components/visualOne";
import VisualThree from "./components/visualThree";
import VisualTwo from "./components/visualTwo";
import data from "./data/dsjson.json";

function App() {
  return (
    <Flex
      h="100vh"
      w="100%"
      justify={"center"}
      align="center"
      bg={"#001219"}
    >
      <Accordion color={'white'}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are the top paying Data Scientist Job Position Names?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VisualOne />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are the lowest paying Entry Level Data Scientist Job Position Names?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VisualTwo />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Highest Paying Executive Level Data Scientist Job Position Names
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VisualThree />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default App;
