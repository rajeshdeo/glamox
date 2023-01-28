import { Box, Button, Heading, Text, useToast, VStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { emptyCart } from '../ReduxStore/CartStore/acton';
import Alert from './Alert';

export default function SuccessPayment() {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const toast = useToast()
  let alertdata = {
    title: 'Hurrah...',
    description: "Order successfully placed",
    status: 'success',
}

 useEffect(()=>{
  toast(Alert(alertdata))
  dispatch(emptyCart())
 },[])

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
        Continue Shopping
      </Button>
      </VStack>
    </Box>
  );
}