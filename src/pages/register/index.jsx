import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/CustomForm';
import axiosInstance from '../../utils/axiosInstance';
import { registerFields, registerInitValues } from './registerFields';

function Register() {
  const navigate = useNavigate();
  const register = async (values, actions) => {
    try {
      const { confirm_password, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      localStorage.setItem('token', JSON.stringify(res.data));
      actions.resetForm();
      navigate('/', { replace: true });
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  };

  return (
    <CustomForm
      initialValues={registerInitValues}
      onSubmit={register}
      fields={registerFields}
      btnProps={{
        children: 'Sing in',
      }}
    />
  );

  // return (
  //   // Consumer
  //   <Formik
  //     initialValues={registerInitValues}
  //     onSubmit={async (values) => {
  //       await wait(4000);
  //       console.log(values);
  //     }}
  //   >
  //     {({ isValid, dirty, isSubmitting }) => (
  //       <Form className="mt-8 space-y-6">
  //         <div className="-space-y-px rounded-md shadow-sm">
  //           {registerFields.map((x) => (
  //             <Field key={x.name} {...x} />
  //           ))}
  //         </div>
  //         <div>
  //           <button
  //             disabled={isSubmitting || !(dirty && isValid)}
  //             type="submit"
  // eslint-disable-next-line max-len
  //             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
  //           >
  //             Sign in
  //           </button>
  //         </div>
  //       </Form>
  //     )}
  //   </Formik>
  // );
}

export default Register;
