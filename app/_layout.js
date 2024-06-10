import { AuthProvider } from "./contexts/AuthContext";
import { Slot } from "expo-router";

function RootLayout(){
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}
export default RootLayout;