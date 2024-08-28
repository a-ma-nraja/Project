import { Toaster } from 'react-hot-toast';
import GlobalRouter from './routes';

const App = () => {
  return (
    <div className='bg-black'>
      <GlobalRouter />
      <Toaster />
    </div>
  );
};

export default App;