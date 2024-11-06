import { Navbar } from "flowbite-react";

const Header = () => {
	return (
		<Navbar fluid rounded>
			<Navbar.Brand href="#">
				<img src="profile-pic.png" className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Recipe World</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">Discover Recipes</Navbar.Link>
				<Navbar.Link href="#">How It Works</Navbar.Link>
				<Navbar.Link href="#">Recipe Ideas</Navbar.Link>
				<Navbar.Link href="#">My Recipes</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
