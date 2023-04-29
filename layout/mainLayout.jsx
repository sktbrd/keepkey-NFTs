import Navbar from "../components/navigation/navbar";
import Favicon from "react-favicon";


export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
			<Favicon url={["https://www.keepkey.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkeepkey_logo.407f5aca.png&w=3840&q=100"]} />

		</div>
		
	);
}

