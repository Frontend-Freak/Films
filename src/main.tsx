import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import { AuthProvider } from "./auth-provider.tsx";

export const API_KEY: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDE4NzQwMTQyNWE3NzRlNzk3M2M2YTFlNjQ1NmQ0NSIsIm5iZiI6MTc1OTcwNzgxNS45MDYsInN1YiI6IjY4ZTMwMmE3NzYwNDAwNTJhOWMyMjc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8h-qKQP6Qdh4s8jo8-Wa9f9_Ahk5DmUsfl6EKAI0fwU";


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider token={API_KEY}>
			<App />
		</AuthProvider>
	</StrictMode>
);
