import React from 'react';
import { CompanyProvider } from '../../contexts/company';
import Home from './index'

export default function App() {
  return (
    <CompanyProvider>
      <Home />
    </CompanyProvider>
  );
}