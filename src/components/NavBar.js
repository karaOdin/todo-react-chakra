import {Box, Flex, Heading, Image, Link} from "@chakra-ui/react";

const NavBar = ()=>{
    return(
        <>
            <Flex
                style={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: '99',
                    bottom: 0,
                    right: 0,
                }}
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="0.5rem"
            >
                <Flex align="center" mr={5}>
                    <Link to="/">
                        <Heading
                            cursor="pointer"
                            fontWeight="bold"
                            as="h1"
                            fontSize="36px"
                            letterSpacing={'-.1rem'}
                        >
                            <Image
                                loading="lazy"
                                w="150px"
                                className="main-logo"
                            ></Image>
                        </Heading>
                    </Link>
                </Flex>

            </Flex>
        </>
    );
}

export default NavBar;