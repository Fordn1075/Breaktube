import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NightlifeIcon from '@mui/icons-material/Nightlife'
import AlbumIcon from '@mui/icons-material/Album'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ComputerIcon from '@mui/icons-material/Computer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

import missing from './images/missing.jpg';
export const logo = require('./images/logo.png');

export const categories = [
  //Music
  { name: 'Bboy Music', icon: <HomeIcon />, },
  { name: 'Town bboy Mixtape', icon: <AlbumIcon />, },
  { name: 'BoomBap', icon: <AlbumIcon />, },
  { name: 'Vibin\'', icon: <AlbumIcon /> },
  { name: 'Dj Fleg', icon: <AudiotrackIcon />, },
  { name: 'Dj Lean Rock', icon: <AudiotrackIcon />, },
  { name: 'Chillhop', icon: <AudiotrackIcon />, },
  { name: 'bTunes720', icon: <AudiotrackIcon />, },
  { name: 'Joey Valence & Brae', icon: <OndemandVideoIcon />, },
  { name: 'stance', icon: <OndemandVideoIcon />, },

  //Fitness
  { name: 'CHRIS HERIA', icon: <FitnessCenterIcon />, },
  { name: 'THENX', icon: <FitnessCenterIcon />, },
  { name: 'Tao Physique', icon: <FitnessCenterIcon />, },
  { name: 'pigmie', icon: <FitnessCenterIcon />, },

  //Tutoiral
  { name: 'channelSnack', icon: <SchoolIcon />, },
  { name: 'AJ-47 Soul Mavericks', icon: <SchoolIcon />, },
  { name: 'HipHop Journal', icon: <SchoolIcon />, },
  { name: 'BREAK STUDIO', icon: <SchoolIcon />, },
  { name: 'Red Bull BC One', icon: <NightlifeIcon />, },

  //Graffiti
  { name: '||SIVE||', icon: <FormatPaintIcon />, },

  //Gaming
  { name: 'Travesty BDO', icon: <ComputerIcon />, },
  { name: 'MKIceandFire', icon: <WhatshotIcon />, },
  { name: 'Team Darkside', icon: <SportsEsportsIcon />, },
];

export const demoThumbnailUrl = missing;
export const demoChannelUrl = '/channel/UCcGORgJ6UX4CLAZWM3VmMdg';
export const demoVideoUrl = '/video/v=dQw4w9WgXcQ';
export const demoChannelTitle = 'Bboy Channel';
export const demoVideoTitle = 'MISSING TITLE';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'