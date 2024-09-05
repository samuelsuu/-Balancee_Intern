import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CashoutModal from './CashoutModal';
import PromoCodeModal from './PromoCodeModal';
import { CheckCircleIcon } from '@chakra-ui/icons';

const MotionBox = motion.create(Box);

const CashoutOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleCashout = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      toast({
        title: 'Cashout Successful!',
        description: `Your cashout to ${bankName} (Account No: ${accountNumber}) was successful.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
        icon: <CheckCircleIcon color="green.500" />,
      });
    }, 1500); // Simulate network request
  };

  const generatePromoCode = () => {
    const newPromoCode = `PROMO-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    setPromoCode(newPromoCode);
    setIsPromoModalOpen(true);
  };

  return (
    <>
      <MotionBox
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        boxShadow="lg"
        bg="white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6} color="teal.600">Cashout Options</Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => setIsModalOpen(true)}
          mb={4}
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          transition="all 0.3s"
          w="100%"
        >
          Direct Cashout
        </Button>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={generatePromoCode}
          _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          transition="all 0.3s"
          w="100%"
        >
          Convert to Promo Code
        </Button>
      </MotionBox>

      <CashoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCashout}
        bankName={bankName}
        setBankName={setBankName}
        accountNumber={accountNumber}
        setAccountNumber={setAccountNumber}
        isSubmitting={isSubmitting}
      />

      <PromoCodeModal
        isOpen={isPromoModalOpen}
        onClose={() => setIsPromoModalOpen(false)}
        promoCode={promoCode}
      />
    </>
  );
};

export default CashoutOptions;
