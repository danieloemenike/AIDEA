import { FcHome, FcSms,FcSettings, FcPaid,FcDoughnutChart,FcMusic,FcVideoCall,FcPlus,FcAddImage } from "react-icons/fc";

export const Menu = [
    {
        id: "1",
        label: "Overview",
        menu: [
            {
                id: "1",
                title: 'Dashboard',
                path: '/dashboard',
                pro: false,
                icon: FcHome,
                color: "#292929"
            },
        ]
    },
    {
        id: "2",
        label: "Content",
        menu: [
            {
                id: "1",
                title: 'Create',
                path: '/aidea/new',
                pro: true,
                icon: FcPlus,
                color: "#292929"
            },
            {
                id: "2",
                title: 'conversation',
                path: '/conversation',
                pro: false,
                icon: FcSms,
                color: "#292929"
            },
            {
                id: "3",
                title: 'image generation',
                path: '/image',
                pro: false,
                icon: FcAddImage,
                color: "#292929"
            },
            {
                id: "4",
                title: 'music generation',
                path: '/music',
                pro: false,
                icon: FcMusic,
                color: "#292929"
            },
            {
                id: "5",
                title: 'video generation',
                path: '/video',
                pro: false,
                icon: FcVideoCall,
                color: "#292929"
            },
            {
                id: "6",
                title: 'code generation',
                path: '/code',
                  pro: false,
                icon: FcDoughnutChart,
                color: "#292929"
            },
        ]
    },
    {
        id: "3",
        label: "Customization",
        menu: [
            {
                id: "1",
                title: 'Settings',
                path: '/settings',
                pro: false,
                icon: FcSettings,
                color: "#292929"
            },
        ]
    }
   
   
  
   
    // {
    //     id: "7",
    //     title: 'Delivery',
    //     path: 'delivery',
    //     icon: FcShipped,
    //     color: "#292929"
    // },
    // {
    //     id: "8",
    //     title: 'Support',
    //     path: 'support',
    //     icon: FcCustomerSupport,
    //     color: "#292929"
    // },

]