import React from 'react';
import { Box, Button, Container, Flex, Heading, List, ListItem, Text, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Modifiers = () => {
  return (
    <Flex h="100vh">
      <Navigation />
      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <Heading as="h1" size="lg">
            Modifiers
          </Heading>
          <InputGroup w="300px" style={{ marginLeft: 'auto' }}>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input placeholder="Search modifiers" />
          </InputGroup>
        </Flex>
        <Button leftIcon={<FaPlus />} colorScheme="blue" mb={4} onClick={() => {}}>
          Create New Modifier
        </Button>
        <List spacing={3}>
          {/* Dummy data for modifiers */}
          <ListItem key="1" p={3} bg="gray.100" d="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold">Option 1</Text>
            <Text color="gray.600">Details</Text>
          </ListItem>
        </List>
      </Container>
    </Flex>
  );
};

export default Modifiers;