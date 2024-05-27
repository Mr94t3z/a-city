import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'
import { Box, Heading, Text, VStack, Spacer, vars } from "../lib/ui.js";

// Uncomment this packages to tested on local server
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';


export const app = new Frog({
  assetsPath: '/',
  basePath: '/api/frame',
  ui: { vars },
  browserLocation: 'https://github.com/Mr94t3z/a-city'
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Initial frame
app.frame('/', (c) => {
  return c.res({
    image: (
      <Box
        grow
        alignVertical="center"
        backgroundColor="purple"
        padding="48"
        textAlign="center"
        height="100%"
      >
        <VStack gap="4">
          <Heading color="red" weight="900" align="center" size="32">
            A City
          </Heading>
          <Spacer size="16" />
          <Text align="center" color="white" size="18">
            Welcome to United States, choose a city to explore!
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button action="/city-1">New York</Button>,
      <Button action="/city-2">San Francisco</Button>,
      <Button action="/city-3">Chicago</Button>,
    ]
  })
})

// City 1
app.frame('/city-1', (c) => {
  return c.res({
    image: '/images/new-york.png',
    intents: [
      <Button action="/">← Back</Button>,
    ]
  })
})

// City 2
app.frame('/city-2', (c) => {
  return c.res({
    image: '/images/san-francisco.png',
    intents: [
      <Button action="/">← Back</Button>,
    ]
  })
})

// City 3
app.frame('/city-3', (c) => {
  return c.res({
    image: '/images/chicago.png',
    intents: [
      <Button action="/">← Back</Button>,
    ]
  })
})

// Uncomment this line code to tested on local server
devtools(app, { serveStatic });

export const GET = handle(app)
export const POST = handle(app)
