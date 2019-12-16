# SAMPLE DATA

This folder strictly contains sample data which is constucted in a similar way to the final product's data structre. This data is used as a way to develop the site to be capable for a headless cms, without implementing the backend requirements.

Once frontend development is fully designed, and completed. Then, the WordPress backend endpoints will be built out to fit the needs of this application.

## Definitions

### Top Level

```jsonc
"data": {
    "cmi": {                            // cmi business info
      "license": {                      // cmi license info
          "number": 0,                  // cmi license number
          "classes": [""]               // cmi license classes
      },
      "email": "",                      // cmi service email
      "phone": "",                      // cmi service phone
      "social": {
          "facebook": "",               // facebook page link
          "instagram": "",              // instagram page link
          "twitter": "",                // twitter page link
          "yelp": ""                    // yelp page link
        }
    },

    "locations": [                      // cmi shop information
        {
            "name": "",                 // location reference name
            "title": "",                // rendered location name
            "address": "",              // shop address
            "tel": "",                  // shop primary telephone
            "fax": ""                   // shop primary fax
        }
    ],

    "pages": {                          // page metadata
        "page-name" : {                 // page name
            "title": "",                // rendered page name (what renders on navbar, etc.)
            "link": "",                 // page link
            "banner": "" || [""],       // banner image link / links, points to which image should render
            "overview": [""],           // service overview for service pages (each string is a paragraph)
            "children": ""              // child pages (used to display relationship between pages such as 'Service' and 'Boilers')
        },
    }
}
```

Some pages require more specific implementations. These definitions are listed below.

### Testimonials Page

```jsonc
"testimonials-page": {
    "title": "",                        // rendered page name (what renders on navbar, etc.)
    "link": "",                         // page link
    "banner": "",                       // banner image link, points to which image should render
    "testimonials": [
        {
            "title": "",                // testimonial title (usually just a location name)
            "image": "",                // testimonial image
            "authour": "",              // person who gave testimonial
            "content": [                // testimonial content (each entry is a paragraph)
                {
                    "accented": false,  // wheter text is accented (usually for non-authour content)
                    "text": ""          // text content
                },
            ]
        }
    ]
}
```

### Staff Directory Page

```jsonc
"staff-directory": {
    "title": "",                        // rendered page name (what renders on navbar, etc.)
    "link": "",                         // page link
    "banner": "",                       // banner image link, points to which image should render
    "directory": [
        {
            "team": "",                 // employee team name
            "team-name": "",            // rendered team name
            "members": [                // team members
                {
                    "img": "",          // employee image link, points to which image should render
                    "name": "",         // employee name
                    "title": "",        // employee title
                    "email": "",        // employee email (can be blank)
                    "work": "",         // employee primary work number (can be blank)
                    "cell": "",         // employee cell number (can be blank)
                },
            ]
        }
    ]
}
```
