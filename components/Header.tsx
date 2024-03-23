import DarkMode from "@/components/DarkMode"
export default function Header() {
    return (
        <header className="bg-primary-foreground flex items-center">
            <DarkMode />
            <ul>
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Three</li>
            </ul>
        </header>
    )
}

