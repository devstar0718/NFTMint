import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Body({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
      width="100vw"
      height="90vh"
    >
      {children}
    </Flex>
  );
}
