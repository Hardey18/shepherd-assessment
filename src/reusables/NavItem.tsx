import React from "react";
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export const NavItem = (props: any) => {
  const color = useColorModeValue("gray.600", "gray.300");
  const location = useLocation().pathname;

  const { icon, children, link } = props;
  return (
    <NavLink to={link}>
      <Flex
        align="center"
        px="4"
        py="2"
        mr="8"
        mb="4"
        borderRadius="8"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        background={
          location === link ? useColorModeValue("blue.50", "blue.900") : ""
        }
        color={
          location === link
            ? useColorModeValue("blue.500", "blue.900")
            : useColorModeValue("gray.500", "gray.900")
        }
        _hover={{
          bg: useColorModeValue("blue.100", "blue.900"),
          color: useColorModeValue("blue.900", "blue.200"),
        }}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};
