import React, { useEffect } from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import Questions from 'sections/questions.js';
// import AppFeature from 'sections/app-feature';
// import Dashboard from 'sections/dashboard';
// import Pricing from 'sections/pricing';
// import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';


export default function IndexPage() {
  useEffect(() => {
    const arsFont = document.getElementsByTagName("body");
    arsFont[0].classList.add("ar-font")
  }, []);
  return (

    <Layout >
      <SEO
        title="حجز مطعم, حجز كوفي"
        description="حجز طاولة, حجز مطعم, حجز كوفي, حجز مطاعم"
      />
     
      <Banner />
      <Support />
      <PremiumFeature />
      <Questions />
      {/* <AppFeature /> */}
      {/* <Dashboard /> */}

      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Subscribe />
      
    </Layout>
  );
}
