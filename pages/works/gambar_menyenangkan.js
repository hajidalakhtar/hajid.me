import {
  Container,
  Badge,
  // Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Gambar Menyenangkan <Badge>2021-</Badge>
      </Title>
      <P>
        Gambar Menyenangkan adalah sebuah aplikasi desktop yang dibuat untuk
        mengambar yang lebih Menyenangkan dengan tangan
      </P>
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, OpenCV, MediaPipe</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" /> */}
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
        // https://www.youtube.com/watch?v=&ab_channel=HajidAlakhtar
          src="https://www.youtube.com/embed/bJ5vWEfcHFU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
