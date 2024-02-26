import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ProtectedRoute = ({
  user,
  redirectPath = "/login",
  children,
  SongUrl,
  setSongUrl,
  SongDetails,
  setSongDetails,
  PaypalId,
}) => {
  const navigate = useNavigate();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <>
      {!PaypalId && (
        <div style={{ textAlign: "center", color: "white", margin: "5px 0px" }}>
          {" "}
          Please connect your Paypal Business Account in Settings to start
          selling songs
          <Button
            onClick={() => navigate("/settings")}
            variant="contained"
            sx={{ margin: "0px 10px", borderRadius: 10 }}
          >
            Connect
          </Button>
        </div>
      )}
      {children}
    </>
  );
};

export default ProtectedRoute;
