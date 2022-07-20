import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} by Muhammad Hajid Al Akhtar base on this{' '}
      <a href="https://github.com/craftzdog/craftzdog-homepage"> source</a>
    </Box>
  )
}

export default Footer
