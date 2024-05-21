import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Hide, Image } from "@chakra-ui/react";

interface GameCartProps {
  game: Game;
}

const GameCart = ({ game }: GameCartProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCart;
