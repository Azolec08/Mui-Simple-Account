import { Box, Stack } from "@mui/material";
import BasicModal from "../../../shared/components/basic-modal";
import FeedSection from "../../../shared/components/feed";
import Navbar from "../../../shared/components/navbar";
import Rightbar from "../../../shared/components/rightbar";
import Sidebar from "../../../shared/components/sidebar";

const Home = () => {
  return (
    <>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 2 }}
          justifyContent="space-between"
        >
          <Sidebar />
          <FeedSection />
          <Rightbar />
        </Stack>
        <BasicModal />
      </Box>
    </>
  );
};

export default Home;
