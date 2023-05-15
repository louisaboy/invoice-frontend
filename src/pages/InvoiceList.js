import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Tbody, Tr, Th, Td, Button, Heading, Box } from "@chakra-ui/react";
import axios from "axios";
import UpdateInvoiceModal from "../components/UpdateInvoiceModal";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const navigate = useNavigate();

  const apiUrl = "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${apiUrl}/invoices`)
      .then((res) => {
        console.log(res);
        setInvoices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteInvoice = (invoice) => {
    console.log(invoice);

    axios
      .post(`${apiUrl}/delete-invoice`, invoice)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updateInvoice = (invoice) => {
    setIsOpenModal(true)
    console.log(invoice)
    setSelectedInvoice(invoice)
  }

  const handleUpdate = (updatedInvoice) => {
    // Handle the update logic
    setIsOpenModal(false);
    console.log("Updated invoice", updatedInvoice)
    setSelectedInvoice(null);
  }

  return (
    <div>
      <Heading as="h1" textAlign='center' m={5}>Invoices Page</Heading>
      <Box align="center" m={5}>
        <Button colorScheme={'green'}  onClick={() => navigate("create")}>
            Create Invoice
        </Button>
      </Box>
      
      {selectedInvoice && (
        <UpdateInvoiceModal 
            invoice={selectedInvoice} 
            onUpdate={handleUpdate}
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
        />
      )}


          
      <Table variant="striped" colorScheme="gray" align="center">
        <thead>
          <Tr>
            <Th>Invoice Number</Th>
            <Th>Invoice Date</Th>
            <Th>Customer Name</Th>
            <Th>Product Name</Th>
            <Th>Product Quantity</Th>
            <Th>Product Price</Th>
            <Th>Total Invoice Amount</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <Tbody>
          {invoices.map((invoice) => (
            <Tr key={invoice.id}>
              <Td>{invoice.id}</Td>
              <Td>{new Date(invoice.date).toLocaleDateString("en-GB").replaceAll("-", "/")}</Td>
              <Td>{invoice.customerName}</Td>
              <Td>{invoice.productName}</Td>
              <Td>{invoice.productQty}</Td>
              <Td>{invoice.productPrice}</Td>
              <Td>{invoice.total}</Td>
              <Td>
                <Button colorScheme='blue' onClick={() => updateInvoice(invoice)}>
                  Update
                </Button>
                <Button colorScheme='red' onClick={() => deleteInvoice(invoice)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Invoices;