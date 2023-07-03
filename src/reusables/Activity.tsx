import { SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillFilePdf, AiTwotoneThunderbolt } from "react-icons/ai";
import { HiDocumentText, HiDocumentDuplicate } from "react-icons/hi";
import { PiReceiptFill } from "react-icons/pi";

import { Feeds } from "./Feeds";

export function Activity() {
  const activityFeedData = [
    {
      id: 1,
      time: "2 hrs ago",
      description: "You uploaded documenttitle.pdf to your workspace",
      documentName: "Documentationtitle.pdf",
      icon: <AiFillFilePdf size={20} color={"orange"} />,
      fileIcon: <AiFillFilePdf color={"grey"} />,
    },
    {
      id: 2,
      time: "7 hrs ago",
      description:
        "You created a new favoriteartistelisttitle.pdf to your workspace",
      documentName: "favoriteartistelist",
      icon: <HiDocumentText size={20} color={"orange"} />,
      fileIcon: <HiDocumentText color={"grey"} />,
    },
    {
      id: 3,
      time: "Yesterday 13:00",
      description:
        "You created a new flashcard deck documenttitleflash from documenttitle.pdf",
      documentName: "documenttitleflash",
      icon: <HiDocumentDuplicate size={20} color={"orange"} />,
      fileIcon: <HiDocumentDuplicate color={"grey"} />,
    },
    {
      id: 4,
      time: "17th May2023 13:00",
      description:
        "You made payment of $10.95to Leslie Peters for Chemistry lessons",
      documentName: "payment",
      icon: <PiReceiptFill size={20} color={"orange"} />,
      fileIcon: <PiReceiptFill color={"grey"} />,
    },
  ];
  return (
    <div>
      <SimpleGrid
        p={4}
        display={"flex"}
        alignItems={"center"}
        borderBottom={"1px solid #e6e6e6"}
      >
        <AiTwotoneThunderbolt color={"#4d4dff"} />
        <Text
          fontSize={{ base: "x-small", md: "sm" }}
          fontWeight={"bold"}
          marginLeft={2}
        >
          Activity Feed
        </Text>
      </SimpleGrid>

      {activityFeedData.map((activity) => (
        <Feeds
          time={activity.time}
          description={activity.description}
          documentName={activity.documentName}
          icon={activity.icon}
          fileIcon={activity.fileIcon}
        />
      ))}
    </div>
  );
}
