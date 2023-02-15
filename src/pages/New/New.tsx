import { ChangeEvent, useState } from 'react';

const New = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <div>
            <div>
                <label>이름</label>
                <input name="name" value={name} onChange={changeName} />
            </div>
            <div>
                <label>비밀번호</label>
                <input type={'password'} value={password} onChange={changePassword} />
            </div>
            <div>
                <label>보안 프로토콜</label>
                <div>
                    <input id="none" type={'radio'} name="None" />
                    <label htmlFor="none">None</label>
                    <input id="wpa" type={'radio'} name="WPA/WPA2" />
                    <label htmlFor="wpa">WPA/WAP2</label>
                    <input id="wep" type={'radio'} name="WEP" />
                    <label htmlFor="wep">WEP</label>
                </div>
            </div>
            <div>
                <label>설명</label>
                <input type={'text'} name="description" />
            </div>
            <button type="button">생성하기</button>
        </div>
    );
};

export default New;
