import Link from 'next/link'
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton, Spacer } from '@chakra-ui/react'

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'

function Navbar() {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" paddingLeft="2">RealtorPal</Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BiSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey />}>For Rent</MenuItem>
                    </Link>
                </MenuList>

            </Menu>

        </Flex>
    )
}

export default Navbar