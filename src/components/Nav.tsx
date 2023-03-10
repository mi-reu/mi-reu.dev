import Link from "next/link";
import navlinks from "@/data/navlinks";

const Nav = () => {
    return (
        <nav>
            {navlinks.map((nav) => (
                <Link href={nav.link} key={nav.title}>
                    <span className={`mr-5`}>{nav.title}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
