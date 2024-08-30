import Image from "next/image";

const STATICS = [{
    key: 'twitter',
    alt: 'twitter',
    link: '/icons/twitter.svg',
}, {
    key: 'facebook',
    alt: 'facebook',
    link: '/icons/Facebook.svg',
}, {
    key: 'instagram',
    alt: 'instagram',
    link: '/icons/instagram.svg',
},{
    key: 'linkedin',
    alt: 'linkedin',
    link: '/icons/linkedin.svg',
}]

function SocialMedia() {
    return (
        <div className="flex gap-4 cursor-pointer">
            {STATICS.map((item, index) => (
                <Image alt={item.alt} key={item.key} src={item.link} height={20} width={20} />
            ))}
        </div>
    )
}

export default SocialMedia;