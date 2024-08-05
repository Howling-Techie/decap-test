// These styles apply to every route in the application
import "./globals.css";

export const metadata = {
    title: "Decap Test",
    description: "Made by Howling Techie",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}