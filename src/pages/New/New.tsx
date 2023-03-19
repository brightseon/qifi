import useQRForm from '@hooks/useQRForm';
import useToggle from '@hooks/useToggle';
import Input from '@components/Input';

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
                <Input value={description} onChange={changeDescription} />
            </div>
            <button type="button" onClick={createQR}>
                생성하기
            </button>
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
