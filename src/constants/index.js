import {
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    steam,
    file02,
    playstation,
    instagram,
    youtube,
    x,
    plusSquare,
    twitch,
    capcom,
    recording01,
    searchMd,
    xbox,
    sliders04,
    telegram,
    twitter,
    proCustomization_roadmap,
    playButton,
    gamepad,
    ryu_feature,
    ken_feature,
    luke_feature,
    jamie_feature,
    chunli_feature,
    akuma_feature,
    gameplay_roadmap,
    software_roadmap
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

export const heroIcons = [ file02, searchMd, plusSquare];

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

export const ServicesList = [
    "Real-Time Prompts",
    "Practice drills",
    "Match Analysis",
];

export const ServicesIconsList = [
    gamepad,
    recording01,
    playButton,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Real-time Match Guidance",
        text: "SFCoach will get you instant, AI-driven advice during your matches based on your opponent’s characters, movement and playstyle.",
        date: "March 2025",
        status: "done",
        imageUrl: gameplay_roadmap,
        colorful: true,
    },
    {
        id: "1",
        title: "PRO AI Customization",
        text: "Add featured Pro faces and voices to your AI to personilze your favorite coach.",
        date: "February 2026",
        status: "progress",
        imageUrl: proCustomization_roadmap,
    },
    {
        id: "2",
        title: "Training Schedule",
        text: "Have customized training plans and track your training load to become the best in optimized goals.",
        date: "March 2025",
        status: "done",
        imageUrl: "",
    },
    {
        id: "3",
        title: "Community Integration",
        text: "Our AI coach will integrate real-time insights from major Platforms—analyzing trends, discussions, and gameplay to keep you ahead.",
        date: "December 2025",
        status: "progress",
        imageUrl: software_roadmap,
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
        title: "Steam",
        icon: steam,
        width: 34,
        height: 34,
    },
    {
        id: "1",
        title: "YouTube",
        icon: youtube,
        width: 32,
        height: 32,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 34,
        height: 34,
    },
    {
        id: "3",
        title: "Xbox",
        icon: xbox,
        width: 32,
        height: 32,
    },
    {
        id: "4",
        title: "X",
        icon: x,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Twitch",
        icon: twitch,
        width: 32,
        height: 32,
    },
    {
        id: "6",
        title: "playstation",
        icon: playstation,
        width:32,
        height: 32,
    },
    {
        id: "7",
        title: "Capcom",
        icon: capcom,
        width: 32,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Free",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "Real-Time Match Guidance with Ai driven coaching",
            "Use community features availabe through software integration",
            "Free trials of features only available to paid plans",
        ],
    },
    {
        id: "1",
        title: "Basic",
        description: "Advanced Artificial intelligence and more robust tools",
        price: "3.99",
        features: [
            "Match replays available with robust AI-powered analytic data",
            "Frame data analysis system that suits your needs",
            "Opponent playstyle recognition",
        ],
    },
    {
        id: "2",
        title: "Premium",
        description: "Advanced customization and priority testing",
        price: "9.99",
        features: [
            "AI driven fully personalized training plans and dedicated support",
            "Fully customize your AI Coach with faces and voices from the pros",
            "Test new feature that are yet to be released",
        ],
    },
];

export const features = [
    {
        id: "0",
        title: "Real-Time Match Guidance",
        text: "Get instant, AI-driven advice during your matches based on your opponent’s moves, frame data, and your playstyle. The AI helps you react efficiently, counter effectively, and adapt on the fly.",
        backgroundUrl: "./src/assets/features/card-1.svg",
        imageUrl: ryu_feature,
    },
    {
        id: "1",
        title: "Advanced Frame Data Analysis",
        text: "Stay ahead with precise frame data breakdowns. Know when to attack, block, or punish based on frame advantage and move priority, helping you make optimal decisions in every situation.",
        backgroundUrl: "./src/assets/features/card-2.svg",
        imageUrl: ken_feature,
        light: true,
    },
    {
        id: "2",
        title: "Personalized Training Plans",
        text: "Improve with structured training plans tailored to your skill level and goals. The AI creates custom schedules, drills, and match simulations to help you level up efficiently.",
        backgroundUrl: "./src/assets/features/card-3.svg",
        imageUrl: luke_feature,
    },
    {
        id: "3",
        title: "Pro-Style Customization",
        text: "Customize your AI coach’s voice, appearance, and personality to match your favorite Street Fighter pros. Train with advice and feedback that mirrors top-level competitors.",
        backgroundUrl: "./src/assets/features/card-4.svg",
        imageUrl: jamie_feature,
        light: true,
    },
    {
        id: "4",
        title: "Match Review & Insights",
        text: "Upload or sync your match replays for AI-powered analysis. Get breakdowns of key mistakes, strengths, and actionable tips to refine your gameplay.",
        backgroundUrl: "./src/assets/features/card-5.svg",
        imageUrl: chunli_feature,
    },
    {
        id: "5",
        title: "Opponent Playstyle Recognition",
        text: "The AI learns and identifies different playstyles—rushdown, zoner, grappler, etc.—to give you specific strategies to counter your opponents effectively in real time.",
        backgroundUrl: "./src/assets/features/card-6.svg",
        imageUrl: akuma_feature,
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