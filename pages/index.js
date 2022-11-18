/* eslint-disable react/no-unescaped-entities */
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  // chakra,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import Image from 'next/image'

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
// })

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {/* Selamat Datang */}
        <Badge colorScheme="green">Winner</Badge> &nbsp;
        <Link href="https://bebasinfo.vercel.app/" target="_blank">
          https://bebasinfo.vercel.app/
          {/* <Button
                variant="ghost"
                colorScheme="teal"
                // leftIcon={<IoLogoGithub />}
              >
                
              </Button> */}
        </Link>
        {/* <a href='https://bebasinfo.vercel.app/'>https://bebasinfo.vercel.app/</a> */}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Muhammad Hajid Al Akhtar
          </Heading>
          <p>Fullstack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          {/* <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              objectFit="cover"
              src="/images/hajid.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box> */}
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Saya adalah Fullstack Developer, dengan pengalaman membangun berbagai
          website mengunakan Laravel, Nodejs, ReactJs. Saya didorong oleh
          hasratnya untuk memahami Teknologi secara menyeluruh. Saya menganggap
          diri saya sebagai 'siswa selamanya' yang ingin selalu memahami
          Teknologi terbaru tanpa kecuali
          {/* <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers. */}
        </Paragraph>
        <Box align="right" my={1}>
          <NextLink href="/works" passHref scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="ghost"
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Achivement
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          JUARA 2 LKS KOTA DEPOK
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          JUARA 6 BESAR EDUTECH CODING COMPETITION
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          JUARA 1 LCC LP31
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          10 BESAR KKSI KOTA DEPOK
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          JUARA SATU TEKNOLOGI TEPAT GUNA KOTA DEPOK
        </BioSection>
        <Box align="right" my={1}>
          <NextLink
            href="https://bit.ly/sertifikat-hajid"
            passHref
            scroll={false}
          >
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="ghost"
            >
              My Certificate
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          SKILL
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 4 }} gap={2}>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="red">
            Laravel
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="blue">
            PHP
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="green">
            NodeJS
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="gray">
            ExpressJS
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="yellow">
            Python
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="blue">
            ReactJS
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="green">
            VueJS
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="yellow">
            HapiJS
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="green">
            MonggoDB
          </Badge>
          <Badge p={1} pl={3} pr={3} fontSize="0.8em" colorScheme="blue">
            MYSQL
          </Badge>
          {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
          {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
          {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
          {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
          {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
        </SimpleGrid>
        {/* <Stack direction={['column', 'row']} spacing="10px">
          
        </Stack> */}
        {/* <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hajidalakhtar" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hajidalakhtar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hajid_alakhtar" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @hajid_alakhtar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/hajidalakhtar/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hajidalakhtar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/hajid_alakhtar" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hajid_alakhtar
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
