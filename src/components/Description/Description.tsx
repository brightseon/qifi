import useQRForm from '@hooks/useQRForm';
import Field from '@components/Field';
import Input from '@components/Input';

interface Props {
    description: ReturnType<typeof useQRForm>['description'];
    changeDescription: ReturnType<typeof useQRForm>['changeDescription'];
}

const Description = ({ description, changeDescription }: Props) => {
    return (
        <Field label={'설명'}>
            <Input value={description} onChange={changeDescription} />
        </Field>
    );
};

export default Description;
