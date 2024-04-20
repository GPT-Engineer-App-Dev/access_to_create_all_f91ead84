import React from 'react';
import { Box, Button, Container, Flex, Heading, List, ListItem, Text, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <InputGroup w="300px" style={{ marginLeft: 'auto' }}>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search menus" />
          </InputGroup>
        </Flex>
        <Box>
          <Heading as="h1" size="lg" mb={4}>
            Menus
          </Heading>
          <Button leftIcon={<FaPlus />} colorScheme="blue" style={{ marginBottom: '20px' }}>
            Create New Menu
          </Button>
        </Box>
        <List spacing={3} style={{ marginTop: '20px' }}>
          {/* Dummy data for menus */}
          <ListItem key="1" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Breakfast Specials</Text>
            <Text color="gray.600">5 products</Text>
          </ListItem>
          <ListItem key="2" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Lunch Favorites</Text>
            <Text color="gray.600">8 products</Text>
          </ListItem>
          <ListItem key="3" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Dinner Picks</Text>
            <Text color="gray.600">7 products</Text>
          </ListItem>
        </List>
      </Container>
    </Flex>
  );
};

export default Index;