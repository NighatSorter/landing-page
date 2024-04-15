/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import { useState } from 'react';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logoHeader';
import { NavLink } from 'components/link';
import menuItems from './header.data';
// import lock from 'assets/images/icons/lock.png';
import { useTranslation } from 'react-i18next'
import '../../i18n/config';


export default function Header() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });

  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };


  const changeLanguage = async (e) => {
    i18n.changeLanguage(e.target.value)
    if(e.target.value === 'en'){
      document.documentElement.setAttribute("lang", 'ar');
      e.target.value = 'ar'
      e.target.innerHTML = "Arabic"
      document.body.style.direction = "ltr"
      //Get all the elements with en
      const ars = document.getElementsByClassName("ar");
      for(let i = 0; i < ars.length; i++){
       let a = ars[i]
        await a.classList.add("en");
        await a.classList.remove("ar");
      }
      const arsFont = document.getElementsByTagName("body");
      await arsFont[0].classList.add("en-font")
      await arsFont[0].classList.remove("ar-font")


   }else{
    document.documentElement.setAttribute("lang", 'en');
     e.target.value = 'en'
     e.target.innerHTML = "English"
     document.body.style.direction = "rtl"
     //Get all the elements with en
     const ens = document.getElementsByClassName("en");
     for(let i = 0; i < ens.length; i++){
       let a = ens[i]
       await a.classList.add("ar");
       await a.classList.remove("en");
     }
     const arsFont = document.getElementsByTagName("body");
     await arsFont[0].classList.add("ar-font")
     await arsFont[0].classList.remove("en-font")

   }
  }


  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper} >
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box id="header-en"
            as="header"
            variant="layout.header"
            className={state.isMobileMenu ? 'is-mobile-menu' : ''}
          >
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} isSticky={state.isSticky} />
                <Flex 
                 
                  as="nav"
                  sx={styles.navbar}
                  className={state.isMobileMenu ? 'navbar active' : 'navbar'}
                >
                  <Box
                    style={{justifyContent: "space-evenly"}}
                    as="ul"
                    sx={styles.navList}
                    className={state.isMobileMenu ? 'active' : ''}
                  >
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        
                        <NavLink
                          path={path}
                          label={t(label)}
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </Box>
                </Flex>
                <Flex sx={styles.buttonGroup}>
                  {/* <button sx={styles.login}>
                    <Image src={lock} alt="lock icon" />
                    Login
                  </button> */}
                  <Button onClick={changeLanguage} value="en" variant="text" sx={styles.getStarted}>
                    English
                  </Button>
                </Flex>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      py: [4],
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white',
      },
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        py: ['13px'],
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
    li: {
      display: 'flex',
      alignItems: 'center',
      a: {
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out 0s',
      },
    },
  },
  navList: {
    
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [null, null, null, null, '0 15px'],
    },
    '.active': {
      color: 'primary',
    },
  },
  getStarted: {
    textDecoration: 'underline !important',
    fontSize:'18px',
    textDecorationThickness: '3px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    p: ['0 16px'],
    minHeight: 45,
    ml: [6],
    display: ['none', null, null, null, 'flex'],
  },
  login: {
    backgroundColor: 'transparent',
    position: ['absolute', null, null, null, 'static'],
    color: 'text',
    fontSize: [2],
    fontWeight: 500,
    top: '50%',
    p: 0,
    transform: ['translateY(-50%)', null, null, null, 'none'],
    right: 79,
    border: 0,
    fontFamily: 'body',
    display: 'flex',
    alignItems: 'center',
    outline: 0,
    img: {
      maxWidth: 14,
      mr: 2,
    },
  },
  menuButton: {
    position: 'relative',
    right: '-6px',
    p: 0,
  },
  closeButton: {
    height: '32px',
    padding: '0',
    minHeight: 'auto',
    width: '32px',
    position: 'relative',
    right: '-10px',
    path: {
      stroke: 'text',
    },
  },
};
