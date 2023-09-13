import { Box,Typography } from "@mui/material";


const Advice = ({title,colorBox}) => {
    return(
      <Box 
        width={"230px"} 
        height = {"40px"}
        display={"fixed"}
        position={"absolute"}
        backgroundColor={colorBox}
        color = {"white"}
        zIndex={"10"}
        top={"120px"}
        right={"20px"}
        borderRadius={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
        className = "fade"
        >
        <Typography>
          <h4>{title}</h4>
        </Typography>
      </Box>
    )
};

export default Advice;