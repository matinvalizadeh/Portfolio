import './App.css';
import { Route, Routes } from "react-router-dom" ; 
import Landing from './Pages/Home';
import NotFound from './Pages/NotFound';
import { ConfigProvider } from 'antd';
import theme from "./Theme/ThemeConfig" ; 
const App: React.FC = () => (
  <ConfigProvider theme={theme}>
    <Routes>
      <Route path="/:language" element={<Landing/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ConfigProvider>
);

export default App;
