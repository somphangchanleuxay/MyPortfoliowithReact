import { Flex, IconButton } from "@chakra-ui/react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      className="flex-with-flex-0"
      align="center"
      justify="center"
      bg="gray.800"
      color="white"
      py={4}
      width="100%"
      bottom="0"
    >
      <IconButton
        as="a"
        href="https://github.com/somphangchanleuxay"
        target="_blank"
        aria-label="GitHub"
        icon={<FaGithub />}
        variant="ghost"
        fontSize="35px"
        marginRight="20px" // Add marginRight for spacing
      />
      <IconButton
        as="a"
        href="https://www.facebook.com/profile.php?id=61553338895071"
        target="_blank"
        aria-label="Facebook"
        icon={<FaFacebook />}
        variant="ghost"
        fontSize="35px"
        marginRight="20px" // Add marginRight for spacing
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/somphang-chanleuxay-47227b15a/"
        target="_blank"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        variant="ghost"
        fontSize="35px"
      />
    </Flex>
  );
}

export default Footer;
