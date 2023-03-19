import { PATH } from '@constants/path';
import { Link } from 'react-router-dom';

const MoveNew = () => {
    return <Link to={PATH.new}>생성하기</Link>;
};

export default MoveNew;
