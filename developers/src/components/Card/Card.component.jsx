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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardComponent(props) {
  const text= props.text;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Card>
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
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                E-mail:{users[0].email} 
                <Divider/>
                Phone: {users[0].phone}
                <Divider/>
                Location: {users[0].location}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Typography> : 
        <Typography variant="body2" color="text.secondary">
          {users[0].description.substring(0,100)}...
        </Typography>}
        
      </CardContent>
      <Divider/>
      <CardActions className={style.cardAction}>
        <IconButton aria-label="add to favorites">
            <Button color='inherit' startIcon={<FavoriteIcon />}>
            {users[0].rank}
            </Button>
        </IconButton>
        <Divider orientation="vertical"  flexItem />
        <CardContent>
          <Typography variant="body2" color="text.secondary">experince: {users[0].experience}</Typography> 
        </CardContent>
        <Divider orientation="vertical"  flexItem />
        <CardContent>
          <Typography variant="body2" color="text.secondary">price: {users[0].price }$</Typography> 
        </CardContent>
        <Divider orientation="vertical" flexItem />           
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
      linkedin: "https://www.linkedin.com",
      experience: "2 years",
      price: 7,
      email:  "test@hotmail.com",
      phone: "060123",
      location: "Serbia",
  }]
