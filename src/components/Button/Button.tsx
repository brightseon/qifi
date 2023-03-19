import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {}

const Button = (props: Props) => {
    return <button {...props} type="button"></button>;
};

export default Button;
