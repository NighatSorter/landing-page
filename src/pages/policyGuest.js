import React from 'react'
import SEO from 'components/seo';
import Footer from 'components/footer/footer';
import './../i18n/config';
import './style.css'
export default function policyGuest() {
    // const { t, i18n } = useTranslation();

    

    return (
        <div>
            <div style={{height:"10%"}}>
                <Footer />
                {/* <Header /> */}
                
                    <main
                        sx={{
                        variant: 'layout.main',
                        }}
                    ></main>
            </div >
            <div className="container">
                 <h1 className="policy-title">الشروط والأحكام</h1>           
            </div>
           

        </div>
    )   
}


