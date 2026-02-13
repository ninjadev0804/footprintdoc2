export type NavItem = {
  href: string;
  label: string;
};

export type LabeledLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/our-doctor", label: "Our Doctor" },
  { href: "/office", label: "Office" },
  { href: "/services", label: "Services" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/blog", label: "Blog" }
];

export const featureServices = [
  { name: "Bunions", href: "/services", icon: "/source-assets/images/services-icons/icon-01.svg" },
  { name: "Heel Pain", href: "/services", icon: "/source-assets/images/services-icons/icon-02.svg" },
  { name: "Sports Injury", href: "/services", icon: "/source-assets/images/services-icons/icon-03.svg" },
  { name: "Ingrown Toenail", href: "/services", icon: "/source-assets/images/services-icons/icon-04.svg" },
  { name: "Wound Care", href: "/services", icon: "/source-assets/images/services-icons/icon-05.svg" },
  { name: "Foot Pain", href: "/services", icon: "/source-assets/images/services-icons/icon-06.svg" },
  { name: "Heel Spurs", href: "/services", icon: "/source-assets/images/services-icons/icon-07.svg" },
  { name: "Foot Orthotics", href: "/services", icon: "/source-assets/images/services-icons/icon-08.svg" }
];

export const commonConditions = [
  { name: "Plantar Fasciitis", cta: "Get Treated", icon: "/source-assets/images/services-cimg/ssb-01.svg" },
  { name: "Bunions", cta: "Fix My Feet", icon: "/source-assets/images/services-cimg/ssb-02.svg" },
  { name: "Athletic Injuries", cta: "Get Treated", icon: "/source-assets/images/services-cimg/ssb-03.svg" },
  { name: "Ankle Sprain", cta: "Fix My Ankle Pain", icon: "/source-assets/images/services-cimg/ssb-04.svg" },
  { name: "Ingrown Toenails", cta: "Toenail Treatment", icon: "/source-assets/images/services-cimg/ssb-05.svg" },
  { name: "Neuromas", cta: "Neuroma Treatment", icon: "/source-assets/images/services-cimg/ssb-06.svg" },
  { name: "Arthritis", cta: "Get Treated", icon: "/source-assets/images/services-cimg/ssb-07.svg" },
  { name: "Fractures", cta: "Fracture Treatment", icon: "/source-assets/images/services-cimg/ssb-08.svg" }
];

export const serviceList = [
  "Achilles Tendon",
  "Ankle Pain",
  "Ankle Sprains",
  "Arthritic Foot Care",
  "Athlete's Foot",
  "Bunions",
  "Corns",
  "Diabetic Foot Care",
  "Flat Feet",
  "Foot and Ankle Fractures",
  "Foot and Ankle Surgery",
  "Foot Orthotics",
  "Foot Pain",
  "Geriatric Foot Care",
  "Hammertoes",
  "Heel Pain",
  "Heel Spurs",
  "Ingrown Toenails",
  "Neuroma (Morton's)",
  "Plantar Fasciitis",
  "Plantar Warts",
  "Sports Medicine",
  "Toenail Fungus",
  "What Is a Podiatrist",
  "When to Call a Foot Doctor",
  "Wound Care"
];

export const insuranceList = [
  "Medicare",
  "Medicaid (referral needed)",
  "Tricare (referral needed)",
  "Champ VA",
  "Blue Cross Blue Shield",
  "Well Path",
  "Cigna",
  "Aetna",
  "United Healthcare",
  "And many more"
];

export const blogPosts = [
  {
    title: "How to Ease Heel Pain at Home",
    date: "January 19, 2026",
    excerpt: "A practical at-home care routine for plantar fascia strain and morning heel pain."
  },
  {
    title: "When Is an Ingrown Toenail an Emergency?",
    date: "December 11, 2025",
    excerpt: "Warning signs that indicate infection risk and when to seek urgent podiatric care."
  },
  {
    title: "Sports Injury Recovery for Runners",
    date: "November 2, 2025",
    excerpt: "How athletes can return to training safely after ankle instability and tendon irritation."
  }
];

export const office = {
  name: "Footprint Podiatry",
  doctor: "Dr. Bessaliea Griffin, DPM",
  addressLine1: "514 North Brightleaf Boulevard",
  addressLine2: "Smithfield, NC 27577",
  phone: "(919) 934-0711",
  fax: "(919) 934-0023",
  hours: [
    "Monday - Thursday: 8:00am - 5:00pm",
    "Friday: 8:00am - 1:00pm",
    "Saturday - Sunday: Closed"
  ],
  mapEmbed: "https://www.google.com/maps?q=514%20North%20Brightleaf%20Boulevard%2C%20Smithfield%2C%20NC%2027577&output=embed"
};

export const branding = {
  logo: "/source-assets/templates/theme/images/logo.png",
  overlayLogo: "/source-assets/images/slider-overlay-logo.png",
  heroSlide1: "/source-assets/images/slider/slide-01.jpg",
  heroSlide2: "/source-assets/images/slider/slide-02.jpg",
  doctorImage: "/source-assets/images/male.jpg",
  blockPattern: "/source-assets/images/block-lines-background.png"
};

export const socialLinks: LabeledLink[] = [
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Google Reviews", href: "https://search.google.com/local/writereview?placeid=" }
];
