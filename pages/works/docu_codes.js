import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Docu Codes <Badge>2021</Badge>
      </Title>
      <P>
        Documentasi untuk belajar pemrograman dengan bahasa indonesia
      </P>
      <P>
        {/* <Link href="https://www.docu.codes/" target="_blank">
          Docu Codes <ExternalLinkIcon mx="2px" />
        </Link>
        , the founder of the agency, is my friend from the React Native
        community. I coded the design they&apos;ve sent me, which consists of
        parallax effects inspired by Apple. I&apos;ve published a video showing
        the process of building the website as a tutorial on YouTube. */}
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.docu.codes/" target="_blank">
            https://www.docu.codes/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / Vercel 
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/docucodes_eyecatch.png" alt="Website" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      {/* <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
