import  Link  from 'next/link'
import { Menu, MenuButton,MenuList,MenuItem, IconButton, Flex, Box, Spacer, Text} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
const Navbar = ()=>{
    return (
        <>
         <Flex p={2} borderBottom="2px" borderColor='gray.100' boxShadow='md'>
             <Link href=' '>
                 <Text color='blue.500' fontSize='30px' marginLeft='25px' fontFamily='monospace'>Realtor</Text>
             </Link>
             <Spacer></Spacer>
             <Menu>
                 <MenuButton marginRight={25} as={IconButton} icon={<FcMenu/>} variant='outline'></MenuButton>
                <MenuList>
                    <MenuItem icon={<FcHome/>}> Home </MenuItem>
                    <Link href='/search'><MenuItem icon={<BsSearch/>}>Search</MenuItem></Link>
                    <Link href='/search?purpose=for-sale' passHref><MenuItem icon={<FcAbout/>}>Buy property</MenuItem></Link>
                    <Link href='/search?purpose=for-rent' passHref><MenuItem icon={<FiKey/>}>Rent Property</MenuItem></Link>
                </MenuList>
             </Menu>
         </Flex>
        </>
    )
}

export default Navbar