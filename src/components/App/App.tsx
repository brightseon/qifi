import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@constants/path';
import Home from '@pages/Home';
import New from '@pages/New';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={PATH.home} element={<Home />} />
            <Route path={PATH.new} element={<New />} />
        </Routes>
    </BrowserRouter>
);

export default App;
