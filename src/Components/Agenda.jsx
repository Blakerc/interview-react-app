import React from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles({
    root: {
      minWidth: 250,
      maxWidth: 250,
      marginBottom: 5,
      height: 175,
      padding: 1,
      align: 'center',
      color: 'green',
    },
    title: {
      fontSize: 13,
    },
    pos: {
      marginBottom: 5,
    },
  });


function Agenda(props){
    const classes = useStyles();
    return(
        <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography className={classes.title} color='textPrimary' gutterBottom>
            {props.name}
          </Typography>
          <Typography variant='h6' component='h6'>
          {props.bicycleType}
          </Typography>
          <Typography variant='body2' component='p'>
          {props.dateTime}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Customer Details</Button>
          <Tooltip title='Complete Job'>
            <Button size='small' variant='contained'>
              <IconButton float='right' aria-label='Confirm' color='primary'>
                <CheckIcon />
              </IconButton>
            </Button>
          </Tooltip>
          <Tooltip title='Delete Job'>
            <Button size='small' variant='contained'>
              <IconButton aria-label='delete' color='secondary'>
                <DeleteIcon />
              </IconButton>
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    );
}

export default Agenda


