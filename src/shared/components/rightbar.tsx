import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Conversations from "./conversation";
import StandardImageList from "./image-list";
const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box
        position="fixed"
        width={320}
        sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup
          total={24}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <StandardImageList />

        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <Conversations />
      </Box>
    </Box>
  );
};

export default Rightbar;
