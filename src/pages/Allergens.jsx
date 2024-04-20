import React from 'react';
import { Box, Button, Container, Flex, Heading, List, ListItem, Text, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Allergens = () => {
  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <Heading as="h1" size="lg">
            Allergens
          </Heading>
          <InputGroup w="300px" style={{ marginLeft: 'auto' }}>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search allergens" />
          </InputGroup>
        </Flex>
        <Button leftIcon={<FaPlus />} colorScheme="blue" mb={4} onClick={() => navigate("/create-allergen")}>
          Create New Allergen
        </Button>
        <List spacing={3}>
          {/* Dummy data for allergens */}
          <ListItem key="1" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Peanuts</Text>
            <Text color="gray.600">Common allergen</Text>
          </ListItem>
          <ListItem key="2" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Shellfish</Text>
            <Text color="gray.600">Severe reactions possible</Text>
          </ListItem>
          <ListItem key="3" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Milk</Text>
            <Text color="gray.600">Dairy allergy</Text>
          </ListItem>
        </List>
      </Container>
    </Flex>
  );
};

export default Allergens;