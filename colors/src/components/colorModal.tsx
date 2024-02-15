import { Box, Modal, Typography } from "@mui/material";
import { Color } from "../store/colorSlice";

type ColorModalType = {
  handleClose: () => void;
  open: boolean;
  item: Color | null;
};

const ColorModal = (props: ColorModalType) => {
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={props.open}
      onClose={props.handleClose}
    >
      <Box
        sx={{
          backgroundColor: props.item?.color,
          border: "2px solid #000",
          padding: "30px",
        }}
      >
        <Typography sx={{ textAlign: "center", marginBottom: 3 }} fontSize={30}>
          DETAILS
        </Typography>
        <Typography>
          {props.item &&
            `ID: ${
              props.item.id
            } Name: ${props.item.name.toUpperCase()} Pantone: ${
              props.item.pantone_value
            } Year: ${props.item.year} Color: ${props.item.color}`}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ColorModal;
