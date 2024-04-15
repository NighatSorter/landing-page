/** @jsx jsx */
import {
  jsx,
  Container,
  Grid,
  Box,
  Flex,
  Heading,
  Text

} from 'theme-ui';
import support01 from 'assets/images/support01.svg';
import support02 from 'assets/images/support02.svg';
import support03 from 'assets/images/support03.svg';
// import rightArrow from 'assets/images/icons/right-arrow.png';
import SectionHeading from 'components/section-heading';
import { useTranslation } from 'react-i18next'



const Support = () => {
  const {t} = useTranslation();
  let count = 0;
  let style = {}
  const data = [
    {
      id: 1,
      icon: support01,
      title: t('Feature-Title-01'),
      description: t('Feature-Description-01'),
    },
    {
      id: 2,
      icon: support02,
      title: t('Feature-Title-02'),
      description: t('Feature-Description-02'),
    },
    {
      id: 3,
      icon: support03,
      title: t('Feature-Title-03'),
      description: t('Feature-Description-03'),
    },
  ];
  return (
    <Box as="section" id="whyhjz" sx={styles.section}>
      <Container>
        <div style={{position:'relative'}}>
      <SectionHeading className="header-section "
              sx={styles.heading}
              title={t("Feature-Title")}
            />
           {/* <hr className="hor-line-support"/> */}
           </div>
        <Grid sx={styles.grid}>
          {data?.map((item) => {
            count = count + 1
            if (count === 2){
              style = {
                    alignItems: "revert",
                    flexDirection: "column-reverse",
                    paddingTop: '30px'
                  }
            }else{
              style = {}
            }
            return (
              <Flex key={item.id} sx={styles.supportItem} style={style}>
                <Flex as="figure" sx={styles.media}>
                  {/* <Image src={item?.icon} alt={item?.title} /> */}
                  <img  src={item?.icon} alt={item?.title} />
                </Flex>
                <Box sx={styles.content}>
                  <Heading className="sub-header-font" style={{ paddingTop:'20px'}}>
                    {item?.title} 
                  </Heading>
                  <Text as="p" className="font-family" >{item?.description}</Text>
                </Box>
              </Flex>
            )}
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;

const styles = {
  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
    backgroundColor: "#FFF0E5"
  },
  grid: {
    gap: ['60px 60px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(3, 340px)',
    ],
  },
  supportItem: {
    border: "2px solid #FE6A00",
    borderRadius: "15px",
    backgroundColor: '#FFFFFF',
    // borderRadius: 7,
    flexDirection: ['column', null, null, null, null, 'column'],
    alignItems: 'flex-start',
    // p: ['25px 25px 20px', null, null, null, '10px 20px', '45px 40px 50px'],
    p: ['0px 10px 10px 10px', null, null, null, '10px 20px', '20px 10px 20px'],

    transition: '0.3s ease-in-out 0s',
    ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 15px 60px rgba(63, 90, 130, 0.12)',
    },
  },
  media: {
    // margin:"5% 0px",
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: '-10px',
    marginTop: '-10px',

    // mr: [6],
    // mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%']
    },
    height:'240px'
  },
  content: {
    mt: ['0px'],
    padding: ['0px','10px','0px','10px'],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: '#000033',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: '#000033',
      mt: [3],
    },
  },
};
