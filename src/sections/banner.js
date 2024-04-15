/** @jsx jsx */
import hjzWord from '../assets/images/Hjz-word.svg';
import { jsx, Box, Container, Text } from 'theme-ui';
// import { useStaticQuery, graphql } from 'gatsby';
import { rgba } from 'polished';
// import Img from 'components/image';
import SubscriptionForm from '../components/subscription-form';
import hjzHeader from '../assets/images/banner02.svg';
// import headerArrow from '../assets/images/headerArrow.svg';
import headerArrowEn from '../assets/images/headerArrow-en.svg';

// import paypal from 'assets/images/paypal.png';
// import google from 'assets/images/google.png';
// import dropbox from 'assets/images/dropbox.png';
import  '../assets/styles/banner.scss';
import { useTranslation } from 'react-i18next'

// const logos = [
//   {
//     name: 'Paypal',
//     src: paypal,
//   },
//   {
//     name: 'Google',
//     src: google,
//   },
//   {
//     name: 'Dropbox',
//     src: dropbox,
//   },
// ];

const Banner = () => {
  const { t } = useTranslation();
  
  // const image = useStaticQuery(graphql`
  //   query {
  //     illustration: file(relativePath: { eq: "banner.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <section id="home" sx={styles.section} >
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent} style={{marginTop: '30px'}}>
            <div  className="ar" >
            <h1 style={{lineHeight:'0.9'}}>
              <span className="header-font" style={{lineHeight: "0.8",fontSize: "2em",color: "#083c3a"}}>
                {/* {t("hjz")} */}
                <img  src={hjzWord} alt='hjz' />
              </span>
              <span className="sub-header" id="sub-head" >
                {t("ONE-STOP-SHOP")}
              </span>
            </h1>
            {/* <hr className="hor-line" /> */}


            <p className="hjz-introduction" style={{fontSize: "1em", margin: "0",padding: "0px","paddingTop": "10px",lineHeight:"1.5"}}> {t("Description-hjz")}</p>
            </div>
            <Text as="p">
            </Text>
            <SubscriptionForm  sx={styles.subscriptionForm}/>
            {/* <Flex sx={styles.sponsoredBy}>
              <Text as="span">Sponsored by:</Text>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image src={logo.src} alt={logo.name} />
                  </Flex>
                ))}
              </Flex>
            </Flex> */}
          </Box>
          <Box as="figure" id="main-image" sx={styles.bannerImage}>
            {/* <Img
              src={image.illustration.childImageSharp.fluid}
              alt="illustration"
            /> */}
          
            <img  src={hjzHeader} alt='hjz' />
          </Box>
        <div className='know-more'>
         <img  src={headerArrowEn} alt='hjz' />
         <h3 className="title-know-more">{t("know-more-title")}</h3>
        </div>
        </Box>
        {/* <div className="arrows"></div> */}

      </Container>
    </section>
  );
};

export default Banner;

const styles = {

  section: {
    backgroundColor: '#FFFFFF',
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
    gap: ['50px 50px'],
    display: ['block', null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '0.95fr 1.05fr'],
    alignItems: 'center',
    minHeight: ['auto', null, null, null, '38vh', '100vh'],
    pt: [null, null, null, 8, 0, 9, null],
    '@media only screen and (min-width:1900px)': {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, '0 auto', 0],
    maxWidth: [null, null, null, 600, 'none'],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'textSecondary',
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: 'textSecondary',
      maxWidth: [470],
      m: [null, null, null, '30px auto', 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    justifyContent:"center",
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    input: {
      outLine: 'none',
      backgroundColor: '#FFFFFF',
      border: '0 none',
      borderColor: '#FFFFFF',
      borderRadius: '0',
      borderBottom: '2px solid rgba(0, 0, 51, 0.7)',
      fontFamily: 'body',
      fontSize: [1, null, null, null, 2],
      px: [5],
      // boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('#02073E', 0.4),
        opacity: 1 /* Firefox */,
      },
      '::input:focus': {
        outLine: 'none'
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: 'center',
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
  },
  bannerImage: {
    // width:'100%',
    alignItems: 'center',
    maxWidth: '550px', // need to fix
    mt: [0, null, null, null, 0],
    img: {
      width:'100%',
      m: [null, null, null, '5 auto', 0],
    },
  },
};
