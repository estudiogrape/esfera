import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Esfera",
    description: "Pensada para refletir o cuidado em todas as esferas na área de saúde, a marca apresenta uma personalidade moderna, limpa e conectada com o mercado",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body className={`${poppins.className} antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
