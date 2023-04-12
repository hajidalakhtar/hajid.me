import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGambarMenyenangkan from '../public/images/works/gambar_menyenangkan_eyecatch.jpeg'
import thumbPenlink from '../public/images/works/penlink_eyecatch.jpeg'
import thumbDocuCodes from '../public/images/works/docucodes_eyecatch.png'
import thumbImgMstr from '../public/images/works/imgmstr_eyecatch.png'
import thumbImgBebasinfo from '../public/images/works/bebasinfo.jpg'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="gambar_menyenangkan"
            title="Gambar Menyenangkan"
            thumbnail={thumbGambarMenyenangkan}
          >
            Amengambar yang lebih Menyenangkan dengan tangan
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="bebasinfo"
            title="Bebasinfo"
            thumbnail={thumbImgBebasinfo}
          >
            News Rss Reader 
          </WorkGridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem
            id="docu_codes"
            title="Docu Codes"
            thumbnail={thumbDocuCodes}
          >
            Documentasi untuk belajar pemrograman
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="img_mstr" thumbnail={thumbImgMstr} title="IMG MSTR">
            Sebuah webstie untuk membantu mengedit gambar mengunaka URL
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="penlink"
            title="PENLINK"
            thumbnail={thumbPenlink}
          >
            Menyingkat sebuah URL dan dapat digunakan juga untuk mengabungkan berbagai macam URL kedalam satu URL.
            {/* Music recommendation app for iOS */}
          </WorkGridItem>
        </Section>

       
      </SimpleGrid>

    
{/* 
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}
{/* 
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
