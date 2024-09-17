import { DeleteSharp, SendSharp } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
const Home = () => {
  const BlueButton = styled(Button)({
    backgroundColor: "green",
    color: "yellow",
    "&:hover": {
      backgroundColor: "black",
    },
  });
  return (
    <div className="h-[100%] w-full flex items-center justify-center font-bold">
      <div>
        <Button variant="contained" disabled>
          Create Acount
        </Button>
        <Button
          variant="contained"
          href="https://www.youtube.com/watch?v=fzxEECHnsvU"
          target="_blank"
          color="secondary"
          size="small"
        >
          Create Acount
        </Button>
      </div>
      <Button variant="contained" endIcon={<SendSharp />}>
        Send
      </Button>
      <Button variant="outlined" startIcon={<DeleteSharp />}>
        Delete
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          color: "white",
          "&:hover": { background: "black" },
        }}
      >
        Edit styling
      </Button>

      <BlueButton>Custumize Style</BlueButton>
      <BlueButton>Custumize Style</BlueButton>
    </div>
  );
};

export default Home;
