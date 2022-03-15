import {BackButton} from './BackButton.js';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function Profile({userList}){
    const {id}=useParams();
    const {name,userProfile}=userList.find((user)=>user.id===id);
    const {DOB,designation,salary,hobbies,userImage}=userProfile;
    return (<div>  
              <h2 className="heading-style">USER PROFILE OF {name.toUpperCase()}</h2><br/>
              <div className="profile-card">
              <Card sx={{ display: 'flex',backgroundColor:'aliceblue',color:'#1976d2',width:498,gap:'15px',flexWrap:'wrap' }}>
              <CardMedia
        component="img"
        sx={{ width:170,marginInline:'auto' }}
        image={userImage}
        alt="User pic"
      />
        <CardContent sx={{display:'flex',flexDirection:'column',gap:'4px',textAlign:{sm:'center',md:'left'},marginInline:'auto'}}>
        <p><span className="profile-card-style">Date of Birth</span>: {DOB}</p>
        <p><span className="profile-card-style">Designation</span>: {designation} </p>
        <p><span className="profile-card-style">Salary</span>: {salary}</p>
        <p><span className="profile-card-style">Hobbies</span>: {hobbies}</p>
        </CardContent>
    </Card>
    </div>
    <br/>
    <div className="profile-padding">
    <BackButton/>
    </div>
    </div>);
}

export {Profile};