import React from "react";
import { Box, Heading, Text, Image, Flex, Stack, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Intro Section */}
      <Box bgGradient="linear(to-r, teal.500, green.500)" py={20}>
        <Flex maxW="6xl" mx="auto" direction={["column", "row"]} align="center">
          <Box flex={1}>
            <Heading as="h1" size="2xl" color="white" mb={4}>
              Hi, I'm John Doe
            </Heading>
            <Text fontSize="xl" color="white">
              I'm a Full Stack Web Developer specializing in building exceptional digital experiences.
            </Text>
          </Box>
          <Box ml={[0, 10]}>
            <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTAzOTgwOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" />
          </Box>
        </Flex>
      </Box>

      {/* About Section */}
      <Box py={20}>
        <Box maxW="3xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">I'm a software engineer based in New York, NY specializing in building high-quality websites and applications. I enjoy turning complex problems into simple, beautiful and intuitive designs.</Text>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box py={20} bg="gray.50">
        <Box maxW="6xl" mx="auto">
          <Heading textAlign="center" as="h2" size="xl" mb={10}>
            My Projects
          </Heading>

          <Stack spacing={20}>
            <Flex direction={["column", "row"]} align="center">
              <Image w={["100%", "50%"]} mb={[10, 0]} src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTAzOTgwOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
              <Box ml={[0, 10]}>
                <Heading as="h3" size="lg" mb={4}>
                  Project 1
                </Heading>
                <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis pharetra dui, ac semper nulla dapibus ultrices.</Text>
                <Link href="#" color="teal.500">
                  View Project →
                </Link>
              </Box>
            </Flex>

            <Flex direction={["column", "row"]} align="center">
              <Image w={["100%", "50%"]} mb={[10, 0]} src="https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDM5ODEwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
              <Box ml={[0, 10]}>
                <Heading as="h3" size="lg" mb={4}>
                  Project 2
                </Heading>
                <Text mb={4}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Text>
                <Link href="#" color="teal.500">
                  View Project →
                </Link>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Box maxW="3xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Get In Touch
          </Heading>
          <Text fontSize="lg" mb={8}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </Text>
          <Stack direction="row" spacing={4} justify="center">
            <Link href="https://github.com/johndoe">
              <Button leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/johndoe">
              <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:johndoe@email.com">
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
                Email
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
