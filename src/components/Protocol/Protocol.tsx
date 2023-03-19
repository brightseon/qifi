import useQRForm from '@hooks/useQRForm';
import Field from '@components/Field/Field';
import Radio from '@components/Radio/Radio';

interface Props {
    protocol: ReturnType<typeof useQRForm>['protocol'];
    changeProtocol: ReturnType<typeof useQRForm>['changeProtocol'];
}

const Protocol = ({ protocol, changeProtocol }: Props) => {
    return (
        <Field label={'보안 프로토콜'}>
            <div>
                <Radio
                    id="none"
                    value={'none'}
                    checked={protocol === 'NONE'}
                    onChange={changeProtocol}
                >
                    None
                </Radio>
                <Radio
                    id="wpa"
                    value={'wpa'}
                    checked={protocol === 'WPA'}
                    onChange={changeProtocol}
                >
                    WPA/WAP2
                </Radio>
                <Radio
                    id="wep"
                    value={'wep'}
                    checked={protocol === 'WEP'}
                    onChange={changeProtocol}
                >
                    WEP
                </Radio>
            </div>
        </Field>
    );
};

export default Protocol;
