import Default from "./MainMenu/Search";
import FAQ from "./MainMenu/FAQ";
import Upload from "./MainMenu/Upload";
// import ThemeContext from "@/components/ModeToggle/ThemeContext";
import { useImage } from "react-image";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MainMenu() {
    // const { isDarkMode } = useContext(ThemeContext);

    const FullSpotifyLogo = () => {
        const imageSource = "/spotify_logo/full/Full_Logo_Black_RGB.svg";
        const { src } = useImage({
            srcList: [imageSource],
        });
        return <img alt="Spotify Logo" src={src} />;
    };

    return (
        <div className="p-10 flex flex-col items-center gap-7 h-screen overflow-auto no_scrollbar">
            <Card className="w-[350px] px-10 py-5">
                <Suspense fallback={<h2 className="text-stone-600 font-extrabold">Loading...</h2>}>
                    <FullSpotifyLogo />
                </Suspense>
            </Card>
            <Upload />

            <Tabs defaultValue="search" className="w-[350px] flex flex-col items-center">
                <Card className="w-[350px] px-5">
                    <TabsList className="border-none w-full gap-3">
                        <TabsTrigger className="w-full" value="search">
                            Search
                        </TabsTrigger>
                        <TabsTrigger className="w-full" value="faq">
                            FAQ
                        </TabsTrigger>
                    </TabsList>
                </Card>
                <TabsContent value="search">
                    <Default />
                </TabsContent>
                <TabsContent value="faq">
                    <FAQ />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default MainMenu;
