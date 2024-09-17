import { Mail, NotificationAddRounded } from "@mui/icons-material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import PositionedMenu from "./menu";

const Navbar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    height: "20%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBoxIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Creative Mind
          </Typography>
          <EmojiObjectsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search sx={{ display: "flex", backgroundColor: "background." }}>
            <SearchIcon sx={{ paddingTop: "5px", cursor: "pointer" }} />
            <InputBase placeholder="Search" />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={5} color="error">
              <NotificationAddRounded />
            </Badge>
            <PositionedMenu />
          </Icons>
          <UserBoxIcons>
            <PositionedMenu />
          </UserBoxIcons>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
