/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Container, Flex, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Startup Pack',
    subtitle: 'For the startup team who work with new come data stack',
    amount: {
      monthly: 25.99,
      annual: 25.99 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Ultimate access to all course, exercises and assessments',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Unlimited download of courses on the mobile app contents`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
  {
    id: 2,
    title: 'Premium Pack',
    subtitle: 'For the Pro users who work with modern data stack',
    amount: {
      monthly: 49.99,
      annual: 49.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Start Free Trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Ultimate access to all course, exercises and assessments',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Unlimited download of courses on the mobile app contents`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="FAQs" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
