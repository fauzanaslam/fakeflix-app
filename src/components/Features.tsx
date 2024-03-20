import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BorderedBottomBox from "../wrapper/BorderBottomBox";
import Card from "./Card";

const Features = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box sx={{ display: "flex" }}>
            <Card />
          </Box>
        </Container>
      </BorderedBottomBox>
    </Box>
  );
};

export default Features;
