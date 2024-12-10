import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import SubmitCoinForm from "../components/SubmitCoinForm";
import Footer from "../components/Footer";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Head>
                <title>Submit Coin</title>
                <meta
                    name="description"
                    content="Submit Coin - Top Coins Listing site today | bobantoken.com"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <div
                    className={`min-h-screen bg-black text-white p-4 md:p-6 pt-16 md:pt-20 transition-all duration-300 ${
                        isSidebarOpen ? "md:ml-64" : "ml-0"
                    } md:ml-0`}
                >
                    <SubmitCoinForm />
                </div>
            </main>
            <div
                className={`transition-all duration-300 ${
                    isSidebarOpen ? "md:ml-64" : "ml-0"
                } md:ml-0`}
            >
                <Footer />
            </div>
        </>
    );
}
