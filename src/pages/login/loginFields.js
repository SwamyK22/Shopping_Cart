import Input from '../../components/input';

export const loginFields = [
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    value: '',
    className: 'rounded-t-md',
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
    value: '',
    className: 'rounded-b-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return null;
    },
  },
];

export const loginInitValues = loginFields.reduce((p, c) =>
  ({ ...p, [c.name]: c.value }), {});
