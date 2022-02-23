import React from "react";
import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />ß

      <label htmlFor="password">Password</label>
      <input
        id="pswField"
        name="password"
        type="text"
        required
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    {({ errors, touched }) => (
         <Form>
           <Field name="password"  />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
          <ErrorMessage name="password" />
           <Field name="email" type="email" />
            {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
          <ErrorMessage name="email" />
           <button type="submit">Submit</button>
         </Form>
       )}

      <button id="submitBtn">Submit</button>
    </form>
  );
}



export default App;
