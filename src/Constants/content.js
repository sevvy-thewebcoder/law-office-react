import heroImg from "../assets/images/hero-home.jpg"
import galleryImgA from "../assets/images/gallery-img-a.jpg"
import galleryImgB from "../assets/images/gallery-img-b.jpg"
import footerImg from "../assets/images/footer-img.jpg"

const navLinksHeader = [
    {
        id: 1,
        linkName: "Our Office",
        linkPath: "office"
    },
    {
        id: 2,
        linkName: "Services",
        linkPath: "services"
    },
    {
        id: 3,
        linkName: "Partners",
        linkPath: "partners"
    },
    {
        id: 4,
        linkName: "Contact Us",
        linkPath: "contact"
    },
]

const aboutSectionText = {
    sectionHeading: "At Smith, Nguyen & Singh, we are not just lawyers - we are business partners.",
    textContent: [
        {
            id: 1,
            paragraph: [
                {
                    id: "1A",
                    text: "With decades of combined experience in business law, our team of attorneys is dedicated to helping our clients achieve their goals. We provide a full range of legal services, including corporate formation, mergers and acquisitions, contract negotiation, employment law, intellectual property, and more. Our team is here to help you navigate the legal complexities of running a business."
                },
                {
                    id: "1B",
                    text: "We believe that communication is key to building successful partnerships, which is why we make it a priority to keep our clients informed and involved every step of the way. "
                }
            ]
        },
        {
            id: 2,
            paragraph: [
                {
                    id: "2A",
                    text: "At Smith, Nguyen & Singh, we are committed to delivering exceptional value to our clients. We offer competitive pricing, transparent billing practices, and flexible fee structures that can be customized to meet your needs. We believe that our success is directly tied to your success, which is why we go above and beyond to provide the highest level of service possible."
                },
                {
                    id: "2B",
                    text: "If you are looking for a legal partner that understands your business, look no further than Smith, Nguyen & Singh. Contact us today to learn more about how we can help you achieve your goals."
                }
            ]
        }
    ]
}

const groupImages = [
    {
        id: 1,
        img: galleryImgA
    },
    {
        id: 2,
        img: galleryImgB
    }
]

const specializationSectionText = {
    heading: "Our Specialization",
    textContent: [
        {
            id: 1,
            title: "Corporate Compliance",
            paragraph: "Our attorneys have extensive experience in advising clients on a wide range of corporate compliance matters, including regulatory compliance, corporate governance, and risk management.",
            linkTxt: "Read More",
            linkPath: "/"
        },
        {
            id: 2,
            title: "Intellectual Property",
            paragraph: "We are skilled in handling all aspects of intellectual property law, including trademark and copyright registration, patent application and protection, and trade secret enforcement.",
            linkTxt: "Read More",
            linkPath: "/"
        },
        {
            id: 3,
            title: "Mergers & Acquisitions",
            paragraph: "Our attorneys have extensive experience in handling complex mergers and acquisitions across a wide range of industries. We work closely with our clients to understand their goals and objectives.",
            linkTxt: "Read More",
            linkPath: "/"
        },
    ]
}

const footerContent = {
    footerImage: footerImg,
    cta: {
        title: "Get a Free Consultation",
        text: "Are you in need of legal advice for your business? Don't know where to start or what options you have?  We offer a free consultation to help you get started.",
        linkText: "Read More",
        linkPath: "/"
    },
    footerLinks: [
        {
            id: 1,
            title: "Company",
            links: [
                {
                    id: "1a",
                    linkName: "About Cain-Surrey",
                    linkPath: "/"
                },
                {
                    id: "1b",
                    linkName: "Our Values",
                    linkPath: "/"
                },
                {
                    id: "1c",
                    linkName: "Our History",
                    linkPath: "/"
                },
                {
                    id: "1d",
                    linkName: "By the Numbers",
                    linkPath: "/"
                }
            ]
        },
        {
            id: 2,
            title: "Business",
            links: [
                {
                    id: "2a",
                    linkName: "Private Equity",
                    linkPath: "/"
                },
                {
                    id: "2b",
                    linkName: "Credit",
                    linkPath: "/"
                },
                {
                    id: "2c",
                    linkName: "Special Situations",
                    linkPath: "/"
                },
                {
                    id: "2d",
                    linkName: "Venture",
                    linkPath: "/"
                },
                {
                    id: "2e",
                    linkName: "Real Estate",
                    linkPath: "/"
                },
            ]
        },
        {
            id: 3,
            title: "People",
            links: [
                {
                    id: "3a",
                    linkName: "Business",
                    linkPath: "/"
                },
                {
                    id: "3b",
                    linkName: "Corporate",
                    linkPath: "/"
                },
                {
                    id: "3c",
                    linkName: "Leadership",
                    linkPath: "/"
                },
            ]
        },
        {
            id: 4,
            title: "Help",
            links: [
                {
                    id: "4a",
                    linkName: "FAQ",
                    linkPath: "/"
                },
                {
                    id: "4b",
                    linkName: "Contact Us",
                    linkPath: "/"
                },
                {
                    id: "4c",
                    linkName: "Terms",
                    linkPath: "/"
                },
                {
                    id: "4d",
                    linkName: "Cookies",
                    linkPath: "/"
                },
                {
                    id: "4e",
                    linkName: "Privacy",
                    linkPath: "/"
                },
            ]
        },
    ],
    copyright: "© 2023 Smith, Nguyen & Singh. All rights reserved."
}


export { navLinksHeader, heroImg, footerImg, aboutSectionText, groupImages, specializationSectionText, footerContent }