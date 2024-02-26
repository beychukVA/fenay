import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { GApiProvider } from "react-gapi-auth2";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./config/Router/router";
import { AuthProvider } from "./provider/AuthProvider/AuthProvider";
import { UpdateUser } from "./Services/User";

function App() {
  const [SongUrl, setSongUrl] = useState("");
  const [SongDetails, setSongDetails] = useState(null);
  const [PaypalId, setPaypalId] = useState(false);

  const clientConfig = {
    client_id:
      "440544890779-t01qtuodv65oblka5c54l282d6pklqqq.apps.googleusercontent.com",
    plugin_name: "Chat",
  };

  // useEffect(() => {
  //   userOnline();
  //   setupBeforeUnloadListener();
  // }, []);

  // eslint-disable-next-line no-unused-vars
  const userOnline = async () => {
    const login = localStorage.getItem("login");
    console.log("IS LOGIN", login);
    if (login) {
      const res = await UpdateUser({ isOnline: true });
      console.log("USER DATA", res);
      res?.paypalId ? setPaypalId(res.paypalId) : setPaypalId(false);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const setupBeforeUnloadListener = () => {
    // window.addEventListener('beforeunload', async function (e) {
    //   e.preventDefault();
    //     UpdateUser({isOnline : false});
    //     e.returnValue = 'Are you sure you want to close?';
    //     return 'Are you sure you want to close2?';
    //   });
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FF1C51",
        dark: "#ab0028",
        light: "#de6a86",
        contrastText: "#fff",
      },
      secondary: {
        main: "#d1d1d1",
        dark: "#686868",
        light: "dad0d0",
        contrastText: "#000",
      },
    },

    typography: {
      h5: {
        fontWeight: "bolder",
      },
      subtitle1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 9,
      },
      fontFamily: "'poppins', sans- serif",
    },
  });

  return (
    <GApiProvider clientConfig={clientConfig}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Toaster position="top-right" />
            <AppRouter
              SongDetails={SongDetails}
              setSongDetails={setSongDetails}
              SongUrl={SongUrl}
              setSongUrl={setSongUrl}
              PaypalId={PaypalId}
            />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GApiProvider>
  );
}

export default App;
