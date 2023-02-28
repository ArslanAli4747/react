const data = [
    {
      "category": "Electronics",
      "name": "Phone Contraption",
      "price": "149.95",
      "sale_price": "119.95",
      "subcategory": "Phone",
      "sentence": "Ut sodales, mi non ullamcorper facilisis, tortor justo finibus ligula, a cursus arcu sapien vel purus"
    },
    {
      "category": "Automotive",
      "name": "Engine Tool",
      "price": "124",
      "sale_price": "86",
      "subcategory": "Engine",
      "sentence": "Etiam ut purus nunc"
    },
    {
      "category": "Beauty",
      "name": "Personal Component",
      "price": "114",
      "sale_price": "79",
      "subcategory": "Personal",
      "sentence": "Sed sollicitudin, sem non efficitur dictum, dui sapien sagittis neque, a rutrum turpis est eget neque"
    },
    {
      "category": "Home",
      "name": "Kitchen Gadget",
      "price": "15.99",
      "sale_price": "12.99",
      "subcategory": "Kitchen",
      "sentence": "Sed in lacus ante"
    },
    {
      "category": "Clothing",
      "name": "Baby Thingamajig",
      "price": "159.95",
      "sale_price": "143",
      "subcategory": "Baby",
      "sentence": "Donec egestas id ligula eu euismod"
    },
    {
      "category": "Pets",
      "name": "Cat Accessory",
      "price": "103.95",
      "sale_price": "72",
      "subcategory": "Cat",
      "sentence": "Proin sed neque ac mi faucibus auctor aliquet id velit"
    },
    {
      "category": "Activity",
      "name": "Swimming Widget",
      "price": "44",
      "sale_price": "35",
      "subcategory": "Swimming",
      "sentence": "Phasellus vel efficitur ipsum"
    },
    {
      "category": "Activity",
      "name": "Swimming Accessory",
      "price": "197",
      "sale_price": "177.99",
      "subcategory": "Swimming",
      "sentence": "Nulla sit amet maximus lorem."
    },
    {
      "category": "Health",
      "name": "Medicine Contraption",
      "price": "173.99",
      "sale_price": "103.95",
      "subcategory": "Medicine",
      "sentence": "Morbi nulla massa, accumsan ut congue tempus, aliquam sit amet libero"
    },
    {
      "category": "Pets",
      "name": "Aquarium Apparatus",
      "price": "177.99",
      "sale_price": "106.99",
      "subcategory": "Aquarium",
      "sentence": "In iaculis in risus condimentum rhoncus"
    },
    {
      "category": "Clothing",
      "name": "Jewelry Device",
      "price": "34.99",
      "sale_price": "30.99",
      "subcategory": "Jewelry",
      "sentence": "Morbi dignissim ipsum orci, sit amet malesuada tortor venenatis tempor"
    },
    {
      "category": "Automotive",
      "name": "Truck Thingamajig",
      "price": "28.95",
      "sale_price": "25.95",
      "subcategory": "Truck",
      "sentence": "Phasellus at ipsum pellentesque metus molestie rutrum"
    },
    {
      "category": "Home",
      "name": "Dining Implement",
      "price": "112.95",
      "sale_price": "67",
      "subcategory": "Dining",
      "sentence": "Praesent sit amet ex eget massa malesuada laoreet ac non sapien"
    },
    {
      "category": "Entertainment",
      "name": "Book Paraphernalia",
      "price": "103",
      "sale_price": "61",
      "subcategory": "Book",
      "sentence": "Nam porttitor sagittis elementum"
    },
    {
      "category": "Entertainment",
      "name": "Music Gear",
      "price": "128.99",
      "sale_price": "76",
      "subcategory": "Music",
      "sentence": "Vivamus justo nulla, tempus et magna et, cursus scelerisque turpis"
    },
    {
      "category": "Pets",
      "name": "Cat Item",
      "price": "167",
      "sale_price": "116",
      "subcategory": "Cat",
      "sentence": "Nulla ut laoreet massa, pretium tincidunt quam."
    },
    {
      "category": "Entertainment",
      "name": "Movie Component",
      "price": "24",
      "sale_price": "14",
      "subcategory": "Movie",
      "sentence": "Vestibulum quam eros, semper nec sollicitudin et, rhoncus ac nulla"
    },
    {
      "category": "Electronics",
      "name": "Phone Attachment",
      "price": "72.99",
      "sale_price": "50.99",
      "subcategory": "Phone",
      "sentence": "Quisque nec imperdiet lectus"
    },
    {
      "category": "Health",
      "name": "Medicine Paraphernalia",
      "price": "123.95",
      "sale_price": "73",
      "subcategory": "Medicine",
      "sentence": "Vivamus dignissim in purus a eleifend"
    },
    {
      "category": "Health",
      "name": "Medicine Gear",
      "price": "109",
      "sale_price": "87",
      "subcategory": "Medicine",
      "sentence": "Sed quis cursus turpis, lacinia interdum dolor"
    },
    {
      "category": "Pets",
      "name": "Cat Contraption",
      "price": "45.95",
      "sale_price": "31.99",
      "subcategory": "Cat",
      "sentence": "Nam sit amet ornare sapien, eleifend fermentum augue."
    },
    {
      "category": "Automotive",
      "name": "Tire Kit",
      "price": "43.99",
      "sale_price": "25.99",
      "subcategory": "Tire",
      "sentence": "Sed aliquam accumsan libero, vitae aliquet metus mattis non"
    },
    {
      "category": "Home",
      "name": "Furniture Widget",
      "price": "158.95",
      "sale_price": "142.99",
      "subcategory": "Furniture",
      "sentence": "Nam justo velit, venenatis nec sapien ac, porttitor fringilla nunc"
    },
    {
      "category": "Health",
      "name": "Nutrition Doodad",
      "price": "106.99",
      "sale_price": "84",
      "subcategory": "Nutrition",
      "sentence": "Curabitur egestas molestie tortor, vitae maximus velit auctor in"
    },
    {
      "category": "Entertainment",
      "name": "Movie Supplies",
      "price": "183",
      "sale_price": "128.99",
      "subcategory": "Movie",
      "sentence": "Vivamus aliquet commodo magna id viverra"
    },
    {
      "category": "Clothing",
      "name": "Mens Attachment",
      "price": "150.95",
      "sale_price": "135",
      "subcategory": "Mens",
      "sentence": "Fusce quis dui sed ligula viverra tempus in ac orci"
    },
    {
      "category": "Entertainment",
      "name": "Party Whatchamacallit",
      "price": "87.95",
      "sale_price": "78.95",
      "subcategory": "Party",
      "sentence": "Ut cursus vehicula fringilla"
    },
    {
      "category": "Activity",
      "name": "Sports Apparatus",
      "price": "36.99",
      "sale_price": "32.99",
      "subcategory": "Sports",
      "sentence": "Curabitur vitae dictum nibh, non accumsan turpis"
    },
    {
      "category": "Activity",
      "name": "Camping Mechanism",
      "price": "89",
      "sale_price": "62.95",
      "subcategory": "Camping",
      "sentence": "Sed sed suscipit eros, nec posuere nulla"
    },
    {
      "category": "Automotive",
      "name": "Car Attachment",
      "price": "66.95",
      "sale_price": "39",
      "subcategory": "Car",
      "sentence": "Cras sagittis eu magna et bibendum"
    },
    {
      "category": "Activity",
      "name": "Sports Doodad",
      "price": "187",
      "sale_price": "149.99",
      "subcategory": "Sports",
      "sentence": "Vivamus congue, metus in fringilla facilisis, ante orci posuere turpis, nec malesuada massa nisi dignissim mi"
    },
    {
      "category": "Pets",
      "name": "Dog Device",
      "price": "102",
      "sale_price": "61",
      "subcategory": "Dog",
      "sentence": "Cras sed arcu tempus, facilisis nisl vitae, convallis sem"
    },
    {
      "category": "Pets",
      "name": "Cat Contraption",
      "price": "75.95",
      "sale_price": "67.99",
      "subcategory": "Cat",
      "sentence": "Cras aliquam pharetra libero nec varius"
    },
    {
      "category": "Activity",
      "name": "Outdoors Widget",
      "price": "72",
      "sale_price": "43",
      "subcategory": "Outdoors",
      "sentence": "Donec venenatis tincidunt eros nec volutpat"
    },
    {
      "category": "Automotive",
      "name": "Engine Accessory",
      "price": "195.99",
      "sale_price": "136.95",
      "subcategory": "Engine",
      "sentence": "Fusce elit metus, consequat ut tortor sit amet, porttitor feugiat nisl"
    },
    {
      "category": "Entertainment",
      "name": "Game Device",
      "price": "100",
      "sale_price": "90.99",
      "subcategory": "Game",
      "sentence": "Suspendisse potenti"
    },
    {
      "category": "Beauty",
      "name": "Skin Care Gear",
      "price": "35",
      "sale_price": "28.99",
      "subcategory": "Skin Care",
      "sentence": "Phasellus tincidunt tristique placerat"
    },
    {
      "category": "Health",
      "name": "Medicine Instrument",
      "price": "13",
      "sale_price": "10.95",
      "subcategory": "Medicine",
      "sentence": "Phasellus purus mauris, bibendum sit amet leo eu, tempor vestibulum neque"
    },
    {
      "category": "Beauty",
      "name": "Bath Rig",
      "price": "29.95",
      "sale_price": "26",
      "subcategory": "Bath",
      "sentence": "Ut at pharetra lectus"
    },
    {
      "category": "Health",
      "name": "Medicine Gadget",
      "price": "67",
      "sale_price": "40.95",
      "subcategory": "Medicine",
      "sentence": "Etiam sodales lectus vel lectus scelerisque pretium ut sed felis"
    },
    {
      "category": "Health",
      "name": "Medicine Contraption",
      "price": "69",
      "sale_price": "48.95",
      "subcategory": "Medicine",
      "sentence": "Integer ut vehicula odio, eget rhoncus tellus"
    },
    {
      "category": "Automotive",
      "name": "Truck Machine",
      "price": "21.99",
      "sale_price": "12.95",
      "subcategory": "Truck",
      "sentence": "Donec fringilla erat a neque dignissim, sit amet pharetra odio pulvinar"
    },
    {
      "category": "Clothing",
      "name": "Baby Item",
      "price": "120",
      "sale_price": "84.99",
      "subcategory": "Baby",
      "sentence": "Aliquam venenatis hendrerit malesuada"
    },
    {
      "category": "Activity",
      "name": "Fitness Device",
      "price": "139.95",
      "sale_price": "97.95",
      "subcategory": "Fitness",
      "sentence": "Cras mauris orci, ornare in ex sed, dapibus semper mauris"
    },
    {
      "category": "Health",
      "name": "Nutrition Doodad",
      "price": "174.95",
      "sale_price": "156",
      "subcategory": "Nutrition",
      "sentence": "In imperdiet purus metus, id condimentum lectus ultricies vel"
    },
    {
      "category": "Automotive",
      "name": "Engine Thingamajig",
      "price": "150",
      "sale_price": "120",
      "subcategory": "Engine",
      "sentence": "Morbi sodales dui vitae tristique tincidunt"
    },
    {
      "category": "Home",
      "name": "Bedding Gear",
      "price": "101.95",
      "sale_price": "60.95",
      "subcategory": "Bedding",
      "sentence": "Donec lectus elit, gravida sit amet elit in, feugiat auctor dui"
    },
    {
      "category": "Activity",
      "name": "Swimming Gear",
      "price": "105.99",
      "sale_price": "94.99",
      "subcategory": "Swimming",
      "sentence": "Ut eleifend quis quam id mattis"
    },
    {
      "category": "Entertainment",
      "name": "Party Widget",
      "price": "90",
      "sale_price": "81.99",
      "subcategory": "Party",
      "sentence": "Maecenas massa metus, blandit at varius vel, fermentum vitae odio"
    },
    {
      "category": "Home",
      "name": "Bedding Doodad",
      "price": "107.99",
      "sale_price": "74.95",
      "subcategory": "Bedding",
      "sentence": "Aliquam lobortis cursus erat quis dapibus"
    },
    {
      "category": "Health",
      "name": "Medicine Attachment",
      "price": "49.95",
      "sale_price": "34.99",
      "subcategory": "Medicine",
      "sentence": "Curabitur tristique vehicula vestibulum"
    },
    {
      "category": "Entertainment",
      "name": "Movie Apparatus",
      "price": "48.95",
      "sale_price": "38",
      "subcategory": "Movie",
      "sentence": "Nulla non tempus turpis"
    },
    {
      "category": "Home",
      "name": "Storage Item",
      "price": "99.95",
      "sale_price": "79.99",
      "subcategory": "Storage",
      "sentence": "Sed quis cursus turpis, lacinia interdum dolor"
    },
    {
      "category": "Electronics",
      "name": "Camera Apparatus",
      "price": "82",
      "sale_price": "65.99",
      "subcategory": "Camera",
      "sentence": "Duis facilisis justo eget mauris hendrerit bibendum in eu nulla"
    },
    {
      "category": "Activity",
      "name": "Outdoors Whatchamacallit",
      "price": "170.95",
      "sale_price": "153.95",
      "subcategory": "Outdoors",
      "sentence": "Maecenas varius diam sit amet eros volutpat, tempor efficitur urna ornare."
    },
    {
      "category": "Entertainment",
      "name": "Movie Item",
      "price": "85.99",
      "sale_price": "59.95",
      "subcategory": "Movie",
      "sentence": "Duis blandit vel lacus eget aliquet"
    },
    {
      "category": "Home",
      "name": "Storage Gear",
      "price": "24",
      "sale_price": "14.99",
      "subcategory": "Storage",
      "sentence": "Duis convallis ante ipsum, id suscipit sem ultricies quis"
    },
    {
      "category": "Activity",
      "name": "Outdoors Machine",
      "price": "157",
      "sale_price": "125.99",
      "subcategory": "Outdoors",
      "sentence": "Praesent tempus porttitor ante, ut efficitur diam mollis vel"
    },
    {
      "category": "Home",
      "name": "Bedding Gear",
      "price": "91.95",
      "sale_price": "63.99",
      "subcategory": "Bedding",
      "sentence": "In ut libero orci"
    },
    {
      "category": "Entertainment",
      "name": "Party Gadget",
      "price": "138.95",
      "sale_price": "82",
      "subcategory": "Party",
      "sentence": "Vestibulum semper ut velit ut egestas"
    },
    {
      "category": "Home",
      "name": "Cooking Whatchamacallit",
      "price": "105.99",
      "sale_price": "94",
      "subcategory": "Cooking",
      "sentence": "Cras a ante sem"
    },
    {
      "category": "Health",
      "name": "Nutrition Widget",
      "price": "156.99",
      "sale_price": "109",
      "subcategory": "Nutrition",
      "sentence": "Pellentesque dictum ante vitae tempor sodales"
    },
    {
      "category": "Pets",
      "name": "Dog Widget",
      "price": "107",
      "sale_price": "74",
      "subcategory": "Dog",
      "sentence": "Sed sagittis, metus eu fermentum ultrices, nibh risus malesuada felis, eu interdum ipsum felis nec nulla"
    },
    {
      "category": "Activity",
      "name": "Fitness Attachment",
      "price": "60.99",
      "sale_price": "48.95",
      "subcategory": "Fitness",
      "sentence": "Suspendisse potenti"
    },
    {
      "category": "Home",
      "name": "Storage Implement",
      "price": "26",
      "sale_price": "18",
      "subcategory": "Storage",
      "sentence": "Quisque vel felis libero"
    },
    {
      "category": "Automotive",
      "name": "Truck Item",
      "price": "126.99",
      "sale_price": "100.95",
      "subcategory": "Truck",
      "sentence": "Sed vel rhoncus tellus"
    },
    {
      "category": "Beauty",
      "name": "Personal Equipment",
      "price": "45",
      "sale_price": "36",
      "subcategory": "Personal",
      "sentence": "Sed a tortor sit amet magna mollis porttitor non eget mauris"
    },
    {
      "category": "Home",
      "name": "Home Improvement Machine",
      "price": "133.95",
      "sale_price": "119.95",
      "subcategory": "Home Improvement",
      "sentence": "Integer ut tellus leo"
    },
    {
      "category": "Activity",
      "name": "Biking Rig",
      "price": "160.99",
      "sale_price": "96.95",
      "subcategory": "Biking",
      "sentence": "Nulla vitae odio urna"
    },
    {
      "category": "Activity",
      "name": "Swimming Thingamajig",
      "price": "30.99",
      "sale_price": "18.95",
      "subcategory": "Swimming",
      "sentence": "Nam sed ex mollis, luctus nisi at, rhoncus sapien"
    },
    {
      "category": "Home",
      "name": "Storage Supplies",
      "price": "23.95",
      "sale_price": "16.99",
      "subcategory": "Storage",
      "sentence": "Duis at arcu non leo facilisis ullamcorper in sit amet orci"
    },
    {
      "category": "Clothing",
      "name": "Womens Equipment",
      "price": "37.99",
      "sale_price": "29",
      "subcategory": "Womens",
      "sentence": "Sed ac commodo ligula"
    },
    {
      "category": "Home",
      "name": "Gardening Whatchamacallit",
      "price": "104.99",
      "sale_price": "72.95",
      "subcategory": "Gardening",
      "sentence": "Quisque sed nisi velit"
    },
    {
      "category": "Electronics",
      "name": "Camera Supplies",
      "price": "81",
      "sale_price": "72.99",
      "subcategory": "Camera",
      "sentence": "Quisque malesuada auctor posuere"
    },
    {
      "category": "Entertainment",
      "name": "Game Widget",
      "price": "38",
      "sale_price": "30.95",
      "subcategory": "Game",
      "sentence": "Suspendisse eu nunc consequat, tincidunt diam eget, ornare diam"
    },
    {
      "category": "Entertainment",
      "name": "Game Rig",
      "price": "180",
      "sale_price": "162.95",
      "subcategory": "Game",
      "sentence": "Etiam blandit dictum ex, malesuada commodo lectus gravida ac"
    },
    {
      "category": "Entertainment",
      "name": "Music Rig",
      "price": "105.95",
      "sale_price": "63.95",
      "subcategory": "Music",
      "sentence": "Suspendisse id massa at velit maximus ultrices"
    },
    {
      "category": "Health",
      "name": "First Aid Attachment",
      "price": "165.95",
      "sale_price": "115.99",
      "subcategory": "First Aid",
      "sentence": "Quisque id est turpis"
    },
    {
      "category": "Beauty",
      "name": "Bath Implement",
      "price": "11.95",
      "sale_price": "9.95",
      "subcategory": "Bath",
      "sentence": "Suspendisse ante erat, viverra et dui euismod, semper rhoncus neque"
    },
    {
      "category": "Entertainment",
      "name": "Toy Widget",
      "price": "112",
      "sale_price": "89.95",
      "subcategory": "Toy",
      "sentence": "Quisque sit amet orci finibus, pulvinar arcu eu, vehicula nulla"
    },
    {
      "category": "Activity",
      "name": "Swimming Implement",
      "price": "56",
      "sale_price": "39.95",
      "subcategory": "Swimming",
      "sentence": "Aliquam eget elit ultricies, molestie leo vel, vulputate tortor"
    },
    {
      "category": "Home",
      "name": "Furniture Apparatus",
      "price": "21.99",
      "sale_price": "18",
      "subcategory": "Furniture",
      "sentence": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "category": "Electronics",
      "name": "Technology Gadget",
      "price": "41.99",
      "sale_price": "28.95",
      "subcategory": "Technology",
      "sentence": "In dictum, libero sit amet mollis aliquam, nulla nunc mollis felis, eu pharetra justo tellus id ligula"
    },
    {
      "category": "Clothing",
      "name": "Womens Machine",
      "price": "64.99",
      "sale_price": "38.99",
      "subcategory": "Womens",
      "sentence": "Fusce elementum ultrices risus, quis porttitor dolor porttitor nec"
    },
    {
      "category": "Beauty",
      "name": "Makeup Doodad",
      "price": "184.99",
      "sale_price": "110.95",
      "subcategory": "Makeup",
      "sentence": "Sed condimentum sapien eu bibendum porta"
    },
    {
      "category": "Electronics",
      "name": "Technology Implement",
      "price": "34.95",
      "sale_price": "27.99",
      "subcategory": "Technology",
      "sentence": "Aenean nulla neque, tempus condimentum faucibus a, dignissim eget magna"
    },
    {
      "category": "Health",
      "name": "First Aid Apparatus",
      "price": "64.99",
      "sale_price": "51.95",
      "subcategory": "First Aid",
      "sentence": "Nunc placerat tempor ipsum"
    },
    {
      "category": "Beauty",
      "name": "Personal Accessory",
      "price": "68",
      "sale_price": "61.95",
      "subcategory": "Personal",
      "sentence": "Aliquam eleifend imperdiet volutpat"
    },
    {
      "category": "Automotive",
      "name": "Car Accessory",
      "price": "20",
      "sale_price": "18",
      "subcategory": "Car",
      "sentence": "In bibendum scelerisque lectus, sed vulputate diam gravida nec"
    },
    {
      "category": "Home",
      "name": "Home Improvement Gadget",
      "price": "160.99",
      "sale_price": "112",
      "subcategory": "Home Improvement",
      "sentence": "Nullam rhoncus ullamcorper libero quis viverra."
    },
    {
      "category": "Automotive",
      "name": "Truck Tool",
      "price": "168",
      "sale_price": "117.95",
      "subcategory": "Truck",
      "sentence": "Curabitur iaculis vitae erat in eleifend."
    },
    {
      "category": "Automotive",
      "name": "Tire Gizmo",
      "price": "19.99",
      "sale_price": "11.95",
      "subcategory": "Tire",
      "sentence": "Vivamus sed ligula sit amet justo placerat vulputate"
    },
    {
      "category": "Clothing",
      "name": "Kids Apparatus",
      "price": "30.99",
      "sale_price": "18.95",
      "subcategory": "Kids",
      "sentence": "Suspendisse a auctor tortor, in lacinia massa"
    },
    {
      "category": "Home",
      "name": "Cleaning Machine",
      "price": "155",
      "sale_price": "93.99",
      "subcategory": "Cleaning",
      "sentence": "Nunc dui metus, ultricies vel orci ut, scelerisque consectetur magna"
    },
    {
      "category": "Health",
      "name": "Nutrition Widget",
      "price": "114.95",
      "sale_price": "102",
      "subcategory": "Nutrition",
      "sentence": "Vivamus eu leo vitae massa accumsan fermentum eu a mauris"
    },
    {
      "category": "Home",
      "name": "Kitchen Paraphernalia",
      "price": "83.95",
      "sale_price": "74.95",
      "subcategory": "Kitchen",
      "sentence": "Aliquam egestas ipsum mauris, et commodo dui consectetur quis"
    },
    {
      "category": "Entertainment",
      "name": "Game Mechanism",
      "price": "15",
      "sale_price": "13.99",
      "subcategory": "Game",
      "sentence": "Nullam nulla ligula, malesuada quis enim vel, ultrices dapibus mauris"
    },
    {
      "category": "Electronics",
      "name": "Computer Contraption",
      "price": "184",
      "sale_price": "110.99",
      "subcategory": "Computer",
      "sentence": "Nulla neque tellus, ultrices non consequat vitae, vehicula vulputate orci"
    },
    {
      "category": "Home",
      "name": "Kitchen Accessory",
      "price": "40.99",
      "sale_price": "32.95",
      "subcategory": "Kitchen",
      "sentence": "Ut tempor risus eget nisi suscipit porta"
    },
    {
      "category": "Clothing",
      "name": "Jewelry Equipment",
      "price": "107.99",
      "sale_price": "85.99",
      "subcategory": "Jewelry",
      "sentence": "Nunc egestas elementum laoreet"
    }
  ]

  export default data