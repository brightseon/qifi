import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '../../constants/path';
import Home from '../../pages/Home';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path={PATH.home} element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default App;
