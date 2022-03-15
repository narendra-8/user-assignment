import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';

function User({id,name,mainImage,deleteButton,editButton,profileButton}){
    return ( <Card sx={{ minWidth:300,backgroundColor:'aliceblue',color:'#1976d2' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="main-image-style"
            image={mainImage}
            alt="main pic"
          />
          <CardContent>
            <h1>{name}</h1>
            <h5>User ID: {id}</h5>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{justifyContent:'space-between'}}>
          {profileButton}
          <div>
          {editButton}
          {deleteButton}
          </div>
        </CardActions>
      </Card>);
}

function Users({userList,setUserList}){
    const history=useHistory();
    const deleteAction=(id)=>{
        const newUserList=userList.filter((user)=>id!==user.id);
        setUserList(newUserList);
    };
    return (
        <div>
         <h2 className="heading-style">USERS</h2>
        <div className="user-arrangement">
        {userList.map(({id,name,mainImage},index)=><User id={id} name={name} mainImage={mainImage} key={index} deleteButton={<IconButton aria-label="delete" color="error" onClick={()=>{deleteAction(id)}}><DeleteIcon/></IconButton>} editButton={<IconButton aria-label="edit" color="primary" onClick={()=>{history.push(`/edit-user/${id}`)}}><EditIcon/></IconButton>} profileButton={ <Button variant="outlined" color="primary" onClick={()=>{history.push(`/profile/${id}`)}}>
            VIEW PROFILE
          </Button>}/>)}
        </div>
        </div>
        );
}

export {Users};