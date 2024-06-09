import React from "react";
import {AuthProvider} from "./contexts/AuthContext";
import HomePage from "./HomePage";

function App() {
    return (
        <AuthProvider>
        <HomePage />
        </AuthProvider>
    )
}

export default App;