import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faAnchor,
  faBug,
  faCar,
  faEnvelope,
  faHeart,
  faHouse,
  faPlane,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import '@/styles/index.scss';

import { createHeader } from '@/components/header';
import { createMain } from '@/components/main';

library.add(
  faAnchor,
  faBug,
  faCar,
  faEnvelope,
  faHeart,
  faHouse,
  faPlane,
  faUser
);

dom.watch();

const header = createHeader();
const main = createMain();

document.body.append(header, main);
