import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';

import { ADMIN, REPORTER, SUPERVISOR, USER } from './roles';

export const drawerMenu = [
  {
    id: 0,
    title: 'Ana Sayfa',
    icon: <HomeIcon />,
    isActive: false,
    visibility: [ADMIN],
  },
  {
    id: 1,
    title: 'Palete',
    icon: <ColorLensIcon />,
    isActive: false,
    visibility: [ADMIN],
  },
  {
    id: 2,
    title: 'Cihaz Log Listeleri',
    icon: <FormatListBulletedIcon />,
    isActive: false,
    visibility: [ADMIN],
  },
  {
    id: 3,
    title: 'Datasource',
    icon: <AssignmentIcon />,
    isActive: false,
    visibility: [ADMIN],
  },
  {
    id: 4,
    title: 'Kullanıcı Işlemleri',
    icon: <GroupIcon />,
    isActive: false,
    visibility: [ADMIN],
    listItems: [
      {
        id: 40,
        title: 'Kullanıcı Ekleme',
      },
      {
        id: 41,
        title: 'Kullanıcı Listeleme ve Düzenleme',
      },
      {
        id: 42,
        title: 'Kullanıcı Yetkilendirme',
      },
    ],
  },
  {
    id: 5,
    title: 'Kontrol Ekipmanları',
    icon: <WorkIcon />,
    isActive: false,
    visibility: [ADMIN],
    listItems: [
      {
        id: 50,
        title: 'Ekipman Grubu Ekleme',
      },
      {
        id: 51,
        title: 'Ekipman Ekleme ve Düzenleme',
      },
    ],
  },
  {
    id: 6,
    title: 'Görev Yonetimi',
    icon: <ListAltIcon />,
    isActive: false,
    visibility: [ADMIN, SUPERVISOR],
    listItems: [
      {
        id: 60,
        title: 'Form Atama',
      },
      {
        id: 61,
        title: 'Görev Atama',
      },
    ],
  },
  {
    id: 7,
    title: 'Rapor',
    icon: <FileCopyIcon />,
    isActive: false,
    visibility: [ADMIN, REPORTER],
    listItems: [
      {
        id: 70,
        title: 'Rapor Sonuçları',
      },
      {
        id: 71,
        title: 'Belge Tasarımı',
      },
    ],
  },
  {
    id: 8,
    title: 'Formlar',
    icon: <GroupIcon />,
    isActive: false,
    visibility: [ADMIN, USER],
  },
  {
    id: 9,
    title: 'Görevler',
    icon: <GroupIcon />,
    isActive: false,
    visibility: [ADMIN, USER],
  },
];
