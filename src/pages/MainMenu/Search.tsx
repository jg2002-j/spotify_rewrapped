import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/ui/date-picker";
import { Combobox } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

function Default() {
    const timespanOptions = [
        {
            value: "1",
            label: "1 month ago",
        },
        {
            value: "3",
            label: "3 months ago",
        },
        {
            value: "6",
            label: "6 months ago",
        },
        {
            value: "12",
            label: "1 year ago",
        },
        {
            value: "All",
            label: "View all historic data",
        },
    ];

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Choose Timeframe:</CardTitle>
                <CardDescription>
                    To generate a view of your Spotify Listening History, first select a date and then choose how far
                    back from that date you&apos;d like to view data from:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label>Start date</Label>
                            <DatePicker></DatePicker>
                        </div>
                        <div className="w-full flex flex-col space-y-1.5">
                            <Label htmlFor="timespan">Choose how far back to view</Label>
                            <Combobox message={"Select a timespan"} options={timespanOptions}></Combobox>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex">
                <Button variant="neutral">Search</Button>
            </CardFooter>
        </Card>
    );
}

export default Default;
