import AddCircleIcon from "@mui/icons-material/AddCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar, ButtonGroup, Stack, styled, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const UserModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: "24px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
  padding: "20px",
}));

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Button
        sx={{ position: "fixed", bottom: "10px", left: "13px" }}
        onClick={handleOpen}
      >
        <AddCircleIcon sx={{ fontSize: "50px" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserModalBox bgcolor="background.paper">
          <Typography
            id="modal-modal-title"
            variant="h6"
            textAlign="center"
            color="text.primary"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Typography color="text.primary">Mark Celoza</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} marginTop="10px">
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideocamIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
            sx={{ marginTop: "10px" }}
          >
            <Button sx={{ width: "100%" }}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </UserModalBox>
      </Modal>
    </Box>
  );
}
