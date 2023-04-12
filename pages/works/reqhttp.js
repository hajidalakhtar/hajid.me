import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Reqhttp <Badge>2022</Badge>
      </Title>
      <P>
      ReqHttp adalah sebuah perangkat lunak yang dapat digunakan untuk membuat permintaan HTTP melalui command line interface (CLI). ReqHttp dirancang untuk memudahkan penggunaan dan mempercepat pengembangan API. Dalam hal ini, ReqHttp menyediakan antarmuka yang lebih mudah digunakan daripada alat pengembangan API yang lain seperti cURL.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <span>
            <Link href="https://github.com/hajidalakhtar/reqhttp" target="_blank">
            https://github.com/hajidalakhtar/reqhttp <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Golang, Viper
          </span>
        </ListItem>
      </List>

      {/* <WorkImage src="/images/works/reqhttp.png" alt="Website" /> */}

       <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/O79WoY8N12E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> 

      {/* <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
