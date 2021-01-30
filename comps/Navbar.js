import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="site logo"
                        width={128}
                        height={77}
                    />
                </Link>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/belgium">
                <a>Belgium</a>
            </Link>
            <Link href="/wmts/">
                <a>WMTS Listing</a>
            </Link>
        </nav>
    );
};

export default Navbar;
