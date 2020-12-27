import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";

import ApartmentIcon from '@material-ui/icons/Apartment';
import {MonochromePhotos} from "@material-ui/icons";
import {ListItem} from "../../constant/listItem";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    width: '100%',
    height: '191px',
    backgroundColor: 'white',
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const item = ListItem;
  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.',    
    'col1-header': 'Lorem ipsum dolor sit amet',
    'col1-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col2-header': 'Lorem ipsum dolor sit amet',
    'col2-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col3-header': 'Lorem ipsum dolor sit amet',
    'col3-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col4-header': 'Lorem ipsum dolor sit amet',
    'col4-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col5-header': 'Lorem ipsum dolor sit amet',
    'col5-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    'col6-header': 'Lorem ipsum dolor sit amet',
    'col6-desc': 'In eget ligula ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum, nisi nulla cursus turpis.',
    ...props.content
  };
  console.log("list item", item);


  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={9}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>
          <Grid container spacing={6} >

            {
              item.map((value,index) => {
                console.log("index", index)
                return value['col1-header'] ?
                    <Grid item xs={12} sm={6} md={3}>
                  <Paper display="flex" variant={"outlined"} draggable={true}>
                    <Box pr={5} padding = {1}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <MonochromePhotos />
                      </Avatar>
                    </Box>
                    <Box padding={1}>
                      <Typography variant="h6" component="h3" gutterBottom={true}>{value['col1-header']}</Typography>
                      <Typography variant="body2" component="p" color="textSecondary">{value['col1-desc']}</Typography>
                    </Box>
                  </Paper>
                </Grid> :
                    <Grid item xs={12} sm={6} md={3} >
                      <Paper display="flex" variant={"outlined"} className={classes.paper} draggable={true}>
                        {/*<Box pr={5}>*/}
                        {/*  <Avatar variant="rounded" className={classes.iconWrapper}>*/}
                        {/*  /!*  <ApartmentIcon />*!/*/}
                        {/*  </Avatar>*/}
                        {/*</Box>*/}
                        {/*<Box padding={1}>*/}
                        {/*  <Typography variant="h6" component="h3" gutterBottom={true}>{}</Typography>*/}
                        {/*  <Typography variant="body2" component="p" color="textSecondary">{}</Typography>*/}
                        {/*</Box>*/}
                      </Paper>
                    </Grid>

              })
            }

          </Grid>
        </Box>
      </Container>
    </section>
  );
}