import React from 'react';
import { Box, Text, Stack, useBreakpointValue } from '@chakra-ui/react';

const EarningsOverview = ({ totalCashback, currentBalance }) => {
  // Use responsive font sizes
  const fontSizeTitle = useBreakpointValue({ base: 'xl', md: '2xl' });
  const fontSizeDetail = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      width="100%"
      maxW="600px" // Ensure the component doesn't stretch too wide
      mx="auto" // Center the component horizontally
    >
      <Stack spacing={4}>
        <Text
          fontSize={fontSizeTitle}
          fontWeight="bold"
          mb={2}
          color="teal.700"
          textAlign="center"
        >
          Earnings Overview
        </Text>
        <Stack spacing={2}>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="teal.50"
            boxShadow="sm"
          >
            <Text
              fontSize={fontSizeDetail}
              fontWeight="medium"
              color="teal.600"
            >
              Total Cashback Earned:
            </Text>
            <Text
              fontSize={fontSizeDetail}
              fontWeight="bold"
              color="teal.700"
            >
              ${totalCashback.toFixed(2)}
            </Text>
          </Box>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="blue.50"
            boxShadow="sm"
          >
            <Text
              fontSize={fontSizeDetail}
              fontWeight="medium"
              color="blue.600"
            >
              Current Balance:
            </Text>
            <Text
              fontSize={fontSizeDetail}
              fontWeight="bold"
              color="blue.700"
            >
              ${currentBalance.toFixed(2)}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EarningsOverview;
