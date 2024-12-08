import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { DiscAlbum, Shuffle, SkipForward, User, CalendarFold, Clock3Icon } from "lucide-react";

const parseDate = (input) => {
    const date = new Date(input);
    return date.toLocaleDateString();
};

const parseMs = (input) => {
    const minutes = Math.floor(input / 60000);
    const seconds = Math.floor((input % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

function SongTile({ stream }) {
    const track_name = stream.master_metadata_track_name;
    const album_name = stream.master_metadata_album_album_name;
    const artist_name = stream.master_metadata_album_artist_name;
    const shuffled = stream.shuffle;
    const skipped = stream.skipped;
    const date_played = parseDate(stream.ts);
    const ms_played = parseMs(stream.ms_played);

    return (
        <Card className="w-[450px] flex items-center gap-3 hover:scale-105 duration-500 transition-all group px-5 select-none">
            <div className="rounded-md transition-all duration-500 border-2 min-h-32 min-w-32 group-hover:min-h-36 group-hover:min-w-36 flex items-center justify-center text-sm">
                Album Art
            </div>
            <div className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <p>{track_name}</p>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="max-w-xs text-xs">Item name</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <div className="flex gap-x-3">
                            {shuffled && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="text-text p-1">
                                                <Shuffle className="size-4" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="max-w-xs text-xs">Shuffled</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                            {skipped && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="text-text p-1">
                                                <SkipForward className="size-3" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="max-w-xs text-xs">Skipped</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                    </CardTitle>

                    <CardDescription className="flex flex-col gap-2 text-md">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <p className="flex gap-2 items-center">
                                        <DiscAlbum className="size-4" />
                                        {album_name}
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="max-w-xs text-xs">Album name</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <p className="flex gap-2 items-center">
                                        <User className="size-4" />
                                        {artist_name}
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="max-w-xs text-xs">Artist name</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardDescription>
                </CardHeader>
                {/* <CardContent className="flex flex-col items-start gap-1"></CardContent> */}
                <CardFooter className="flex justify-between text-xs">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="flex gap-3 items-center content-baseline">
                                    <CalendarFold className="size-3" />
                                    {date_played}
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs text-xs">Date played</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="flex gap-3 items-center content-baseline">
                                    <Clock3Icon className="size-3" />
                                    {ms_played}
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs text-xs">Duration played for</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardFooter>
            </div>
        </Card>
    );
}

export default SongTile;
