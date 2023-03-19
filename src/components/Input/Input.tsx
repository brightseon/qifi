import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {}

const Input = (props: Props) => {
    return <input {...props} />;
};

export default Input;
