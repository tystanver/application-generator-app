"use client"; 
import { useState } from 'react';
import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useStore } from '../form/@assests/store';
import {shallow} from 'zustand/shallow'
import { useStore } from '../store/store';




export default function Details(params) {
    
 const [items, datas,addItem,addData] = useStore((state) => [state.items, state.addItem,state.addData], shallow);
  console.log("items",items)
  console.log(datas)

  const [submitted, setSubmitted] = useState(true);



  
  return (
    <main>
      
    </main>
  );
}