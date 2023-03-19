import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    label: string | JSX.Element;
}

const Field = ({ label, children }: Props) => {
    return (
        <div>
            <label>{label}</label>
            {children}
        </div>
    );
};

export default Field;
