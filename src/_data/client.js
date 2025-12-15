module.exports = {
    "name": "Mai's Massage Therapy",
    "email": "mai.massagetherapyservice@gmail.com",
    "phoneForTel": "+447359925280",
    "phoneFormatted": "07359 925280",
    "openingHours": "Mon-Fri: 10am-7pm",
    "onlineBooking": "https://www.sumupbookings.com/mais-massage-therapy",
    "address": {
        "lineOne": "99A Canterbury Road",
        "lineTwo": "",
        "city": "Whitstable",
        "state": "",
        "zip": "CT5 4HG",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/FaTw5NcnYLDhNSkz8"
    },
    "socials": {
        "facebook": "https://www.facebook.com/profile.php?id=61567496233775",
        "whatsapp": "",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.maimassagetherapy.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.maimassagetherapy.co.uk/#business",
            "name": "Mai's Massage Therapy",
            "image": "https://www.maimassagetherapy.co.uk/assets/svgs/logo.svg",
            "url": "https://www.maimassagetherapy.co.uk",
            "telephone": "+447359925280",
            "email": "mai.massagetherapyservice@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "99A Canterbury Road",
                "addressLocality": "Whitstable",
                "postalCode": "CT5 4HG",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/FaTw5NcnYLDhNSkz8"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "19:00"
                }
            ],
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61567496233775"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.maimassagetherapy.co.uk/#website",
            "url": "https://www.maimassagetherapy.co.uk",
            "name": "Mai's Massage Therapy",
            "publisher": {
                "@id": "https://www.maimassagetherapy.co.uk/#business"
            }
        }
    }
};


