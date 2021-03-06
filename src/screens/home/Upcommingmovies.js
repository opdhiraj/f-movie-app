import React from 'react';
import { moviesData } from '../../common/moviesData';
import { makeStyles } from '@material-ui/styles';
import { ImageList,ImageListItem,ImageListItemBar} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    
   
    transform: 'translateZ(0)',
  },
  // title: {
  //   color: theme.palette.primary.light,
  // },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));







export default function Upcommingmovies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6}>
        {moviesData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
             />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
