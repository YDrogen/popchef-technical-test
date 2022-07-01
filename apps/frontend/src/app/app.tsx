// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';

import { Route, Switch, Link as RRDLink } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  HStack,
  Link,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { Recipes } from './screens/Recipes';

export function App() {
  return (
    <HStack h="100vh" w="100vw" spacing={0}>
      <Box p="15px" h="100%" w="200px" bg="gray.50">
        <VStack
          h="100%"
          w="100%"
          spacing="5px"
          divider={<StackDivider bg="gray.500" />}
        >
          <Link as={RRDLink} to="/" w="100%">
            <Button colorScheme="orange" w="100%">
              Home
            </Button>
          </Link>

          <Link as={RRDLink} to="/recipes" w="100%">
            <Button colorScheme="orange" w="100%">
              Recipes
            </Button>
          </Link>
        </VStack>
      </Box>
      <Divider bg="gray.900" orientation="vertical" />
      <h1>POPCHEF - TECHNICAL TEST</h1>
      <Switch>
        <Route path="/recipes">
          <Recipes />
        </Route>
      </Switch>
    </HStack>
  );
}

export default App;
