# SAMPLE DATA

This folder strictly contains sample data which is constucted in a similar way to the final product's data structre. This data is used as a way to develop the site to be capable for a headless cms, without implementing the backend requirements.

Once frontend development is fully designed, and completed. Then, the WordPress backend endpoints will be built out to fit the needs of this application.

## Definitions

```jsonc
"data": {
    "cmi": {                    // cmi business info
      "license": {              // cmi license info
          "number": 0,          // cmi license number
          "classes": [""]       // cmi license classes
      },
      "email": "",              // cmi service email
      "phone": "",              // cmi service phone
      "social": {
          "facebook": "",       // facebook page link
          "instagram": "",      // instagram page link
          "twitter": "",        // twitter page link
          "yelp": ""            // yelp page link
        }
    },

    "locations": [              // cmi shop information
        {
            "name": "",         // location reference name
            "title": "",        // rendered location name
            "address": "",      // shop address
            "tel": "",          // shop primary telephone
            "fax": ""           // shop primary fax
        }
    ],

    "pages": [                  // page metadata
        {
            "name": "",         // rendered page component (used as reference name)
            "title": "",        // rendered page name (what renders on navbar, etc.)
            "link": "",         // page link
            "banner": "",       // banner image link, points to which image should render
            "overview": [""],   // service overview for service pages (each string is a paragraph)
            "children": ""      // child pages (used to display relationship between pages such as 'Service' and 'Boilers')
        }
    ]
}
```
