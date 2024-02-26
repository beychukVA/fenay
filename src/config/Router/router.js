import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import AboutUs from "../../Screens/About";
import HomeScreen from "../../Screens/Home";
import LogoutScreen from "../../Screens/Logout/index_old";
import Marketing from "../../Screens/Marketing";
import Profile from "../../Screens/profile/profile";
import RequestVerificationScreen from "../../Screens/RequestVerification";
import SettingScreen from "../../Screens/Settings";
import Signin from "../../Screens/Signin";
import Signup from "../../Screens/Signup";
import Song from "../../Screens/song/song";
import TermsScreen from "../../Screens/Terms";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";
import VerifyApple from "../../Screens/Verify/VerifyApple";
import { ResetPassword } from "../../Screens/ResetPassword";
import { Chat } from "../../Screens/Chat";
import { Saved } from "../../Screens/Saved";
import { Library } from "../../Screens/Library";
import { Calendar } from "../../Screens/Calendar";
import { MyStore } from "../../Screens/MyStore";
import { CommunityPage } from "../../Screens/CommunityPage";
import { ExplorePage } from "../../Screens/Explore";
import { CreatePage } from "../../Screens/Create";
import { Logout } from "../../Screens/Logout";

function AppRouter({
  SongUrl,
  setSongUrl,
  SongDetails,
  setSongDetails,
  PaypalId,
}) {
  const { credentials } = useContext(AuthContext);

  return (
    <>
      {!credentials ? (
        <Routes>
          {/* Public route */}
          <Route
            path="/"
            element={
              <PublicRoute user={credentials}>
                {/* <LandingScreen /> */}
                <HomeScreen
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </PublicRoute>
            }
          />
          <Route
            path="/NAMM"
            element={
              <PublicRoute user={credentials}>
                <Marketing />
              </PublicRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PublicRoute user={credentials}>
                <LogoutScreen />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute user={credentials}>
                <Signin />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute user={credentials}>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-apple"
            element={
              <PublicRoute user={credentials}>
                <VerifyApple />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute user={credentials}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <PublicRoute user={credentials}>
                <AboutUs
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </PublicRoute>
            }
          />
          <Route
            path="/community"
            element={
              <PublicRoute user={credentials}>
                <CommunityPage />
              </PublicRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PublicRoute user={credentials}>
                <ExplorePage />
              </PublicRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PublicRoute user={credentials}>
                <Library />
              </PublicRoute>
            }
          />
          <Route
            path="/my-store"
            element={
              <PublicRoute user={credentials}>
                <MyStore />
              </PublicRoute>
            }
          />
          <Route path="*" element={<h1> </h1>} />
          {/* Public route */}
        </Routes>
      ) : (
        <Routes>
          {/* Protected route */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <HomeScreen
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Profile
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <CommunityPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <ExplorePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Library />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-store"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <MyStore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <SettingScreen
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Saved />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <CreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/log-out"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/song"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <Song setSongUrl={setSongUrl} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/terms"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <TermsScreen
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/request-verification"
            element={
              <ProtectedRoute
                PaypalId={PaypalId}
                SongDetails={SongDetails}
                setSongDetails={setSongDetails}
                SongUrl={SongUrl}
                setSongUrl={setSongUrl}
                user={credentials}
              >
                <RequestVerificationScreen
                  setSongUrl={setSongUrl}
                  setSongDetails={setSongDetails}
                />
              </ProtectedRoute>
            }
          />
          {/* Protected route */}

          <Route path="*" element={<h1> </h1>} />
        </Routes>
      )}
    </>
  );
}
export default AppRouter;
