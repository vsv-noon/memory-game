import '@/styles/index.scss';

import { createHeader } from '@/components/header';
import { createMain } from '@/components/main';

const header = createHeader();
const main = createMain();

document.body.append(header, main);
