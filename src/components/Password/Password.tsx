import useQRForm from '@hooks/useQRForm';
import useToggle from '@hooks/useToggle';
import Button from '@components/Button';
import Field from '@components/Field';
import Input from '@components/Input';

interface Props {
    password: ReturnType<typeof useQRForm>['password'];
    changePassword: ReturnType<typeof useQRForm>['changePassword'];
}

const Password = ({ password, changePassword }: Props) => {
    const [display, { toggle }] = useToggle();

    return (
        <Field label={'비밀번호'}>
            <Input
                type={display ? 'text' : 'password'}
                value={password}
                onChange={changePassword}
            />
            <Button onClick={toggle}>Display</Button>
        </Field>
    );
};

export default Password;
