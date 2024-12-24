import { createRoot } from 'react-dom/client';
import { App } from '@app/index';
import { cocktailServiceInstance } from './services/cocktailsService';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.a = cocktailServiceInstance;

if (typeof container === null) {
    console.log('container is null!');
} else {
    console.log('lets go render!');
    const root = createRoot(container!);
    root.render(<App />);
}
