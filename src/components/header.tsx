import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", textDecoration: "none" }}>
                        Blog<span style={{ color: "#007bff" }}>-app</span>
                    </h1>
                </Link>
                <nav>
                    <Link href="/home">Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/blog'>Blog</Link>
                </nav>
            </div>
        </header>
    );
}
