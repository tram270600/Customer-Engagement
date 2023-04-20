import HomeIcon  from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <EventNoteOutlinedIcon />,
    text: "Booking",
    link: "booking",
  },
  {
    id: 2,
    icon: <FeaturedPlayListOutlinedIcon />,
    text: "Booked List",
    link: "booked-list",
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: "Settings",
    link: "settings",
  },
];
