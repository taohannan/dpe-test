import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';

import {MonochromePhotos} from "@material-ui/icons";
import {ListItem} from "../../constant/listItem";
import red from "@material-ui/core/colors/red";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
      minHeight : '200px',
    backgroundColor: 'white',

  },
    paperRed: {
        width: '100%',
        minHeight : '200px',
        backgroundColor: 'white',
        color : 'red'
    }
}));

export default function Features(props) {
  const classes = useStyles();
  const item = ListItem.items;
  const[itemList,updateItemList] = useState(ListItem);
  const[stylingSelect,updateStyling] = useState('paper')
  const content = {
    'badge': 'Show off your coding skill',
    'header-p1': 'Question 1: ',
    'header-p2': 'Show the sentences in boxes.',
    'description': 'Dropee.com,B2B Marketplace,SaaS enabled marketplace,Provide Transparency,Build Trust' + ' \n Just Drag the box to change the location',
      'description2': ' Just Drag and Drop the box to change the location',
     ...props.content
  };
  let onDragEnd = (result) =>{
    const {destination, source, draggableId} = result;
   if(!destination){
     return
   }

    if (
        (destination.droppableId === source.droppableId) && (destination.index === source.index)
    ){
      return
    }
    // const originalList = itemList
    const newList = Array.from(itemList.items);
    let sourceIndex = newList[source.index]
    let destinationIndex = newList[destination.index]
    newList.splice(source.index,1,destinationIndex)
    newList.splice(destination.index,1, sourceIndex)
    console.log("sourceIndex",sourceIndex)
    console.log("destinationIndex",destinationIndex)
    console.log("newList", newList);
    updateItemList({
      items :   [...newList]
    })



  }

  const handleChange = (event) => {
      console.log(event.target.value)
      updateStyling(event.target.value)
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
                <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description2']}</Typography>
            </Container>
          </Box>
            <Box component={"div"} display = {"block"} >
                <Select
                    labelId = {"Change your styling"}
                    id={"styling-id"}
                    value={stylingSelect}
                    onChange={handleChange}
                >
                    <MenuItem value = {"paper"}>Original Theme</MenuItem>
                    <MenuItem value = {"paperRed"}>Red Theme</MenuItem>
                </Select>
            </Box>
          <Grid container spacing={2} >
            <DragDropContext onDragEnd ={onDragEnd}>
            {
              itemList.items.map((value,index) => {
                return (
                  <Droppable droppableId ={value.id.toString()} key={value.id.toString()}>
                    {
                      (provided) =>{
                        return (
                            <Grid item xs={12} sm={6} md={3} innerRef={provided.innerRef} {...provided.droppableProps} >
                              <Draggable draggableId={value.id.toString()} index={index}>
                                {
                                  (provided) =>{
                                    return(
                                        <Paper display="flex" variant={"outlined"}  className={classes[stylingSelect]} innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                                  }
                                }

                              </Draggable>
                              {provided.placeholder}
                            </Grid>
                        )
                      }
                    }

                  </Droppable>
                )

              })
            }
            </DragDropContext>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}