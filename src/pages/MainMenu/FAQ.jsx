import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function FAQ() {
    return (
        <Card className="w-[350px] h-fit overflow-y-auto no_scrollbar">
            <CardHeader>
                <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
                <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
                    <AccordionItem className="lg:w-[500px] max-w-full" value="item-1">
                        <AccordionTrigger>Where can I get my Spotify Listening History?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-5">
                            <p>Spotify lets you download your entire listening history from your Account here:</p>
                            <a
                                className=""
                                href="https://www.spotify.com/uk/account/privacy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Spotify &gt; Account &gt; Privacy
                            </a>
                            <p className="italic ps-3 border-darkBg dark:border-bg border-s-2">
                                Extended streaming history for the lifetime of your account, including track
                                information, and when and how you streamed content.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="lg:w-[500px] max-w-full" value="item-2">
                        <AccordionTrigger>My data has information I don&#39;t want shared/stored.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-5">
                            <p>This website doesn&#39;t store any data beyond you opening and closing the site :)</p>
                            <p>
                                That does also mean that everytime you revisit the page, you&#39;ll have to re-upload
                                your files - you win some, you lose some.
                            </p>
                            <p>
                                Also the site only reads data relevant to music and streams &#40;not stuff like your IP
                                address&#41; unless I&#39;m lying :D.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="lg:w-[500px] max-w-full" value="item-3">
                        <AccordionTrigger>What am I looking at?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-5">
                            <p>Hovering over the fields on the tiles should show a popup with details.</p>
                            <p>Otherwise idk you&#39;re on your own, sorry.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            {/* <CardFooter className="text-sm">
            </CardFooter> */}
        </Card>
    );
}

export default FAQ;
