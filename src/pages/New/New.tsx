import useQRForm from '@hooks/useQRForm';
import Input from '@components/Input';
import Button from '@components/Button';
import Ssid from '@components/Ssid';
import Password from '@components/Password';
import Protocol from '@components/Protocol';

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

    return (
        <div>
            <Ssid ssid={ssid} changeSSID={changeSSID} />
            <Password password={password} changePassword={changePassword} />
            <Protocol protocol={protocol} changeProtocol={changeProtocol} />
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
