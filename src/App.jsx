import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack, Spinner, IconButton } from '@chakra-ui/react';
import EarningsOverview from './components/EarningsOverview';
import CashbackHistory from './components/CashbackHistory';
import CashoutOptions from './components/CashoutOptions';
import { mockData } from './mockData';
import { BellIcon } from '@chakra-ui/icons';
import Logo from './components/Logo'; // Import the Logo component

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCashbackHistoryOpen, setIsCashbackHistoryOpen] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const totalCashback = data?.transactions.reduce((total, transaction) => total + transaction.amount, 0);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh" bg="gray.100">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Flex justify="center" align="center" height="100vh" bg="gray.100" position="relative">
      <VStack spacing={6} width="80%">
        <Logo /> {/* Add the Logo component */}
        <EarningsOverview
          totalCashback={totalCashback}
          currentBalance={data.earnings.currentBalance}
        />
        <CashoutOptions
          onCashout={() => alert('Cashout initiated')}
          onPromoCode={() => alert('Promo code generated')}
        />
      </VStack>

      <IconButton
        icon={<BellIcon />}
        aria-label="View Cashback History"
        position="absolute"
        top={4}
        right={4}
        colorScheme="teal"
        onClick={() => setIsCashbackHistoryOpen(true)}
      />

      <CashbackHistory
        transactions={data.transactions}
        isOpen={isCashbackHistoryOpen}
        onClose={() => setIsCashbackHistoryOpen(false)}
      />
    </Flex>
  );
}

export default App;
