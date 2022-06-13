import  Link  from 'next/link'
import { Menu, MenuButton,MenuList,MenuItem, IconButton, Flex,  Spacer, Text} from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
const Navbar = ()=>{
    return (
        <>
         <Flex p={2} borderBottom="2px" borderColor='gray.100' boxShadow='md'>
            <Text className='navbar_heading' color='blue.500' fontSize='30px' marginLeft='25px' >Realtor</Text>
             <Spacer></Spacer>
             <Menu>
                 <MenuButton marginRight={25} as={IconButton} icon={<FcMenu/>} variant='outline'></MenuButton>
                <MenuList>
                    <Link href='/' passHref><MenuItem icon={<FcHome/>}> Home </MenuItem></Link>
                    <Link href='/search' passHref><MenuItem icon={<BsSearch/>}>Search</MenuItem></Link>
                    <Link href='/search?purpose=for-sale' passHref><MenuItem icon={<FcAbout/>}>Buy property</MenuItem></Link>
                    <Link href='/search?purpose=for-rent' passHref><MenuItem icon={<FiKey/>}>Rent Property</MenuItem></Link>
                </MenuList>
             </Menu>
         </Flex>
        </>
    )
}

export default Navbar