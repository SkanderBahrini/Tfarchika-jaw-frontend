import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupIcon from '@mui/icons-material/Group';
import WcIcon from '@mui/icons-material/Wc';
import Stack from '@mui/material/Stack';
const How = () => {
    return (

        <div className="how">
      
       <h1 style={{"font-family": "serif", color:'white'}}> This is how it works   </h1>
       <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
         <h4 style={{"font-family": "serif", color:'white'}}> Family: for Family night </h4>    <FamilyRestroomIcon color="secondary" sx={{width:"50"}}/> 
                 <h4 style={{"font-family": "serif", color:'white'}}> Friends: For friends night</h4>    <GroupIcon color="secondary" sx={{width:"50"}}/> 
                 <h4 style={{"font-family": "serif", color:'white'}}> Date: For a Date night</h4>    <WcIcon color="secondary" sx={{width:"50"}}/> 

                 </Stack>

      <br/>
   
        </div>

      );
}
 
export default How;