import Input from '../../components/input';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Name',
    val: '',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return null;
    },
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    val: '',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Invalid email';
      }
      return null;
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    val: '',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return null;
    },
  },
  {
    component: Input,
    name: 'confirm_password',
    id: 'confirm_password',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Confirm Password',
    val: '',
    className: 'rounded-b-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      if (value !== password.value) {
        return 'passward should match with confirm passward';
      }
      return null;
    },
  },
];

export const registerInitValues = registerFields.reduce((p, c) =>
  ({ ...p, [c.name]: c.val }), {});
