import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SuccessPayment() {
  const navigate=useNavigate()
  return (
    <Box textAlign="center" py={10} px={6} margin='100px 0px'>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <VStack>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Purchase Completed
      </Heading>
      <Text color={'gray.500'}>
        Purchase Details has been send to your email address.
      </Text>
      <Button colorScheme='teal' variant='outline' onClick={()=>navigate('/')}>
        For More Shopping...
      </Button>
      </VStack>
    </Box>
  );
}