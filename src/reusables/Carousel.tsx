import {
  Box,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { TbPentagonFilled } from "react-icons/tb";

// Settings for the slider
const settings = {
  //   dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "0" });

  // These are the images used in the slide
  const cards = [
    {
      id: 1,
      text: "You've scored a total of of 65% in all quizzes this week",
      icon: <TbPentagonFilled size={40} />,
    },
    {
      id: 2,
      text: "You are on a 3 day streak",
      sub: "Complete a flash deck to make it 4",
      icon: <AiTwotoneThunderbolt color="orange" size={40} />,
    },
    {
      id: 3,
      text: "You spent 5 hours learning this week",
      sub: "spend a little extra time learning",
      icon: <BsFire color="orange" size={40} />,
    },
  ];

  return (
    <Box
      position={"relative"}
      //   height={"600px"}
      width={"full"}
      //   overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        background={"none"}
        display={{ base: "none", md: "flex" }}
        // colorScheme="messenger"
        // borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoIosArrowBack />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        background={"none"}
        display={{ base: "none", md: "flex" }}
        // colorScheme="messenger"
        // borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoIosArrowForward />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box textAlign={"center"} p={4}>
            <Box
              width={24}
              height={24}
              rounded={"full"}
              background={"#fff"}
              margin={"0 auto"}
              boxShadow="md"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {card.icon}
            </Box>
            <Text fontSize={{ base: "x-small", md: "sm" }} fontWeight={"bold"} mt={3}>
              {card.text}
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.900")}
              fontSize={{ base: "x-small", md: "sm" }}
            >
              {card.sub}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
