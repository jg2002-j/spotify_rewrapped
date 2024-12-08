import Default from "./MainMenu/Default";
import { useImage } from "react-image";
import { Suspense } from "react";

function MainMenu({ darkMode }) {
    const FullSpotifyLogo = () => {
        const imageSource = darkMode
            ? "/spotify_logo/full/Full_Logo_Green_RGB.svg"
            : "/spotify_logo/full/Full_Logo_Black_RGB.svg";
        const { src } = useImage({
            srcList: [imageSource],
        });
        return <img alt="Spotify Logo" src={src} />;
    };

    return (
        <div className="flex flex-col items-center p-10 gap-10">
            <div className="w-full max-w-80">
                <Suspense fallback={<h2 className="text-stone-600 font-extrabold">Loading...</h2>}>
                    <FullSpotifyLogo />
                </Suspense>
            </div>
            <Default />
        </div>
    );
}

export default MainMenu;
