import {
  Box,
  Flex,
  BoxProps,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { CgBriefcase } from "react-icons/cg";
import { RiMessage2Line } from "react-icons/ri";
import { BsPlayCircle } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { PiCards } from "react-icons/pi";
import { TbPinned } from "react-icons/tb";

import { NavItem } from "../reusables/NavItem";

export const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "gray.800")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex
      direction="column"
      as="nav"
      fontSize="md"
      color="gray.600"
      aria-label="Main Navigation"
      mt={12}
    >
      <NavItem icon={RiHome7Fill} link="/">
        Home
      </NavItem>
      <NavItem icon={CgBriefcase} link="/tutor">
        Find A Tutor
      </NavItem>
      <NavItem icon={RiMessage2Line}>Messages</NavItem>
      <NavItem icon={BsPlayCircle}>Library</NavItem>
      <Divider mb="4" />
      <NavItem icon={WiStars}>Ask Shepherd</NavItem>
      <NavItem icon={HiOutlineDocumentReport}>Performance</NavItem>
      <NavItem icon={TbReportAnalytics}>Study Plans</NavItem>
      <NavItem icon={CgNotes}>Notes</NavItem>
      <NavItem icon={PiCards}>Flashcards</NavItem>
      <Divider mb="4" />
      <NavItem icon={TbPinned}>Pinned Notes</NavItem>
    </Flex>
  </Box>
);
