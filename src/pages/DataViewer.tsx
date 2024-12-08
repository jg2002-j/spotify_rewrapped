// import SongTile from "./DataViewer/SongTile";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import jsonFile from "../data/Streaming_History_Audio_2014-2017_0.json";
import SongTile from "./DataViewer/SongTile";

function DataViewer() {
    const [selectedJSON, setSelectedJSON] = useState(jsonFile);
    const [loadLimit, setLoadLimit] = useState(20);
    const [showSkipped, setShowSkipped] = useState(false);

    const mapSelectedJSON = () => {
        // return selectedJSON.map((stream, index) => {
        //     return <SongTile key={index} stream={stream} />;
        // });
        return <SongTile key={1} stream={selectedJSON[0]} />;
    };

    return (
        <div>
            <div className="w-[500px] flex flex-col items-center justify-center gap-7">
                <div className="h-[90%] overflow-none no_scrollbar">{mapSelectedJSON()}</div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <div className="items-center md:flex hidden">
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        </div>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

export default DataViewer;
