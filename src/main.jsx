import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import './index.scss';
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/700.css'; // Specify weight
import '@fontsource/roboto/900.css'; // Specify weight

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
