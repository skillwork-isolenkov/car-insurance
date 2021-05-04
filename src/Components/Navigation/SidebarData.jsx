import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text'
    },
    {
        title: 'Tour',
        path: '/tour',
        icon: <RiIcons.RiMapPinUserFill />,
        cName: 'nav-text'
    }
]