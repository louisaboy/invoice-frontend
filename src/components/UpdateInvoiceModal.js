// import React, { useState } from 'react';
// import { 
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton, }from "@chakra-ui/react"
// import { Formik, Field, Form, useFormik } from 'formik'

// function UpdateInvoiceModal ({ invoice, onUpdate }) {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleOpen = () => {
//         setIsOpen(true);
//     };

//     const handleClose = () => {
//         setIsOpen(false);
//     };

//     const handleSubmit = (values) => {
//         onUpdate(values);
//         handleClose();
//     };
//     return (
//     <>
//         <Button variant="outline-info" className="updateBtn" onClick={handleOpen}>
//             Update
//         </Button>

//         <Modal isOpen={isOpen} onClose={handleClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Update Invoice</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Formik
//               initialValues={{
//                 number: invoice.number,
//                 date: invoice.date,
//                 customerName: invoice.customerName,
//                 productName: invoice.productName,
//                 productQty: invoice.productQty,
//                 productPrice: invoice.productPrice,
//                 total: invoice.total,
//               }}
//               onSubmit={handleSubmit}
//             >
//               <Form>
//                 <Box marginBottom="1rem">
//                   <Field name="number">
//                     {({ field }) => (
//                       <FormControl>
//                         <FormLabel>Invoice Number</FormLabel>
//                         <Input {...field} />
//                       </FormControl>
//                     )}
//                   </Field>
//                 </Box>

//                 {/* Add other fields here */}

//                 <ModalFooter>
//                   <Button colorScheme="blue" type="submit">
//                     Save Changes
//                   </Button>
//                   <Button variant="ghost" onClick={handleClose}>
//                     Cancel
//                   </Button>
//                 </ModalFooter>
//               </Form>
//             </Formik>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//     )
// }

// export default UpdateInvoiceModal