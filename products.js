/* Källänkar sparas separat lokalt. */
const PRODUCTS = [
  {
    "sku": "H-101",
    "name": "Cosmetic organizer, Make-up organizer",
    "price": 43600,
    "category": "home",
    "image": "images/H-101.webp",
    "creator": "FörsterSepp",
    "weightGrams": 545,
    "profileName": "Cosmetic Organizer",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 176
      },
      {
        "material": "PLA",
        "grams": 369
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-102",
    "name": "Office Desk Organizer",
    "price": 15920,
    "category": "home",
    "image": "images/H-102.webp",
    "creator": "ARTICAT Realm",
    "weightGrams": 199,
    "profileName": "0.28mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 199
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-103",
    "name": "The Ultimate Parametric Drawer Organizer System",
    "price": 5040,
    "category": "home",
    "image": "images/H-103.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 63,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 63
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-104",
    "name": "Modern Japandi Desk Organizer (2 versions, NO-AMS)",
    "price": 24080,
    "category": "home",
    "image": "images/H-104.webp",
    "creator": "S.Corp.",
    "weightGrams": 301,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 301
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-105",
    "name": "Beauty Cosmetic Modular Organizer",
    "price": 21200,
    "category": "home",
    "image": "images/H-105.webp",
    "creator": "bigzahry",
    "weightGrams": 265,
    "profileName": "Beauty Organizer",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 265
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-107",
    "name": "Office Desk Organizer with Integrated Phone Holder",
    "price": 21600,
    "category": "home",
    "image": "images/H-107.webp",
    "creator": "Deltaprints",
    "weightGrams": 270,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 270
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-108",
    "name": "Grain Desk Organizer",
    "price": 13120,
    "category": "home",
    "image": "images/H-108.webp",
    "creator": "RJ",
    "weightGrams": 164,
    "profileName": "0.2mm layer, 2 walls, 7% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 164
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-109",
    "name": "Minimalist Entryway Organizer",
    "price": 21440,
    "category": "home",
    "image": "images/H-109.webp",
    "creator": "polyana32",
    "weightGrams": 268,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 268
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-110",
    "name": "Desk Organizer with Pen Holder & Tray",
    "price": 14240,
    "category": "home",
    "image": "images/H-110.webp",
    "creator": "TriFusion",
    "weightGrams": 178,
    "profileName": "0.24mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 178
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-111",
    "name": "Lovely Heart-Shaped Makeup & Desk Organizer",
    "price": 11680,
    "category": "home",
    "image": "images/H-111.webp",
    "creator": "3d.tresd",
    "weightGrams": 146,
    "profileName": "V2 Enhanced - more authentic heart-shaped look",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 146
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-112",
    "name": "BUCKETS MINI's - Stackable Organizer - no support",
    "price": 20880,
    "category": "home",
    "image": "images/H-112.webp",
    "creator": "SMACKMAX",
    "weightGrams": 261,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47
      },
      {
        "material": "PLA",
        "grams": 214
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-113",
    "name": "Post-it Desk Organizer",
    "price": 7040,
    "category": "home",
    "image": "images/H-113.webp",
    "creator": "ARTICAT Realm",
    "weightGrams": 88,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 88
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-114",
    "name": "6-Drawer Desk Organizer — Tall Drawer Edition",
    "price": 33920,
    "category": "home",
    "image": "images/H-114.webp",
    "creator": "Hart Prints Co.",
    "weightGrams": 424,
    "profileName": "Desk organizer 3x2 Tall V1",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 424
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-116",
    "name": "Workshop / Desk Organizer / Stackable / 3 Sizes",
    "price": 34400,
    "category": "home",
    "image": "images/H-116.webp",
    "creator": "PaperPlaneLab",
    "weightGrams": 688,
    "profileName": "A1/P1/X1- Big Size - NO OVERHANG",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 277
      },
      {
        "material": "PLA",
        "grams": 411
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.2
  },
  {
    "sku": "H-117",
    "name": "Ultimate Minimal  Self-Draining Bathroom Vanity",
    "price": 37760,
    "category": "home",
    "image": "images/H-117.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 472,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 472
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-118",
    "name": "Modular Desk Organizer & Tool Tower",
    "price": 38720,
    "category": "home",
    "image": "images/H-118.webp",
    "creator": "seby3d",
    "weightGrams": 484,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 484
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-119",
    "name": "Desk Paper Organizer - Letter+A4 / A5 / 12x12",
    "price": 45350,
    "category": "home",
    "image": "images/H-119.webp",
    "creator": "godrm-3po",
    "weightGrams": 907,
    "profileName": "A4/LETTER 5F portrait V2",
    "profilePlates": 12,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 907
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.2
  },
  {
    "sku": "H-120",
    "name": "Mini School Locker – 3D Printed Desk Organizer",
    "price": 44640,
    "category": "home",
    "image": "images/H-120.webp",
    "creator": "DUDKA",
    "weightGrams": 558,
    "profileName": "2 color 0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 551
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-121",
    "name": "Kitchen Organizer with Cloth Holder (Sink Rack)",
    "price": 13440,
    "category": "home",
    "image": "images/H-121.webp",
    "creator": "Tomik s Cuprou",
    "weightGrams": 168,
    "profileName": "Default Design",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 168
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-122",
    "name": "Kumiko Desk Organizer",
    "price": 10960,
    "category": "home",
    "image": "images/H-122.webp",
    "creator": "jorm",
    "weightGrams": 137,
    "profileName": "Body",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 137
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-123",
    "name": "Shoe Organizer With Pull Tab.",
    "price": 8320,
    "category": "home",
    "image": "images/H-123.webp",
    "creator": "MeasureOnce",
    "weightGrams": 104,
    "profileName": "P1 X1 A1 Grooves added",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 104
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-124",
    "name": "Modern Ribbed Bathroom Organizer, Make- Up Cup",
    "price": 18480,
    "category": "home",
    "image": "images/H-124.webp",
    "creator": "Deltaprints",
    "weightGrams": 231,
    "profileName": "0.24mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 231
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-125",
    "name": "Under-Shelf Organizer - Small Version",
    "price": 12240,
    "category": "home",
    "image": "images/H-125.webp",
    "creator": "dan_cz",
    "weightGrams": 153,
    "profileName": "25mm Version Open, Under-Shelf Organizer-Small",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 153
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-126",
    "name": "Sink Organizer with Cloth Holder (Kitchen Rack)",
    "price": 16320,
    "category": "home",
    "image": "images/H-126.webp",
    "creator": "TriFusion",
    "weightGrams": 204,
    "profileName": "Gitter 0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 204
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-127",
    "name": "Spinning Desk Organizer",
    "price": 29600,
    "category": "home",
    "image": "images/H-127.webp",
    "creator": "KL Worx",
    "weightGrams": 370,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 294
      },
      {
        "material": "PLA",
        "grams": 76
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-128",
    "name": "Modular Stackable Corner Storage Ventilated",
    "price": 30160,
    "category": "home",
    "image": "images/H-128.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 377,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 377
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-129",
    "name": "Poly-Desk Organizer",
    "price": 37600,
    "category": "home",
    "image": "images/H-129.webp",
    "creator": "3D Paint Lab",
    "weightGrams": 752,
    "profileName": "Poly-Desk Organizer",
    "profilePlates": 6,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 203
      },
      {
        "material": "PLA",
        "grams": 230
      },
      {
        "material": "PLA",
        "grams": 319
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.2
  },
  {
    "sku": "H-130",
    "name": "Kitchen Utensil Organizer",
    "price": 13920,
    "category": "home",
    "image": "images/H-130.webp",
    "creator": "ARTICAT Realm",
    "weightGrams": 174,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 174
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-131",
    "name": "Stackable Shelf Organizer",
    "price": 3600,
    "category": "home",
    "image": "images/H-131.webp",
    "creator": "LinkDesigns",
    "weightGrams": 45,
    "profileName": "Standard Tray",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 45
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-132",
    "name": "Modern Bathroom Caddy Organizer",
    "price": 22720,
    "category": "home",
    "image": "images/H-132.webp",
    "creator": "PDFYYC",
    "weightGrams": 284,
    "profileName": "ams color change 0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 122
      },
      {
        "material": "PLA",
        "grams": 162
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-133",
    "name": "Stackabowls",
    "price": 20560,
    "category": "home",
    "image": "images/H-133.webp",
    "creator": "TeamGraphika",
    "weightGrams": 257,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 257
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-134",
    "name": "Rotatable Makeup & Storage Organizer",
    "price": 29520,
    "category": "home",
    "image": "images/H-134.webp",
    "creator": "eatrix",
    "weightGrams": 369,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 222
      },
      {
        "material": "PLA",
        "grams": 147
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-135",
    "name": "Ribbed Design Office Organizer",
    "price": 10000,
    "category": "home",
    "image": "images/H-135.webp",
    "creator": "Deltaprints",
    "weightGrams": 125,
    "profileName": "0.28mm layer, 2 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 125
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-136",
    "name": "Cable Organizer - One-Sided Winding",
    "price": 7840,
    "category": "home",
    "image": "images/H-136.webp",
    "creator": "Matthew Ghost",
    "weightGrams": 98,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 98
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-137",
    "name": "Desk Organizer",
    "price": 6400,
    "category": "home",
    "image": "images/H-137.webp",
    "creator": "obandovic",
    "weightGrams": 80,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 80
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-138",
    "name": "Kumiko Design Desk Organizer",
    "price": 38240,
    "category": "home",
    "image": "images/H-138.webp",
    "creator": "KL Worx",
    "weightGrams": 478,
    "profileName": "0.2mm layer, 3 walls, 10% infill",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 117
      },
      {
        "material": "PLA",
        "grams": 361
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-139",
    "name": "Modular Corner Organizer  Bathroom  Kitchen Office",
    "price": 18000,
    "category": "home",
    "image": "images/H-139.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 225,
    "profileName": "With stacking pin",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 225
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-140",
    "name": "Modular Desk Organizer System|MagSafe Phone Stand",
    "price": 24720,
    "category": "home",
    "image": "images/H-140.webp",
    "creator": "Meyui",
    "weightGrams": 309,
    "profileName": "Desk Organizer (Extended Set)",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 309
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-141",
    "name": "Modular Belt Organizer - Versatile Belt Storage",
    "price": 6880,
    "category": "home",
    "image": "images/H-141.webp",
    "creator": "7CUTS",
    "weightGrams": 86,
    "profileName": "Belt Organizer Holder",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 86
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-142",
    "name": "360-Degree Rotating Jewelry Storage",
    "price": 13280,
    "category": "home",
    "image": "images/H-142.webp",
    "creator": "Anton",
    "weightGrams": 166,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 166
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-143",
    "name": "Biscuit Cable Organizer",
    "price": 2080,
    "category": "home",
    "image": "images/H-143.webp",
    "creator": "neilvfx",
    "weightGrams": 26,
    "profileName": "Large_Biscuit",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-144",
    "name": "Aesthetic Quilted Desk Organizer Brush Holder",
    "price": 8080,
    "category": "home",
    "image": "images/H-144.webp",
    "creator": "TheHexArtist",
    "weightGrams": 101,
    "profileName": "0.16mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 101
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-145",
    "name": "Cable Organizer",
    "price": 35280,
    "category": "home",
    "image": "images/H-145.webp",
    "creator": "Adam",
    "weightGrams": 441,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 6,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 441
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-146",
    "name": "Ergonomic Cable Organizer",
    "price": 3680,
    "category": "home",
    "image": "images/H-146.webp",
    "creator": "Matthew Ghost",
    "weightGrams": 46,
    "profileName": "0.2mm layer, 3 walls, 25% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 36
      },
      {
        "material": "PLA",
        "grams": 10
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-147",
    "name": "EDC organizer",
    "price": 14800,
    "category": "home",
    "image": "images/H-147.webp",
    "creator": "Mesmar",
    "weightGrams": 185,
    "profileName": "original",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 185
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-148",
    "name": "Minimalist Bathroom Carry-All Organizer",
    "price": 37200,
    "category": "home",
    "image": "images/H-148.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 465,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 465
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-149",
    "name": "STORA · Stackable Organizer",
    "price": 7520,
    "category": "home",
    "image": "images/H-149.webp",
    "creator": "M3D",
    "weightGrams": 94,
    "profileName": "0.24mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 94
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "H-150",
    "name": "Key / jewelry organizer tree",
    "price": 7200,
    "category": "home",
    "image": "images/H-150.webp",
    "creator": "pozsar",
    "weightGrams": 90,
    "profileName": "Tree with tray",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 90
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-101",
    "name": "My 10 star fidget design",
    "price": 6800,
    "category": "kids",
    "image": "images/B-101.jpg",
    "creator": "BigDeX",
    "weightGrams": 85,
    "profileName": "0.24mm layer, 1 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 85
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 100
  },
  {
    "sku": "B-102",
    "name": "Twisted Ball Fidget - Two Sizes",
    "price": 9440,
    "category": "kids",
    "image": "images/B-102.webp",
    "creator": "Jasa Designs",
    "weightGrams": 118,
    "profileName": "0.2mm, 2 walls, 0% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 118
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 101
  },
  {
    "sku": "B-103",
    "name": "Amazing star fidget**FREE COMERICIAL LICENCE**",
    "price": 4640,
    "category": "kids",
    "image": "images/B-103.webp",
    "creator": "Big-D-SyneS",
    "weightGrams": 58,
    "profileName": "MINI FIDGET 2.5 HOUR PRINT",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 58
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 102
  },
  {
    "sku": "B-104",
    "name": "Flexible Mesh Fidget Pad (Print-in-Place)",
    "price": 15280,
    "category": "kids",
    "image": "images/B-104.webp",
    "creator": "Creonic Lab",
    "weightGrams": 191,
    "profileName": "Extra Big Size - 320x320x3.06 mm",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 191
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-105",
    "name": "star dancer fidget twist",
    "price": 7040,
    "category": "kids",
    "image": "images/B-105.webp",
    "creator": "Swampy3d",
    "weightGrams": 88,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 88
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-106",
    "name": "Fidget Click Flick Swoosh - Print in place!",
    "price": 1200,
    "category": "kids",
    "image": "images/B-106.webp",
    "creator": "Louis",
    "weightGrams": 15,
    "profileName": "Loose fit - 0.2mm layer, 3 walls, 0% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 103
  },
  {
    "sku": "B-107",
    "name": "Hexagon Twist Fidget - with handle",
    "price": 3760,
    "category": "kids",
    "image": "images/B-107.webp",
    "creator": "DORONS WORLD",
    "weightGrams": 47,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 104
  },
  {
    "sku": "B-108",
    "name": "Ultimate Oval Triple Spin Fidget (Print in Place)",
    "price": 1000,
    "category": "kids",
    "image": "images/B-108.webp",
    "creator": "AbyssalCactus",
    "weightGrams": 10,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 10
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 105
  },
  {
    "sku": "B-109",
    "name": "Hexagon Twist Fidget (V2)",
    "price": 18560,
    "category": "kids",
    "image": "images/B-109.jpg",
    "creator": "Zammer 3D",
    "weightGrams": 232,
    "profileName": "Large, Medium, Small and Keychain",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 232
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-110",
    "name": "Small Spiral Fidget",
    "price": 1000,
    "category": "kids",
    "image": "images/B-110.webp",
    "creator": "Dominator Ivy",
    "weightGrams": 4,
    "profileName": "Separate Plates(Multi Color!!)",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 106
  },
  {
    "sku": "B-111",
    "name": "Flexi Fabric Fidget (Print in Place!)",
    "price": 6080,
    "category": "kids",
    "image": "images/B-111.webp",
    "creator": "PotaterSoupModels",
    "weightGrams": 76,
    "profileName": "A1 Mini, Print In Place 0.2mm layer, 5 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 76
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 107
  },
  {
    "sku": "B-112",
    "name": "Curved Star Fidget",
    "price": 6960,
    "category": "kids",
    "image": "images/B-112.jpg",
    "creator": "BigDeX",
    "weightGrams": 87,
    "profileName": "0.24mm layer, 1 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 79
      },
      {
        "material": "PLA",
        "grams": 8
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-113",
    "name": "Star Fidget with Handle",
    "price": 12000,
    "category": "kids",
    "image": "images/B-113.webp",
    "creator": "Jasa Designs",
    "weightGrams": 150,
    "profileName": "0.28mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 150
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-114",
    "name": "Satisfying Clicker Ball",
    "price": 3680,
    "category": "kids",
    "image": "images/B-114.webp",
    "creator": "Gibbs3408",
    "weightGrams": 46,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 46
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 108
  },
  {
    "sku": "B-115",
    "name": "COOL FIDGET",
    "price": 1200,
    "category": "kids",
    "image": "images/B-115.webp",
    "creator": "MGTOYSSS",
    "weightGrams": 15,
    "profileName": "Dual-color version B",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 8
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-116",
    "name": "Nytrax - 3 in 1 EDC Fidget Slide Toy CyberPunk",
    "price": 1360,
    "category": "kids",
    "image": "images/B-116.webp",
    "creator": "3D Gear Solution",
    "weightGrams": 17,
    "profileName": "Nytrax - Single Color",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 17
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 109
  },
  {
    "sku": "B-117",
    "name": "Multi Fidget Click Flip Swoosh",
    "price": 1600,
    "category": "kids",
    "image": "images/B-117.webp",
    "creator": "Louis",
    "weightGrams": 20,
    "profileName": "Optimised profile",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-118",
    "name": "Expanding Star Fidget",
    "price": 3040,
    "category": "kids",
    "image": "images/B-118.webp",
    "creator": "3Dealin",
    "weightGrams": 38,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 38
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-119",
    "name": "Easy to print Fidget Free to sell",
    "price": 1000,
    "category": "kids",
    "image": "images/B-119.webp",
    "creator": "LangHjornArt",
    "weightGrams": 9,
    "profileName": "0.2mm layer, 6 walls, 25% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 9
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 110
  },
  {
    "sku": "B-120",
    "name": "Joy Fidget V2.0",
    "price": 1840,
    "category": "kids",
    "image": "images/B-120.webp",
    "creator": "TomoDesigns",
    "weightGrams": 23,
    "profileName": "Joy Fidget",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 111
  },
  {
    "sku": "B-121",
    "name": "MEGA Hex Spiral Fidget Toy - Print in Place",
    "price": 4800,
    "category": "kids",
    "image": "images/B-121.jpg",
    "creator": "Etec - Design",
    "weightGrams": 60,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 60
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-122",
    "name": "Fidget Pop Square",
    "price": 2320,
    "category": "kids",
    "image": "images/B-122.jpg",
    "creator": "DWdesigns",
    "weightGrams": 29,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 29
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 112
  },
  {
    "sku": "B-123",
    "name": "Kinetic fidget",
    "price": 3520,
    "category": "kids",
    "image": "images/B-123.jpg",
    "creator": "BogdanS",
    "weightGrams": 44,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 17
      },
      {
        "material": "PLA",
        "grams": 27
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-124",
    "name": "Alpha Fidget- 5 in 1 Print in Place Fidget Toy",
    "price": 2000,
    "category": "kids",
    "image": "images/B-124.webp",
    "creator": "Bad Astronaut",
    "weightGrams": 25,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 25
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 113
  },
  {
    "sku": "B-125",
    "name": "Fidget Hexagon Twist",
    "price": 1600,
    "category": "kids",
    "image": "images/B-125.jpg",
    "creator": "Zammer 3D",
    "weightGrams": 20,
    "profileName": "Small Fidget",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 114
  },
  {
    "sku": "B-126",
    "name": "Cheese fidget clicker MX switch keychain - 5 grams",
    "price": 1000,
    "category": "kids",
    "image": "images/B-126.webp",
    "creator": "Eris",
    "weightGrams": 5,
    "profileName": "print both together-0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-127",
    "name": "Fidget Wobble8 - two sizes",
    "price": 2480,
    "category": "kids",
    "image": "images/B-127.jpg",
    "creator": "haptic3D",
    "weightGrams": 31,
    "profileName": "large version",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 31
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-128",
    "name": "Fidget Click Keychain - Print in Place - 15 min",
    "price": 1000,
    "category": "kids",
    "image": "images/B-128.webp",
    "creator": "Louis",
    "weightGrams": 5,
    "profileName": "Normal tolerance",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 115
  },
  {
    "sku": "B-129",
    "name": "Fidget Flick Boba Tea - Print in place!",
    "price": 1000,
    "category": "kids",
    "image": "images/B-129.webp",
    "creator": "CYBZoo3d",
    "weightGrams": 12,
    "profileName": "0.2mm layer, 3 walls, 30% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 11
      },
      {
        "material": "PLA",
        "grams": 1
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 116
  },
  {
    "sku": "B-130",
    "name": "Flexible Squishy Fidget Loop",
    "price": 1440,
    "category": "kids",
    "image": "images/B-130.webp",
    "creator": "fifindr",
    "weightGrams": 18,
    "profileName": "Squishy Fidget Loop - 0.2mm layer, 1 walls, 0% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-131",
    "name": "twist fidget",
    "price": 2560,
    "category": "kids",
    "image": "images/B-131.webp",
    "creator": "ENIQUE3D",
    "weightGrams": 32,
    "profileName": "same twist but with 100% infill on the nut making it heavier",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 32
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-132",
    "name": "Fidget Blanket",
    "price": 4800,
    "category": "kids",
    "image": "images/B-132.webp",
    "creator": "Pooch's 3D Creations",
    "weightGrams": 60,
    "profileName": "0.16mm layer, 3 walls, 5% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 60
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-133",
    "name": "Spin Pop - fidget toys",
    "price": 1840,
    "category": "kids",
    "image": "images/B-133.webp",
    "creator": "Zeno's",
    "weightGrams": 23,
    "profileName": "0.16mm layer, 2 walls, 22% infill",
    "profilePlates": 11,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-134",
    "name": "Transforming Fidget Ball Micro",
    "price": 8320,
    "category": "kids",
    "image": "images/B-134.webp",
    "creator": "macjfll",
    "weightGrams": 104,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 104
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 117
  },
  {
    "sku": "B-135",
    "name": "Multi Fidget",
    "price": 4320,
    "category": "kids",
    "image": "images/B-135.webp",
    "creator": "Epiq3D",
    "weightGrams": 54,
    "profileName": "Multi color - Optimized for Quality",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 21
      },
      {
        "material": "PLA",
        "grams": 33
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-136",
    "name": "Fidget Click Clack Swoosh! Print in Place - 32 min",
    "price": 1200,
    "category": "kids",
    "image": "images/B-136.webp",
    "creator": "Louis",
    "weightGrams": 15,
    "profileName": "Optimized pofile, loose tolerances",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-137",
    "name": "Click Click Thumb Spin Fidget",
    "price": 1000,
    "category": "kids",
    "image": "images/B-137.webp",
    "creator": "Eternity Labs",
    "weightGrams": 12,
    "profileName": "Single Colour",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 12
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-138",
    "name": "Fidget Toy",
    "price": 1440,
    "category": "kids",
    "image": "images/B-138.webp",
    "creator": "Yoshman1984",
    "weightGrams": 18,
    "profileName": "Variant 1, small base",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 12
      },
      {
        "material": "PLA",
        "grams": 6
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-139",
    "name": "Fidget Toy Spirale",
    "price": 2720,
    "category": "kids",
    "image": "images/B-139.webp",
    "creator": "PROTO-X",
    "weightGrams": 34,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 34
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-140",
    "name": "Pocket Link Fidget - Print in Place",
    "price": 1000,
    "category": "kids",
    "image": "images/B-140.jpg",
    "creator": "VirtuBOB",
    "weightGrams": 7,
    "profileName": "Original Size",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-141",
    "name": "spiky sensory fidget",
    "price": 2560,
    "category": "kids",
    "image": "images/B-141.webp",
    "creator": "Luke Edwin",
    "weightGrams": 32,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 32
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-142",
    "name": "Fidget slider",
    "price": 4800,
    "category": "kids",
    "image": "images/B-142.png",
    "creator": "BeardedAngel",
    "weightGrams": 60,
    "profileName": "2 Color, With Pause, 0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26
      },
      {
        "material": "PLA",
        "grams": 34
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-143",
    "name": "Transforming Fidget Ball Mini",
    "price": 27360,
    "category": "kids",
    "image": "images/B-143.webp",
    "creator": "macjfll",
    "weightGrams": 342,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 342
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-144",
    "name": "Infinity Fidget - Print in Place",
    "price": 1440,
    "category": "kids",
    "image": "images/B-144.webp",
    "creator": "Tremmannaik",
    "weightGrams": 18,
    "profileName": "The Original - Single color",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 118
  },
  {
    "sku": "B-145",
    "name": "IRIS FIDGET - PRINT IN PLACE - 3D FIDGET",
    "price": 1840,
    "category": "kids",
    "image": "images/B-145.webp",
    "creator": "Louis",
    "weightGrams": 23,
    "profileName": "Optimized for fun :)",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-146",
    "name": "small pocket sized fidget",
    "price": 4720,
    "category": "kids",
    "image": "images/B-146.webp",
    "creator": "rosedoesthings",
    "weightGrams": 59,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 59
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-147",
    "name": "Fidget Iris - 8 Sliders Snapfit",
    "price": 2400,
    "category": "kids",
    "image": "images/B-147.jpg",
    "creator": "Kaburuk",
    "weightGrams": 30,
    "profileName": "2025 Revision - 2 Color AMS Profile",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 22
      },
      {
        "material": "PLA",
        "grams": 8
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-148",
    "name": "Passthrough Ice cream fidget",
    "price": 3200,
    "category": "kids",
    "image": "images/B-148.webp",
    "creator": "Jalu",
    "weightGrams": 40,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 19
      },
      {
        "material": "PLA",
        "grams": 21
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5,
    "giftEligible": true,
    "giftOrder": 119
  },
  {
    "sku": "B-149",
    "name": "Fiddle Fidget",
    "price": 3200,
    "category": "kids",
    "image": "images/B-149.jpg",
    "creator": "haptic3D",
    "weightGrams": 40,
    "profileName": "large version",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "B-150",
    "name": "Star shaped Fidget (with handle)",
    "price": 4160,
    "category": "kids",
    "image": "images/B-150.jpg",
    "creator": "Epiq3D",
    "weightGrams": 52,
    "profileName": "80% size - Optimized for quality",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4
      },
      {
        "material": "PLA",
        "grams": 48
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-101",
    "name": "Christmas Tree Snowflake Ornament Set",
    "price": 4080,
    "category": "gifts",
    "image": "images/J-101.webp",
    "creator": "Denka",
    "weightGrams": 51,
    "profileName": "0.2mm layer, 2 walls, 30% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 51
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-102",
    "name": "Customizable Christmas Ornaments",
    "price": 9280,
    "category": "gifts",
    "image": "images/J-102.webp",
    "creator": "Levnur",
    "weightGrams": 116,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 114
      },
      {
        "material": "PLA",
        "grams": 2
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-103",
    "name": "Puffy Coquette Bow Christmas Ornament",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-103.webp",
    "creator": "TheHexArtist",
    "weightGrams": 24,
    "profileName": "0.2mm layer, 2 walls, 3% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-104",
    "name": "Christmas Ornaments Line Art",
    "price": 2400,
    "category": "gifts",
    "image": "images/J-104.webp",
    "creator": "SliQ",
    "weightGrams": 30,
    "profileName": "Christmas Ornaments Line Art",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 16
      },
      {
        "material": "PLA",
        "grams": 14
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-105",
    "name": "Rudolph Ornament - Perfect for Christmas - Deer",
    "price": 1840,
    "category": "gifts",
    "image": "images/J-105.webp",
    "creator": "BotanyChic",
    "weightGrams": 23,
    "profileName": "80mm height - 1 color",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-106",
    "name": "Modern Christmas ornaments  - baubles decoration",
    "price": 34300,
    "category": "gifts",
    "image": "images/J-106.webp",
    "creator": "LuckyDuck",
    "weightGrams": 686,
    "profileName": "0.16mm layer, 2 walls, 10% infill",
    "profilePlates": 10,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 686
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.2
  },
  {
    "sku": "J-107",
    "name": "Spiral Ornament | Minimal Material",
    "price": 2240,
    "category": "gifts",
    "image": "images/J-107.webp",
    "creator": "Bedan Designs",
    "weightGrams": 28,
    "profileName": "P2S/P1S|Structural Shell Tune|Lightweight|Add Suport",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 28
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-108",
    "name": "Organic Modern Christmas Collection",
    "price": 6640,
    "category": "gifts",
    "image": "images/J-108.webp",
    "creator": "DecoDejw",
    "weightGrams": 83,
    "profileName": "Christmas Figures (4 PLATES), 0.2mm layer",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 22
      },
      {
        "material": "PLA",
        "grams": 21
      },
      {
        "material": "PLA",
        "grams": 27
      },
      {
        "material": "PLA",
        "grams": 13
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-109",
    "name": "Christmas Gift Tag Christmas Ornament",
    "price": 1600,
    "category": "gifts",
    "image": "images/J-109.webp",
    "creator": "littleprintlove",
    "weightGrams": 20,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18
      },
      {
        "material": "PLA",
        "grams": 2
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-110",
    "name": "Fuzzy Christmas Ball - Hang or Stand",
    "price": 7360,
    "category": "gifts",
    "image": "images/J-110.webp",
    "creator": "LetHimPrint",
    "weightGrams": 92,
    "profileName": "Fuzzy Skin Christmas Ball // Hang & Stand",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 92
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-111",
    "name": "Nutcracker Decoration",
    "price": 7280,
    "category": "gifts",
    "image": "images/J-111.webp",
    "creator": "SabreDesign",
    "weightGrams": 91,
    "profileName": "Nutcracker Ribbed",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 91
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-112",
    "name": "Tealight Houses",
    "price": 29040,
    "category": "gifts",
    "image": "images/J-112.webp",
    "creator": "FörsterSepp",
    "weightGrams": 363,
    "profileName": "Klein",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 363
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-113",
    "name": "Atmospheric Christmas Figures",
    "price": 31760,
    "category": "gifts",
    "image": "images/J-113.webp",
    "creator": "Biťo1",
    "weightGrams": 397,
    "profileName": "Atmospheric Christmas Figures – LED Tea Light Holders",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 397
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-114",
    "name": "Mini Christmas Ornament Elegant Ribbed Design",
    "price": 1000,
    "category": "gifts",
    "image": "images/J-114.webp",
    "creator": "Cipriani 3Design Studio",
    "weightGrams": 4,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-115",
    "name": "Minimalist Nativity Scene-Minimalist Nativity Set",
    "price": 28160,
    "category": "gifts",
    "image": "images/J-115.webp",
    "creator": "Urban Mix Studio",
    "weightGrams": 352,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 73
      },
      {
        "material": "PLA",
        "grams": 173
      },
      {
        "material": "PLA",
        "grams": 106
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-116",
    "name": "Christmas Bow - Elegance that decorates!",
    "price": 1200,
    "category": "gifts",
    "image": "images/J-116.png",
    "creator": "3D Print Fusion Lab",
    "weightGrams": 15,
    "profileName": "0.2mm layer, 2 walls, 8% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-117",
    "name": "Merry Christmas with snowflake",
    "price": 3760,
    "category": "gifts",
    "image": "images/J-117.webp",
    "creator": "DreamsLab3D",
    "weightGrams": 47,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-118",
    "name": "Snowflakes for christmas tree decoration",
    "price": 2080,
    "category": "gifts",
    "image": "images/J-118.webp",
    "creator": "miglo",
    "weightGrams": 26,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-119",
    "name": "Christmas tree ornaments",
    "price": 2640,
    "category": "gifts",
    "image": "images/J-119.webp",
    "creator": "OrangeSs",
    "weightGrams": 33,
    "profileName": "A1 P1S P1P X1C",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 33
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-120",
    "name": "Crochet Christmas Reindeer – Cozy Holiday Decor",
    "price": 4240,
    "category": "gifts",
    "image": "images/J-120.webp",
    "creator": "LetHimPrint",
    "weightGrams": 53,
    "profileName": "Single Reindeer 125 mm – Crochet Xmas Reindeer",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 53
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-121",
    "name": "Knitted Christmas Bauble – Cable Knit Ornament",
    "price": 3360,
    "category": "gifts",
    "image": "images/J-121.webp",
    "creator": "vaclav.klich",
    "weightGrams": 42,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 42
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-122",
    "name": "Small Angel with Heart",
    "price": 2960,
    "category": "gifts",
    "image": "images/J-122.webp",
    "creator": "WorldOfLayers",
    "weightGrams": 37,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 37
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-123",
    "name": "Winter Reindeer Trio – Minimal Christmas Decor",
    "price": 1280,
    "category": "gifts",
    "image": "images/J-123.webp",
    "creator": "risi_enma",
    "weightGrams": 16,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 16
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-124",
    "name": "Majestic Christmas Deer Ornament & Decor Stand",
    "price": 3120,
    "category": "gifts",
    "image": "images/J-124.webp",
    "creator": "3D engineering & decoration",
    "weightGrams": 39,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 39
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-125",
    "name": "Mini Christmas Snowman Tea Light Ornament",
    "price": 7760,
    "category": "gifts",
    "image": "images/J-125.webp",
    "creator": "Maxx Design",
    "weightGrams": 97,
    "profileName": "Top Hat",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 49
      },
      {
        "material": "PLA",
        "grams": 12
      },
      {
        "material": "PLA",
        "grams": 10
      },
      {
        "material": "PLA",
        "grams": 26
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-126",
    "name": "Xmas reindeer christmas tree deco",
    "price": 7120,
    "category": "gifts",
    "image": "images/J-126.webp",
    "creator": "Tommy_druckt!",
    "weightGrams": 89,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 89
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-127",
    "name": "Christmas Reindeer",
    "price": 1680,
    "category": "gifts",
    "image": "images/J-127.webp",
    "creator": "SabreDesign",
    "weightGrams": 21,
    "profileName": "Reindeer 135 mm",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 21
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-128",
    "name": "Knitted Hanging Christmas Star – 3 Sizes",
    "price": 4560,
    "category": "gifts",
    "image": "images/J-128.webp",
    "creator": "LetHimPrint",
    "weightGrams": 57,
    "profileName": "Knitted Hanging Christmas Star – 3 Sizes",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 19
      },
      {
        "material": "PLA",
        "grams": 24
      },
      {
        "material": "PLA",
        "grams": 14
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-129",
    "name": "Knitted Reindeer Figurine – Cozy Christmas Decor",
    "price": 4960,
    "category": "gifts",
    "image": "images/J-129.webp",
    "creator": "Sculturissimo3D",
    "weightGrams": 62,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 62
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-130",
    "name": "Filigree Star Christmas Tree Topper",
    "price": 20560,
    "category": "gifts",
    "image": "images/J-130.webp",
    "creator": "Cosa_93",
    "weightGrams": 257,
    "profileName": "0.12mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 257
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-131",
    "name": "Christmas village bauble/ornament",
    "price": 1000,
    "category": "gifts",
    "image": "images/J-131.webp",
    "creator": "Wickieprints",
    "weightGrams": 9,
    "profileName": "0.08mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4
      },
      {
        "material": "PLA",
        "grams": 1
      },
      {
        "material": "PLA",
        "grams": 2
      },
      {
        "material": "PLA",
        "grams": 2
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-132",
    "name": "Cute minimalist Christmas reindeer decoration",
    "price": 3200,
    "category": "gifts",
    "image": "images/J-132.webp",
    "creator": "Deltaprints",
    "weightGrams": 40,
    "profileName": "0.16mm layer, 3 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-133",
    "name": "Inseparable Gnomes - No AMS",
    "price": 16000,
    "category": "gifts",
    "image": "images/J-133.webp",
    "creator": "Dano98",
    "weightGrams": 200,
    "profileName": "Original - 2 Gnomes",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 112
      },
      {
        "material": "PLA",
        "grams": 65
      },
      {
        "material": "PLA",
        "grams": 6
      },
      {
        "material": "PLA",
        "grams": 17
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-134",
    "name": "10 Christmas pendants – Easy decorations - NO AMS",
    "price": 2160,
    "category": "gifts",
    "image": "images/J-134.webp",
    "creator": "3dprimolayer",
    "weightGrams": 27,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 27
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-135",
    "name": "Weihnachtsschmuck",
    "price": 10480,
    "category": "gifts",
    "image": "images/J-135.webp",
    "creator": "Biťo1",
    "weightGrams": 131,
    "profileName": "Elegant Christmas Ornaments",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 131
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-136",
    "name": "Christmas Ball (editable)",
    "price": 1040,
    "category": "gifts",
    "image": "images/J-136.webp",
    "creator": "rauloko11500",
    "weightGrams": 13,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 6
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-137",
    "name": "Christmas Tree Ornament",
    "price": 1040,
    "category": "gifts",
    "image": "images/J-137.webp",
    "creator": "SabreDesign",
    "weightGrams": 13,
    "profileName": "Tree ornament",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 13
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-138",
    "name": "Christmas tree",
    "price": 3680,
    "category": "gifts",
    "image": "images/J-138.webp",
    "creator": "m3nDes.creations",
    "weightGrams": 46,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 46
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-139",
    "name": "Christmas nativity scene",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-139.webp",
    "creator": "DQM1N1K",
    "weightGrams": 24,
    "profileName": "Nativity scene",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-140",
    "name": "Cozy Knit Snowman – Knitted Winter Decoration",
    "price": 19360,
    "category": "gifts",
    "image": "images/J-140.webp",
    "creator": "Jone 3D Design",
    "weightGrams": 242,
    "profileName": "0.2mm layer, 2 walls, 5% infill, AMS",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 148
      },
      {
        "material": "PLA",
        "grams": 75
      },
      {
        "material": "PLA",
        "grams": 12
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-141",
    "name": "Knitted Fir Tree Tealight Holder",
    "price": 3760,
    "category": "gifts",
    "image": "images/J-141.webp",
    "creator": "The Filming Tinkerer",
    "weightGrams": 47,
    "profileName": "0.16mm layer, 1 walls, 10% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-142",
    "name": "Little Christmas Deer",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-142.webp",
    "creator": "jdormer9",
    "weightGrams": 24,
    "profileName": "Mix (14x) 0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-143",
    "name": "Christmas Tree Minimalistic Decor No Supports Art",
    "price": 3200,
    "category": "gifts",
    "image": "images/J-143.webp",
    "creator": "NowCraft3D",
    "weightGrams": 40,
    "profileName": "with star no supports 0.2mm layer, 2 walls, 5% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-144",
    "name": "Personalized Christmas Ornaments",
    "price": 4640,
    "category": "gifts",
    "image": "images/J-144.webp",
    "creator": "KurLDesigns",
    "weightGrams": 58,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 43
      },
      {
        "material": "PLA",
        "grams": 8
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-145",
    "name": "Riesenrad Snowflake",
    "price": 38160,
    "category": "gifts",
    "image": "images/J-145.webp",
    "creator": "A-E-D 3D-DRUCK",
    "weightGrams": 477,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 11,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5
      },
      {
        "material": "PLA",
        "grams": 217
      },
      {
        "material": "PLA",
        "grams": 175
      },
      {
        "material": "PLA",
        "grams": 80
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-146",
    "name": "ornaments • xmas 2025",
    "price": 12960,
    "category": "gifts",
    "image": "images/J-146.webp",
    "creator": "h3li0",
    "weightGrams": 162,
    "profileName": "ornaments • 4 design options",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 14
      },
      {
        "material": "PLA",
        "grams": 74
      },
      {
        "material": "PLA",
        "grams": 37
      },
      {
        "material": "PLA",
        "grams": 37
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-147",
    "name": "Christmas Tree Bowls (Stackable)",
    "price": 11200,
    "category": "gifts",
    "image": "images/J-147.webp",
    "creator": "ML Designe",
    "weightGrams": 140,
    "profileName": "For A1/P1/X1",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 70
      },
      {
        "material": "PLA",
        "grams": 70
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-148",
    "name": "Japandi Christmas Ball",
    "price": 6080,
    "category": "gifts",
    "image": "images/J-148.webp",
    "creator": "SabreDesign",
    "weightGrams": 76,
    "profileName": "Japandi Ball 70 mm",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 49
      },
      {
        "material": "PLA",
        "grams": 27
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-149",
    "name": "Tea light house",
    "price": 20160,
    "category": "gifts",
    "image": "images/J-149.webp",
    "creator": "GulagHias",
    "weightGrams": 252,
    "profileName": "Tealight Village several plates",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 252
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-150",
    "name": "Funny Christmas tree",
    "price": 11120,
    "category": "gifts",
    "image": "images/J-150.webp",
    "creator": "novYTerra🌿",
    "weightGrams": 139,
    "profileName": "A1 - 0.2mm layer, 2 walls, 4% infill",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20
      },
      {
        "material": "PLA",
        "grams": 17
      },
      {
        "material": "PLA",
        "grams": 98
      },
      {
        "material": "PLA",
        "grams": 4
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-151",
    "name": "Elegant Christmas Bauble",
    "price": 1360,
    "category": "gifts",
    "image": "images/J-151.webp",
    "creator": "Hockey Dad",
    "weightGrams": 17,
    "profileName": "Bauble 0.08mm layer, 2 walls, 100% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 3
      },
      {
        "material": "PLA",
        "grams": 5
      },
      {
        "material": "PLA",
        "grams": 9
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-152",
    "name": "Collection 1 – 5 Light Up Christmas Baubles",
    "price": 10320,
    "category": "gifts",
    "image": "images/J-152.webp",
    "creator": "Hatch_3D",
    "weightGrams": 129,
    "profileName": "Child decorating the tree",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 129
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-153",
    "name": "Meshed Christmas Ornaments - Tea Light Compatible",
    "price": 5440,
    "category": "gifts",
    "image": "images/J-153.webp",
    "creator": "Maxx Design",
    "weightGrams": 68,
    "profileName": "Multi Color with AMS",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 42
      },
      {
        "material": "PLA",
        "grams": 2
      },
      {
        "material": "PLA",
        "grams": 24
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-154",
    "name": "Tealight houses with winter landscape",
    "price": 33300,
    "category": "gifts",
    "image": "images/J-154.webp",
    "creator": "FörsterSepp",
    "weightGrams": 666,
    "profileName": "Standard",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 666
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.2
  },
  {
    "sku": "J-155",
    "name": "Christmas Bauble / Ornament / Decoration",
    "price": 1120,
    "category": "gifts",
    "image": "images/J-155.webp",
    "creator": "Sebo3D",
    "weightGrams": 14,
    "profileName": "0.08mm layer, 2 walls, 100% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4
      },
      {
        "material": "PLA",
        "grams": 10
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-156",
    "name": "Wreath-Shaped Photo Frame Ornament  Snap-Fit",
    "price": 1000,
    "category": "gifts",
    "image": "images/J-156.webp",
    "creator": "Craftastic",
    "weightGrams": 7,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-157",
    "name": "Christmas Angels ornaments set",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-157.webp",
    "creator": "Goomol DIY",
    "weightGrams": 24,
    "profileName": "Angel girl ornament 0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02",
    "margin": 0.5
  },
  {
    "sku": "J-158",
    "name": "Snurrande bajsemoji",
    "originalName": "Twisty Turd - Poop Emoji",
    "price": 7200,
    "category": "gifts",
    "image": "images/J-158.jpg",
    "creator": "Toddy's Trinkets",
    "weightGrams": 90,
    "profileName": "1 Color, 0.2mm, 2 Ws, 7.5% Inf",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 90
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 0
  },
  {
    "sku": "J-159",
    "name": "Minibajs – liten skämtfigur",
    "originalName": "Mini Poop",
    "price": 1000,
    "category": "gifts",
    "image": "images/J-159.webp",
    "creator": "Velus",
    "weightGrams": 1,
    "profileName": "One Color-NO AMS",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 1
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 1
  },
  {
    "sku": "J-160",
    "name": "Bajskorvar – skämtpaket",
    "originalName": "Fake Poop Pack",
    "price": 4640,
    "category": "gifts",
    "image": "images/J-160.webp",
    "creator": "BODY3D",
    "weightGrams": 58,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 58
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 2
  },
  {
    "sku": "J-161",
    "name": "Leende bajsemoji – nyckelring",
    "originalName": "Smiling poop - 1.5g with key-chain. Fast print!",
    "price": 1000,
    "category": "gifts",
    "image": "images/J-161.webp",
    "creator": "E.T prints",
    "weightGrams": 2,
    "profileName": "Small - 1.5 g",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 2
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 3
  },
  {
    "sku": "J-162",
    "name": "Smiley och Smile – nyckelringsset",
    "originalName": "Smile Keychain – Smiley Pendant",
    "price": 2880,
    "category": "gifts",
    "image": "images/J-162.webp",
    "creator": "Hey it‘s Sara",
    "weightGrams": 36,
    "profileName": "AMS required",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26
      },
      {
        "material": "PLA",
        "grams": 10
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 4
  },
  {
    "sku": "J-163",
    "name": "Leende emoji – dekoration och nyckelring",
    "originalName": "Smiling emoji - decor - keychain",
    "price": 16720,
    "category": "gifts",
    "image": "images/J-163.webp",
    "creator": "Reybrond",
    "weightGrams": 209,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20
      },
      {
        "material": "PLA",
        "grams": 113
      },
      {
        "material": "PLA",
        "grams": 56
      },
      {
        "material": "PLA",
        "grams": 20
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 5
  },
  {
    "sku": "J-164",
    "name": "Ledbar anka – profilpaket",
    "originalName": "Articulated Duck - Strong Joints",
    "price": 22800,
    "category": "gifts",
    "image": "images/J-164.webp",
    "creator": "Art Design. 3D",
    "weightGrams": 285,
    "profileName": "Duck - All in One",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 171
      },
      {
        "material": "PLA",
        "grams": 52
      },
      {
        "material": "PLA",
        "grams": 26
      },
      {
        "material": "PLA",
        "grams": 36
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 6
  },
  {
    "sku": "J-165",
    "name": "Liten ledbar anka",
    "originalName": "Tiny Duck - Articulated",
    "price": 2960,
    "category": "gifts",
    "image": "images/J-165.webp",
    "creator": "Bodoke",
    "weightGrams": 37,
    "profileName": "Multicolor Print Profile 0.20mm",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26
      },
      {
        "material": "PLA",
        "grams": 7
      },
      {
        "material": "PLA",
        "grams": 4
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 7
  },
  {
    "sku": "J-166",
    "name": "Muskelanka – rolig figur",
    "originalName": "Muscular Rubber Duck funny toy",
    "price": 3600,
    "category": "gifts",
    "image": "images/J-166.webp",
    "creator": "FabLab_ee",
    "weightGrams": 45,
    "profileName": "SingleColor_111mm_Duck_0.12mm",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 45
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 8
  },
  {
    "sku": "J-167",
    "name": "Arg minianka – figur och nyckelring",
    "originalName": "Mini Angry Standing Duck - Desk Buddy & Keychain",
    "price": 6080,
    "category": "gifts",
    "image": "images/J-167.webp",
    "creator": "3DM",
    "weightGrams": 76,
    "profileName": "Mini Standing Duck-AMS",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 42
      },
      {
        "material": "PLA",
        "grams": 27
      },
      {
        "material": "PLA",
        "grams": 7
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-04",
    "margin": 0.5,
    "giftOrder": 9
  }
];
if(typeof module!=="undefined") module.exports=PRODUCTS;
