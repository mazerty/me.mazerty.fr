import {Disclosure} from "@headlessui/react"
import {ChevronRightIcon} from "@heroicons/react/outline"

const bookmarks = [{
    title: "Main",
    open: true,
    bookmarks: [
        {title: "Gmail", url: "https://mail.google.com"},
        {title: "Feedly", url: "https://feedly.com"},
        {title: "Twitter", url: "https://twitter.com"},
        {title: "GitHub", url: "https://github.com"},
        {title: "DeviantArt", url: "https://deviantart.com"},
        {title: "Météo", url: "https://meteofrance.com"},
        {title: "Fortuneo", url: "https://mabanque.fortuneo.fr"},
        {title: "LinkedIn", url: "https://linkedin.com"},
        {title: "TweetDeck", url: "https://tweetdeck.twitter.com"}
    ]
}, {
    title: "UGC",
    bookmarks: [
        {title: "Part-Dieu", url: "https://www.ugc.fr/cinema.html?id=34"},
        {title: "Confluence", url: "https://www.ugc.fr/cinema.html?id=36"},
        {title: "Cité Internationale", url: "https://www.ugc.fr/cinema.html?id=32"},
        {title: "Astoria", url: "https://www.ugc.fr/cinema.html?id=33"}
    ]
}, {
    title: "Handy",
    bookmarks: [
        {title: "AWS", url: "https://mazerty.signin.aws.amazon.com/console"},
        {title: "Speed test", url: "https://speed.cloudflare.com"},
        {title: "Tunefind", url: "https://www.tunefind.com"},
        {title: "SubsPlease", url: "https://subsplease.org"},
        {title: "Morrowind Map", url: "https://en.uesp.net/maps/mwmap/mwmap.shtml"}
    ]
}]

export default () => (
    <section className="bg-gray-700 text-gray-200 px-5 py-20 min-h-screen">
        <div className="max-w-2xl mx-auto">
            <div className="pb-3 font-specialelite text-3xl">Bookmarks</div>
            <div className="border border-gray-500 rounded divide-y divide-gray-500 shadow-lg">
                {bookmarks.map(category => (
                    <Disclosure key={category.title} defaultOpen={category.open}>
                        {({open}) => <>
                            <Disclosure.Button as="div" className="px-4 py-3 flex items-center cursor-pointer">
                                <ChevronRightIcon className={"h-4 w-4 mr-2 text-gray-400 transition-transform transform " + (open ? "rotate-90" : "rotate-0")}/>
                                <div>{category.title}</div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-5 py-4 bg-gray-702 text-gray-400">
                                {category.bookmarks.map(bookmark => (
                                    <div key={bookmark.title} className="truncate">
                                        <a href={bookmark.url} className="mr-3 text-gray-200 hover:underline">{bookmark.title}</a>
                                        <a href={bookmark.url} className="hover:underline">{bookmark.url}</a>
                                    </div>
                                ))}
                            </Disclosure.Panel>
                        </>}
                    </Disclosure>
                ))}
            </div>
        </div>
    </section>
)
