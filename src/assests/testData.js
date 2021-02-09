const testData = {
    countries: [
        {
            "Country": "Guernsey",
            "Slug": "guernsey",
            "ISO2": "GG"
        },
        {
            "Country": "Philippines",
            "Slug": "philippines",
            "ISO2": "PH"
        },
        {
            "Country": "Russian Federation",
            "Slug": "russia",
            "ISO2": "RU"
        },
        {
            "Country": "Saint Lucia",
            "Slug": "saint-lucia",
            "ISO2": "LC"
        },
        {
            "Country": "Belize",
            "Slug": "belize",
            "ISO2": "BZ"
        },
        {
            "Country": "Haiti",
            "Slug": "haiti",
            "ISO2": "HT"
        },
        {
            "Country": "Marshall Islands",
            "Slug": "marshall-islands",
            "ISO2": "MH"
        },
        {
            "Country": "Micronesia, Federated States of",
            "Slug": "micronesia",
            "ISO2": "FM"
        },
        {
            "Country": "Romania",
            "Slug": "romania",
            "ISO2": "RO"
        },
        {
            "Country": "Gabon",
            "Slug": "gabon",
            "ISO2": "GA"
        },
        {
            "Country": "Macedonia, Republic of",
            "Slug": "macedonia",
            "ISO2": "MK"
        },
        {
            "Country": "Montserrat",
            "Slug": "montserrat",
            "ISO2": "MS"
        },
        {
            "Country": "Singapore",
            "Slug": "singapore",
            "ISO2": "SG"
        },
        {
            "Country": "South Sudan",
            "Slug": "south-sudan",
            "ISO2": "SS"
        },
        {
            "Country": "Cape Verde",
            "Slug": "cape-verde",
            "ISO2": "CV"
        },
        {
            "Country": "China",
            "Slug": "china",
            "ISO2": "CN"
        },
        {
            "Country": "India",
            "Slug": "india",
            "ISO2": "IN"
        },
        {
            "Country": "Malta",
            "Slug": "malta",
            "ISO2": "MT"
        },
        {
            "Country": "Slovakia",
            "Slug": "slovakia",
            "ISO2": "SK"
        },
        {
            "Country": "Somalia",
            "Slug": "somalia",
            "ISO2": "SO"
        },
        {
            "Country": "Gambia",
            "Slug": "gambia",
            "ISO2": "GM"
        },
        {
            "Country": "Guam",
            "Slug": "guam",
            "ISO2": "GU"
        },
        {
            "Country": "Israel",
            "Slug": "israel",
            "ISO2": "IL"
        },
        {
            "Country": "Japan",
            "Slug": "japan",
            "ISO2": "JP"
        },
        {
            "Country": "Nicaragua",
            "Slug": "nicaragua",
            "ISO2": "NI"
        },
        {
            "Country": "Guyana",
            "Slug": "guyana",
            "ISO2": "GY"
        },
        {
            "Country": "Hong Kong, SAR China",
            "Slug": "hong-kong-sar-china",
            "ISO2": "HK"
        },
        {
            "Country": "Turks and Caicos Islands",
            "Slug": "turks-and-caicos-islands",
            "ISO2": "TC"
        },
        {
            "Country": "Bouvet Island",
            "Slug": "bouvet-island",
            "ISO2": "BV"
        },
        {
            "Country": "Malaysia",
            "Slug": "malaysia",
            "ISO2": "MY"
        },
        {
            "Country": "Mauritania",
            "Slug": "mauritania",
            "ISO2": "MR"
        },
        {
            "Country": "Bangladesh",
            "Slug": "bangladesh",
            "ISO2": "BD"
        },
        {
            "Country": "Cuba",
            "Slug": "cuba",
            "ISO2": "CU"
        },
        {
            "Country": "Georgia",
            "Slug": "georgia",
            "ISO2": "GE"
        },
        {
            "Country": "Netherlands Antilles",
            "Slug": "netherlands-antilles",
            "ISO2": "AN"
        },
        {
            "Country": "Canada",
            "Slug": "canada",
            "ISO2": "CA"
        },
        {
            "Country": "Maldives",
            "Slug": "maldives",
            "ISO2": "MV"
        },
        {
            "Country": "Palau",
            "Slug": "palau",
            "ISO2": "PW"
        },
        {
            "Country": "Saint-Barthélemy",
            "Slug": "saint-barthélemy",
            "ISO2": "BL"
        },
        {
            "Country": "Burundi",
            "Slug": "burundi",
            "ISO2": "BI"
        },
        {
            "Country": "Portugal",
            "Slug": "portugal",
            "ISO2": "PT"
        },
        {
            "Country": "Yemen",
            "Slug": "yemen",
            "ISO2": "YE"
        },
        {
            "Country": "Chad",
            "Slug": "chad",
            "ISO2": "TD"
        },
        {
            "Country": "Lebanon",
            "Slug": "lebanon",
            "ISO2": "LB"
        },
        {
            "Country": "Viet Nam",
            "Slug": "vietnam",
            "ISO2": "VN"
        },
        {
            "Country": "Bermuda",
            "Slug": "bermuda",
            "ISO2": "BM"
        },
        {
            "Country": "Costa Rica",
            "Slug": "costa-rica",
            "ISO2": "CR"
        },
        {
            "Country": "Equatorial Guinea",
            "Slug": "equatorial-guinea",
            "ISO2": "GQ"
        },
        {
            "Country": "Palestinian Territory",
            "Slug": "palestine",
            "ISO2": "PS"
        },
        {
            "Country": "Belgium",
            "Slug": "belgium",
            "ISO2": "BE"
        },
        {
            "Country": "French Southern Territories",
            "Slug": "french-southern-territories",
            "ISO2": "TF"
        },
        {
            "Country": "United Arab Emirates",
            "Slug": "united-arab-emirates",
            "ISO2": "AE"
        },
        {
            "Country": "Albania",
            "Slug": "albania",
            "ISO2": "AL"
        },
        {
            "Country": "Belarus",
            "Slug": "belarus",
            "ISO2": "BY"
        },
        {
            "Country": "Honduras",
            "Slug": "honduras",
            "ISO2": "HN"
        },
        {
            "Country": "Namibia",
            "Slug": "namibia",
            "ISO2": "NA"
        },
        {
            "Country": "Puerto Rico",
            "Slug": "puerto-rico",
            "ISO2": "PR"
        },
        {
            "Country": "Timor-Leste",
            "Slug": "timor-leste",
            "ISO2": "TL"
        },
        {
            "Country": "Argentina",
            "Slug": "argentina",
            "ISO2": "AR"
        },
        {
            "Country": "Bhutan",
            "Slug": "bhutan",
            "ISO2": "BT"
        },
        {
            "Country": "Bosnia and Herzegovina",
            "Slug": "bosnia-and-herzegovina",
            "ISO2": "BA"
        },
        {
            "Country": "Sweden",
            "Slug": "sweden",
            "ISO2": "SE"
        },
        {
            "Country": "Aruba",
            "Slug": "aruba",
            "ISO2": "AW"
        },
        {
            "Country": "Bahrain",
            "Slug": "bahrain",
            "ISO2": "BH"
        },
        {
            "Country": "Cook Islands",
            "Slug": "cook-islands",
            "ISO2": "CK"
        },
        {
            "Country": "French Guiana",
            "Slug": "french-guiana",
            "ISO2": "GF"
        },
        {
            "Country": "Dominica",
            "Slug": "dominica",
            "ISO2": "DM"
        },
        {
            "Country": "Ireland",
            "Slug": "ireland",
            "ISO2": "IE"
        },
        {
            "Country": "Mali",
            "Slug": "mali",
            "ISO2": "ML"
        },
        {
            "Country": "Ecuador",
            "Slug": "ecuador",
            "ISO2": "EC"
        },
        {
            "Country": "Nigeria",
            "Slug": "nigeria",
            "ISO2": "NG"
        },
        {
            "Country": "Ukraine",
            "Slug": "ukraine",
            "ISO2": "UA"
        },
        {
            "Country": "Central African Republic",
            "Slug": "central-african-republic",
            "ISO2": "CF"
        },
        {
            "Country": "Oman",
            "Slug": "oman",
            "ISO2": "OM"
        },
        {
            "Country": "Moldova",
            "Slug": "moldova",
            "ISO2": "MD"
        },
        {
            "Country": "Kazakhstan",
            "Slug": "kazakhstan",
            "ISO2": "KZ"
        },
        {
            "Country": "Paraguay",
            "Slug": "paraguay",
            "ISO2": "PY"
        },
        {
            "Country": "Samoa",
            "Slug": "samoa",
            "ISO2": "WS"
        },
        {
            "Country": "Zimbabwe",
            "Slug": "zimbabwe",
            "ISO2": "ZW"
        },
        {
            "Country": "Holy See (Vatican City State)",
            "Slug": "holy-see-vatican-city-state",
            "ISO2": "VA"
        },
        {
            "Country": "Seychelles",
            "Slug": "seychelles",
            "ISO2": "SC"
        },
        {
            "Country": "Tanzania, United Republic of",
            "Slug": "tanzania",
            "ISO2": "TZ"
        },
        {
            "Country": "Trinidad and Tobago",
            "Slug": "trinidad-and-tobago",
            "ISO2": "TT"
        },
        {
            "Country": "Djibouti",
            "Slug": "djibouti",
            "ISO2": "DJ"
        },
        {
            "Country": "Greenland",
            "Slug": "greenland",
            "ISO2": "GL"
        },
        {
            "Country": "Guinea-Bissau",
            "Slug": "guinea-bissau",
            "ISO2": "GW"
        },
        {
            "Country": "Iceland",
            "Slug": "iceland",
            "ISO2": "IS"
        },
        {
            "Country": "Réunion",
            "Slug": "réunion",
            "ISO2": "RE"
        },
        {
            "Country": "Uruguay",
            "Slug": "uruguay",
            "ISO2": "UY"
        },
        {
            "Country": "Liberia",
            "Slug": "liberia",
            "ISO2": "LR"
        },
        {
            "Country": "Macao, SAR China",
            "Slug": "macao-sar-china",
            "ISO2": "MO"
        },
        {
            "Country": "Mauritius",
            "Slug": "mauritius",
            "ISO2": "MU"
        },
        {
            "Country": "Spain",
            "Slug": "spain",
            "ISO2": "ES"
        },
        {
            "Country": "Bulgaria",
            "Slug": "bulgaria",
            "ISO2": "BG"
        },
        {
            "Country": "Denmark",
            "Slug": "denmark",
            "ISO2": "DK"
        },
        {
            "Country": "Ghana",
            "Slug": "ghana",
            "ISO2": "GH"
        },
        {
            "Country": "Iraq",
            "Slug": "iraq",
            "ISO2": "IQ"
        },
        {
            "Country": "Jordan",
            "Slug": "jordan",
            "ISO2": "JO"
        },
        {
            "Country": "Kuwait",
            "Slug": "kuwait",
            "ISO2": "KW"
        },
        {
            "Country": "Saint Pierre and Miquelon",
            "Slug": "saint-pierre-and-miquelon",
            "ISO2": "PM"
        },
        {
            "Country": "Tokelau",
            "Slug": "tokelau",
            "ISO2": "TK"
        },
        {
            "Country": "United States of America",
            "Slug": "united-states",
            "ISO2": "US"
        },
        {
            "Country": "Bolivia",
            "Slug": "bolivia",
            "ISO2": "BO"
        },
        {
            "Country": "Cayman Islands",
            "Slug": "cayman-islands",
            "ISO2": "KY"
        },
        {
            "Country": "Jamaica",
            "Slug": "jamaica",
            "ISO2": "JM"
        },
        {
            "Country": "Myanmar",
            "Slug": "myanmar",
            "ISO2": "MM"
        },
        {
            "Country": "New Caledonia",
            "Slug": "new-caledonia",
            "ISO2": "NC"
        },
        {
            "Country": "Saint-Martin (French part)",
            "Slug": "saint-martin-french-part",
            "ISO2": "MF"
        },
        {
            "Country": "Anguilla",
            "Slug": "anguilla",
            "ISO2": "AI"
        },
        {
            "Country": "Austria",
            "Slug": "austria",
            "ISO2": "AT"
        },
        {
            "Country": "British Virgin Islands",
            "Slug": "british-virgin-islands",
            "ISO2": "VG"
        },
        {
            "Country": "Cocos (Keeling) Islands",
            "Slug": "cocos-keeling-islands",
            "ISO2": "CC"
        },
        {
            "Country": "Fiji",
            "Slug": "fiji",
            "ISO2": "FJ"
        },
        {
            "Country": "American Samoa",
            "Slug": "american-samoa",
            "ISO2": "AS"
        },
        {
            "Country": "Hungary",
            "Slug": "hungary",
            "ISO2": "HU"
        },
        {
            "Country": "Saint Kitts and Nevis",
            "Slug": "saint-kitts-and-nevis",
            "ISO2": "KN"
        },
        {
            "Country": "Swaziland",
            "Slug": "swaziland",
            "ISO2": "SZ"
        },
        {
            "Country": "Tajikistan",
            "Slug": "tajikistan",
            "ISO2": "TJ"
        },
        {
            "Country": "Benin",
            "Slug": "benin",
            "ISO2": "BJ"
        },
        {
            "Country": "Togo",
            "Slug": "togo",
            "ISO2": "TG"
        },
        {
            "Country": "Uganda",
            "Slug": "uganda",
            "ISO2": "UG"
        },
        {
            "Country": "Burkina Faso",
            "Slug": "burkina-faso",
            "ISO2": "BF"
        },
        {
            "Country": "Netherlands",
            "Slug": "netherlands",
            "ISO2": "NL"
        },
        {
            "Country": "Niue",
            "Slug": "niue",
            "ISO2": "NU"
        },
        {
            "Country": "Sao Tome and Principe",
            "Slug": "sao-tome-and-principe",
            "ISO2": "ST"
        },
        {
            "Country": "Turkey",
            "Slug": "turkey",
            "ISO2": "TR"
        },
        {
            "Country": "Cameroon",
            "Slug": "cameroon",
            "ISO2": "CM"
        },
        {
            "Country": "Congo (Brazzaville)",
            "Slug": "congo-brazzaville",
            "ISO2": "CG"
        },
        {
            "Country": "Papua New Guinea",
            "Slug": "papua-new-guinea",
            "ISO2": "PG"
        },
        {
            "Country": "Saint Helena",
            "Slug": "saint-helena",
            "ISO2": "SH"
        },
        {
            "Country": "Sri Lanka",
            "Slug": "sri-lanka",
            "ISO2": "LK"
        },
        {
            "Country": "Antarctica",
            "Slug": "antarctica",
            "ISO2": "AQ"
        },
        {
            "Country": "Montenegro",
            "Slug": "montenegro",
            "ISO2": "ME"
        },
        {
            "Country": "Bahamas",
            "Slug": "bahamas",
            "ISO2": "BS"
        },
        {
            "Country": "Slovenia",
            "Slug": "slovenia",
            "ISO2": "SI"
        },
        {
            "Country": "Mongolia",
            "Slug": "mongolia",
            "ISO2": "MN"
        },
        {
            "Country": "Sierra Leone",
            "Slug": "sierra-leone",
            "ISO2": "SL"
        },
        {
            "Country": "British Indian Ocean Territory",
            "Slug": "british-indian-ocean-territory",
            "ISO2": "IO"
        },
        {
            "Country": "Croatia",
            "Slug": "croatia",
            "ISO2": "HR"
        },
        {
            "Country": "Estonia",
            "Slug": "estonia",
            "ISO2": "EE"
        },
        {
            "Country": "Falkland Islands (Malvinas)",
            "Slug": "falkland-islands-malvinas",
            "ISO2": "FK"
        },
        {
            "Country": "Italy",
            "Slug": "italy",
            "ISO2": "IT"
        },
        {
            "Country": "Liechtenstein",
            "Slug": "liechtenstein",
            "ISO2": "LI"
        },
        {
            "Country": "Morocco",
            "Slug": "morocco",
            "ISO2": "MA"
        },
        {
            "Country": "Tuvalu",
            "Slug": "tuvalu",
            "ISO2": "TV"
        },
        {
            "Country": "Andorra",
            "Slug": "andorra",
            "ISO2": "AD"
        },
        {
            "Country": "Congo (Kinshasa)",
            "Slug": "congo-kinshasa",
            "ISO2": "CD"
        },
        {
            "Country": "Guadeloupe",
            "Slug": "guadeloupe",
            "ISO2": "GP"
        },
        {
            "Country": "Peru",
            "Slug": "peru",
            "ISO2": "PE"
        },
        {
            "Country": "South Georgia and the South Sandwich Islands",
            "Slug": "south-georgia-and-the-south-sandwich-islands",
            "ISO2": "GS"
        },
        {
            "Country": "Venezuela (Bolivarian Republic)",
            "Slug": "venezuela",
            "ISO2": "VE"
        },
        {
            "Country": "Iran, Islamic Republic of",
            "Slug": "iran",
            "ISO2": "IR"
        },
        {
            "Country": "Svalbard and Jan Mayen Islands",
            "Slug": "svalbard-and-jan-mayen-islands",
            "ISO2": "SJ"
        },
        {
            "Country": "Algeria",
            "Slug": "algeria",
            "ISO2": "DZ"
        },
        {
            "Country": "Ethiopia",
            "Slug": "ethiopia",
            "ISO2": "ET"
        },
        {
            "Country": "Luxembourg",
            "Slug": "luxembourg",
            "ISO2": "LU"
        },
        {
            "Country": "Northern Mariana Islands",
            "Slug": "northern-mariana-islands",
            "ISO2": "MP"
        },
        {
            "Country": "Indonesia",
            "Slug": "indonesia",
            "ISO2": "ID"
        },
        {
            "Country": "Qatar",
            "Slug": "qatar",
            "ISO2": "QA"
        },
        {
            "Country": "Solomon Islands",
            "Slug": "solomon-islands",
            "ISO2": "SB"
        },
        {
            "Country": "Guatemala",
            "Slug": "guatemala",
            "ISO2": "GT"
        },
        {
            "Country": "Jersey",
            "Slug": "jersey",
            "ISO2": "JE"
        },
        {
            "Country": "Mexico",
            "Slug": "mexico",
            "ISO2": "MX"
        },
        {
            "Country": "Poland",
            "Slug": "poland",
            "ISO2": "PL"
        },
        {
            "Country": "Tunisia",
            "Slug": "tunisia",
            "ISO2": "TN"
        },
        {
            "Country": "Christmas Island",
            "Slug": "christmas-island",
            "ISO2": "CX"
        },
        {
            "Country": "Dominican Republic",
            "Slug": "dominican-republic",
            "ISO2": "DO"
        },
        {
            "Country": "Egypt",
            "Slug": "egypt",
            "ISO2": "EG"
        },
        {
            "Country": "Guinea",
            "Slug": "guinea",
            "ISO2": "GN"
        },
        {
            "Country": "Antigua and Barbuda",
            "Slug": "antigua-and-barbuda",
            "ISO2": "AG"
        },
        {
            "Country": "Grenada",
            "Slug": "grenada",
            "ISO2": "GD"
        },
        {
            "Country": "Norway",
            "Slug": "norway",
            "ISO2": "NO"
        },
        {
            "Country": "Suriname",
            "Slug": "suriname",
            "ISO2": "SR"
        },
        {
            "Country": "Switzerland",
            "Slug": "switzerland",
            "ISO2": "CH"
        },
        {
            "Country": "Turkmenistan",
            "Slug": "turkmenistan",
            "ISO2": "TM"
        },
        {
            "Country": "Botswana",
            "Slug": "botswana",
            "ISO2": "BW"
        },
        {
            "Country": "French Polynesia",
            "Slug": "french-polynesia",
            "ISO2": "PF"
        },
        {
            "Country": "Greece",
            "Slug": "greece",
            "ISO2": "GR"
        },
        {
            "Country": "Panama",
            "Slug": "panama",
            "ISO2": "PA"
        },
        {
            "Country": "Pitcairn",
            "Slug": "pitcairn",
            "ISO2": "PN"
        },
        {
            "Country": "Senegal",
            "Slug": "senegal",
            "ISO2": "SN"
        },
        {
            "Country": "Korea (North)",
            "Slug": "korea-north",
            "ISO2": "KP"
        },
        {
            "Country": "Latvia",
            "Slug": "latvia",
            "ISO2": "LV"
        },
        {
            "Country": "New Zealand",
            "Slug": "new-zealand",
            "ISO2": "NZ"
        },
        {
            "Country": "Thailand",
            "Slug": "thailand",
            "ISO2": "TH"
        },
        {
            "Country": "Wallis and Futuna Islands",
            "Slug": "wallis-and-futuna-islands",
            "ISO2": "WF"
        },
        {
            "Country": "Nepal",
            "Slug": "nepal",
            "ISO2": "NP"
        },
        {
            "Country": "Saudi Arabia",
            "Slug": "saudi-arabia",
            "ISO2": "SA"
        },
        {
            "Country": "Barbados",
            "Slug": "barbados",
            "ISO2": "BB"
        },
        {
            "Country": "Brunei Darussalam",
            "Slug": "brunei",
            "ISO2": "BN"
        },
        {
            "Country": "Cambodia",
            "Slug": "cambodia",
            "ISO2": "KH"
        },
        {
            "Country": "Lao PDR",
            "Slug": "lao-pdr",
            "ISO2": "LA"
        },
        {
            "Country": "Nauru",
            "Slug": "nauru",
            "ISO2": "NR"
        },
        {
            "Country": "Colombia",
            "Slug": "colombia",
            "ISO2": "CO"
        },
        {
            "Country": "Pakistan",
            "Slug": "pakistan",
            "ISO2": "PK"
        },
        {
            "Country": "Sudan",
            "Slug": "sudan",
            "ISO2": "SD"
        },
        {
            "Country": "Finland",
            "Slug": "finland",
            "ISO2": "FI"
        },
        {
            "Country": "Niger",
            "Slug": "niger",
            "ISO2": "NE"
        },
        {
            "Country": "Syrian Arab Republic (Syria)",
            "Slug": "syria",
            "ISO2": "SY"
        },
        {
            "Country": "Zambia",
            "Slug": "zambia",
            "ISO2": "ZM"
        },
        {
            "Country": "Monaco",
            "Slug": "monaco",
            "ISO2": "MC"
        },
        {
            "Country": "South Africa",
            "Slug": "south-africa",
            "ISO2": "ZA"
        },
        {
            "Country": "Comoros",
            "Slug": "comoros",
            "ISO2": "KM"
        },
        {
            "Country": "Germany",
            "Slug": "germany",
            "ISO2": "DE"
        },
        {
            "Country": "Kyrgyzstan",
            "Slug": "kyrgyzstan",
            "ISO2": "KG"
        },
        {
            "Country": "Madagascar",
            "Slug": "madagascar",
            "ISO2": "MG"
        },
        {
            "Country": "United Kingdom",
            "Slug": "united-kingdom",
            "ISO2": "GB"
        },
        {
            "Country": "Azerbaijan",
            "Slug": "azerbaijan",
            "ISO2": "AZ"
        },
        {
            "Country": "Brazil",
            "Slug": "brazil",
            "ISO2": "BR"
        },
        {
            "Country": "Faroe Islands",
            "Slug": "faroe-islands",
            "ISO2": "FO"
        },
        {
            "Country": "Korea (South)",
            "Slug": "korea-south",
            "ISO2": "KR"
        },
        {
            "Country": "Martinique",
            "Slug": "martinique",
            "ISO2": "MQ"
        },
        {
            "Country": "Angola",
            "Slug": "angola",
            "ISO2": "AO"
        },
        {
            "Country": "Libya",
            "Slug": "libya",
            "ISO2": "LY"
        },
        {
            "Country": "Armenia",
            "Slug": "armenia",
            "ISO2": "AM"
        },
        {
            "Country": "France",
            "Slug": "france",
            "ISO2": "FR"
        },
        {
            "Country": "Heard and Mcdonald Islands",
            "Slug": "heard-and-mcdonald-islands",
            "ISO2": "HM"
        },
        {
            "Country": "Isle of Man",
            "Slug": "isle-of-man",
            "ISO2": "IM"
        },
        {
            "Country": "Rwanda",
            "Slug": "rwanda",
            "ISO2": "RW"
        },
        {
            "Country": "Afghanistan",
            "Slug": "afghanistan",
            "ISO2": "AF"
        },
        {
            "Country": "San Marino",
            "Slug": "san-marino",
            "ISO2": "SM"
        },
        {
            "Country": "Chile",
            "Slug": "chile",
            "ISO2": "CL"
        },
        {
            "Country": "Kenya",
            "Slug": "kenya",
            "ISO2": "KE"
        },
        {
            "Country": "Malawi",
            "Slug": "malawi",
            "ISO2": "MW"
        },
        {
            "Country": "Mayotte",
            "Slug": "mayotte",
            "ISO2": "YT"
        },
        {
            "Country": "Republic of Kosovo",
            "Slug": "kosovo",
            "ISO2": "XK"
        },
        {
            "Country": "Lithuania",
            "Slug": "lithuania",
            "ISO2": "LT"
        },
        {
            "Country": "Tonga",
            "Slug": "tonga",
            "ISO2": "TO"
        },
        {
            "Country": "ALA Aland Islands",
            "Slug": "ala-aland-islands",
            "ISO2": "AX"
        },
        {
            "Country": "Côte d'Ivoire",
            "Slug": "cote-divoire",
            "ISO2": "CI"
        },
        {
            "Country": "Eritrea",
            "Slug": "eritrea",
            "ISO2": "ER"
        },
        {
            "Country": "Czech Republic",
            "Slug": "czech-republic",
            "ISO2": "CZ"
        },
        {
            "Country": "Gibraltar",
            "Slug": "gibraltar",
            "ISO2": "GI"
        },
        {
            "Country": "Lesotho",
            "Slug": "lesotho",
            "ISO2": "LS"
        },
        {
            "Country": "Virgin Islands, US",
            "Slug": "virgin-islands",
            "ISO2": "VI"
        },
        {
            "Country": "Cyprus",
            "Slug": "cyprus",
            "ISO2": "CY"
        },
        {
            "Country": "Kiribati",
            "Slug": "kiribati",
            "ISO2": "KI"
        },
        {
            "Country": "Mozambique",
            "Slug": "mozambique",
            "ISO2": "MZ"
        },
        {
            "Country": "Taiwan, Republic of China",
            "Slug": "taiwan",
            "ISO2": "TW"
        },
        {
            "Country": "Uzbekistan",
            "Slug": "uzbekistan",
            "ISO2": "UZ"
        },
        {
            "Country": "Vanuatu",
            "Slug": "vanuatu",
            "ISO2": "VU"
        },
        {
            "Country": "Australia",
            "Slug": "australia",
            "ISO2": "AU"
        },
        {
            "Country": "El Salvador",
            "Slug": "el-salvador",
            "ISO2": "SV"
        },
        {
            "Country": "Saint Vincent and Grenadines",
            "Slug": "saint-vincent-and-the-grenadines",
            "ISO2": "VC"
        },
        {
            "Country": "Serbia",
            "Slug": "serbia",
            "ISO2": "RS"
        },
        {
            "Country": "Western Sahara",
            "Slug": "western-sahara",
            "ISO2": "EH"
        },
        {
            "Country": "Norfolk Island",
            "Slug": "norfolk-island",
            "ISO2": "NF"
        },
        {
            "Country": "US Minor Outlying Islands",
            "Slug": "us-minor-outlying-islands",
            "ISO2": "UM"
        }
    ],
    countryDataResponse: [

            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 0,
                "Status": "confirmed",
                "Date": "2020-03-01T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 0,
                "Status": "confirmed",
                "Date": "2020-03-02T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 0,
                "Status": "confirmed",
                "Date": "2020-03-03T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 0,
                "Status": "confirmed",
                "Date": "2020-03-04T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1,
                "Status": "confirmed",
                "Date": "2020-03-05T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1,
                "Status": "confirmed",
                "Date": "2020-03-06T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1,
                "Status": "confirmed",
                "Date": "2020-03-07T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 3,
                "Status": "confirmed",
                "Date": "2020-03-08T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 3,
                "Status": "confirmed",
                "Date": "2020-03-09T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 7,
                "Status": "confirmed",
                "Date": "2020-03-10T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 13,
                "Status": "confirmed",
                "Date": "2020-03-11T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 17,
                "Status": "confirmed",
                "Date": "2020-03-12T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 24,
                "Status": "confirmed",
                "Date": "2020-03-13T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 38,
                "Status": "confirmed",
                "Date": "2020-03-14T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 51,
                "Status": "confirmed",
                "Date": "2020-03-15T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 62,
                "Status": "confirmed",
                "Date": "2020-03-16T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 62,
                "Status": "confirmed",
                "Date": "2020-03-17T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 116,
                "Status": "confirmed",
                "Date": "2020-03-18T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 150,
                "Status": "confirmed",
                "Date": "2020-03-19T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 202,
                "Status": "confirmed",
                "Date": "2020-03-20T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 240,
                "Status": "confirmed",
                "Date": "2020-03-21T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 274,
                "Status": "confirmed",
                "Date": "2020-03-22T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 402,
                "Status": "confirmed",
                "Date": "2020-03-23T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 554,
                "Status": "confirmed",
                "Date": "2020-03-24T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 709,
                "Status": "confirmed",
                "Date": "2020-03-25T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 927,
                "Status": "confirmed",
                "Date": "2020-03-26T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1170,
                "Status": "confirmed",
                "Date": "2020-03-27T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1187,
                "Status": "confirmed",
                "Date": "2020-03-28T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1280,
                "Status": "confirmed",
                "Date": "2020-03-29T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1326,
                "Status": "confirmed",
                "Date": "2020-03-30T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1353,
                "Status": "confirmed",
                "Date": "2020-03-31T00:00:00Z"
            },
            {
                "Country": "South Africa",
                "CountryCode": "ZA",
                "Province": "",
                "City": "",
                "CityCode": "",
                "Lat": "-30.56",
                "Lon": "22.94",
                "Cases": 1380,
                "Status": "confirmed",
                "Date": "2020-04-01T00:00:00Z"
            }
     
    ],
    countryDataResponse2: [
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 259,
            "Status": "confirmed",
            "Date": "2020-03-01T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 278,
            "Status": "confirmed",
            "Date": "2020-03-02T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 298,
            "Status": "confirmed",
            "Date": "2020-03-03T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 333,
            "Status": "confirmed",
            "Date": "2020-03-04T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 365,
            "Status": "confirmed",
            "Date": "2020-03-05T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 420,
            "Status": "confirmed",
            "Date": "2020-03-06T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 466,
            "Status": "confirmed",
            "Date": "2020-03-07T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 499,
            "Status": "confirmed",
            "Date": "2020-03-08T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 527,
            "Status": "confirmed",
            "Date": "2020-03-09T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 585,
            "Status": "confirmed",
            "Date": "2020-03-10T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 640,
            "Status": "confirmed",
            "Date": "2020-03-11T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 696,
            "Status": "confirmed",
            "Date": "2020-03-12T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 733,
            "Status": "confirmed",
            "Date": "2020-03-13T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 795,
            "Status": "confirmed",
            "Date": "2020-03-14T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 826,
            "Status": "confirmed",
            "Date": "2020-03-15T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 843,
            "Status": "confirmed",
            "Date": "2020-03-16T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 893,
            "Status": "confirmed",
            "Date": "2020-03-17T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 928,
            "Status": "confirmed",
            "Date": "2020-03-18T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 968,
            "Status": "confirmed",
            "Date": "2020-03-19T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1022,
            "Status": "confirmed",
            "Date": "2020-03-20T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1059,
            "Status": "confirmed",
            "Date": "2020-03-21T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1104,
            "Status": "confirmed",
            "Date": "2020-03-22T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1144,
            "Status": "confirmed",
            "Date": "2020-03-23T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1217,
            "Status": "confirmed",
            "Date": "2020-03-24T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1314,
            "Status": "confirmed",
            "Date": "2020-03-25T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1416,
            "Status": "confirmed",
            "Date": "2020-03-26T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1530,
            "Status": "confirmed",
            "Date": "2020-03-27T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1728,
            "Status": "confirmed",
            "Date": "2020-03-28T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 1907,
            "Status": "confirmed",
            "Date": "2020-03-29T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 2001,
            "Status": "confirmed",
            "Date": "2020-03-30T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 2255,
            "Status": "confirmed",
            "Date": "2020-03-31T00:00:00Z"
        },
        {
            "Country": "Japan",
            "CountryCode": "JP",
            "Province": "",
            "City": "",
            "CityCode": "",
            "Lat": "36.2",
            "Lon": "138.25",
            "Cases": 2535,
            "Status": "confirmed",
            "Date": "2020-04-01T00:00:00Z"
        }
      
 
]
}

export default testData



