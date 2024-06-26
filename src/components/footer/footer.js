/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';
import { Link } from 'components/link';
import Logo from 'components/logo';

const menuItems = [
    // {
    //   path: '#home',
    //   label: 'Home',
    // },
    // {
    //   path: '#whyhjz',
    //   label: 'Why Hjz',
    // },
    // {
    //   path: '#HowUseIt',
    //   label: 'How use it',
    // },
    // {
    //   path: '#FAQs',
    //   label: 'FAQs',
    // }
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
           <Text as="span"><a href="/policyGuest" style={{color:"white"}}>الشروط و الاحكام  للعميل</a></Text>
            <Logo isWhite />
            <Text as="span">
              &copy; Copyright by Nighat {new Date().getFullYear()}  
            </Text>
          </Flex>
          <Flex as="ul" sx={styles.footerNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link path={item?.path}>{item?.label}</Link>

              </li>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000033',
    pt: [6],
    pb: [6],
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  footerInner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: rgba('white', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2],
      },
    },
  },
};
