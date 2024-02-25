import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Lobby",
      path: "/",
    },
    {
      title: "Contests",
      path: "/contests",
    },
    {
      title: "Lineups",
      path: "/lineups",
    },
  ];

  return (
    <div>
      {links.map((link) => (
        // Apply classes directly to Link in Next.js 13 and later
        <Link 
          href={link.path} 
          key={link.title} 
          className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;

