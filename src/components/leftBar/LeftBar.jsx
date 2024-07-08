import "./leaftBar.scss";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TimerIcon from "@mui/icons-material/Timer";
import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import MessageIcon from '@mui/icons-material/Message';
import PaidIcon from '@mui/icons-material/Paid';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John doe</span>
          </div>
          <div className="item">
            <div className="icon">
              <PeopleIcon />
            </div>
            <span>Friends</span>
          </div>
          <div className="item">
            <div className="icon">
              <GroupsIcon />
            </div>
            <span>Groups</span>
          </div>
          <div className="item">
            <div className="icon">
              <StoreIcon />
            </div>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <div className="icon">
              <YouTubeIcon />
            </div>
            <span>Watch</span>
          </div>
          <div className="item">
            <div className="icon">
              <TimerIcon />
            </div>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <div className="icon">
              <EventIcon />
            </div>
            <span>Events</span>
          </div>
          <div className="item">
            <div className="icon">
              <SportsEsportsIcon />
            </div>
            <span>Gaming</span>
          </div>
          <div className="item">
            <div className="icon">
              <CollectionsIcon />
            </div>
            <span>Gallery</span>
          </div>
          <div className="item">
            <div className="icon">
              <VideocamIcon />
            </div>
            <span>Videos</span>
          </div>
          <div className="item">
            <div className="icon">
              <MessageIcon />
            </div>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <div className="icon">
              <PaidIcon />
            </div>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <div className="icon">
              <LightbulbCircleIcon />
            </div>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <div className="icon">
              <SchoolIcon />
            </div>
            <span>Cources</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
