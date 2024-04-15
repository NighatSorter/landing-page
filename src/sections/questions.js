/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
// import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
// import Image from 'components/image';
import Question from '../assets/images/question.svg';
import  '../assets/styles/banner.scss';
import { useTranslation } from 'react-i18next'

// import emoji from 'assets/images/icons/emoji-2.png';



const PremiumFeature = () => {
  const {t} = useTranslation();
  const data = [
    {
      title: t("FAQ-Title-01"),
      contents: (
        <div>
          {t("FAQ-Description-01")}
        </div>
      ),
    },
    {
      title: t("FAQ-Title-02"),
      contents: (
        <div>
          {t("FAQ-Description-02")}
        </div>
      ),
    },
    {
      title: t("FAQ-Title-03"),
      contents: (
        <div>
          {t("FAQ-Description-03")}
        </div>
      ),
    }
  ];
  // const image = useStaticQuery(graphql`
  //   query {
  //     illustration: file(relativePath: { eq: "messenger.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <section id="FAQs" sx={styles.section} style={{marginBottom: '30px'}}>
      <Container >
        <Grid sx={styles.grid} >
          <Box as="figure" sx={styles.illustration} style={{margin: '10px'}}>
            {/* <Image
              src={image.illustration.childImageSharp.fluid}
              alt="messenger"
            /> */}
            <img src={Question} alt="question" sx={styles.image} id="img-question"/>
          </Box>
          <Box sx={styles.rightContent} >
          <div className="ar">
            <SectionHeading 
              sx={styles.heading}
              title={t("FAQ-Title")}
              description=""
              className="header-section ar"/>
           </div>  
                <Box sx={styles.accordionGroup} >
                  <Accordion items={data} />
                </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
    color:"#119390",
    padding:'0px',
  },
  image: {
    // maxWidth:'660px'
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 40],
      color:"#FE6A00",
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    position: 'relative',
    zIndex: -1,
    display: 'flex',
    justifyContent: 'center'
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
    color:"#000033",
  },
};