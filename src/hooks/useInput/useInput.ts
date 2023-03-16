import { useState } from 'react';

interface UseInputOption {}

type UseInputReturn = [string, { change: (str: string) => void }];

const useInput = (initValue: string = '', option?: UseInputOption): UseInputReturn => {
    const [value, setValue] = useState(initValue);

    const change = (str: string) => {
        setValue(str);
    };

    return [value, { change }];
};

export default useInput;
