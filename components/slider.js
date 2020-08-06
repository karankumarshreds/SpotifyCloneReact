import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function ContinuousSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider
                        className="slider"
                        value={value}
                        onChange={handleChange}
                        aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
        </div>
    );
}
