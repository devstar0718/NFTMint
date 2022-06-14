import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
    >
      {children}
    </Flex>
  );
}
