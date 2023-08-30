"use client"

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useStore } from './store/store';
import { shallow } from 'zustand/shallow';
import Link from 'next/link';
import * as Yup from 'yup';
import { useState } from 'react';


  export default function Home() {


    const handlePrint = () => {
      window.print();
    };


     const [formSubmitted, setFormSubmitted] = useState(true);
    const [items, addItem] = useStore((state) => [state.items, state.addItem], shallow);
    // console.log("items", items);
  





    const movieOptions = [
      { label: 'sick', value: '1' },
      { label: 'personal', value: '2' },
    ];
  
    const [printVisible, setPrintVisible] = useState(false);
  
    const validationSchema = Yup.object().shape({
      school_pass_year: Yup.string().required('Select a reason'),
      bossname: Yup.string().required('Boss Name is required'),
      id: Yup.string().required('ID Number is required'),
      name: Yup.string().required('Name is required'),
      current_description: Yup.string().required('Description is required'), 
      startdate: Yup.string().required('Start Date is required'),
      enddate: Yup.string().required('End Date is required'),
      information: Yup.string().required('Information is required'), 
    });
  
    const [printData, setPrintData] = useState(null);
  
    const {
      handleChange,
      handleBlur,
      values,
      handleSubmit,
      resetForm,
      touched,
      errors
    } = useFormik({
      initialValues: {
        school_pass_year: "",
        bossname: "",
        id: "",
        name: "",
        current_description: "",
        startdate: "",
        enddate: "",
        information: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (data) => {
        try {
          console.log(data);
  
          const newData = {
            value: data.school_pass_year,
            bossname: data.bossname,
            id: data.id,
            name: data.name,
            current_description: data.current_description,
            startdate: data.startdate,
            enddate: data.enddate,
            information: data.information,
          };
          addItem(newData);
           resetForm();
           setFormSubmitted(false)
          setPrintVisible(true);
          setPrintData(newData);
        } catch (error) {}
      },
    });
 
  return (
    <main className='container mx-auto'>
      <form className='' onSubmit={handleSubmit}>
        <div className='mt-5'>
          { formSubmitted && (
            <FormControl fullWidth required size="small">
            <InputLabel>Select your Reason</InputLabel>
            <Select
              name="school_pass_year"
              value={values.school_pass_year}
              label="SSC Passing Year"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {movieOptions.map((movie) => (
                <MenuItem key={movie.label} value={movie.label}>
                  {movie.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          )}
          {/* <div className='flex items-center justify-center gap-10'>

            <button className='mt-4 border border-gray-500 rounded-md px-4 py-2' type='submit'>
              Submit
            </button>

            <Link href="/details">
              <button className='mt-4 border border-gray-500 rounded-md px-4 py-2'>
                Go to Details
              </button>
            </Link>
          </div> */}

          {/* Conditional rendering based on selected value */}

{values.school_pass_year === 'personal' && (
       <div className='container text-justify mx-auto mt-10'>
       <div className='email'>
       <div className='email'>
       Dear
       <TextField
         label="Boss Name"
         value={values.bossname}
         onChange={handleChange}
         onBlur={handleBlur}
         name="bossname"
         error={touched.bossname && Boolean(errors.bossname)}
         helperText={touched.bossname && errors.bossname}
       />.
       <br/><br/>
       I hope this email finds you well. I am writing to formally request a period of sick leave due to my current health condition. I am unable to perform my duties effectively and believe it is in the best interest of both my health and the company that I take some time to recover.
       <br/><br/>
       My name is
       <TextField
         label="Name"
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
         name="name"
         error={touched.bossname && Boolean(errors.bossname)}
         helperText={touched.bossname && errors.bossname}
       />
       , and my employee ID is
       <TextField
         label="ID Number"
         value={values.id}
         onChange={handleChange}
         onBlur={handleBlur}
         name="id"
         error={touched.id && Boolean(errors.id)}
         helperText={touched.id && errors.id}
       />. I am currently experiencing
       <TextField
         label="Current Description"
         value={values.current_description}
         onChange={handleChange}
         onBlur={handleBlur}
         name="current_description"
         error={touched.current_description && Boolean(errors.current_description)}
         helperText={touched.current_description && errors.current_description}
       />
       and my doctor has advised that I take time off work to rest and recover. I anticipate that I will need to be on sick leave from
       <TextField
         label="Start Date"
         value={values.startdate}
         onChange={handleChange}
         onBlur={handleBlur}
         name="startdate"
         error={touched.startdate && Boolean(errors.startdate)}
         helperText={touched.startdate && errors.startdate}
       />
       to 
       <TextField
         label="Last Name"
         value={values.enddate}
         onChange={handleChange}
         onBlur={handleBlur}
         name="enddate"
         error={touched.enddate && Boolean(errors.enddate)}
         helperText={touched.enddate && errors.enddate}
       />.
       <br/><br/>
       During my absence, I am committed to ensuring a smooth transition of my responsibilities. I have already [mention any actions you have taken to delegate tasks or notify colleagues about your absence]. If there are any urgent matters that require immediate attention during my sick leave, please hesitate to contact me via email or phone, and I will do my best to assist remotely.
       <br/><br/>
       I understand the importance of my role and the impact my absence might have on the workflow. I assure you that I will stay updated and engaged as much as my health allows, and I am confident in the ability to manage during my absence.
       <br/><br/>
       I will provide regular updates on my condition and, if necessary, a note to confirm my need for sick leave. I appreciate your understanding and support in this matter.
       <br/><br/>
       Thank you for considering my request. I look forward to returning to work as soon as I am able.
       <br/><br/>
       Sincerely,
       <TextField
         label="Name"
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
         name="name"
         error={touched.name && Boolean(errors.name)}
         helperText={touched.name && errors.name}
       />
       .<br/>
       <TextField
         label="Contact Information"
         value={values.information}
         onChange={handleChange}
         onBlur={handleBlur}
         name="information"
         error={touched.information && Boolean(errors.information)}
         helperText={touched.information && errors.information}
       />
       .<br/>
 
       <button type='submit'  className='border mt-4 px-4 py-2 rounded-md '>submit</button>
       {/* <Link href="/details"> <button className='px-4 py-2 border rounded '>print</button></Link> */}
     </div>
        </div>
       </div>   
        )}

  


          {values.school_pass_year === 'sick' && (
            <div className='container text-justify mx-auto mt-10'>
              <div className='email'>
              <div className='email'>
              Dear
              <TextField
                label="Boss Name"
                value={values.bossname}
                onChange={handleChange}
                onBlur={handleBlur}
                name="bossname"
                error={touched.bossname && Boolean(errors.bossname)}
                helperText={touched.bossname && errors.bossname}
              />.
              <br/><br/>
              I hope this email finds you well. I am writing to formally request a period of sick leave due to my current health condition. I am unable to perform my duties effectively and believe it is in the best interest of both my health and the company that I take some time to recover.
              <br/><br/>
              My name is
              <TextField
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                error={touched.bossname && Boolean(errors.bossname)}
                helperText={touched.bossname && errors.bossname}
              />
              , and my employee ID is
              <TextField
                label="ID Number"
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
                name="id"
                error={touched.id && Boolean(errors.id)}
                helperText={touched.id && errors.id}
              />. I am currently experiencing
              <TextField
                label="Current Description"
                value={values.current_description}
                onChange={handleChange}
                onBlur={handleBlur}
                name="current_description"
                error={touched.current_description && Boolean(errors.current_description)}
                helperText={touched.current_description && errors.current_description}
              />
              and my doctor has advised that I take time off work to rest and recover. I anticipate that I will need to be on sick leave from
              <TextField
                label="Start Date"
                value={values.startdate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="startdate"
                error={touched.startdate && Boolean(errors.startdate)}
                helperText={touched.startdate && errors.startdate}
              />
              to 
              <TextField
                label="Last Name"
                value={values.enddate}
                onChange={handleChange}
                onBlur={handleBlur}
                name="enddate"
                error={touched.enddate && Boolean(errors.enddate)}
                helperText={touched.enddate && errors.enddate}
              />.
              <br/><br/>
              During my absence, I am committed to ensuring a smooth transition of my responsibilities. I have already [mention any actions you have taken to delegate tasks or notify colleagues about your absence]. If there are any urgent matters that require immediate attention during my sick leave, please hesitate to contact me via email or phone, and I will do my best to assist remotely.
              <br/><br/>
              I understand the importance of my role and the impact my absence might have on the workflow. I assure you that I will stay updated and engaged as much as my health allows, and I am confident in the ability to manage during my absence.
              <br/><br/>
              I will provide regular updates on my condition and, if necessary, a note to confirm my need for sick leave. I appreciate your understanding and support in this matter.
              <br/><br/>
              Thank you for considering my request. I look forward to returning to work as soon as I am able.
              <br/><br/>
              Sincerely,
              <TextField
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              .<br/>
              <TextField
                label="Contact Information"
                value={values.information}
                onChange={handleChange}
                onBlur={handleBlur}
                name="information"
                error={touched.information && Boolean(errors.information)}
                helperText={touched.information && errors.information}
              />
              .<br/>
        
              <button type='submit'  className='border mt-4 px-4 py-2 rounded-md '>submit</button>
              {/* <Link href="/details"> <button className='px-4 py-2 border rounded '>print</button></Link> */}
            </div>
               </div>
              </div>
            
          )}

{printVisible && (
        <div className='print'>
          Dear {printData.bossname}
          <br/><br/>
              I hope this email finds you well. I am writing to formally
               request a period of sick leave due to my current health condition. I am unable to perform my duties effectively 
               and believe it is in the best interest of both my health and the company that I take some time to recover.
              <br/><br/>
              My name is 
              
              {
                printData.name
              }
              , and my employee ID is 
              {
                printData.id
              } . I am currently experiencing
              {
                printData.current_description
              }
              and my doctor has advised that I take time off work to rest and recover. I anticipate that I will need to be on sick leave from
              {
                printData.startdate
              }
              to
              {
                printData.enddate
              }
              <br/><br/>
              During my absence, I am committed to ensuring a smooth transition of my responsibilities. I have already [mention any actions you have taken to delegate tasks or notify colleagues about your absence]. If there are any urgent matters that require immediate attention during my sick leave, please hesitate to contact me via email or phone, and I will do my best to assist remotely.
              <br/><br/>
              I understand the importance of my role and the impact my absence might have on the workflow. I assure you that I will stay updated and engaged as much as my health allows, and I am confident in the ability to manage during my absence.
              <br/><br/>
              I will provide regular updates on my condition and, if necessary, a note to confirm my need for sick leave. I appreciate your understanding and support in this matter.
              <br/><br/>
              Thank you for considering my request. I look forward to returning to work as soon as I am able.
              <br/><br/>
              Sincerely,
              {printData.name}
              . <br/>
              {
                printData.information
              }


              <div className='flex items-center justify-center mt-5 gap-10'> 
                <button onClick={()=>{handlePrint()}} className='px-4 py-2 border rounded '>Print</button>
               <Link href="/"> <button className='px-4 py-2 border rounded ' onClick={()=>{setFormSubmitted(true),setPrintVisible(false)}}>Back</button></Link>
              </div>
          
        </div>
      )}
        </div>
      </form>

     
      {

      }

  
    </main>
  )
}




































// "use client"
// import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import { useFormik } from 'formik';
// import { useStore } from './store/store';
// import { shallow } from 'zustand/shallow';
// import Link from 'next/link';

// export default function Home() {
//   const [items, addItem] = useStore((state) => [state.items, state.addItem], shallow);
//   console.log("items",items)

//   const movieOptions = [
//     { label: 'sick', value: '1' },
//     { label: 'personal issue', value: '2' },
//   ];

//   const {
//     handleChange,
//     handleBlur,
//     values,
//     handleSubmit,
//     resetForm,
//   } = useFormik({
   
//     initialValues: {
//       school_pass_year: "",
//       bossname: "",
//       id: "",
//       name: "",
//       current_description: "",
//       startdate: "",
//       enddate: "",
//       information: "",
//     },
//     onSubmit: async (data) => {
//       try {
//         console.log(data);
       
//         const newData={
//           value:data.school_pass_year,
//           bossname:data.bossname,
//           id:data.id,
//           name:data.name,
//       current_description:
//       data.current_description ,
     
//       startdate:data.startdate,
//       enddate:data.enddate,
//       information:data.information
//         }
//         addItem(newData); // Add the captured data to the items using the addItem function
//         resetForm();
//       } catch (error) {}
//     },
//   });

//   return (
//     <main className='container mx-auto'>
//       <form className='' onSubmit={handleSubmit}>
//         <div className='mt-5'>
//           <FormControl fullWidth required size="small">
//             <InputLabel>Select your Reason</InputLabel>
//             <Select
//               name="school_pass_year"
//               value={values.school_pass_year}
//               label="SSC Passing Year"
//               onChange={handleChange}
//               onBlur={handleBlur}
//             >
//               {movieOptions.map((movie) => (
//                 <MenuItem key={movie.label} value={movie.label}>
//                   {movie.label}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <div className='flex items-center justify-center gap-10'>
           
//             <button className='mt-4 border border-gray-500 rounded-md px-4 py-2' type='submit'>
//               Submit
//             </button>

//             <Link href="/details">
//             <button className='mt-4 border border-gray-500 rounded-md px-4 py-2' >
//          go
//             </button></Link>
//           </div>
          
          //   <div className='email'>
          //     Dear
          //     <TextField
          //       label="Boss Name"
          //       value={values.bossname}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="bossname"
          //       error={touched.bossname && Boolean(errors.bossname)}
          //       helperText={touched.bossname && errors.bossname}
          //     />.
          //     <br/><br/>
          //     I hope this email finds you well. I am writing to formally request a period of sick leave due to my current health condition. I am unable to perform my duties effectively and believe it is in the best interest of both my health and the company that I take some time to recover.
          //     <br/><br/>
          //     My name is
          //     <TextField
          //       label="Name"
          //       value={values.name}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="name"
          //       error={touched.bossname && Boolean(errors.bossname)}
          //       helperText={touched.bossname && errors.bossname}
          //     />
          //     , and my employee ID is
          //     <TextField
          //       label="ID Number"
          //       value={values.id}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="id"
          //       error={touched.id && Boolean(errors.id)}
          //       helperText={touched.id && errors.id}
          //     />. I am currently experiencing
          //     <TextField
          //       label="Current Description"
          //       value={values.current_description}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="current_description"
          //       error={touched.current_description && Boolean(errors.current_description)}
          //       helperText={touched.current_description && errors.current_description}
          //     />
          //     and my doctor has advised that I take time off work to rest and recover. I anticipate that I will need to be on sick leave from
          //     <TextField
          //       label="Start Date"
          //       value={values.startdate}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="startdate"
          //       error={touched.startdate && Boolean(errors.startdate)}
          //       helperText={touched.startdate && errors.startdate}
          //     />
          //     to
          //     <TextField
          //       label="Last Name"
          //       value={values.enddate}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="enddate"
          //       error={touched.enddate && Boolean(errors.enddate)}
          //       helperText={touched.enddate && errors.enddate}
          //     />.
          //     <br/><br/>
          //     During my absence, I am committed to ensuring a smooth transition of my responsibilities. I have already [mention any actions you have taken to delegate tasks or notify colleagues about your absence]. If there are any urgent matters that require immediate attention during my sick leave, please hesitate to contact me via email or phone, and I will do my best to assist remotely.
          //     <br/><br/>
          //     I understand the importance of my role and the impact my absence might have on the workflow. I assure you that I will stay updated and engaged as much as my health allows, and I am confident in the ability to manage during my absence.
          //     <br/><br/>
          //     I will provide regular updates on my condition and, if necessary, a note to confirm my need for sick leave. I appreciate your understanding and support in this matter.
          //     <br/><br/>
          //     Thank you for considering my request. I look forward to returning to work as soon as I am able.
          //     <br/><br/>
          //     Sincerely,
          //     <TextField
          //       label="Name"
          //       value={values.name}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="name"
          //       error={touched.name && Boolean(errors.name)}
          //       helperText={touched.name && errors.name}
          //     />
          //     .<br/>
          //     <TextField
          //       label="Contact Information"
          //       value={values.information}
          //       onChange={handleChange}
          //       onBlur={handleBlur}
          //       name="information"
          //       error={touched.information && Boolean(errors.informationssname)}
          //       helperText={touched.information && errors.information}
          //     />
          //     .<br/>
          //     <button type='submit' className='border mt-4 px-4 py-2 rounded-md '>print</button>
          //   </div>
          // </div>
     
//       </form>
//     </main>
//   )
// }
