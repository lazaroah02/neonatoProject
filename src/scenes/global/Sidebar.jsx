import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../img/OCCN2.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useMediaQuery} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Item = ({ title, to, icon, selected, setSelected,onItemClick,}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
          fontFamily:"Merriweather Sans"
        }}
        onClick={() => {
          setSelected(title);
          onItemClick();
          navigate(to);
        }}
        icon={icon}
      >
        <Typography fontFamily="Merriweather Sans" >{title}</Typography>
      </MenuItem>
  );
};

const SideBar = ({isCollapsed,onCollapsed,isAdmin}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Home");
 
  useEffect(()=>{

 },[isAdmin])


  
  const handleOnClickItem = () => {
    if(!isCollapsed)
      onCollapsed();
  }
  return (
    <Box
      position={"fixed"}    
      left={isCollapsed?"-80px":undefined}
      zIndex={isCollapsed?50:10000}
      
      sx={{
        "& .ps-sidebar-root":{
            width:"150px",
         
        },
          
        "& .sidebar-inner": {
          background: `${colors.grey[100]} !important`,
        },
 
        "& .ps-menu-root": {
          backgroundColor: `${colors.greenSpace[700]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .inner-item": {
          padding: "5px px 5px 20px !important",
        },
        "a:hover": {
          color: `${colors.greenAccent[700]} !important`,
          backgroundColor:"transparent !important",
        },

        "& .ps-active": {
          color: `${colors.greenAccent[400]} !important`,
        },
        "& .ps-sidebar-container": {
          overflowY: "hidden !important",
          
        },
        "& .css-pxpt32": {
          paddingTop: "25px",
          
        },
        "& .ps-sidebar-root": {
          borderRight: "none !important",
          boxShadow:`0px 0px 1px 0px ${colors.greenSpace[100]}`,
          borderRadius:"0px 15px 15px 0px",
        },
        "& .ps-sidebar-container": {
          backgroundColor: `${colors.greenSpace[700]} !important`,
          borderRadius:"0px 15px 15px 0px",
        },

      }}
    >

      <Sidebar collapsed={isCollapsed} 
        width="300px"
      >
        <Menu
          iconShape="square"
          style={{ height: "100vh", }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {onCollapsed()}}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                sx={{
                  "& .MuiButtonBase-root:hover": {
                      bgcolor: colors.greenAccent[800],
                      
                  },
                  "& .MuiButtonBase-root": {
                      borderRadius: "3px !important",
                      bgcolor: colors.greenAccent[900],
                  }

              }}
              >
                <Box
                  marginTop="25px"
                  marginLeft={"-20px"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Box width="50px" height="50px">
                    <div
                      style={{
                        backgroundImage: `url(${logo})`,
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        backgroundSize: "60%",
                        backgroundRepeat: "no-repeat",
                      
                        backgroundPosition: "center",        
                      }}
                    
                    ></div>
                  </Box>
      
                </Box>
                <IconButton onClick={() => {onCollapsed()}}>
                  <CloseRoundedIcon fontSize="small"/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingTop={"40px"}>
            <Item
              title="Home"
              to="/home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              onItemClick={handleOnClickItem}
            />
            {
              localStorage.getItem("token") &&
              <>
                <Item
                  title="Datos de los Pacientes"
                  to="/pacientesList"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onItemClick={handleOnClickItem}
                />
                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onItemClick={handleOnClickItem}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onItemClick={handleOnClickItem}
                />
              </> 
            }
  
            {
              localStorage.getItem("admin") === "true" 
              &&
              <>
                <Item
                  title="Ingresar Paciente"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  onItemClick={handleOnClickItem}
               />
                <Item
                  title="Control de Usuarios"
                  to="/controlUser"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  style={{ paddingLeft: "20px" }}
                  onItemClick={handleOnClickItem}
                />
              </>
            }
          </Box>
        </Menu>
      </Sidebar>
 
    </Box>
  );
};

export default SideBar;
