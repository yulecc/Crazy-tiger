import React from "react";
import {
  Container,
  Center,
  Box,
  Image,
  Text,
  Stack,
  VStack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";
const FaqText: React.FC = ({ children }) => {
  return <Text fontSize="xl">{children}</Text>;
};

const faqList = [
  { title: "What blockchain akai will be?", content: "Cardano." },
  { title: "When mint?", content: "7 April 2022." },
  {
    title: "What wallets are supported?",
    content:
      "Daedalus, Nami, Yoroi, CCVault, Flint. Exchange wallets are NOT supported.",
  },
  { title: `What's the price?`, content: "45 ADA." },
  { title: "How many akai to be mint?", content: "3500" },
  {
    title: "How many can i mint?",
    content: "No limit, but max 5 per transaction.",
  },
  {
    title: "Is there a whitelist?",
    content: "Yes, join the discord to learn more.",
  },
];

const Faq = () => {
  return (
    <>
      <Box id="faq">
        <ScrollText text="AKAI-FAQ" />
      </Box>
      <Container maxW="full" py="100px" centerContent>
        <Accordion allowToggle w={{ base: "100%", md: "800px" }}>
          {faqList.map((faq, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionButton _focus={{background: 'none'}}>
                  <Box flex="1" textAlign="left" fontSize="2xl">
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <FaqText>{faq.content}</FaqText>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </>
  );
};
export default Faq;
