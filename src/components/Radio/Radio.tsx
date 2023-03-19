import { HTMLProps, PropsWithChildren } from 'react';

interface Props extends HTMLProps<HTMLInputElement>, PropsWithChildren {}

const Radio = ({ children, ...radioProps }: Props) => {
    return (
        <div>
            <input {...radioProps} type="radio" />
            <label htmlFor={radioProps.id}>{children}</label>
        </div>
    );
};

export default Radio;
