import useQRForm from '@hooks/useQRForm';
import useToggle from '@hooks/useToggle';
import Input from '@components/Input';
import Radio from '@components/Radio';
import Button from '@components/Button';

const New = () => {
    const {
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
    } = useQRForm();
    const [displayPassword, { toggle: toggleDisplayPassword }] = useToggle();

    return (
        <div>
            <div>
                <label>이름</label>
                <Input value={ssid} onChange={changeSSID} />
            </div>
            <div>
                <label>비밀번호</label>
                <Input
                    type={displayPassword ? 'text' : 'password'}
                    value={password}
                    onChange={changePassword}
                />
                <Button onClick={toggleDisplayPassword}>Display</Button>
            </div>
            <div>
                <label>보안 프로토콜</label>
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
            </div>
            <div>
                <label>설명</label>
                <Input value={description} onChange={changeDescription} />
            </div>
            <Button onClick={createQR}>생성하기</Button>
            {qr && (
                <>
                    <br />
                    <img src={qr} />
                </>
            )}
        </div>
    );
};

export default New;
