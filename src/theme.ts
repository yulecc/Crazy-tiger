import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'HeadingFont', sans-serif`,
  },
  config: {
    cssVarPrefix: 'tigger',
    initialColorMode: 'dark'
  },
})

export default theme