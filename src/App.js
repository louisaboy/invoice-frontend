import React from 'react';
import {
  ChakraProvider,
  CSSReset
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// COMPONENTS
// import Header from './components/Header'

// PAGES
import Invoices from "./pages/InvoiceList"
import CreateInvoice from "./pages/CreateInvoice"



function App() {
  return (
    <ChakraProvider>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={ <Invoices/> }/>
          <Route path="/create" element={ <CreateInvoice /> } />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
