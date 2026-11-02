/* Vikt och pris avser en hel uppsättning av den länkade utskriftsprofilen. */
const PRODUCTS = [
  {
    "sku": "H-101",
    "name": "Cosmetic organizer, Make-up organizer",
    "price": 43600,
    "category": "home",
    "image": "images/H-101.webp",
    "source": "https://makerworld.com/en/models/2195350-cosmetic-organizer-make-up-organizer",
    "creator": "FörsterSepp",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US1bbef34529507d/design/2026-01-03_fe7e04c8447c08.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 545.0,
    "profileName": "Cosmetic Organizer",
    "profileUrl": "https://makerworld.com/en/models/2195350-cosmetic-organizer-make-up-organizer#profileId-2384050",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 176.0
      },
      {
        "material": "PLA",
        "grams": 369.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-102",
    "name": "Office Desk Organizer",
    "price": 15920,
    "category": "home",
    "image": "images/H-102.webp",
    "source": "https://makerworld.com/en/models/1313992-office-desk-organizer",
    "creator": "ARTICAT Realm",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US899d9c028786fd/design/c8ca2f592564a2d9.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 199.0,
    "profileName": "0.28mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/1313992-office-desk-organizer#profileId-1348757",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 199.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-103",
    "name": "The Ultimate Parametric Drawer Organizer System",
    "price": 5040,
    "category": "home",
    "image": "images/H-103.webp",
    "source": "https://makerworld.com/en/models/2098816-the-ultimate-parametric-drawer-organizer-system",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf9ebd309e13c0a/design/2025-12-10_b6d0140dc707d8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 63.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2098816-the-ultimate-parametric-drawer-organizer-system#profileId-2269540",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 63.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-104",
    "name": "Modern Japandi Desk Organizer (2 versions, NO-AMS)",
    "price": 24080,
    "category": "home",
    "image": "images/H-104.webp",
    "source": "https://makerworld.com/en/models/1566380-modern-japandi-desk-organizer-2-versions-no-ams",
    "creator": "S.Corp.",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa387803e723f6d/design/2025-07-01_055d739937e1a.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 301.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1566380-modern-japandi-desk-organizer-2-versions-no-ams#profileId-1646733",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 301.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-105",
    "name": "Beauty Cosmetic Modular Organizer",
    "price": 21200,
    "category": "home",
    "image": "images/H-105.webp",
    "source": "https://makerworld.com/en/models/2417665-beauty-cosmetic-modular-organizer",
    "creator": "bigzahry",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USbc04577db92f20/design/e1512729e30c24af.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 265.0,
    "profileName": "Beauty Organizer",
    "profileUrl": "https://makerworld.com/en/models/2417665-beauty-cosmetic-modular-organizer#profileId-2651205",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 265.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-106",
    "name": "Module ⬝ Desk Organizer",
    "price": 166720,
    "category": "home",
    "image": "images/H-106.webp",
    "source": "https://makerworld.com/en/models/3043752-module-desk-organizer",
    "creator": "St3rn Design",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US78694c9bd4fb8/design/0310e40c0008db19.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 2084.0,
    "profileName": "Module ⬝ Desk Organizer",
    "profileUrl": "https://makerworld.com/en/models/3043752-module-desk-organizer#profileId-3423024",
    "profilePlates": 17,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 243.0
      },
      {
        "material": "PLA",
        "grams": 1841.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-107",
    "name": "Office Desk Organizer with Integrated Phone Holder",
    "price": 21600,
    "category": "home",
    "image": "images/H-107.webp",
    "source": "https://makerworld.com/en/models/1726061-office-desk-organizer-with-integrated-phone-holder",
    "creator": "Deltaprints",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USddb67d2f12b946/design/2025-08-23_13f90ceddc365.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 270.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1726061-office-desk-organizer-with-integrated-phone-holder#profileId-1832704",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 270.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-108",
    "name": "Grain Desk Organizer",
    "price": 13120,
    "category": "home",
    "image": "images/H-108.webp",
    "source": "https://makerworld.com/en/models/2337123-grain-desk-organizer",
    "creator": "RJ",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb2c0e81ffeb463/design/b40c786205fc9d0a.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 164.0,
    "profileName": "0.2mm layer, 2 walls, 7% infill",
    "profileUrl": "https://makerworld.com/en/models/2337123-grain-desk-organizer#profileId-2554458",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 164.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-109",
    "name": "Minimalist Entryway Organizer",
    "price": 21440,
    "category": "home",
    "image": "images/H-109.webp",
    "source": "https://makerworld.com/en/models/2986713-minimalist-entryway-organizer",
    "creator": "polyana32",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US31ba8e35755f44/design/70a8a960a9446b96.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 268.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2986713-minimalist-entryway-organizer#profileId-3351566",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 268.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-110",
    "name": "Desk Organizer with Pen Holder & Tray",
    "price": 14240,
    "category": "home",
    "image": "images/H-110.webp",
    "source": "https://makerworld.com/en/models/2342069-desk-organizer-with-pen-holder-tray",
    "creator": "TriFusion",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US25d09ef4d7fb0d/design/73be384c4b887c00.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 178.0,
    "profileName": "0.24mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/2342069-desk-organizer-with-pen-holder-tray#profileId-2560143",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 178.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-111",
    "name": "Lovely Heart-Shaped Makeup & Desk Organizer",
    "price": 11680,
    "category": "home",
    "image": "images/H-111.webp",
    "source": "https://makerworld.com/en/models/2233514-lovely-heart-shaped-makeup-desk-organizer",
    "creator": "3d.tresd",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/UScf296702a5b7e/design/e44668941557891a.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 146.0,
    "profileName": "V2 Enhanced - more authentic heart-shaped look",
    "profileUrl": "https://makerworld.com/en/models/2233514-lovely-heart-shaped-makeup-desk-organizer#profileId-3532762",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 146.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-112",
    "name": "BUCKETS MINI's - Stackable Organizer - no support",
    "price": 20880,
    "category": "home",
    "image": "images/H-112.webp",
    "source": "https://makerworld.com/en/models/2253348-buckets-mini-s-stackable-organizer-no-support",
    "creator": "SMACKMAX",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US61bf02e2ddb4/design/2026-01-16_51364f43f398b.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 261.0,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/2253348-buckets-mini-s-stackable-organizer-no-support#profileId-2454251",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47.0
      },
      {
        "material": "PLA",
        "grams": 214.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-113",
    "name": "Post-it Desk Organizer",
    "price": 7040,
    "category": "home",
    "image": "images/H-113.webp",
    "source": "https://makerworld.com/en/models/1333643-post-it-desk-organizer",
    "creator": "ARTICAT Realm",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US99bbd87f8a4684/design/2025-04-18_0ff6022175bab8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 88.0,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/1333643-post-it-desk-organizer#profileId-1372516",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 88.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-114",
    "name": "6-Drawer Desk Organizer — Tall Drawer Edition",
    "price": 33920,
    "category": "home",
    "image": "images/H-114.webp",
    "source": "https://makerworld.com/en/models/2038436-6-drawer-desk-organizer-tall-drawer-edition",
    "creator": "Hart Prints Co.",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6e1433b7588909/design/2025-11-24_13b9d85984da08.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 424.0,
    "profileName": "Desk organizer 3x2 Tall V1",
    "profileUrl": "https://makerworld.com/en/models/2038436-6-drawer-desk-organizer-tall-drawer-edition#profileId-2199022",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 424.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-115",
    "name": "Stackable Desktop Organizer – clean & modular",
    "price": 97920,
    "category": "home",
    "image": "images/H-115.webp",
    "source": "https://makerworld.com/en/models/2734467-stackable-desktop-organizer-clean-modular",
    "creator": "JANBERRY DESIGN",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USd084703df827bc/design/19eb9e7ba33fbd7b.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 1224.0,
    "profileName": "Small Drawers",
    "profileUrl": "https://makerworld.com/en/models/2734467-stackable-desktop-organizer-clean-modular#profileId-3031250",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 1224.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-116",
    "name": "Workshop / Desk Organizer / Stackable / 3 Sizes",
    "price": 55040,
    "category": "home",
    "image": "images/H-116.webp",
    "source": "https://makerworld.com/en/models/919813-workshop-desk-organizer-stackable-3-sizes",
    "creator": "PaperPlaneLab",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2ec00b7aaade03/design/2024-12-27_beb445e4b06be.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 688.0,
    "profileName": "A1/P1/X1- Big Size - NO OVERHANG",
    "profileUrl": "https://makerworld.com/en/models/919813-workshop-desk-organizer-stackable-3-sizes#profileId-881756",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 277.0
      },
      {
        "material": "PLA",
        "grams": 411.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-117",
    "name": "Ultimate Minimal  Self-Draining Bathroom Vanity",
    "price": 37760,
    "category": "home",
    "image": "images/H-117.webp",
    "source": "https://makerworld.com/en/models/2094889-ultimate-minimal-self-draining-bathroom-vanity",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9a337224b537b5/design/2025-12-09_17ae8a07fa3f48.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 472.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2094889-ultimate-minimal-self-draining-bathroom-vanity#profileId-2264934",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 472.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-118",
    "name": "Modular Desk Organizer & Tool Tower",
    "price": 38720,
    "category": "home",
    "image": "images/H-118.webp",
    "source": "https://makerworld.com/en/models/1835209-modular-desk-organizer-tool-tower",
    "creator": "seby3d",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf3453e0de0f01f/design/b6dfe4c654befc2e.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 484.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1835209-modular-desk-organizer-tool-tower#profileId-2397449",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 484.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-119",
    "name": "Desk Paper Organizer - Letter+A4 / A5 / 12x12",
    "price": 72560,
    "category": "home",
    "image": "images/H-119.webp",
    "source": "https://makerworld.com/en/models/1647352-desk-paper-organizer-letter-a4-a5-12x12",
    "creator": "godrm-3po",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US1640fd5baa7a49/design/2025-07-28_00ccc0ea96452.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 907.0,
    "profileName": "A4/LETTER 5F portrait V2",
    "profileUrl": "https://makerworld.com/en/models/1647352-desk-paper-organizer-letter-a4-a5-12x12#profileId-1741215",
    "profilePlates": 12,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 907.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-120",
    "name": "Mini School Locker – 3D Printed Desk Organizer",
    "price": 44640,
    "category": "home",
    "image": "images/H-120.webp",
    "source": "https://makerworld.com/en/models/2724278-mini-school-locker-3d-printed-desk-organizer",
    "creator": "DUDKA",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3489b527580f7b/design/4cf6a06fdf739131.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 558.0,
    "profileName": "2 color 0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2724278-mini-school-locker-3d-printed-desk-organizer#profileId-3018365",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 551.0
      },
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-121",
    "name": "Kitchen Organizer with Cloth Holder (Sink Rack)",
    "price": 13440,
    "category": "home",
    "image": "images/H-121.webp",
    "source": "https://makerworld.com/en/models/2458143-kitchen-organizer-with-cloth-holder-sink-rack",
    "creator": "Tomik s Cuprou",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2d707e60fc223e/design/08e9d738952178fb.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 168.0,
    "profileName": "Default Design",
    "profileUrl": "https://makerworld.com/en/models/2458143-kitchen-organizer-with-cloth-holder-sink-rack#profileId-2698862",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 168.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-122",
    "name": "Kumiko Desk Organizer",
    "price": 10960,
    "category": "home",
    "image": "images/H-122.webp",
    "source": "https://makerworld.com/en/models/1288105-kumiko-desk-organizer",
    "creator": "jorm",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US50e9bef1875086/design/2025-04-07_1392efe393c958.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 137.0,
    "profileName": "Body",
    "profileUrl": "https://makerworld.com/en/models/1288105-kumiko-desk-organizer#profileId-1317726",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 137.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-123",
    "name": "Shoe Organizer With Pull Tab.",
    "price": 8320,
    "category": "home",
    "image": "images/H-123.webp",
    "source": "https://makerworld.com/en/models/1024791-shoe-organizer-with-pull-tab",
    "creator": "MeasureOnce",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2169962a29f8ae/design/2025-01-21_afe1d7d42c9c6.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 104.0,
    "profileName": "P1 X1 A1 Grooves added",
    "profileUrl": "https://makerworld.com/en/models/1024791-shoe-organizer-with-pull-tab#profileId-1020642",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 104.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-124",
    "name": "Modern Ribbed Bathroom Organizer, Make- Up Cup",
    "price": 18480,
    "category": "home",
    "image": "images/H-124.webp",
    "source": "https://makerworld.com/en/models/1446350-modern-ribbed-bathroom-organizer-make-up-cup",
    "creator": "Deltaprints",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USafd9aba99dd7a/design/2025-05-23_c293c53f55d49.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 231.0,
    "profileName": "0.24mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/1446350-modern-ribbed-bathroom-organizer-make-up-cup#profileId-1506154",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 231.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-125",
    "name": "Under-Shelf Organizer - Small Version",
    "price": 12240,
    "category": "home",
    "image": "images/H-125.webp",
    "source": "https://makerworld.com/en/models/1962101-under-shelf-organizer-small-version",
    "creator": "dan_cz",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US31443e3521e193/design/2025-11-05_4f9db0df1e3548.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 153.0,
    "profileName": "25mm Version Open, Under-Shelf Organizer-Small",
    "profileUrl": "https://makerworld.com/en/models/1962101-under-shelf-organizer-small-version#profileId-2109094",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 153.0
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-126",
    "name": "Sink Organizer with Cloth Holder (Kitchen Rack)",
    "price": 16320,
    "category": "home",
    "image": "images/H-126.webp",
    "source": "https://makerworld.com/en/models/2341207-sink-organizer-with-cloth-holder-kitchen-rack",
    "creator": "TriFusion",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US48217ee9e130ba/design/3eb2191109e95f83.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 204.0,
    "profileName": "Gitter 0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/2341207-sink-organizer-with-cloth-holder-kitchen-rack#profileId-2575519",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 204.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-127",
    "name": "Spinning Desk Organizer",
    "price": 29600,
    "category": "home",
    "image": "images/H-127.webp",
    "source": "https://makerworld.com/en/models/1828747-spinning-desk-organizer",
    "creator": "KL Worx",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9ff3235a7288d0/design/2025-09-26_0c9265407d8678.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 370.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1828747-spinning-desk-organizer#profileId-1952544",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 294.0
      },
      {
        "material": "PLA",
        "grams": 76.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-128",
    "name": "Modular Stackable Corner Storage Ventilated",
    "price": 30160,
    "category": "home",
    "image": "images/H-128.webp",
    "source": "https://makerworld.com/en/models/2075071-modular-stackable-corner-storage-ventilated",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USae3b485a25dd7f/design/2025-12-04_45981e79c3a62.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 377.0,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2075071-modular-stackable-corner-storage-ventilated#profileId-2241595",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 377.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-129",
    "name": "Poly-Desk Organizer",
    "price": 60160,
    "category": "home",
    "image": "images/H-129.webp",
    "source": "https://makerworld.com/en/models/1820511-poly-desk-organizer",
    "creator": "3D Paint Lab",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US5e603bdb8ee5e9/design/2025-09-23_f5356a13127b8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 752.0,
    "profileName": "Poly-Desk Organizer",
    "profileUrl": "https://makerworld.com/en/models/1820511-poly-desk-organizer#profileId-1943199",
    "profilePlates": 6,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 203.0
      },
      {
        "material": "PLA",
        "grams": 230.0
      },
      {
        "material": "PLA",
        "grams": 319.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-130",
    "name": "Kitchen Utensil Organizer",
    "price": 13920,
    "category": "home",
    "image": "images/H-130.webp",
    "source": "https://makerworld.com/en/models/1270074-kitchen-utensil-organizer",
    "creator": "ARTICAT Realm",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US763c66458cc7cc/design/2025-03-31_0355676aec2f6.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 174.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1270074-kitchen-utensil-organizer#profileId-1329884",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 174.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-131",
    "name": "Stackable Shelf Organizer",
    "price": 3600,
    "category": "home",
    "image": "images/H-131.webp",
    "source": "https://makerworld.com/en/models/426986-stackable-shelf-organizer",
    "creator": "LinkDesigns",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US63426aa7e114bc/design/2024-04-13_a1d62a8b121ce.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 45.0,
    "profileName": "Standard Tray",
    "profileUrl": "https://makerworld.com/en/models/426986-stackable-shelf-organizer#profileId-330940",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 45.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-132",
    "name": "Modern Bathroom Caddy Organizer",
    "price": 22720,
    "category": "home",
    "image": "images/H-132.webp",
    "source": "https://makerworld.com/en/models/2705954-modern-bathroom-caddy-organizer",
    "creator": "PDFYYC",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2d4df2e1304429/design/0343a3673ee84415.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 284.0,
    "profileName": "ams color change 0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/2705954-modern-bathroom-caddy-organizer#profileId-2999250",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 122.0
      },
      {
        "material": "PLA",
        "grams": 162.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-133",
    "name": "Stackabowls",
    "price": 20560,
    "category": "home",
    "image": "images/H-133.webp",
    "source": "https://makerworld.com/en/models/1764110-stackabowls",
    "creator": "TeamGraphika",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USad58e1df46a04c/design/2025-09-05_f8b9c2af798708.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 257.0,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/1764110-stackabowls#profileId-1877123",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 257.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-134",
    "name": "Rotatable Makeup & Storage Organizer",
    "price": 29520,
    "category": "home",
    "image": "images/H-134.webp",
    "source": "https://makerworld.com/en/models/1964754-rotatable-makeup-storage-organizer",
    "creator": "eatrix",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US1a62537fdfccc6/design/2025-11-06_ec28730d8c97b.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 369.0,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/1964754-rotatable-makeup-storage-organizer#profileId-2112260",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 222.0
      },
      {
        "material": "PLA",
        "grams": 147.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-135",
    "name": "Ribbed Design Office Organizer",
    "price": 10000,
    "category": "home",
    "image": "images/H-135.webp",
    "source": "https://makerworld.com/en/models/651544-ribbed-design-office-organizer",
    "creator": "Deltaprints",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USd98b1dc2555c20/design/2024-09-19_5e80ed3b7fde4.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 125.0,
    "profileName": "0.28mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/651544-ribbed-design-office-organizer#profileId-578607",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 125.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-136",
    "name": "Cable Organizer - One-Sided Winding",
    "price": 7840,
    "category": "home",
    "image": "images/H-136.webp",
    "source": "https://makerworld.com/en/models/778587-cable-organizer-one-sided-winding",
    "creator": "Matthew Ghost",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US86d6462f574859/design/2024-11-11_424b49adaae32.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 98.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/778587-cable-organizer-one-sided-winding#profileId-715469",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 98.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-137",
    "name": "Desk Organizer",
    "price": 6400,
    "category": "home",
    "image": "images/H-137.webp",
    "source": "https://makerworld.com/en/models/752524-desk-organizer",
    "creator": "obandovic",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb19ff30183f20f/design/2024-11-02_64de8ec55f47d8.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 80.0,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/752524-desk-organizer#profileId-686417",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 80.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-138",
    "name": "Kumiko Design Desk Organizer",
    "price": 38240,
    "category": "home",
    "image": "images/H-138.webp",
    "source": "https://makerworld.com/en/models/1275973-kumiko-design-desk-organizer",
    "creator": "KL Worx",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US761d96ce32171c/design/2025-04-02_ed766d2c3a39.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 478.0,
    "profileName": "0.2mm layer, 3 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/1275973-kumiko-design-desk-organizer#profileId-1303838",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 117.0
      },
      {
        "material": "PLA",
        "grams": 361.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-139",
    "name": "Modular Corner Organizer  Bathroom  Kitchen Office",
    "price": 18000,
    "category": "home",
    "image": "images/H-139.webp",
    "source": "https://makerworld.com/en/models/2064110-modular-corner-organizer-bathroom-kitchen-office",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb95952920988ee/design/2025-12-01_d560628d03226.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 225.0,
    "profileName": "With stacking pin",
    "profileUrl": "https://makerworld.com/en/models/2064110-modular-corner-organizer-bathroom-kitchen-office#profileId-2228869",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 225.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-140",
    "name": "Modular Desk Organizer System|MagSafe Phone Stand",
    "price": 24720,
    "category": "home",
    "image": "images/H-140.webp",
    "source": "https://makerworld.com/en/models/2087511-modular-desk-organizer-system-magsafe-phone-stand",
    "creator": "Meyui",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2e167a1955c2e6/design/2025-12-08_38dbcf72215c88.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 309.0,
    "profileName": "Desk Organizer (Extended Set)",
    "profileUrl": "https://makerworld.com/en/models/2087511-modular-desk-organizer-system-magsafe-phone-stand#profileId-2256241",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 309.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-141",
    "name": "Modular Belt Organizer - Versatile Belt Storage",
    "price": 6880,
    "category": "home",
    "image": "images/H-141.webp",
    "source": "https://makerworld.com/en/models/1284791-modular-belt-organizer-versatile-belt-storage",
    "creator": "7CUTS",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US17d3d5f190ab50/design/2ed3e09b8c7ae084.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 86.0,
    "profileName": "Belt Organizer Holder",
    "profileUrl": "https://makerworld.com/en/models/1284791-modular-belt-organizer-versatile-belt-storage#profileId-1313673",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 86.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-142",
    "name": "360-Degree Rotating Jewelry Storage",
    "price": 13280,
    "category": "home",
    "image": "images/H-142.webp",
    "source": "https://makerworld.com/en/models/1400493-360-degree-rotating-jewelry-storage",
    "creator": "Anton",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3551d8d94abd96/design/2025-05-09_0044550d68c63.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 166.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1400493-360-degree-rotating-jewelry-storage#profileId-1452297",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 166.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-143",
    "name": "Biscuit Cable Organizer",
    "price": 2080,
    "category": "home",
    "image": "images/H-143.webp",
    "source": "https://makerworld.com/en/models/2591383-biscuit-cable-organizer",
    "creator": "neilvfx",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2b8d673a58b76/design/9ea3884c1b7b3867.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 26.0,
    "profileName": "Large_Biscuit",
    "profileUrl": "https://makerworld.com/en/models/2591383-biscuit-cable-organizer#profileId-2862055",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-144",
    "name": "Aesthetic Quilted Desk Organizer Brush Holder",
    "price": 8080,
    "category": "home",
    "image": "images/H-144.webp",
    "source": "https://makerworld.com/en/models/2168938-aesthetic-quilted-desk-organizer-brush-holder",
    "creator": "TheHexArtist",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb9b8058aa03ae3/design/19e932962be620e4.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 101.0,
    "profileName": "0.16mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2168938-aesthetic-quilted-desk-organizer-brush-holder#profileId-2352176",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 101.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-145",
    "name": "Cable Organizer",
    "price": 35280,
    "category": "home",
    "image": "images/H-145.webp",
    "source": "https://makerworld.com/en/models/1662375-cable-organizer",
    "creator": "Adam",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US7ef965f6906592/design/2025-08-02_609588d361a9a8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 441.0,
    "profileName": "0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/1662375-cable-organizer#profileId-1758738",
    "profilePlates": 6,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 441.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-146",
    "name": "Ergonomic Cable Organizer",
    "price": 3680,
    "category": "home",
    "image": "images/H-146.webp",
    "source": "https://makerworld.com/en/models/1166375-ergonomic-cable-organizer",
    "creator": "Matthew Ghost",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf84eaf71ce3961/design/2025-03-02_25808da1b7cac.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 46.0,
    "profileName": "0.2mm layer, 3 walls, 25% infill",
    "profileUrl": "https://makerworld.com/en/models/1166375-ergonomic-cable-organizer#profileId-1173796",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 36.0
      },
      {
        "material": "PLA",
        "grams": 10.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-147",
    "name": "EDC organizer",
    "price": 14800,
    "category": "home",
    "image": "images/H-147.webp",
    "source": "https://makerworld.com/en/models/1773168-edc-organizer",
    "creator": "Mesmar",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2b228959e407ce/design/2025-09-07_191ce3e8043dc.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 185.0,
    "profileName": "original",
    "profileUrl": "https://makerworld.com/en/models/1773168-edc-organizer#profileId-1888035",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 185.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-148",
    "name": "Minimalist Bathroom Carry-All Organizer",
    "price": 37200,
    "category": "home",
    "image": "images/H-148.webp",
    "source": "https://makerworld.com/en/models/2082327-minimalist-bathroom-carry-all-organizer",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US416b0f3420dd5d/design/2025-12-06_96cc6f1f53772.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 465.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2082327-minimalist-bathroom-carry-all-organizer#profileId-2250305",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 465.0
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-149",
    "name": "STORA · Stackable Organizer",
    "price": 7520,
    "category": "home",
    "image": "images/H-149.webp",
    "source": "https://makerworld.com/en/models/2524706-stora-stackable-organizer",
    "creator": "M3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2741b20d0839eb/design/7da35907b9b83173.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 94.0,
    "profileName": "0.24mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2524706-stora-stackable-organizer#profileId-2777845",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 94.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "H-150",
    "name": "Key / jewelry organizer tree",
    "price": 7200,
    "category": "home",
    "image": "images/H-150.webp",
    "source": "https://makerworld.com/en/models/1577641-key-jewelry-organizer-tree",
    "creator": "pozsar",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6a67694cefb375/design/2025-07-05_22c3d249d413f.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 90.0,
    "profileName": "Tree with tray",
    "profileUrl": "https://makerworld.com/en/models/1577641-key-jewelry-organizer-tree#profileId-1660010",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 90.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-101",
    "name": "My 10 star fidget design",
    "price": 6800,
    "category": "kids",
    "image": "images/B-101.jpg",
    "source": "https://makerworld.com/en/models/1755208-my-10-star-fidget-design",
    "creator": "BigDeX",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6a3e0154a93134/design/2025-09-01_3af3607d28c8b.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 85.0,
    "profileName": "0.24mm layer, 1 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/1755208-my-10-star-fidget-design#profileId-1866474",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 85.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-102",
    "name": "Twisted Ball Fidget - Two Sizes",
    "price": 9440,
    "category": "kids",
    "image": "images/B-102.webp",
    "source": "https://makerworld.com/en/models/2313012-twisted-ball-fidget-two-sizes",
    "creator": "Jasa Designs",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3d80953300c76c/design/2e5a1f9a2dc38c12.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 118.0,
    "profileName": "0.2mm, 2 walls, 0% infill",
    "profileUrl": "https://makerworld.com/en/models/2313012-twisted-ball-fidget-two-sizes#profileId-2525295",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 118.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-103",
    "name": "Amazing star fidget**FREE COMERICIAL LICENCE**",
    "price": 4640,
    "category": "kids",
    "image": "images/B-103.webp",
    "source": "https://makerworld.com/en/models/1665158-amazing-star-fidget-free-comericial-licence",
    "creator": "Big-D-SyneS",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2d334d8024bdfc/design/2025-08-25_ca09741fe1714.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 58.0,
    "profileName": "MINI FIDGET 2.5 HOUR PRINT",
    "profileUrl": "https://makerworld.com/en/models/1665158-amazing-star-fidget-free-comericial-licence#profileId-1941548",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 58.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-104",
    "name": "Flexible Mesh Fidget Pad (Print-in-Place)",
    "price": 15280,
    "category": "kids",
    "image": "images/B-104.webp",
    "source": "https://makerworld.com/en/models/2629018-flexible-mesh-fidget-pad-print-in-place",
    "creator": "Creonic Lab",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US46689f00d95cea/design/2bf4375af434201f.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 191.0,
    "profileName": "Extra Big Size - 320x320x3.06 mm",
    "profileUrl": "https://makerworld.com/en/models/2629018-flexible-mesh-fidget-pad-print-in-place#profileId-3220598",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 191.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-105",
    "name": "star dancer fidget twist",
    "price": 7040,
    "category": "kids",
    "image": "images/B-105.webp",
    "source": "https://makerworld.com/en/models/2208902-star-dancer-fidget-twist",
    "creator": "Swampy3d",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc82e2dde0c6e91/design/12b5a484e60a6bf8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 88.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2208902-star-dancer-fidget-twist#profileId-2401045",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 88.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-106",
    "name": "Fidget Click Flick Swoosh - Print in place!",
    "price": 1200,
    "category": "kids",
    "image": "images/B-106.webp",
    "source": "https://makerworld.com/en/models/716803-fidget-click-flick-swoosh-print-in-place",
    "creator": "Louis",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa32d74cc69fd2f/design/2024-10-22_106caeb7d0103.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 15.0,
    "profileName": "Loose fit - 0.2mm layer, 3 walls, 0% infill",
    "profileUrl": "https://makerworld.com/en/models/716803-fidget-click-flick-swoosh-print-in-place#profileId-647636",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-107",
    "name": "Hexagon Twist Fidget - with handle",
    "price": 3760,
    "category": "kids",
    "image": "images/B-107.webp",
    "source": "https://makerworld.com/en/models/2078930-hexagon-twist-fidget-with-handle",
    "creator": "DORONS WORLD",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US8a93ef26af40c9/design/2025-12-05_9f9767fcc48788.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 47.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2078930-hexagon-twist-fidget-with-handle#profileId-2246152",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-108",
    "name": "Ultimate Oval Triple Spin Fidget (Print in Place)",
    "price": 800,
    "category": "kids",
    "image": "images/B-108.webp",
    "source": "https://makerworld.com/en/models/2336776-ultimate-oval-triple-spin-fidget-print-in-place",
    "creator": "AbyssalCactus",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US52e23d1ba669b6/design/9a6a5c227548cb9f.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 10.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2336776-ultimate-oval-triple-spin-fidget-print-in-place#profileId-2554045",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 10.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-109",
    "name": "Hexagon Twist Fidget (V2)",
    "price": 18560,
    "category": "kids",
    "image": "images/B-109.jpg",
    "source": "https://makerworld.com/en/models/746400-hexagon-twist-fidget-v2",
    "creator": "Zammer 3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf93693aac1b7fc/design/2024-12-25_e06aa5cc2de4d.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 232.0,
    "profileName": "Large, Medium, Small and Keychain",
    "profileUrl": "https://makerworld.com/en/models/746400-hexagon-twist-fidget-v2#profileId-679506",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 232.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-110",
    "name": "Small Spiral Fidget",
    "price": 320,
    "category": "kids",
    "image": "images/B-110.webp",
    "source": "https://makerworld.com/en/models/1130569-small-spiral-fidget",
    "creator": "Dominator Ivy",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US29304b418896d0/design/2025-02-20_4fab9d161f7af.webp?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 4.0,
    "profileName": "Separate Plates(Multi Color!!)",
    "profileUrl": "https://makerworld.com/en/models/1130569-small-spiral-fidget#profileId-1130773",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-111",
    "name": "Flexi Fabric Fidget (Print in Place!)",
    "price": 6080,
    "category": "kids",
    "image": "images/B-111.webp",
    "source": "https://makerworld.com/en/models/1544529-flexi-fabric-fidget-print-in-place",
    "creator": "PotaterSoupModels",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa1c79c8c6b1cc9/design/2025-06-24_5b03ef63da9788.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 76.0,
    "profileName": "A1 Mini, Print In Place 0.2mm layer, 5 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1544529-flexi-fabric-fidget-print-in-place#profileId-1621552",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 76.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-112",
    "name": "Curved Star Fidget",
    "price": 6960,
    "category": "kids",
    "image": "images/B-112.jpg",
    "source": "https://makerworld.com/en/models/2034355-curved-star-fidget",
    "creator": "BigDeX",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USab22e254962688/design/2025-11-23_1c214fb16ebf48.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 87.0,
    "profileName": "0.24mm layer, 1 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2034355-curved-star-fidget#profileId-2194184",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 79.0
      },
      {
        "material": "PLA",
        "grams": 8.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-113",
    "name": "Star Fidget with Handle",
    "price": 12000,
    "category": "kids",
    "image": "images/B-113.webp",
    "source": "https://makerworld.com/en/models/1783379-star-fidget-with-handle",
    "creator": "Jasa Designs",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US70bcaa0bc318ed/design/2025-09-11_39055c2b180b4.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 150.0,
    "profileName": "0.28mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1783379-star-fidget-with-handle#profileId-1899952",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 150.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-114",
    "name": "Satisfying Clicker Ball",
    "price": 3680,
    "category": "kids",
    "image": "images/B-114.webp",
    "source": "https://makerworld.com/en/models/2864475-satisfying-clicker-ball",
    "creator": "Gibbs3408",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USe6af1f26a56f4d/design/f7dcd32f7d7d4d1c.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 46.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2864475-satisfying-clicker-ball#profileId-3197077",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 46.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-115",
    "name": "COOL FIDGET",
    "price": 1200,
    "category": "kids",
    "image": "images/B-115.webp",
    "source": "https://makerworld.com/en/models/1571798-cool-fidget",
    "creator": "MGTOYSSS",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc85e35849e64f4/design/2025-07-03_9f5adabde22b8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 15.0,
    "profileName": "Dual-color version B",
    "profileUrl": "https://makerworld.com/en/models/1571798-cool-fidget#profileId-1653247",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 8.0
      },
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-116",
    "name": "Nytrax - 3 in 1 EDC Fidget Slide Toy CyberPunk",
    "price": 1360,
    "category": "kids",
    "image": "images/B-116.webp",
    "source": "https://makerworld.com/en/models/2698814-nytrax-3-in-1-edc-fidget-slide-toy-cyberpunk",
    "creator": "3D Gear Solution",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US99ef7b90952959/design/d2f802288a8f6a9a.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 17.0,
    "profileName": "Nytrax - Single Color",
    "profileUrl": "https://makerworld.com/en/models/2698814-nytrax-3-in-1-edc-fidget-slide-toy-cyberpunk#profileId-2991626",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 17.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-117",
    "name": "Multi Fidget Click Flip Swoosh",
    "price": 1600,
    "category": "kids",
    "image": "images/B-117.webp",
    "source": "https://makerworld.com/en/models/1231216-multi-fidget-click-flip-swoosh",
    "creator": "Louis",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US8e7f1a30a0314d/design/2025-03-20_8c6bb92aa38e2.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 20.0,
    "profileName": "Optimised profile",
    "profileUrl": "https://makerworld.com/en/models/1231216-multi-fidget-click-flip-swoosh#profileId-1250049",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-118",
    "name": "Expanding Star Fidget",
    "price": 3040,
    "category": "kids",
    "image": "images/B-118.webp",
    "source": "https://makerworld.com/en/models/1749473-expanding-star-fidget",
    "creator": "3Dealin",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USd017dd07580864/design/2025-11-04_7eeda8f8a2fe6.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 38.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1749473-expanding-star-fidget#profileId-2103690",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 38.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-119",
    "name": "Easy to print Fidget Free to sell",
    "price": 720,
    "category": "kids",
    "image": "images/B-119.webp",
    "source": "https://makerworld.com/en/models/1066167-easy-to-print-fidget-free-to-sell",
    "creator": "LangHjornArt",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6e8f17e7c13952/design/f8af85b070e3d073.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 9.0,
    "profileName": "0.2mm layer, 6 walls, 25% infill",
    "profileUrl": "https://makerworld.com/en/models/1066167-easy-to-print-fidget-free-to-sell#profileId-1055234",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 9.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-120",
    "name": "Joy Fidget V2.0",
    "price": 1840,
    "category": "kids",
    "image": "images/B-120.webp",
    "source": "https://makerworld.com/en/models/202173-joy-fidget-v2-0",
    "creator": "TomoDesigns",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US68f569e198668d/design/2024-02-24_9bec61fdcfb67.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 23.0,
    "profileName": "Joy Fidget",
    "profileUrl": "https://makerworld.com/en/models/202173-joy-fidget-v2-0#profileId-222558",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-121",
    "name": "MEGA Hex Spiral Fidget Toy - Print in Place",
    "price": 4800,
    "category": "kids",
    "image": "images/B-121.jpg",
    "source": "https://makerworld.com/en/models/2447139-mega-hex-spiral-fidget-toy-print-in-place",
    "creator": "Etec - Design",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3b5cbf4c484e51/design/48c4a4682f3183e6.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 60.0,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2447139-mega-hex-spiral-fidget-toy-print-in-place#profileId-2686156",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 60.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-122",
    "name": "Fidget Pop Square",
    "price": 2320,
    "category": "kids",
    "image": "images/B-122.jpg",
    "source": "https://makerworld.com/en/models/1169449-fidget-pop-square",
    "creator": "DWdesigns",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US449bf34194b9eb/design/2025-03-03_04bd05e029419.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 29.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1169449-fidget-pop-square#profileId-1177500",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 29.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-123",
    "name": "Kinetic fidget",
    "price": 3520,
    "category": "kids",
    "image": "images/B-123.jpg",
    "source": "https://makerworld.com/en/models/1205691-kinetic-fidget",
    "creator": "BogdanS",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US93c60ae3e3b8a1/design/2025-03-13_e742d2d857a1a.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 44.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1205691-kinetic-fidget#profileId-1219522",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 17.0
      },
      {
        "material": "PLA",
        "grams": 27.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-124",
    "name": "Alpha Fidget- 5 in 1 Print in Place Fidget Toy",
    "price": 2000,
    "category": "kids",
    "image": "images/B-124.webp",
    "source": "https://makerworld.com/en/models/1049589-alpha-fidget-5-in-1-print-in-place-fidget-toy",
    "creator": "Bad Astronaut",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa8fd19def474f0/design/2025-04-15_71e8aff80f5a8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 25.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1049589-alpha-fidget-5-in-1-print-in-place-fidget-toy#profileId-1060868",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 25.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-125",
    "name": "Fidget Hexagon Twist",
    "price": 1600,
    "category": "kids",
    "image": "images/B-125.jpg",
    "source": "https://makerworld.com/en/models/521944-fidget-hexagon-twist",
    "creator": "Zammer 3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2dfd77924d2c78/design/2024-07-02_525aa8812178d.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 20.0,
    "profileName": "Small Fidget",
    "profileUrl": "https://makerworld.com/en/models/521944-fidget-hexagon-twist#profileId-438584",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-126",
    "name": "Cheese fidget clicker MX switch keychain - 5 grams",
    "price": 400,
    "category": "kids",
    "image": "images/B-126.webp",
    "source": "https://makerworld.com/en/models/1142090-cheese-fidget-clicker-mx-switch-keychain-5-grams",
    "creator": "Eris",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3714592f603272/design/2025-02-23_3bdab62b65de5.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 5.0,
    "profileName": "print both together-0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1142090-cheese-fidget-clicker-mx-switch-keychain-5-grams#profileId-1145098",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-127",
    "name": "Fidget Wobble8 - two sizes",
    "price": 2480,
    "category": "kids",
    "image": "images/B-127.jpg",
    "source": "https://makerworld.com/en/models/700410-fidget-wobble8-two-sizes",
    "creator": "haptic3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US816511ace833cf/design/2024-11-26_19867f5f5eb66.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 31.0,
    "profileName": "large version",
    "profileUrl": "https://makerworld.com/en/models/700410-fidget-wobble8-two-sizes#profileId-767992",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 31.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-128",
    "name": "Fidget Click Keychain - Print in Place - 15 min",
    "price": 400,
    "category": "kids",
    "image": "images/B-128.webp",
    "source": "https://makerworld.com/en/models/722323-fidget-click-keychain-print-in-place-15-min",
    "creator": "Louis",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6221cb34a8826/design/2024-10-22_ab6fc4275c3fd8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 5.0,
    "profileName": "Normal tolerance",
    "profileUrl": "https://makerworld.com/en/models/722323-fidget-click-keychain-print-in-place-15-min#profileId-653276",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-129",
    "name": "Fidget Flick Boba Tea - Print in place!",
    "price": 960,
    "category": "kids",
    "image": "images/B-129.webp",
    "source": "https://makerworld.com/en/models/1094144-fidget-flick-boba-tea-print-in-place",
    "creator": "CYBZoo3d",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US48d565e35f837b/design/2025-02-10_1465c6778d4a9.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 12.0,
    "profileName": "0.2mm layer, 3 walls, 30% infill",
    "profileUrl": "https://makerworld.com/en/models/1094144-fidget-flick-boba-tea-print-in-place#profileId-1088219",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 11.0
      },
      {
        "material": "PLA",
        "grams": 1.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-130",
    "name": "Flexible Squishy Fidget Loop",
    "price": 1440,
    "category": "kids",
    "image": "images/B-130.webp",
    "source": "https://makerworld.com/en/models/2861823-flexible-squishy-fidget-loop",
    "creator": "fifindr",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf49bd7770f6d8e/design/be9f548800e744c2.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 18.0,
    "profileName": "Squishy Fidget Loop - 0.2mm layer, 1 walls, 0% infill",
    "profileUrl": "https://makerworld.com/en/models/2861823-flexible-squishy-fidget-loop#profileId-3193798",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-131",
    "name": "twist fidget",
    "price": 2560,
    "category": "kids",
    "image": "images/B-131.webp",
    "source": "https://makerworld.com/en/models/464041-twist-fidget",
    "creator": "ENIQUE3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US63c25b319c6634/design/2024-05-14_f8c8a69787ab.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 32.0,
    "profileName": "same twist but with 100% infill on the nut making it heavier",
    "profileUrl": "https://makerworld.com/en/models/464041-twist-fidget#profileId-374970",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 32.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-132",
    "name": "Fidget Blanket",
    "price": 4800,
    "category": "kids",
    "image": "images/B-132.webp",
    "source": "https://makerworld.com/en/models/892608-fidget-blanket",
    "creator": "Pooch's 3D Creations",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2e230a38334cc9/design/2024-12-18_9d3f332e4405b.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 60.0,
    "profileName": "0.16mm layer, 3 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/892608-fidget-blanket#profileId-849470",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 60.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-133",
    "name": "Spin Pop - fidget toys",
    "price": 1840,
    "category": "kids",
    "image": "images/B-133.webp",
    "source": "https://makerworld.com/en/models/2822623-spin-pop-fidget-toys",
    "creator": "Zeno's",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6a9246b18bd4e5/design/c1bf35280326c447.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 23.0,
    "profileName": "0.16mm layer, 2 walls, 22% infill",
    "profileUrl": "https://makerworld.com/en/models/2822623-spin-pop-fidget-toys#profileId-3143761",
    "profilePlates": 11,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-134",
    "name": "Transforming Fidget Ball Micro",
    "price": 8320,
    "category": "kids",
    "image": "images/B-134.webp",
    "source": "https://makerworld.com/en/models/1101000-transforming-fidget-ball-micro",
    "creator": "macjfll",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6e4fd6298797bf/design/2025-02-12_6be62e4e800e7.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 104.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1101000-transforming-fidget-ball-micro#profileId-1096260",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 104.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-135",
    "name": "Multi Fidget",
    "price": 4320,
    "category": "kids",
    "image": "images/B-135.webp",
    "source": "https://makerworld.com/en/models/1383513-multi-fidget",
    "creator": "Epiq3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USe1fe66db35e27f/design/2025-05-04_44ade63694e13.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 54.0,
    "profileName": "Multi color - Optimized for Quality",
    "profileUrl": "https://makerworld.com/en/models/1383513-multi-fidget#profileId-1432382",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 21.0
      },
      {
        "material": "PLA",
        "grams": 33.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-136",
    "name": "Fidget Click Clack Swoosh! Print in Place - 32 min",
    "price": 1200,
    "category": "kids",
    "image": "images/B-136.webp",
    "source": "https://makerworld.com/en/models/719725-fidget-click-clack-swoosh-print-in-place-32-min",
    "creator": "Louis",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb3716c1f295a31/design/2024-10-26_68ae23883c6d48.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 15.0,
    "profileName": "Optimized pofile, loose tolerances",
    "profileUrl": "https://makerworld.com/en/models/719725-fidget-click-clack-swoosh-print-in-place-32-min#profileId-656139",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-137",
    "name": "Click Click Thumb Spin Fidget",
    "price": 960,
    "category": "kids",
    "image": "images/B-137.webp",
    "source": "https://makerworld.com/en/models/843772-click-click-thumb-spin-fidget",
    "creator": "Eternity Labs",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3cb4f2b26df34c/design/2024-12-03_239d0aaba3171.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 12.0,
    "profileName": "Single Colour",
    "profileUrl": "https://makerworld.com/en/models/843772-click-click-thumb-spin-fidget#profileId-806913",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 12.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-138",
    "name": "Fidget Toy",
    "price": 1440,
    "category": "kids",
    "image": "images/B-138.webp",
    "source": "https://makerworld.com/en/models/839560-fidget-toy",
    "creator": "Yoshman1984",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9fcbd36946e1a1/design/2024-12-01_cfa6dcd7f854f.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 18.0,
    "profileName": "Variant 1, small base",
    "profileUrl": "https://makerworld.com/en/models/839560-fidget-toy#profileId-785449",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 12.0
      },
      {
        "material": "PLA",
        "grams": 6.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-139",
    "name": "Fidget Toy Spirale",
    "price": 2720,
    "category": "kids",
    "image": "images/B-139.webp",
    "source": "https://makerworld.com/en/models/1195780-fidget-toy-spirale",
    "creator": "PROTO-X",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USde6bb0feb77118/design/2025-03-10_efae1a50d6795.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 34.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1195780-fidget-toy-spirale#profileId-1208397",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 34.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-140",
    "name": "Pocket Link Fidget - Print in Place",
    "price": 560,
    "category": "kids",
    "image": "images/B-140.jpg",
    "source": "https://makerworld.com/en/models/1085122-pocket-link-fidget-print-in-place",
    "creator": "VirtuBOB",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US935b599856f25e/design/2025-02-07_38d7892aea85e8.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 7.0,
    "profileName": "Original Size",
    "profileUrl": "https://makerworld.com/en/models/1085122-pocket-link-fidget-print-in-place#profileId-1077774",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-141",
    "name": "spiky sensory fidget",
    "price": 2560,
    "category": "kids",
    "image": "images/B-141.webp",
    "source": "https://makerworld.com/en/models/1525449-spiky-sensory-fidget",
    "creator": "Luke Edwin",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USbae067d09bf673/design/2025-06-16_c3923b1ea555b8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 32.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1525449-spiky-sensory-fidget#profileId-1599060",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 32.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-142",
    "name": "Fidget slider",
    "price": 4800,
    "category": "kids",
    "image": "images/B-142.png",
    "source": "https://makerworld.com/en/models/641726-fidget-slider",
    "creator": "BeardedAngel",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc8ed9410b356d6/design/2024-09-14_ac14f357a3abe.jfif?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 60.0,
    "profileName": "2 Color, With Pause, 0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/641726-fidget-slider#profileId-597829",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26.0
      },
      {
        "material": "PLA",
        "grams": 34.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-143",
    "name": "Transforming Fidget Ball Mini",
    "price": 27360,
    "category": "kids",
    "image": "images/B-143.webp",
    "source": "https://makerworld.com/en/models/482093-transforming-fidget-ball-mini",
    "creator": "macjfll",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US5e51b8f8ab3f7e/design/2024-06-02_2ac2dffeed26e.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 342.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/482093-transforming-fidget-ball-mini#profileId-393997",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 342.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-144",
    "name": "Infinity Fidget - Print in Place",
    "price": 1440,
    "category": "kids",
    "image": "images/B-144.webp",
    "source": "https://makerworld.com/en/models/2429789-infinity-fidget-print-in-place",
    "creator": "Tremmannaik",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3113a38ebd6b37/design/026a2a8e8d039db6.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 18.0,
    "profileName": "The Original - Single color",
    "profileUrl": "https://makerworld.com/en/models/2429789-infinity-fidget-print-in-place#profileId-2665303",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-145",
    "name": "IRIS FIDGET - PRINT IN PLACE - 3D FIDGET",
    "price": 1840,
    "category": "kids",
    "image": "images/B-145.webp",
    "source": "https://makerworld.com/en/models/1472499-iris-fidget-print-in-place-3d-fidget",
    "creator": "Louis",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US723df4a7f2a31a/design/2025-06-01_fc26bbc00012d.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 23.0,
    "profileName": "Optimized for fun :)",
    "profileUrl": "https://makerworld.com/en/models/1472499-iris-fidget-print-in-place-3d-fidget#profileId-1536634",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-146",
    "name": "small pocket sized fidget",
    "price": 4720,
    "category": "kids",
    "image": "images/B-146.webp",
    "source": "https://makerworld.com/en/models/2332842-small-pocket-sized-fidget",
    "creator": "rosedoesthings",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa69d829070100f/design/08c503995ca06ad1.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 59.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2332842-small-pocket-sized-fidget#profileId-2548843",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 59.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-147",
    "name": "Fidget Iris - 8 Sliders Snapfit",
    "price": 2400,
    "category": "kids",
    "image": "images/B-147.jpg",
    "source": "https://makerworld.com/en/models/558072-fidget-iris-8-sliders-snapfit",
    "creator": "Kaburuk",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb744feabf6caa8/design/2024-07-26_096dae22d259f.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 30.0,
    "profileName": "2025 Revision - 2 Color AMS Profile",
    "profileUrl": "https://makerworld.com/en/models/558072-fidget-iris-8-sliders-snapfit#profileId-1660015",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 22.0
      },
      {
        "material": "PLA",
        "grams": 8.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-148",
    "name": "Passthrough Ice cream fidget",
    "price": 3200,
    "category": "kids",
    "image": "images/B-148.webp",
    "source": "https://makerworld.com/en/models/597925-passthrough-ice-cream-fidget",
    "creator": "Jalu",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USfa541aefd8f538/design/2024-08-20_aa705d9bf1e6d.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 40.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/597925-passthrough-ice-cream-fidget#profileId-519977",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 19.0
      },
      {
        "material": "PLA",
        "grams": 21.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-149",
    "name": "Fiddle Fidget",
    "price": 3200,
    "category": "kids",
    "image": "images/B-149.jpg",
    "source": "https://makerworld.com/en/models/714037-fiddle-fidget",
    "creator": "haptic3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2fad642fde54cb/design/2024-10-19_cb12fddf3093e.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 40.0,
    "profileName": "large version",
    "profileUrl": "https://makerworld.com/en/models/714037-fiddle-fidget#profileId-963314",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "B-150",
    "name": "Star shaped Fidget (with handle)",
    "price": 4160,
    "category": "kids",
    "image": "images/B-150.jpg",
    "source": "https://makerworld.com/en/models/2134683-star-shaped-fidget-with-handle",
    "creator": "Epiq3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf70e8ea92f5ad3/design/2025-12-19_02ce0f082574d.gif?x-oss-process=image/resize,w_400/format,jpeg",
    "weightGrams": 52.0,
    "profileName": "80% size - Optimized for quality",
    "profileUrl": "https://makerworld.com/en/models/2134683-star-shaped-fidget-with-handle#profileId-2422867",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4.0
      },
      {
        "material": "PLA",
        "grams": 48.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-101",
    "name": "Christmas Tree Snowflake Ornament Set",
    "price": 4080,
    "category": "gifts",
    "image": "images/J-101.webp",
    "source": "https://makerworld.com/en/models/2004602-christmas-tree-snowflake-ornament-set",
    "creator": "Denka",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US1bd64d821349b7/design/2025-11-16_8057180831e67.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 51.0,
    "profileName": "0.2mm layer, 2 walls, 30% infill",
    "profileUrl": "https://makerworld.com/en/models/2004602-christmas-tree-snowflake-ornament-set#profileId-2158716",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 51.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-102",
    "name": "Customizable Christmas Ornaments",
    "price": 9280,
    "category": "gifts",
    "image": "images/J-102.webp",
    "source": "https://makerworld.com/en/models/3354693-customizable-christmas-ornaments",
    "creator": "Levnur",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USa05f8326077301/design/8f2beb7c6a09b9ac.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 116.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/3354693-customizable-christmas-ornaments#profileId-3840004",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 114.0
      },
      {
        "material": "PLA",
        "grams": 2.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-103",
    "name": "Puffy Coquette Bow Christmas Ornament",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-103.webp",
    "source": "https://makerworld.com/en/models/2004549-puffy-coquette-bow-christmas-ornament",
    "creator": "TheHexArtist",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US16798639db6104/design/2025-11-16_b1a1396d9b7fe8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 24.0,
    "profileName": "0.2mm layer, 2 walls, 3% infill",
    "profileUrl": "https://makerworld.com/en/models/2004549-puffy-coquette-bow-christmas-ornament#profileId-2158660",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-104",
    "name": "Christmas Ornaments Line Art",
    "price": 2400,
    "category": "gifts",
    "image": "images/J-104.webp",
    "source": "https://makerworld.com/en/models/3354016-christmas-ornaments-line-art",
    "creator": "SliQ",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USccf58d2b5842e2/design/27f589dc39086965.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 30.0,
    "profileName": "Christmas Ornaments Line Art",
    "profileUrl": "https://makerworld.com/en/models/3354016-christmas-ornaments-line-art#profileId-3812412",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 16.0
      },
      {
        "material": "PLA",
        "grams": 14.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-105",
    "name": "Rudolph Ornament - Perfect for Christmas - Deer",
    "price": 1840,
    "category": "gifts",
    "image": "images/J-105.webp",
    "source": "https://makerworld.com/en/models/1995449-rudolph-ornament-perfect-for-christmas-deer",
    "creator": "BotanyChic",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USaa65d8827a53fc/design/2025-11-14_d652vgh1qgse.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 23.0,
    "profileName": "80mm height - 1 color",
    "profileUrl": "https://makerworld.com/en/models/1995449-rudolph-ornament-perfect-for-christmas-deer#profileId-2153007",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 23.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-106",
    "name": "Modern Christmas ornaments  - baubles decoration",
    "price": 54880,
    "category": "gifts",
    "image": "images/J-106.webp",
    "source": "https://makerworld.com/en/models/2081246-modern-christmas-ornaments-baubles-decoration",
    "creator": "LuckyDuck",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US8d802f52f5cdee/design/2025-12-05_2fffa6a0da4818.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 686.0,
    "profileName": "0.16mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2081246-modern-christmas-ornaments-baubles-decoration#profileId-2248923",
    "profilePlates": 10,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 686.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-107",
    "name": "Spiral Ornament | Minimal Material",
    "price": 2240,
    "category": "gifts",
    "image": "images/J-107.webp",
    "source": "https://makerworld.com/en/models/2011443-spiral-ornament-minimal-material",
    "creator": "Bedan Designs",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US2742a5fc0a4507/design/2025-11-23_5fab628a9c5398.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 28.0,
    "profileName": "P2S/P1S|Structural Shell Tune|Lightweight|Add Suport",
    "profileUrl": "https://makerworld.com/en/models/2011443-spiral-ornament-minimal-material#profileId-2166938",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 28.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-108",
    "name": "Organic Modern Christmas Collection",
    "price": 6640,
    "category": "gifts",
    "image": "images/J-108.webp",
    "source": "https://makerworld.com/en/models/3383711-organic-modern-christmas-collection",
    "creator": "DecoDejw",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf5785a51594f84/design/4cc1a23efd82c8dc.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 83.0,
    "profileName": "Christmas Figures (4 PLATES), 0.2mm layer",
    "profileUrl": "https://makerworld.com/en/models/3383711-organic-modern-christmas-collection#profileId-3850153",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 22.0
      },
      {
        "material": "PLA",
        "grams": 21.0
      },
      {
        "material": "PLA",
        "grams": 27.0
      },
      {
        "material": "PLA",
        "grams": 13.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-109",
    "name": "Christmas Gift Tag Christmas Ornament",
    "price": 1600,
    "category": "gifts",
    "image": "images/J-109.webp",
    "source": "https://makerworld.com/en/models/3366829-christmas-gift-tag-christmas-ornament",
    "creator": "littleprintlove",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US31edc50c10880d/design/78d365ce4f3e40a4.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 20.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/3366829-christmas-gift-tag-christmas-ornament#profileId-3828802",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 18.0
      },
      {
        "material": "PLA",
        "grams": 2.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-110",
    "name": "Fuzzy Christmas Ball - Hang or Stand",
    "price": 7360,
    "category": "gifts",
    "image": "images/J-110.webp",
    "source": "https://makerworld.com/en/models/1932362-fuzzy-christmas-ball-hang-or-stand",
    "creator": "LetHimPrint",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USbf91d0eb9eac5e/design/2025-10-27_b2053026f1d748.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 92.0,
    "profileName": "Fuzzy Skin Christmas Ball // Hang & Stand",
    "profileUrl": "https://makerworld.com/en/models/1932362-fuzzy-christmas-ball-hang-or-stand#profileId-2074496",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 92.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-111",
    "name": "Nutcracker Decoration",
    "price": 7280,
    "category": "gifts",
    "image": "images/J-111.webp",
    "source": "https://makerworld.com/en/models/1932060-nutcracker-decoration",
    "creator": "SabreDesign",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US873fc4d6b98522/design/2025-10-27_cf1e2dfd637108.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 91.0,
    "profileName": "Nutcracker Ribbed",
    "profileUrl": "https://makerworld.com/en/models/1932060-nutcracker-decoration#profileId-2074135",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 91.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-112",
    "name": "Tealight Houses",
    "price": 29040,
    "category": "gifts",
    "image": "images/J-112.webp",
    "source": "https://makerworld.com/en/models/1941040-tealight-houses",
    "creator": "FörsterSepp",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US4d2d95a98d56c3/design/2025-10-30_bf798c469202f8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 363.0,
    "profileName": "Klein",
    "profileUrl": "https://makerworld.com/en/models/1941040-tealight-houses#profileId-2084675",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 363.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-113",
    "name": "Atmospheric Christmas Figures",
    "price": 31760,
    "category": "gifts",
    "image": "images/J-113.webp",
    "source": "https://makerworld.com/en/models/3147359-atmospheric-christmas-figures",
    "creator": "Biťo1",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc853c799324fe1/design/84a005c55a075c44.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 397.0,
    "profileName": "Atmospheric Christmas Figures – LED Tea Light Holders",
    "profileUrl": "https://makerworld.com/en/models/3147359-atmospheric-christmas-figures#profileId-3554696",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 397.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-114",
    "name": "Mini Christmas Ornament Elegant Ribbed Design",
    "price": 320,
    "category": "gifts",
    "image": "images/J-114.webp",
    "source": "https://makerworld.com/en/models/1948327-mini-christmas-ornament-elegant-ribbed-design",
    "creator": "Cipriani 3Design Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USbe65dd6aaa468a/design/2025-11-07_20da093e85e4d8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 4.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1948327-mini-christmas-ornament-elegant-ribbed-design#profileId-2093295",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-115",
    "name": "Minimalist Nativity Scene-Minimalist Nativity Set",
    "price": 28160,
    "category": "gifts",
    "image": "images/J-115.webp",
    "source": "https://makerworld.com/en/models/3279470-minimalist-nativity-scene-minimalist-nativity-set",
    "creator": "Urban Mix Studio",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US91241692256a64/design/a0c58c3c3ea8acf5.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 352.0,
    "profileName": "0.2mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/3279470-minimalist-nativity-scene-minimalist-nativity-set#profileId-3807758",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 73.0
      },
      {
        "material": "PLA",
        "grams": 173.0
      },
      {
        "material": "PLA",
        "grams": 106.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-116",
    "name": "Christmas Bow - Elegance that decorates!",
    "price": 1200,
    "category": "gifts",
    "image": "images/J-116.png",
    "source": "https://makerworld.com/en/models/2059130-christmas-bow-elegance-that-decorates",
    "creator": "3D Print Fusion Lab",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USfee0955c01ffe2/design/2025-11-30_a88a2f69ab2538.jfif?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 15.0,
    "profileName": "0.2mm layer, 2 walls, 8% infill",
    "profileUrl": "https://makerworld.com/en/models/2059130-christmas-bow-elegance-that-decorates#profileId-2223067",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 15.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-117",
    "name": "Merry Christmas with snowflake",
    "price": 3760,
    "category": "gifts",
    "image": "images/J-117.webp",
    "source": "https://makerworld.com/en/models/1939289-merry-christmas-with-snowflake",
    "creator": "DreamsLab3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US436e845137364a/design/2025-10-29_e408b5e5f8844.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 47.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1939289-merry-christmas-with-snowflake#profileId-2082614",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-118",
    "name": "Snowflakes for christmas tree decoration",
    "price": 2080,
    "category": "gifts",
    "image": "images/J-118.webp",
    "source": "https://makerworld.com/en/models/763210-snowflakes-for-christmas-tree-decoration",
    "creator": "miglo",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USe6e502652eaba9/design/2024-11-06_270a9212a1dea.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 26.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/763210-snowflakes-for-christmas-tree-decoration#profileId-698133",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 26.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-119",
    "name": "Christmas tree ornaments",
    "price": 2640,
    "category": "gifts",
    "image": "images/J-119.webp",
    "source": "https://makerworld.com/en/models/799667-christmas-tree-ornaments",
    "creator": "OrangeSs",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/UScfacdc23e4e570/design/2024-11-18_042b9be81595d.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 33.0,
    "profileName": "A1 P1S P1P X1C",
    "profileUrl": "https://makerworld.com/en/models/799667-christmas-tree-ornaments#profileId-739505",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 33.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-120",
    "name": "Crochet Christmas Reindeer – Cozy Holiday Decor",
    "price": 4240,
    "category": "gifts",
    "image": "images/J-120.webp",
    "source": "https://makerworld.com/en/models/3337730-crochet-christmas-reindeer-cozy-holiday-decor",
    "creator": "LetHimPrint",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb811a8f846c088/design/783c5450daf345dc.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 53.0,
    "profileName": "Single Reindeer 125 mm – Crochet Xmas Reindeer",
    "profileUrl": "https://makerworld.com/en/models/3337730-crochet-christmas-reindeer-cozy-holiday-decor#profileId-3830336",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 53.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-121",
    "name": "Knitted Christmas Bauble – Cable Knit Ornament",
    "price": 3360,
    "category": "gifts",
    "image": "images/J-121.webp",
    "source": "https://makerworld.com/en/models/3407460-knitted-christmas-bauble-cable-knit-ornament",
    "creator": "vaclav.klich",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc8dbe03000d19c/design/91369ee91ecde0c8.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 42.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/3407460-knitted-christmas-bauble-cable-knit-ornament#profileId-3880607",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 42.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-122",
    "name": "Small Angel with Heart",
    "price": 2960,
    "category": "gifts",
    "image": "images/J-122.webp",
    "source": "https://makerworld.com/en/models/2064214-small-angel-with-heart",
    "creator": "WorldOfLayers",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USd53a9938adee96/design/2025-12-01_cb5cee700d5c5.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 37.0,
    "profileName": "0.2mm layer, 2 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/2064214-small-angel-with-heart#profileId-2228982",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 37.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-123",
    "name": "Winter Reindeer Trio – Minimal Christmas Decor",
    "price": 1280,
    "category": "gifts",
    "image": "images/J-123.webp",
    "source": "https://makerworld.com/en/models/1493203-winter-reindeer-trio-minimal-christmas-decor",
    "creator": "risi_enma",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USec8fd3591372c5/design/2025-06-07_645d7375800c7.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 16.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1493203-winter-reindeer-trio-minimal-christmas-decor#profileId-1561170",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 16.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-124",
    "name": "Majestic Christmas Deer Ornament & Decor Stand",
    "price": 3120,
    "category": "gifts",
    "image": "images/J-124.webp",
    "source": "https://makerworld.com/en/models/1902756-majestic-christmas-deer-ornament-decor-stand",
    "creator": "3D engineering & decoration",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USbe6b7bc5695552/design/2025-10-19_4cbb9f1b2b5168.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 39.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1902756-majestic-christmas-deer-ornament-decor-stand#profileId-2039532",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 39.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-125",
    "name": "Mini Christmas Snowman Tea Light Ornament",
    "price": 7760,
    "category": "gifts",
    "image": "images/J-125.webp",
    "source": "https://makerworld.com/en/models/2022624-mini-christmas-snowman-tea-light-ornament",
    "creator": "Maxx Design",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US39d2054ca0a213/design/2025-11-21_b3fdcdbd016528.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 97.0,
    "profileName": "Top Hat",
    "profileUrl": "https://makerworld.com/en/models/2022624-mini-christmas-snowman-tea-light-ornament#profileId-2180166",
    "profilePlates": 4,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 49.0
      },
      {
        "material": "PLA",
        "grams": 12.0
      },
      {
        "material": "PLA",
        "grams": 10.0
      },
      {
        "material": "PLA",
        "grams": 26.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-126",
    "name": "Xmas reindeer christmas tree deco",
    "price": 7120,
    "category": "gifts",
    "image": "images/J-126.webp",
    "source": "https://makerworld.com/en/models/1855680-xmas-reindeer-christmas-tree-deco",
    "creator": "Tommy_druckt!",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USf5e40767a512a4/design/2025-10-04_a6b7c5f4a09458.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 89.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1855680-xmas-reindeer-christmas-tree-deco#profileId-1984211",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 89.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-127",
    "name": "Christmas Reindeer",
    "price": 1680,
    "category": "gifts",
    "image": "images/J-127.webp",
    "source": "https://makerworld.com/en/models/2003920-christmas-reindeer",
    "creator": "SabreDesign",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US54e683eb15165c/design/2025-11-16_c540fbdd15f248.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 21.0,
    "profileName": "Reindeer 135 mm",
    "profileUrl": "https://makerworld.com/en/models/2003920-christmas-reindeer#profileId-2157911",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 21.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-128",
    "name": "Knitted Hanging Christmas Star – 3 Sizes",
    "price": 4560,
    "category": "gifts",
    "image": "images/J-128.webp",
    "source": "https://makerworld.com/en/models/3330084-knitted-hanging-christmas-star-3-sizes",
    "creator": "LetHimPrint",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US554252a6142972/design/18fb6664d3c5d0dc.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 57.0,
    "profileName": "Knitted Hanging Christmas Star – 3 Sizes",
    "profileUrl": "https://makerworld.com/en/models/3330084-knitted-hanging-christmas-star-3-sizes#profileId-3782050",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 19.0
      },
      {
        "material": "PLA",
        "grams": 24.0
      },
      {
        "material": "PLA",
        "grams": 14.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-129",
    "name": "Knitted Reindeer Figurine – Cozy Christmas Decor",
    "price": 4960,
    "category": "gifts",
    "image": "images/J-129.webp",
    "source": "https://makerworld.com/en/models/2075528-knitted-reindeer-figurine-cozy-christmas-decor",
    "creator": "Sculturissimo3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US15effd5ea72f62/design/2025-12-04_39b7162de2408.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 62.0,
    "profileName": "0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2075528-knitted-reindeer-figurine-cozy-christmas-decor#profileId-2243133",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 62.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-130",
    "name": "Filigree Star Christmas Tree Topper",
    "price": 20560,
    "category": "gifts",
    "image": "images/J-130.webp",
    "source": "https://makerworld.com/en/models/2016679-filigree-star-christmas-tree-topper",
    "creator": "Cosa_93",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USfac881ed718200/design/2025-11-19_e7045365a817b.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 257.0,
    "profileName": "0.12mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2016679-filigree-star-christmas-tree-topper#profileId-2172969",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 257.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-131",
    "name": "Christmas village bauble/ornament",
    "price": 720,
    "category": "gifts",
    "image": "images/J-131.webp",
    "source": "https://makerworld.com/en/models/857099-christmas-village-bauble-ornament",
    "creator": "Wickieprints",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US97891a51c3141/design/2024-12-07_f3cb41feb7199.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 9.0,
    "profileName": "0.08mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/857099-christmas-village-bauble-ornament#profileId-806601",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4.0
      },
      {
        "material": "PLA",
        "grams": 1.0
      },
      {
        "material": "PLA",
        "grams": 2.0
      },
      {
        "material": "PLA",
        "grams": 2.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-132",
    "name": "Cute minimalist Christmas reindeer decoration",
    "price": 3200,
    "category": "gifts",
    "image": "images/J-132.webp",
    "source": "https://makerworld.com/en/models/2008162-cute-minimalist-christmas-reindeer-decoration",
    "creator": "Deltaprints",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US7a16639412b4ff/design/2025-11-17_3ced2dd37097c.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 40.0,
    "profileName": "0.16mm layer, 3 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2008162-cute-minimalist-christmas-reindeer-decoration#profileId-2162987",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-133",
    "name": "Inseparable Gnomes - No AMS",
    "price": 16000,
    "category": "gifts",
    "image": "images/J-133.webp",
    "source": "https://makerworld.com/en/models/2078489-inseparable-gnomes-no-ams",
    "creator": "Dano98",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9009fc2b154824/design/2025-12-05_62df81827f2468.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 200.0,
    "profileName": "Original - 2 Gnomes",
    "profileUrl": "https://makerworld.com/en/models/2078489-inseparable-gnomes-no-ams#profileId-2245698",
    "profilePlates": 8,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 112.0
      },
      {
        "material": "PLA",
        "grams": 65.0
      },
      {
        "material": "PLA",
        "grams": 6.0
      },
      {
        "material": "PLA",
        "grams": 17.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-134",
    "name": "10 Christmas pendants – Easy decorations - NO AMS",
    "price": 2160,
    "category": "gifts",
    "image": "images/J-134.webp",
    "source": "https://makerworld.com/en/models/3260710-10-christmas-pendants-easy-decorations-no-ams",
    "creator": "3dprimolayer",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9375f4113329a4/design/45b4a5e6c83f8e78.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 27.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/3260710-10-christmas-pendants-easy-decorations-no-ams#profileId-3696474",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 27.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-135",
    "name": "Weihnachtsschmuck",
    "price": 10480,
    "category": "gifts",
    "image": "images/J-135.webp",
    "source": "https://makerworld.com/en/models/3101541-weihnachtsschmuck",
    "creator": "Biťo1",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/UScdfdfb42bae7d1/design/7f4c67626c82d37b.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 131.0,
    "profileName": "Elegant Christmas Ornaments",
    "profileUrl": "https://makerworld.com/en/models/3101541-weihnachtsschmuck#profileId-3496055",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 131.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-136",
    "name": "Christmas Ball (editable)",
    "price": 1040,
    "category": "gifts",
    "image": "images/J-136.webp",
    "source": "https://makerworld.com/en/models/840408-christmas-ball-editable",
    "creator": "rauloko11500",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USebc0e25e374ad9/design/2024-12-01_7bdf3522cb5df.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 13.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/840408-christmas-ball-editable#profileId-808362",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 6.0
      },
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-137",
    "name": "Christmas Tree Ornament",
    "price": 1040,
    "category": "gifts",
    "image": "images/J-137.webp",
    "source": "https://makerworld.com/en/models/2118408-christmas-tree-ornament",
    "creator": "SabreDesign",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US1c03346b3ec7b0/design/2025-12-15_e9103f4e44aac8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 13.0,
    "profileName": "Tree ornament",
    "profileUrl": "https://makerworld.com/en/models/2118408-christmas-tree-ornament#profileId-2292731",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 13.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-138",
    "name": "Christmas tree",
    "price": 3680,
    "category": "gifts",
    "image": "images/J-138.webp",
    "source": "https://makerworld.com/en/models/802130-christmas-tree",
    "creator": "m3nDes.creations",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US78e98f3e72101e/design/2025-11-29_9ea698388ebc5.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 46.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/802130-christmas-tree#profileId-742218",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 46.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-139",
    "name": "Christmas nativity scene",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-139.webp",
    "source": "https://makerworld.com/en/models/1955451-christmas-nativity-scene",
    "creator": "DQM1N1K",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6f549fb1f3501c/design/2025-11-03_25588f9f9560c.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 24.0,
    "profileName": "Nativity scene",
    "profileUrl": "https://makerworld.com/en/models/1955451-christmas-nativity-scene#profileId-2101589",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-140",
    "name": "Cozy Knit Snowman – Knitted Winter Decoration",
    "price": 19360,
    "category": "gifts",
    "image": "images/J-140.webp",
    "source": "https://makerworld.com/en/models/3449265-cozy-knit-snowman-knitted-winter-decoration",
    "creator": "Jone 3D Design",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US5332255af16bad/design/f2c1c19c7e41886b.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 242.0,
    "profileName": "0.2mm layer, 2 walls, 5% infill, AMS",
    "profileUrl": "https://makerworld.com/en/models/3449265-cozy-knit-snowman-knitted-winter-decoration#profileId-3934657",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 148.0
      },
      {
        "material": "PLA",
        "grams": 75.0
      },
      {
        "material": "PLA",
        "grams": 12.0
      },
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-141",
    "name": "Knitted Fir Tree Tealight Holder",
    "price": 3760,
    "category": "gifts",
    "image": "images/J-141.webp",
    "source": "https://makerworld.com/en/models/3327426-knitted-fir-tree-tealight-holder",
    "creator": "The Filming Tinkerer",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc8acea731f8eb6/design/f68eae5c4bf24502.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 47.0,
    "profileName": "0.16mm layer, 1 walls, 10% infill",
    "profileUrl": "https://makerworld.com/en/models/3327426-knitted-fir-tree-tealight-holder#profileId-3778872",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 47.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-142",
    "name": "Little Christmas Deer",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-142.webp",
    "source": "https://makerworld.com/en/models/808099-little-christmas-deer",
    "creator": "jdormer9",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US63b729f5cd8a7/design/2024-11-21_e4f5401654335.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 24.0,
    "profileName": "Mix (14x) 0.16mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/808099-little-christmas-deer#profileId-748944",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-143",
    "name": "Christmas Tree Minimalistic Decor No Supports Art",
    "price": 3200,
    "category": "gifts",
    "image": "images/J-143.webp",
    "source": "https://makerworld.com/en/models/3338545-christmas-tree-minimalistic-decor-no-supports-art",
    "creator": "NowCraft3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USe11a183eb1e66c/design/ecf8cf92cb6b63fa.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 40.0,
    "profileName": "with star no supports 0.2mm layer, 2 walls, 5% infill",
    "profileUrl": "https://makerworld.com/en/models/3338545-christmas-tree-minimalistic-decor-no-supports-art#profileId-3792394",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 40.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-144",
    "name": "Personalized Christmas Ornaments",
    "price": 4640,
    "category": "gifts",
    "image": "images/J-144.webp",
    "source": "https://makerworld.com/en/models/793332-personalized-christmas-ornaments",
    "creator": "KurLDesigns",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USe2f27682f0ab35/design/2024-11-16_d4c8237305415.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 58.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/793332-personalized-christmas-ornaments#profileId-732036",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 43.0
      },
      {
        "material": "PLA",
        "grams": 8.0
      },
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-145",
    "name": "Riesenrad Snowflake",
    "price": 38160,
    "category": "gifts",
    "image": "images/J-145.webp",
    "source": "https://makerworld.com/en/models/1968986-riesenrad-snowflake",
    "creator": "A-E-D 3D-DRUCK",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb49ee80ca3bcf9/design/2025-11-07_0ec722f4a01808.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 477.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/1968986-riesenrad-snowflake#profileId-2116926",
    "profilePlates": 11,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 5.0
      },
      {
        "material": "PLA",
        "grams": 217.0
      },
      {
        "material": "PLA",
        "grams": 175.0
      },
      {
        "material": "PLA",
        "grams": 80.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-146",
    "name": "ornaments • xmas 2025",
    "price": 12960,
    "category": "gifts",
    "image": "images/J-146.webp",
    "source": "https://makerworld.com/en/models/2063478-ornaments-xmas-2025",
    "creator": "h3li0",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USc7bca57b147d75/design/2025-12-01_caf2960dc480f8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 162.0,
    "profileName": "ornaments • 4 design options",
    "profileUrl": "https://makerworld.com/en/models/2063478-ornaments-xmas-2025#profileId-2228133",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PETG",
        "grams": 14.0
      },
      {
        "material": "PLA",
        "grams": 74.0
      },
      {
        "material": "PLA",
        "grams": 37.0
      },
      {
        "material": "PLA",
        "grams": 37.0
      }
    ],
    "weightNeedsPlaCheck": true,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-147",
    "name": "Christmas Tree Bowls (Stackable)",
    "price": 11200,
    "category": "gifts",
    "image": "images/J-147.webp",
    "source": "https://makerworld.com/en/models/2134302-christmas-tree-bowls-stackable",
    "creator": "ML Designe",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US3aacb541586ebb/design/2025-12-19_e9bf4d0c766c3.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 140.0,
    "profileName": "For A1/P1/X1",
    "profileUrl": "https://makerworld.com/en/models/2134302-christmas-tree-bowls-stackable#profileId-2311537",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 70.0
      },
      {
        "material": "PLA",
        "grams": 70.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-148",
    "name": "Japandi Christmas Ball",
    "price": 6080,
    "category": "gifts",
    "image": "images/J-148.webp",
    "source": "https://makerworld.com/en/models/2065097-japandi-christmas-ball",
    "creator": "SabreDesign",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US440ee7a788fb05/design/2025-12-01_1ab62b0f3cb46.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 76.0,
    "profileName": "Japandi Ball 70 mm",
    "profileUrl": "https://makerworld.com/en/models/2065097-japandi-christmas-ball#profileId-2230009",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 49.0
      },
      {
        "material": "PLA",
        "grams": 27.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-149",
    "name": "Tea light house",
    "price": 20160,
    "category": "gifts",
    "image": "images/J-149.webp",
    "source": "https://makerworld.com/en/models/1895187-tea-light-house",
    "creator": "GulagHias",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US466e10851041fe/design/2025-10-16_8a2f49e9580db8.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 252.0,
    "profileName": "Tealight Village several plates",
    "profileUrl": "https://makerworld.com/en/models/1895187-tea-light-house#profileId-2090694",
    "profilePlates": 5,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 252.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-150",
    "name": "Funny Christmas tree",
    "price": 11120,
    "category": "gifts",
    "image": "images/J-150.webp",
    "source": "https://makerworld.com/en/models/2037901-funny-christmas-tree",
    "creator": "novYTerra🌿",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US93ac150c1a9dde/design/2025-11-25_34a20662ef255.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 139.0,
    "profileName": "A1 - 0.2mm layer, 2 walls, 4% infill",
    "profileUrl": "https://makerworld.com/en/models/2037901-funny-christmas-tree#profileId-2198422",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 20.0
      },
      {
        "material": "PLA",
        "grams": 17.0
      },
      {
        "material": "PLA",
        "grams": 98.0
      },
      {
        "material": "PLA",
        "grams": 4.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-151",
    "name": "Elegant Christmas Bauble",
    "price": 1360,
    "category": "gifts",
    "image": "images/J-151.webp",
    "source": "https://makerworld.com/en/models/849906-elegant-christmas-bauble",
    "creator": "Hockey Dad",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US8edcf57414afbc/design/2024-12-04_90475cf2dc18b.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 17.0,
    "profileName": "Bauble 0.08mm layer, 2 walls, 100% infill",
    "profileUrl": "https://makerworld.com/en/models/849906-elegant-christmas-bauble#profileId-797638",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 3.0
      },
      {
        "material": "PLA",
        "grams": 5.0
      },
      {
        "material": "PLA",
        "grams": 9.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-152",
    "name": "Collection 1 – 5 Light Up Christmas Baubles",
    "price": 10320,
    "category": "gifts",
    "image": "images/J-152.webp",
    "source": "https://makerworld.com/en/models/3249531-collection-1-5-light-up-christmas-baubles",
    "creator": "Hatch_3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US9ac9357454422c/design/7f2956427200e3bc.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 129.0,
    "profileName": "Child decorating the tree",
    "profileUrl": "https://makerworld.com/en/models/3249531-collection-1-5-light-up-christmas-baubles#profileId-3682544",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 129.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-153",
    "name": "Meshed Christmas Ornaments - Tea Light Compatible",
    "price": 5440,
    "category": "gifts",
    "image": "images/J-153.webp",
    "source": "https://makerworld.com/en/models/777746-meshed-christmas-ornaments-tea-light-compatible",
    "creator": "Maxx Design",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US6817ca3d1e4f58/design/2024-11-11_80a5917a4736f.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 68.0,
    "profileName": "Multi Color with AMS",
    "profileUrl": "https://makerworld.com/en/models/777746-meshed-christmas-ornaments-tea-light-compatible#profileId-714529",
    "profilePlates": 3,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 42.0
      },
      {
        "material": "PLA",
        "grams": 2.0
      },
      {
        "material": "PLA",
        "grams": 24.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-154",
    "name": "Tealight houses with winter landscape",
    "price": 53280,
    "category": "gifts",
    "image": "images/J-154.webp",
    "source": "https://makerworld.com/en/models/2021342-tealight-houses-with-winter-landscape",
    "creator": "FörsterSepp",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US54d0a943e8ba58/design/2025-11-13_5faff5678e1a58.jpeg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 666.0,
    "profileName": "Standard",
    "profileUrl": "https://makerworld.com/en/models/2021342-tealight-houses-with-winter-landscape#profileId-2178451",
    "profilePlates": 2,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 666.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-155",
    "name": "Christmas Bauble / Ornament / Decoration",
    "price": 1120,
    "category": "gifts",
    "image": "images/J-155.webp",
    "source": "https://makerworld.com/en/models/1810774-christmas-bauble-ornament-decoration",
    "creator": "Sebo3D",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US81233e8ccbb96b/design/2025-09-19_564300398f86c.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 14.0,
    "profileName": "0.08mm layer, 2 walls, 100% infill",
    "profileUrl": "https://makerworld.com/en/models/1810774-christmas-bauble-ornament-decoration#profileId-1931817",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 4.0
      },
      {
        "material": "PLA",
        "grams": 10.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-156",
    "name": "Wreath-Shaped Photo Frame Ornament  Snap-Fit",
    "price": 560,
    "category": "gifts",
    "image": "images/J-156.webp",
    "source": "https://makerworld.com/en/models/2128558-wreath-shaped-photo-frame-ornament-snap-fit",
    "creator": "Craftastic",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/US5d00afb0ea617a/design/2025-12-17_161fe2eeb031d.png?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 7.0,
    "profileName": "0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2128558-wreath-shaped-photo-frame-ornament-snap-fit#profileId-2304755",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 7.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  },
  {
    "sku": "J-157",
    "name": "Christmas Angels ornaments set",
    "price": 1920,
    "category": "gifts",
    "image": "images/J-157.webp",
    "source": "https://makerworld.com/en/models/2044050-christmas-angels-ornaments-set",
    "creator": "Goomol DIY",
    "sourceImage": "https://makerworld.bblmw.com/makerworld/model/USb5a55195310651/design/2025-11-26_2872aa9768caf8.jpg?x-oss-process=image/resize,w_400/format,webp",
    "weightGrams": 24.0,
    "profileName": "Angel girl ornament 0.2mm layer, 2 walls, 15% infill",
    "profileUrl": "https://makerworld.com/en/models/2044050-christmas-angels-ornaments-set#profileId-2205471",
    "profilePlates": 1,
    "profileMaterials": [
      {
        "material": "PLA",
        "grams": 24.0
      }
    ],
    "weightNeedsPlaCheck": false,
    "weightCheckedDate": "2026-11-02"
  }
];
if(typeof module!=="undefined") module.exports=PRODUCTS;
