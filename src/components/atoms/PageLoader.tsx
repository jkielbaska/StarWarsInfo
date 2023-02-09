import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const PageLoader = ({ open }: { open: boolean }) => {
  return (
    <Backdrop className="bg-transparent z-loader" open={open}>
      <CircularProgress className="text-yellow" />
    </Backdrop>
  );
};
