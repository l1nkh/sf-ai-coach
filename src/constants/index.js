import {
    featureIcon1,
    featureIcon2,
    featureIcon3,
    featureIcon4,
    featureImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
} from "../assets";

import {
    daigo,
    jwong,
    punk,
    tokido,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const proPlayers = [
    {
        name: "Daigo",
        picture: daigo
    },
    {
        name: "jwong",
        picture: jwong
    },
    {
        name: "punk",
        picture: punk
    },
    {
        name: "tokido",
        picture: tokido
    },
];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const softwareIntegrationText =
    "Backed by an evolving database of community knowledge, our AI coach " +
    "integrates real-time insights from major Platforms—analyzing trends, " +
    "discussions, and gameplay to keep you ahead."

export const softwareIntegrationContent = [
    {
        id: "0",
        title: "Platform Integration",
        text: "Integrating the power of the community for unparalleled gameplay guidance.",
    },
    {
        id: "1",
        title: "Smart Compare",
    },
    {
        id: "2",
        title: "Reviewed by the Pros",
    },
];

export const softwareIntegrationApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export const features = [
    {
        id: "0",
        title: "Real-Time Match Guidance",
        text: "Get instant, AI-driven advice during your matches based on your opponent’s moves, frame data, and your playstyle. The AI helps you react efficiently, counter effectively, and adapt on the fly.",
        backgroundUrl: "./src/assets/features/card-1.svg",
        iconUrl: featureIcon1,
        imageUrl: featureImage2,
    },
    {
        id: "1",
        title: "Advanced Frame Data Analysis",
        text: "Stay ahead with precise frame data breakdowns. Know when to attack, block, or punish based on frame advantage and move priority, helping you make optimal decisions in every situation.",
        backgroundUrl: "./src/assets/features/card-2.svg",
        iconUrl: featureIcon2,
        imageUrl: featureImage2,
        light: true,
    },
    {
        id: "2",
        title: "Personalized Training Plans",
        text: "Improve with structured training plans tailored to your skill level and goals. The AI creates custom schedules, drills, and match simulations to help you level up efficiently.",
        backgroundUrl: "./src/assets/features/card-3.svg",
        iconUrl: featureIcon3,
        imageUrl: featureImage2,
    },
    {
        id: "3",
        title: "Pro-Style Customization",
        text: "Customize your AI coach’s voice, appearance, and personality to match your favorite Street Fighter pros. Train with advice and feedback that mirrors top-level competitors.",
        backgroundUrl: "./src/assets/features/card-4.svg",
        iconUrl: featureIcon4,
        imageUrl: featureImage2,
        light: true,
    },
    {
        id: "4",
        title: "Match Review & Insights",
        text: "Upload or sync your match replays for AI-powered analysis. Get breakdowns of key mistakes, strengths, and actionable tips to refine your gameplay.",
        backgroundUrl: "./src/assets/features/card-5.svg",
        iconUrl: featureIcon1,
        imageUrl: featureImage2,
    },
    {
        id: "5",
        title: "Opponent Playstyle Recognition",
        text: "The AI learns and identifies different playstyles—rushdown, zoner, grappler, etc.—to give you specific strategies to counter your opponents effectively in real time.",
        backgroundUrl: "./src/assets/features/card-6.svg",
        iconUrl: featureIcon2,
        imageUrl: featureImage2,
    },
];

export const socials = [
    {
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];