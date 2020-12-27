import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";

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
  const [listItem, setListItem] = useState(ListItem);
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


  let handleDrag = (event,value) =>{
    console.log("event", event);
    console.log("value", value)
  }
  let onDragEnd = result =>{
  console.log("dragend",result)

  }

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
          <DragDropContext onDragEnd = {onDragEnd}>
          <Grid container spacing={6} >
            <Droppable droppableId ={listItem.columns.id}>
              {
                (provided) => {
                  return (
                      listItem.items.map((value,index) => {
                         return (

                            <Grid item xs={12} sm={6} md={3} innerRef={provided.innerRef} key={value.id}>
                              <Draggable draggableId={index.toString()} index={index} >
                                {(provided) => {
                                return (
                                 <Paper display="flex" variant={"outlined"}  id={index}  className={classes.paper} {...provided.draggableProps}  {...provided.dragHandleProps} innerRef={provided.innerRef} >
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
                                )
                              }}

                              </Draggable>
                              {provided.placeholder}
                            </Grid> )


                      })
                  )
                }
              }


            </Droppable>


          </Grid>
          </DragDropContext>
        </Box>
      </Container>
    </section>
  );
}