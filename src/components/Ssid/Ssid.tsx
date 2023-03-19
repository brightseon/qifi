import Field from '@components/Field';
import Input from '@components/Input';
import useQRForm from '@hooks/useQRForm';

interface Props {
    ssid: ReturnType<typeof useQRForm>['ssid'];
    changeSSID: ReturnType<typeof useQRForm>['changeSSID'];
}

const Ssid = ({ ssid, changeSSID }: Props) => {
    return (
        <Field label={'이름'}>
            <Input value={ssid} onChange={changeSSID} />
        </Field>
    );
};

export default Ssid;
