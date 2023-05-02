import { Avatar,Box, Card,CardContent, CardMedia, Typography, CardHeader, IconButton } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = ({title,description,imageURL,userName, isUser,id}) => {
  const navigate = useNavigate();
  const handleEdit = (e) =>{
    navigate(`/myBlogs/${id}`)
  };
  const deleteRequest = async () =>{
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`)
    .catch((err)=>console.log(err))
    const data = await res.datal;
    return data;
  }
  const handleDelete = () => {
    deleteRequest()
    .then(()=>navigate("/"))
    .then(()=>navigate("/blogs"))
    .then((data)=>console.log(data))
  }
  console.log(title, isUser);
  return (
    <div>
      {" "}
      <Card sx={{ width: '60%', margin:'auto',marginTop:2, padding:2, boxShadow:'5px 5px 10px #ccc',
        ":hover": {boxShadow: "15px 15px 50px #ccc",}
         }}>
          {isUser && (
            <Box display='flex'>
              <IconButton 
                onClick={handleEdit} 
                sx={{marginLeft:'auto' }}>
                  <EditIcon color='warning'/>
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverIcon color='error'/>
              </IconButton>
            </Box>
          )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="broken file"
        />
        
        <CardContent>
        <hr />
        <br />
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {": "} {description}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default Blog;
