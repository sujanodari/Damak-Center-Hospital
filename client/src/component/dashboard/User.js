import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function User({ patient }) {
 
  const classes = useStyles();
  return ( 
    <>
       <Container maxWidth="lg" className={classes.container}>
        { console.log(patient)}
        

         {patient.length === 0 ? (
            <Grid key={patient?.id} item sm={6} md={4} lg={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
            <p  align="center">No user</p>
           </Typography>
           </CardContent>
           </CardActionArea>
           </Card>
           </Grid>
            
         
          ) : (
            patient.map((patient) => (
              <Grid key={patient?.id} item sm={6} md={4} lg={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {patient?.username}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid>
                  )))}  
                    </Container>
                    </>
  );
}
