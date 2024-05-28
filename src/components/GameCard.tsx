import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Hide,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CreditScore from "./CreditScore";
import getCropppedImgUrl from "../services/image-url";

interface GameCartProps {
  game: Game;
}

const GameCart = ({ game }: GameCartProps) => {
  return (
    <Card>
      <Image src={getCropppedImgUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCart;
