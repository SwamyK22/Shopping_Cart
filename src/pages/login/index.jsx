import { Field } from 'formik';
import React, { useContext } from 'react';
import Checkbox from '../../components/Checkbox';
import CustomForm from '../../components/CustomForm';
import { AuthContext } from '../../context/authContext';
import { loginFields, loginInitValues } from './loginFields';

function Login() {
  const { login } = useContext(AuthContext);
  return (
    <CustomForm
      initialValues={loginInitValues}
      onSubmit={login}
      fields={loginFields}
      btnProps={{
        children: 'Log in',
      }}
    >
      <div className="flex items-center justify-between">
        <Field
          component={Checkbox}
          name="rememberMe"
          id="rememberMe"
          label="Remember Me"
        />
        {/* <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div> */}

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </CustomForm>
  );

  // return (
  //   <Formik
  //     initialValues={{ email: '', password: '' }}
  //     validate={(values) => {
  //       const errors = {};
  //       if (!values.email) {
  //         errors.email = 'Required...';
  //       } else if (
  //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //       ) {
  //         errors.email = 'Invalid email';
  //       }
  //       if (!values.password) {
  //         errors.password = 'Required...';
  //       }
  //       return errors;
  //     }}
  //   >
  //     {({
  //       values,
  //       errors,
  //       touched,
  //       isValid,
  //       dirty,
  //       isSubmitting,
  //       handleChange,
  //       handleSubmit,
  //       handleBlur,
  //     }) => (
  //       <form
  //         className="mt-8 space-y-6"
  //         onSubmit={
  //           (handleSubmit,
  //           () => {
  //             navigate('/', {
  //               state: {
  //                 name: 'Swamy',
  //                 email: 'swamyk22@gmail.com',
  //                 passward: 'passward!',
  //               },
  //               replace: true,
  //             });
  //           })
  //         }
  //       >
  //         <div className="-space-y-px rounded-md shadow-sm">
  //           <div>
  //             <label htmlFor="email-address" className="sr-only">
  //               Email address
  //             </label>
  //             <input
  //               id="email"
  //               name="email"
  //               type="email"
  //               autoComplete="email"
  //               className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //               placeholder="Email address"
  //               value={values.email}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //             />
  //             {errors.email && touched.email && (
  //               <p className="text-sm text-red-500 my-1 font-semibold">
  //                 {errors.email}
  //               </p>
  //             )}
  //           </div>
  //           <div>
  //             <label htmlFor="password" className="sr-only">
  //               Password
  //             </label>
  //             <input
  //               id="password"
  //               name="password"
  //               type="password"
  //               autoComplete="current-password"
  //               className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //               placeholder="Password"
  //               value={values.password}
  //               onBlur={handleBlur}
  //               onChange={handleChange}
  //             />
  //             {errors.password && touched.password && (
  //               <p className="text-sm text-red-500 font-semibold my-1">
  //                 {errors.password}
  //               </p>
  //             )}
  //           </div>
  //         </div>

  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center">
  //             <input
  //               id="remember-me"
  //               name="remember-me"
  //               type="checkbox"
  //               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  //             />
  //             <label
  //               htmlFor="remember-me"
  //               className="ml-2 block text-sm text-gray-900"
  //             >
  //               Remember me
  //             </label>
  //           </div>

  //           <div className="text-sm">
  //             <a
  //               href="#"
  //               className="font-medium text-indigo-600 hover:text-indigo-500"
  //             >
  //               Forgot your password?
  //             </a>
  //           </div>
  //         </div>

  //         <div>
  //           <button
  //             type="submit"
  //             disabled={isSubmitting || !(dirty && isValid)}
  //             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-600 disabled:cursor-wait"
  //           >
  //             Sign in
  //           </button>
  //         </div>
  //       </form>
  //     )}
  //   </Formik>
  // );
}

export default Login;
