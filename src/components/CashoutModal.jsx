import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const CashoutModal = ({ isOpen, onClose, onSubmit, bankName, setBankName, accountNumber, setAccountNumber, isSubmitting }) => {
  const toast = useToast();

  const handleCashout = () => {
    if (!bankName || !accountNumber) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Direct Cashout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Bank Name</FormLabel>
            <Select
              placeholder="Select bank"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            >
              <option value="Bank A">Bank A</option>
              <option value="Bank B">Bank B</option>
              <option value="Bank C">Bank C</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Account Number</FormLabel>
            <Input
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={handleCashout}
            isLoading={isSubmitting}
            loadingText="Processing"
            isDisabled={!bankName || !accountNumber}
          >
            Confirm Cashout
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CashoutModal;
