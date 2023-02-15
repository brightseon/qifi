import { ChangeEvent, useState } from 'react';

const New = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [protocol, setProtocol] = useState('none');
    const [description, setDescription] = useState('');

    const changeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const changeProtocol = (e: ChangeEvent<HTMLInputElement>) => setProtocol(e.target.value);

    const changeDescription = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

    const create = () => {};

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
                    <input
                        id="none"
                        type={'radio'}
                        name="None"
                        value={'none'}
                        checked={protocol === 'none'}
                        onChange={changeProtocol}
                    />
                    <label htmlFor="none">None</label>
                    <input
                        id="wpa"
                        type={'radio'}
                        name="WPA/WPA2"
                        value={'wpa'}
                        checked={protocol === 'wpa'}
                        onChange={changeProtocol}
                    />
                    <label htmlFor="wpa">WPA/WAP2</label>
                    <input
                        id="wep"
                        type={'radio'}
                        name="WEP"
                        value={'wep'}
                        checked={protocol === 'wep'}
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
