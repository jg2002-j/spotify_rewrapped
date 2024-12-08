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
                        <AccordionTrigger>My data has information I don't want shared/stored.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-5">
                            <p>This website doesn't store any data beyond you opening and closing the site :)</p>
                            <p>Everytime you revisit the page, you'll have to re-upload your files.</p>
                            <p>
                                Also the site only reads data relevant to music and streams &#40;not stuff like your IP
                                address&#41;
                            </p>
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

// 10:11 - 15:01
// after 19:01
