import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://keepkey.com" target={"_blank"}>
				<img
					className={styles.logo}
					src="/keepkey_logo.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
