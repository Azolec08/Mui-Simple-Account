import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { SidebarData } from "../constant";
import { handleDarkMode } from "../store/counter";
import { MaterialUISwitch } from "./switch";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSetMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = e.target.checked ? "dark" : "light";
    dispatch(handleDarkMode(newMode));
  };
  return (
    <Box
      p={2}
      flex={1}
      sx={{
        display: { xs: "none", lg: "block" },
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        top: "0",
      }}
      position="sticky"
    >
      <Box position="fixed">
        <List>
          {SidebarData.map((item) => {
            return (
              <ListItem disablePadding key={item.title}>
                <ListItemButton>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MaterialUISwitch onChange={handleSetMode} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
