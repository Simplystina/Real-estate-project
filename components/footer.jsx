import { Text, Box } from "@chakra-ui/react"

const Footer = ()=>{
    return (
        <>
          <Box
          align='center' 
          padding={10} 
          color='blue.500' 
          fontWeight='semibold'>
              <Text> 2022 Realtor Inc</Text>
              <Text>Created by Dinma</Text>
          </Box>
        </>
    )
}

export default Footer