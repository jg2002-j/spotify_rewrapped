import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useState } from "react";
import { UploadIcon, CircleHelp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function Upload() {
    // const [files, setFiles] = useState([]);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Upload your files:</CardTitle>
                <CardDescription className="flex items-center gap-5">
                    <p>Select the JSON files from your Spotify Listening History:</p>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <CircleHelp className="inline ms-2 h-6 w-6 cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs">
                                    See the FAQ for information on where to find your Listening History
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-1.5">
                    <Label>Choose your files</Label>
                    <Label className="file-upload" htmlFor="framework">
                        <div className="flex">
                            <UploadIcon className="mr-2 h-4 w-4 text-text" />
                            <p>Upload your JSON files</p>
                        </div>
                        <Input type="file" multiple accept=".json" className=""></Input>
                    </Label>
                </div>
            </CardContent>
            <CardFooter className="text-xs">
                <p>No data is stored or sent to any third-parties.</p>
            </CardFooter>
        </Card>
    );
}

export default Upload;
