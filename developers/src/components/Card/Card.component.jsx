import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './Card.module.css'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

export default function CardComponent(props) {
  const text= props.text;
  return (
    <Card className={style.cardStyle}>
      <CardHeader
        avatar={
          <Avatar alt={users[0].name} src={users[0].image} className={style.avatarSize} ></Avatar>
        }
        title={
            users[0].name
        }
        subheader={
          users[0].technology
        }
      />
      <Divider/>
      <CardContent>
        {text ? <Typography variant="body2" color="text.secondary">
          {users[0].description}
        </Typography> : 
        <Typography variant="body2" color="text.secondary">
          {users[0].description.substring(0,100)}...
        </Typography>}
        
      </CardContent>
      <Divider/>
      <CardActions sx={{display:"flex", justifyContent: "space-around"}}>
        <IconButton  className={style.iconButtonSpace} aria-label="add to favorites">
            <Button color='inherit' startIcon={<FavoriteIcon />}>
            {users[0].rank}
            </Button>
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CardContent>
          <Typography variant="body2" color="text.secondary">price: {users[0].id }$</Typography> 
        </CardContent>
        <Divider orientation="vertical" variant="middle" flexItem />           
        <IconButton  className={style.iconButtonSpace} aria-label="add to favorites">
            <Button component={Link} href={users[0].linkedin} color='inherit'>
              <LinkedInIcon />
            </Button>
        </IconButton>
      </CardActions> 
    </Card>
  );
}
const users= [
    { 
      image: "https://thumbs.dreamstime.com/z/funny-animal-boxing-15626006.jpg", 
      name: "Annike", 
      technology: "JavaScript",
      id: 376,
      rank: 5,
      description: "backend developer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem at, earum odit, quasi enim possimus delectus unde facilis amet optio sunt corporis accusamus repudiandae placeat dignissimos commodi. Ad, eveniet dignissimosOfficiis ducimus assumenda aut possimus nobis autem minima repudiandae, incidunt saepe placeat hic expedita esse cupiditate rerum cumque distinctio commodi necessitatibus molestias quis consequuntur pariatur. Blanditiis placeat quibusdam eum animi.",
      linkedin: "https://www.linkedin.com"
  }]
