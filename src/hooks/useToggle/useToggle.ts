import { useState } from 'react';

interface UseToggleAction {
    setOn: () => void;
    setOff: () => void;
    toggle: () => void;
}

type UseToggleReturn = [boolean, UseToggleAction];

const useToggle = (init: boolean = false): UseToggleReturn => {
    const [isOn, setToggle] = useState(init);

    const setOn = () => {
        setToggle(true);
    };

    const setOff = () => {
        setToggle(false);
    };

    const toggle = () => {
        setToggle((prev) => !prev);
    };

    return [isOn, { setOn, setOff, toggle }];
};

export default useToggle;
