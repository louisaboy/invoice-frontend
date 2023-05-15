import React, { useState, useEffect }from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Textarea,
  Select,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import axios from 'axios';

const CreateInvoice = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([])
  const [arrValues, setArrValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const apiUrl = "http://localhost:3000";
  const formik = useFormik({
    initialValues: {
      id: '',
      date: '',
      customerName: '',
      productName: '',
      productQty: '',
      productPrice: '',
      total: '',
    },
    onSubmit: (values) => {
      console.log(values);

      if (arrValues.includes(Number(values.id))) {
        setErrorMessage("The Invoice Number already exists in the Database");
        console.log("True");
        }
        else {  
            axios
                .post(`${apiUrl}/add-invoice`, values)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            
            navigate(-1);
        }
    },
  });

  useEffect(() => {
    axios   
        .get(`${apiUrl}/invoices`)
        .then((res) => {
            setInvoices(res.data);
            console.log("length: " + res.data.length)
            var arr = []
            for (var i = 0; i < res.data.length; i++) {
                arr.push(res.data[i].id);
            }
            console.log("Array contents: " + arr);
            setArrValues(arr);
            console.log("Check Arr Values: " + (arrValues.includes(Number(1))));
            console.log("went here " + res.data);
        })
        .catch((err) => console.log(err));
}, []); 

  return (
    <Container
        as="section" maxWidth="4xl" py="20px"
    >
        <Heading as="h1" textAlign="center">Create Invoice</Heading>
        <form onSubmit={formik.handleSubmit}>
      <Box marginBottom="1rem">
        <FormControl>
          <FormLabel>Invoice Number</FormLabel>
          <Input
            type="text"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>

      <Box marginBottom="1rem">
        <FormControl>
          <FormLabel>Invoice Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>

      <Box marginBottom="1rem">
        <FormControl>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customerName"
            value={formik.values.customerName}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>

      <Box marginBottom="1rem">
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="productName"
            value={formik.values.productName}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>

      <Flex marginBottom="1rem">
        <Box flex="1" marginRight="1rem">
          <FormControl>
            <FormLabel>Product Quantity</FormLabel>
            <Input
              type="number"
              name="productQty"
              value={formik.values.productQty}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel>Product Price</FormLabel>
            <Input
              type="number"
              name="productPrice"
              value={formik.values.productPrice}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Box>
      </Flex>

      <Box marginBottom="1rem">
        <FormControl>
          <FormLabel>Total Invoice Amount</FormLabel>
          <Input
            type="number"
            name="total"
            value={formik.values.total}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Box>
      
      <Text color={'Red'} align="center" m={3}>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </Text>

      <Box align="center">
            <Button colorScheme='red'
                onClick={() => navigate(-1)}>
                Back
            </Button>
            <Button colorScheme="blue" type="submit">
                Submit
            </Button>
        
      </Box>
      
    </form>
    
    
    </Container>
    
  );
};

export default CreateInvoice;