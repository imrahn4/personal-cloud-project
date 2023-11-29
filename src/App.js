import React from "react";
import './App.css';
import Sidebar from "./Sidebar.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MyCloudPage from "./MyCloudPage";
import FavouritesPage from "./FavouritesPage";
import TagsPage from "./TagsPage";
import UploadPage from "./UploadPage";
import SettingsPage from "./SettingsPage";

function App() {
    // Add a state to track whether the initial redirect has been performed
    const [initialRedirect, setInitialRedirect] = React.useState(false);

    React.useEffect(() => {
      // Set initialRedirect to true after the first render
      setInitialRedirect(false);
    }, []);

  return (
    <Router>
      <div className="app-container">
          <Sidebar/>
          {/* Main Content */}
          
          <div className="main-content"> 
          {initialRedirect && <Navigate to="/my-cloud" />}

          <Routes>
            <Route path="/my-cloud" element={<MyCloudPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/settings" element={<SettingsPage />} />

            {/* Default route for unmatched paths */}
            <Route path="*" element={<Navigate to="/my-cloud" />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
