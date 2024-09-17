import { Box } from "@mui/material";
import CardData from "./card";
const FeedSection = () => {
  return (
    <Box p={2} flex={4}>
      <CardData />
      <CardData />
      <CardData />
    </Box>
  );
};

export default FeedSection;
