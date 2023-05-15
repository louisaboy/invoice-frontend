import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const UpdateInvoiceModal = ({ invoice, onUpdate, isOpen, setIsOpen }) => {

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    onUpdate(values);
    handleClose();
  };

  return (
    <>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Invoice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={invoice}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field name="id">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Invoice Number</FormLabel>
                      <Input {...field} />
                    </FormControl>
                  )}
                </Field>
                <Field name="date">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Invoice Date</FormLabel>
                      <Input type="date" {...field} />
                    </FormControl>
                  )}
                </Field>
                <Field name="customerName">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Customer Name</FormLabel>
                      <Input {...field} 
                      value={new Date(field.value).toLocaleDateString("en-GB").replaceAll("-", "/")}/>
                    </FormControl>
                  )}
                </Field>
                <Field name="productName">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Product Name</FormLabel>
                      <Input {...field} />
                    </FormControl>
                  )}
                </Field>
                <Field name="productQty">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Product Quantity</FormLabel>
                      <Input type="number" {...field} />
                    </FormControl>
                  )}
                </Field>
                <Field name="productPrice">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Product Price</FormLabel>
                      <Input type="number" {...field} />
                    </FormControl>
                  )}
                </Field>
                <Field name="total">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Total Invoice Amount</FormLabel>
                      <Input type="number" {...field} />
                    </FormControl>
                  )}
                </Field>
                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Update
                  </Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateInvoiceModal;