import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import axios from "axios";
import UpdateInvoiceModal from "../components/UpdateInvoiceModal";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState({
        id: 0,
        date: new Date().toLocaleDateString("en-CA"),
        customerName: "",
        productName: "",
        productQty: 0,
        productPrice: 0,
        total: 0,
  })
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
    console.log(invoice)
    setSelectedInvoice(invoice)
  }

  return (
    <div>
      <h1>Invoices Page</h1>
    
      <Table variant="striped" colorScheme="gray">
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