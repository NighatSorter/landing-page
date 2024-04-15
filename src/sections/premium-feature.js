/** @jsx jsx */
import { jsx, Box, Container, Grid,Flex } from 'theme-ui';
// import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
// import Accordion from 'components/accordion/accordion';
// import Image from 'components/image';
// import emoji from 'assets/images/icons/emoji-2.png';
import how01 from '../assets/images/how01.svg';
import how02 from '../assets/images/how02.svg';
import how03 from '../assets/images/how03.svg';
import { useTranslation } from 'react-i18next'


// const data = [
//   {
//     title: 'Organize your project content',
//     contents: (
//       <div>
//         Get your blood tests delivered at let collect sample from the victory of
//         the managements that supplies best design system guidelines ever.
//       </div>
//     ),
//   },
//   {
//     title: 'Collaborate your documents easily',
//     contents: (
//       <div>
//         Get your blood tests delivered at let collect sample from the victory of
//         the managements that supplies best design system guidelines ever.
//       </div>
//     ),
//   },
//   {
//     title: `Build your team's knowledge base`,
//     contents: (
//       <div>
//         Get your blood tests delivered at let collect sample from the victory of
//         the managements that supplies best design system guidelines ever.
//       </div>
//     ),
//   },
// ];

const PremiumFeature = () => {
  const {t} = useTranslation();
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
    <section id="HowUseIt" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            {/* <Image
              src={image.illustration.childImageSharp.fluid}
              alt="messenger"
            /> */}
            <SectionHeading className=" how-style "
              // emoji={emoji}
              sx={styles.heading}
              title={t("How")}
              description={t("It-Work")}
            />
          </Box>
          <Box sx={styles.rightContent}>            
            <div >
              <Flex id="icon" sx={styles.step} >
                <img  sx={styles.icon} src={how01} alt={t("How-work-Title-01")} />
                <h1 sx={styles.number}>01</h1>
                <Flex>
                  <Box sx={styles.descriptionBox}>
                  <h4 style={{marginBottom:0,color:'#FE6A00'}} className="sub-header-how">{t("How-work-Title-01")}</h4>
                  <p style={{color:'#000033',marginTop:0}}>{t("How-work-Description-01")}</p>
                  </Box>
                </Flex>
              </Flex>
              <Flex id="icon" sx={styles.step}>
                <img  sx={styles.icon} src={how02} alt={t("How-work-Title-02")} />
                <h1 sx={styles.number}>02</h1>
                <Flex>
                  <Box sx={styles.descriptionBox}>
                  <h4 style={{marginBottom:0,color:'#FE6A00'}} className="sub-header-how">{t("How-work-Title-02")}</h4>
                  <p style={{color:'#000033',marginTop:0}}>{t("How-work-Description-02")}</p>
                  </Box>
                </Flex>
              </Flex>
              <Flex id="icon" sx={styles.step}>
                <img  sx={styles.icon} src={how03} alt={t("How-work-Title-03")} />
                <h1 sx={styles.number}>03</h1>
                <Flex>
                  <Box sx={styles.descriptionBox}>
                  <h4 style={{marginBottom:0, color:'#FE6A00'}} className="sub-header-how">{t("How-work-Title-03")}</h4>
                  <p style={{color:'#000033',marginTop:0}}>{t("How-work-Description-03")}</p>
                  </Box>
                </Flex>
              </Flex>
            </div>
            
            {/* <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Meet our premium features that will make you wow"
              description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
            /> */}
            {/* <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box> */}
          </Box>
        </Grid>
      </Container>
      <div sx={styles.normalBox}>
              <h4>{t("word-box")}</h4>
      </div>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  normalBox:{
    h4: {
      width:'100%',
      textAlign: 'center',
      height: '100%',
      background: '#FAFAFA',
      border: '5px solid #FE6A00',
      padding: '15px 0',
      fontSize: '1.8em'
    } 
  },
  step:{
    alignItems: "center"
  },
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  icon:{
    width:'90px',
    marginRight:'10px'
  },
  number:{
    marginRight:'10px',
    marginLeft:'10px',
    fontSize: '50px',
    fontWeight: '990',
    fontFamily: 'revert',
    color:'#000033'
  },
  descriptionBox:{
    marginLeft:'10px'

  },
  grid: {
    alignItems: 'center',
    justifyItems: "center",
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
      fontWight:'bold',
      color:'#FE6A00',
      fontSize: '3em',
      margin: "0px",
      // fontSize: [null, null, null, 20, 8, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      // fontSize: [null, null, null, 2],
      margin: "0px",
      color:'#000033',
      fontSize: '2em',
    },
    
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    position: 'relative',
    zIndex: -1,
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
  rightContent:{
    // width:'100%'
  }
};
