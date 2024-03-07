import React from "react";
import { Box, Heading, Text, Flex, Button, Image, Container, SimpleGrid, Stack, Icon } from "@chakra-ui/react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box as="header" bg="white" boxShadow="md">
        <Container maxW="container.lg" py={4}>
          <Flex align="center" justify="space-between">
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJib2dyYWZpJTIwbG9nb3xlbnwwfHx8fDE3MDk4MDAxMDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Webbografi Logo" h={8} />

            <Box display={{ base: "block", md: "none" }} onClick={toggle}>
              <Icon as={isOpen ? FaTimes : FaBars} w={6} h={6} />
            </Box>

            <Box display={{ base: isOpen ? "block" : "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" mt={{ base: 4, md: 0 }}>
              <Button variant="ghost" mr={4}>
                Home
              </Button>
              <Button variant="ghost" mr={4}>
                About
              </Button>
              <Button variant="ghost" mr={4}>
                Services
              </Button>
              <Button variant="ghost">Contact</Button>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box as="section" bg="gray.100" py={24}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Stack spacing={6}>
              <Heading as="h1" size="2xl">
                Modern Web Design
              </Heading>
              <Text fontSize="xl">Elevate your online presence with our cutting-edge web solutions.</Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Stack>
            <Image src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDB8fHx8MTcwOTgwMDEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" />
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={12}>
            Featured Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={6} rounded="md" boxShadow="md" _hover={{ boxShadow: "lg" }}>
              <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpY29ufGVufDB8fHx8MTcwOTgwMDEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Design" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="md" textAlign="center">
                Web Design
              </Heading>
              <Text mt={2} textAlign="center">
                Stunning, modern websites tailored to your brand.
              </Text>
            </Box>
            <Box bg="white" p={6} rounded="md" boxShadow="md" _hover={{ boxShadow: "lg" }}>
              <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzA5ODAwMTA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="md" textAlign="center">
                Web Development
              </Heading>
              <Text mt={2} textAlign="center">
                Robust, scalable web apps built with the latest tech.
              </Text>
            </Box>
            <Box bg="white" p={6} rounded="md" boxShadow="md" _hover={{ boxShadow: "lg" }}>
              <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZW8lMjBpY29ufGVufDB8fHx8MTcwOTgwMDEwNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="SEO" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="md" textAlign="center">
                SEO
              </Heading>
              <Text mt={2} textAlign="center">
                Boost your search rankings and drive organic traffic.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJib2dyYWZpJTIwbG9nbyUyMHdoaXRlfGVufDB8fHx8MTcwOTgwMDEwNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Webbografi Logo" h={8} mb={4} />
              <Text>&copy; {new Date().getFullYear()} Webbografi. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Contact Us
              </Heading>
              <Text>info@webbografi.se</Text>
              <Text>+46 123 456 789</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Follow Us
              </Heading>
              <Flex>
                <Icon as={FaFacebook} w={6} h={6} mr={4} />
                <Icon as={FaTwitter} w={6} h={6} mr={4} />
                <Icon as={FaInstagram} w={6} h={6} />
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
