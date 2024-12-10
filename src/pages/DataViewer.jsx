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
import { useEffect, useState } from "react";
import jsonFile from "../data/Streaming_History_Audio_2014-2017_0.json";
import SongTile from "./DataViewer/SongTile";
import loadFiles from "@/utils/dataLoader";

const jsonFiles = import.meta.glob("./data/*.json");

function DataViewer() {
    const [jsonArray, setJsonArray] = useState([]);
    const [selectedJSON, setSelectedJSON] = useState(jsonFile);

    const [filteredItems, setFilteredItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadLimit, setLoadLimit] = useState(20);

    /*
    all items in a JSON
    load 0 -20 on the screen
    num pages =  
    */

    useEffect(() => {
        const loadFiles = async () => {
            try {
                const jsonList = [];
                for (const path in jsonFiles) {
                    const jsonFile = await jsonFiles[path]();
                    jsonList.push(jsonFile);
                }
                setJsonArray(jsonList);
            } catch (error) {
                console.error("Error loading JSON files: ", error);
            }
        };
        loadFiles();
    }, []);

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
                {loadFiles()}
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
