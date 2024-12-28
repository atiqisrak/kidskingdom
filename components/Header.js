import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kids Kingdom
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/stories" className="hover:text-blue-200">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-blue-200">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
