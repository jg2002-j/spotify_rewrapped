import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DatePicker from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Default() {
    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Choose year:</CardTitle>
                    <CardDescription>Select the date range you&apos;d like to view Spotify data from:</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label>Start date</Label>
                                <DatePicker></DatePicker>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Timespan</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Choose a JSON file" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value={"30"}>1 Month</SelectItem>
                                        <SelectItem value="sveltekit">6 Months</SelectItem>
                                        <SelectItem value="astro">1 Year</SelectItem>
                                        <SelectItem value="nuxt">Lifetime</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex">
                    <Button>Search</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default Default;
