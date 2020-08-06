import '../styles/sidebar.css';
import SideBarOption from './sidebar-options';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';

// ICONS
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';

const SideBar = () => {
    const [{ playlist }] = useContext(DataContext);
    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://cdn.clipart.email/2ea3d82dff9347b2a5269072f040169c_spotify-logo-and-brand-assets_2362-708.png"
                alt="spotify-logo.png" />
            <SideBarOption Icon={HomeOutlinedIcon} title="Home" />
            <SideBarOption Icon={SearchOutlinedIcon} title="Search" />
            <SideBarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlist?.items?.map(each => (
                <SideBarOption key={each.id} title={each.name} />
            ))}
        </div>
    );
};
export default SideBar;