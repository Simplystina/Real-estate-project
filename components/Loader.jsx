import React from 'react'
import {Spinner, Flex} from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex justifyContent='center' margin='10rem'>
         <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
      </Flex>
  )
}

export default Loader
