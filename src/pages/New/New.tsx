import { ChangeEvent, useState } from 'react';
import { getQRCodeURL } from 'src/lib/qr';

type Encryption = Parameters<typeof getQRCodeURL>[0]['encryptionType'];

const New = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [protocol, setProtocol] = useState<Encryption>('NONE');
    const [description, setDescription] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);

    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const changeProtocol = (e: ChangeEvent<HTMLInputElement>) =>
        setProtocol(e.target.value.toUpperCase() as Encryption);

    const changeDescription = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

    const create = async () => {
        try {
            const url = await getQRCodeURL({
                ssid: name,
                password,
                encryptionType: protocol
            });
            console.log(url);
        } catch (err) {
            console.error('create qr code error: ', err);
            alert('QR Code를 생성하는 과정에서 에러가 발생했습니다.');
        }
    };

    const toggleDisplayPassword = () => setDisplayPassword((displayPassword) => !displayPassword);

    return (
        <div>
            <div>
                <label>이름</label>
                <input name="name" value={name} onChange={changeName} />
            </div>
            <div>
                <label>비밀번호</label>
                <input
                    type={displayPassword ? 'text' : 'password'}
                    value={password}
                    onChange={changePassword}
                />
                <button type="button" onClick={toggleDisplayPassword}>
                    Display
                </button>
            </div>
            <div>
                <label>보안 프로토콜</label>
                <div>
                    <input
                        id="none"
                        type={'radio'}
                        name="None"
                        value={'none'}
                        checked={protocol === 'NONE'}
                        onChange={changeProtocol}
                    />
                    <label htmlFor="none">None</label>
                    <input
                        id="wpa"
                        type={'radio'}
                        name="WPA/WPA2"
                        value={'wpa'}
                        checked={protocol === 'WPA'}
                        onChange={changeProtocol}
                    />
                    <label htmlFor="wpa">WPA/WAP2</label>
                    <input
                        id="wep"
                        type={'radio'}
                        name="WEP"
                        value={'wep'}
                        checked={protocol === 'WEP'}
                        onChange={changeProtocol}
                    />
                    <label htmlFor="wep">WEP</label>
                </div>
            </div>
            <div>
                <label>설명</label>
                <input
                    type={'text'}
                    name="description"
                    value={description}
                    onChange={changeDescription}
                />
            </div>
            <button type="button" onClick={create}>
                생성하기
            </button>
        </div>
    );
};

export default New;
