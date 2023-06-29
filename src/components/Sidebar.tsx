import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  BoxProps,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { RiFlashlightFill } from "react-icons/ri";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";

import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";

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
      <NavItem icon={AiOutlineHome} link="/">
        Home
      </NavItem>
      <NavItem icon={AiOutlineTeam} link="/tutor">
        Find A Tutor
      </NavItem>
      <NavItem icon={BsFolder2}>Messages</NavItem>
      <NavItem icon={BsCalendarCheck}>Library</NavItem>
      <Divider mb="4" />
      <NavItem icon={BsCalendarCheck}>Ask Shepherd</NavItem>
      <NavItem icon={BsCalendarCheck}>Performance</NavItem>
      <NavItem icon={BsCalendarCheck}>Study Plans</NavItem>
      <NavItem icon={BsCalendarCheck}>Notes</NavItem>
      <NavItem icon={BsCalendarCheck}>Flashcards</NavItem>
      <Divider mb="4" />
      <NavItem icon={BsCalendarCheck}>Pinned Notes</NavItem>
    </Flex>
  </Box>
);
