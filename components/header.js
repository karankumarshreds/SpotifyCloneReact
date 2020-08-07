import '../styles/header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../context/context-provider';

const Header = ({ spotify }) => {

    const [{ user }] = useContext(DataContext);

    return (

        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Songs, Artists or Podcasts..." />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url || "/face.png"} alt="Karan" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
};

export default Header;