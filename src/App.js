import React from "react";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app-page">
                <Sidebar />
                <RecommendedVideos />
            </div>
            {/* header */}
            {/* sidebar */}
            {/* recommended videos*/}
        </div>
    );
}

export default App;
