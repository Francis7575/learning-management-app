import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Francis. All Rights Reserved.</p>
      <div className="footer-links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "-")}`}
						className="footer-link"
          >
						{item}
					</Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
