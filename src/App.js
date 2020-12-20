import React from 'react';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import './App.css';
import ScheduleDialog from './Components/ScheduleDialog';
import CustomerList from './Components/CustomerList';
import Agenda from './Components/Agenda';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    elevation: 3,
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    elevation: 3,
  },
}));

function App(){

  const [jobs, setJob] = useState([
    { name: 'Ruairi Blake', bicycleType: 'Road bike', dateTime: '12/20/2020 2:30PM'},
    { name: 'Ed green', bicycleType: 'Mountian bike', dateTime: '12/24/2020 1:20PM'},
    { name: 'Helpma Bikebroke', bicycleType: 'Racing Bike', dateTime: '1/4/2021 12:00PM'}
  ]);

const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div>
        <Grid container spacing ={3}>
          <Grid item xs={7} sm={7}>
            <Paper className={classes.paper}>
            <ScheduleDialog />
              {jobs.map(job => (
        <Agenda name={job.name} bicycleType={job.bicycleType} dateTime={job.dateTime} />
        
        ))}  
            </Paper>
          </Grid>
        <Grid item xs={7} sm={5} >
          <Paper className={classes.paper}>
            <CustomerList />
          </Paper>
        </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Inventory/>
            </Paper>
          </Grid>
        </Grid> 
      </div>
    </div>
    
  );
}

export default App;
