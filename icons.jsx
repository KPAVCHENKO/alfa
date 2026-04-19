// SVG icon set — stroke-based, rounded, 1.8 weight. 24x24 default.
const Icon = ({ children, size=24, stroke=1.8, color='currentColor', style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
       style={style} aria-hidden="true">
    {children}
  </svg>
);

const IconCashback = (p) => (
  <Icon {...p}>
    <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6 6l1.4 1.4M16.6 16.6L18 18M18 6l-1.4 1.4M7.4 16.6L6 18"/>
    <circle cx="12" cy="12" r="5"/>
    <path d="M13.5 10.5c-.4-.5-1-.8-1.6-.8-1 0-1.9.7-1.9 1.6 0 .8.7 1.3 1.7 1.5 1 .2 1.7.7 1.7 1.5 0 .9-.9 1.6-1.9 1.6-.7 0-1.3-.3-1.7-.8M12 9v.7M12 15.3v.7"/>
  </Icon>
);

const IconLightning = (p) => (
  <Icon {...p}>
    <path d="M13 2L4.5 13.5h6L10 22l9-12h-6l1-8z"/>
  </Icon>
);

const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8.5-8 9.5-4.8-1-8-5-8-9.5V6l8-3z"/>
    <path d="M9 12l2 2 4-4"/>
  </Icon>
);

const IconTrendUp = (p) => (
  <Icon {...p}>
    <path d="M3 17l6-6 4 4 8-8"/>
    <path d="M14 7h7v7"/>
  </Icon>
);

const IconCard = (p) => (
  <Icon {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/>
    <path d="M2.5 10h19"/>
    <path d="M6 15h3"/>
  </Icon>
);

const IconMobile = (p) => (
  <Icon {...p}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5"/>
    <path d="M10 18.5h4"/>
  </Icon>
);

const IconClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </Icon>
);

const IconCheck = (p) => (
  <Icon {...p}>
    <path d="M4 12l5 5L20 6"/>
  </Icon>
);

const IconLink = (p) => (
  <Icon {...p}>
    <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/>
    <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/>
  </Icon>
);

const IconShare = (p) => (
  <Icon {...p}>
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/>
  </Icon>
);

const IconWallet = (p) => (
  <Icon {...p}>
    <path d="M3 7a2 2 0 012-2h11a2 2 0 012 2v2h2a1 1 0 011 1v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
    <circle cx="17" cy="13" r="1.3"/>
  </Icon>
);

const IconHeadset = (p) => (
  <Icon {...p}>
    <path d="M4 14v-2a8 8 0 0116 0v2"/>
    <path d="M4 14a2 2 0 012-2h1v5H6a2 2 0 01-2-2v-1zM20 14a2 2 0 00-2-2h-1v5h1a2 2 0 002-2v-1z"/>
    <path d="M17 17a3 3 0 01-3 3h-2"/>
  </Icon>
);

const IconTarget = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1.5"/>
  </Icon>
);

const IconPhone = (p) => (
  <Icon {...p}>
    <path d="M5 4.5A1.5 1.5 0 016.5 3h2.2c.7 0 1.3.5 1.4 1.2l.6 3a1.5 1.5 0 01-.4 1.3L9 9.7a12 12 0 005.3 5.3l1.2-1.3a1.5 1.5 0 011.3-.4l3 .6c.7.1 1.2.7 1.2 1.4v2.2a1.5 1.5 0 01-1.6 1.5A17 17 0 015 6.1 1.5 1.5 0 015 4.5z"/>
  </Icon>
);

const IconTelegram = (p) => (
  <Icon {...p} stroke={0}>
    <path fill="currentColor" d="M20.7 4.3c-.3-.2-.6-.2-.9-.1L3.5 10.5c-.5.2-.5.9 0 1.1l4.2 1.6 1.7 5.2c.1.4.6.5.9.2l2.4-2.3 4.2 3.1c.4.3 1 .1 1.1-.4l2.9-13.8c0-.3 0-.7-.2-.9zM9.7 14.4l-.4 3.2-1.1-3.6 8.4-6.1-6.9 6.5z"/>
  </Icon>
);

const IconArrow = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </Icon>
);

const IconSparkle = (p) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.3 6.3l2 2M15.7 15.7l2 2M6.3 17.7l2-2M15.7 8.3l2-2"/>
  </Icon>
);

const IconStar = (p) => (
  <Icon {...p}>
    <path d="M12 3l2.5 5.5 6 .8-4.4 4.2 1.1 6-5.2-2.9L6.8 19.5l1.1-6L3.5 9.3l6-.8L12 3z"/>
  </Icon>
);

Object.assign(window, {
  Icon, IconCashback, IconLightning, IconShield, IconTrendUp, IconCard,
  IconMobile, IconClock, IconCheck, IconLink, IconShare, IconWallet,
  IconHeadset, IconTarget, IconPhone, IconTelegram, IconArrow, IconSparkle, IconStar
});
