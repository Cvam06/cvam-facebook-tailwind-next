import StoryCard from "./StoryCard";
import { useSession } from "next-auth/client";

const stories = [
    {
        name: "Shivam Thakkar",
        src: "https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/197385970_902655887133430_6369360426769735740_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=2qcVBb2v2hEAX_BX0qa&edm=AP_V10EBAAAA&ccb=7-4&oh=67aebcb7293cad427000111adf5e8f42&oe=60F41CA5&_nc_sid=4f375e",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

function Stories() {
    const [session] = useSession();
    stories[0].profile = session.user.image;
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
