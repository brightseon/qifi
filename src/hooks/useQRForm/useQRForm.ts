import { ChangeEvent, useState } from 'react';
import useInput from '../useInput/useInput';
import { getQRCodeURL } from '@lib/qr';

type Encryption = Parameters<typeof getQRCodeURL>[0]['encryptionType'];

const useQRForm = () => {
    const [ssid, { change: setSSID }] = useInput();
    const [protocol, setProtocol] = useState<Encryption>('NONE');
    const [password, { change: setPassword }] = useInput();
    const [description, { change: setDescription }] = useInput();
    const [qr, setQR] = useState(null);

    const changeSSID = (e: ChangeEvent<HTMLInputElement>) => {
        setSSID(e.target.value);
    };

    const changeProtocol = (e: ChangeEvent<HTMLInputElement>) =>
        setProtocol(e.target.value.toUpperCase() as Encryption);

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const changeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const createQR = async () => {
        try {
            const url = await getQRCodeURL({ ssid, password, encryptionType: protocol });

            setQR(url);
        } catch (err) {
            console.error('create qr code error: ', err);
            alert('QR Code를 생성하는 과정에서 에러가 발생했습니다.');
        }
    };

    return {
        ssid,
        changeSSID,
        protocol,
        changeProtocol,
        password,
        changePassword,
        description,
        changeDescription,
        qr,
        createQR
    };
};

export default useQRForm;
