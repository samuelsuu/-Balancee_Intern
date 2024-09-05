// src/components/PromoCodeModal.jsx

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';

const PromoCodeModal = ({ isOpen, onClose, promoCode }) => {
  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode)
      .then(() => {
        toast({
          title: 'Promo Code Copied',
          description: 'The promo code has been copied to your clipboard.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: 'Failed to copy the promo code. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Promo Code Generated</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl" fontWeight="bold" color="blue.500" mb={4}>
            Your Promo Code:
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.600" mb={4}>
            {promoCode}
          </Text>
          <Button colorScheme="teal" onClick={handleCopy}>
            Copy Code
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PromoCodeModal;
