import React from 'react';
import { createRoot } from 'react-dom/client';
import ScrollbarSizeDemo from './ScrollbarSizeDemo';
import 'normalize.css';
import './main.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<ScrollbarSizeDemo />);
