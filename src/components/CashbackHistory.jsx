import React from 'react';
import { Box, Text, VStack, IconButton, CloseButton } from '@chakra-ui/react';

const CashbackHistory = ({ transactions, isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      right={isOpen ? 0 : '-100%'}
      top={0}
      width="300px"
      height="100vh"
      bg="white"
      boxShadow="lg"
      transition="right 0.3s"
      p={4}
    >
      <CloseButton
        aria-label="Close"
        onClick={onClose}
        position="absolute"
        top={4}
        right={4}
      />
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Cashback History
      </Text>
      <VStack spacing={4}>
        {transactions.map((transaction, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" bg="gray.100">
            <Text>Date: {transaction.date}</Text>
            <Text>Amount Earned: ${transaction.amount}</Text>
            <Text>Booking Details: {transaction.details}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CashbackHistory;
