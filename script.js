// Product data
const products = {
  e1: {
    id: 'e1',
    title: 'Premium Smartphone',
    price: 21999,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Latest 5G smartphone with 6.5-inch AMOLED display, 108MP camera, and 5000mAh battery.',
    specifications: {
      'Display': '6.5-inch AMOLED, 120Hz refresh rate',
      'Processor': 'Octa-core processor, 2.5GHz',
      'RAM': '8GB',
      'Storage': '128GB',
      'Camera': '108MP + 12MP + 8MP rear, 32MP front',
      'Battery': '5000mAh with fast charging',
      'OS': 'Android 13'
    }
  },
  e2: {
    id: 'e2',
    title: 'Ultra Slim Laptop',
    price: 55999,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Lightweight laptop with 14-inch FHD display, Intel i5 processor, and 512GB SSD.',
    specifications: {
      'Display': '14-inch Full HD',
      'Processor': 'Intel Core i5 11th Gen',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Battery Life': 'Up to 10 hours',
      'Weight': '1.3 kg',
      'OS': 'Windows 11'
    }
  },
  e3: {
    id: 'e3',
    title: 'Premium Wireless Earbuds',
    price: 2999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&h=400&q=80',
    description: 'True wireless earbuds with noise cancellation and 30-hour battery life.',
    specifications: {
      'Type': 'In-Ear',
      'Connectivity': 'Bluetooth 5.2',
      'Battery Life': '30 hours (with case)',
      'Charging': 'USB-C Fast Charging',
      'Features': 'Noise cancellation, touch controls',
      'Water Resistance': 'IPX5',
      'Color': 'Black'
    }
  },
  e4: {
    id: 'e4',
    title: 'Fitness Smartwatch',
    price: 4499,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Smartwatch with heart rate, SpO2, sleep tracking, and 1.7-inch HD screen.',
    specifications: {
      'Display': '1.7-inch HD Touchscreen',
      'Battery': 'Up to 7 days',
      'Sensors': 'Heart Rate, SpO2, Sleep Monitor',
      'Connectivity': 'Bluetooth 5.0',
      'Water Resistance': 'IP68',
      'Strap': 'Silicone, adjustable',
      'Compatibility': 'Android & iOS'
    }
  },
  e5: {
    id: 'e5',
    title: 'Portable Bluetooth Speaker',
    price: 1999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Compact speaker with deep bass, stereo sound, and 10-hour battery.',
    specifications: {
      'Power Output': '10W',
      'Connectivity': 'Bluetooth 5.0, AUX, USB',
      'Battery Life': '10 hours',
      'Charging': 'Micro USB',
      'Water Resistance': 'IPX6',
      'Weight': '350g',
      'Color': 'Blue'
    }
  },
  e6: {
    id: 'e6',
    title: 'RGB Gaming Mouse',
    price: 899,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ergonomic gaming mouse with RGB lighting and adjustable DPI.',
    specifications: {
      'DPI': 'Up to 6400 DPI',
      'Buttons': '7 programmable',
      'Lighting': 'RGB with modes',
      'Sensor': 'Optical',
      'Connection': 'Wired USB',
      'Cable Length': '1.8m braided',
      'Compatibility': 'Windows, macOS'
    }
  },
  e7: {
    id: 'e7',
    title: '10-inch Android Tablet',
    price: 12999,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1691599703435-1d5c2a8212b8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Android tablet with 10.1-inch display, 4GB RAM, and 64GB storage.',
    specifications: {
      'Display': '10.1-inch HD',
      'RAM': '4GB',
      'Storage': '64GB (expandable)',
      'Battery': '6000mAh',
      'Camera': '8MP rear, 5MP front',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'OS': 'Android 12'
    }
  },
  e8: {
    id: 'e8',
    title: 'Fast Charging Power Bank',
    price: 1299,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1594843665794-446ce915d840?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '10000mAh power bank with dual output and 18W fast charging.',
    specifications: {
      'Capacity': '10000mAh',
      'Output Ports': '2 USB, 1 Type-C',
      'Input': 'Micro USB / Type-C',
      'Fast Charging': '18W',
      'Weight': '250g',
      'LED Indicators': 'Battery level',
      'Color': 'Black'
    }
  },

  t1: {
    id: 't1',
    title: 'Creative Building Blocks',
    price: 1299,
    rating: 4.8,
    image: 'https://plus.unsplash.com/premium_photo-1723924946092-066c9facd69e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Set of 500+ colorful building blocks for children aged 3+ years. Enhances creativity and motor skills.',
    specifications: {
      'Pieces': '500+',
      'Material': 'Non-toxic ABS plastic',
      'Age Recommendation': '3+ years',
      'Dimensions': '30 x 20 x 15 cm (box)',
      'Weight': '1.2 kg',
      'Colors': 'Assorted',
      'Compatibility': 'Compatible with major brands'
    }
  },
  t2: {
    id: 't2',
    title: 'Fast Remote Control Car',
    price: 1599,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1642242413035-58b75e06dfeb?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'High-speed RC car with LED lights and all-terrain wheels. Ideal for kids and beginners.',
    specifications: {
      'Speed': 'Up to 20 km/h',
      'Battery': '7.4V 1200mAh (Rechargeable)',
      'Control Range': '50 meters',
      'Material': 'Durable plastic',
      'Features': 'Shock-resistant body, LED lights',
      'Run Time': '20-25 minutes',
      'Charge Time': '2-3 hours'
    }
  },
  t3: {
    id: 't3',
    title: 'Challenging Puzzle Set',
    price: 799,
    rating: 4.6,
    image: 'https://plus.unsplash.com/premium_photo-1726783362305-0582cc6dceef?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Set of 5 wooden puzzles to develop kids’ problem-solving skills. Varying difficulty levels included.',
    specifications: {
      'Puzzles': '5',
      'Material': 'Premium wood',
      'Age Recommendation': '6+ years',
      'Difficulty': 'Easy to Hard',
      'Pieces': '25–100 pieces',
      'Box Size': '20 x 20 cm',
      'Extras': 'Wooden storage box'
    }
  },
  t4: {
    id: 't4',
    title: 'Superhero Action Figure',
    price: 999,
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1723432015132-48e9838be294?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Poseable superhero action figure with detachable accessories. Ideal for imaginative play.',
    specifications: {
      'Height': '12 inches',
      'Material': 'PVC',
      'Accessories': 'Cape, Weapons',
      'Joints': 'Multiple articulation points',
      'Age Group': '5+ years',
      'Packaging': 'Box packed',
      'Colors': 'Multicolor'
    }
  },
  t5: {
    id: 't5',
    title: 'Interactive Toy Robot',
    price: 1799,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1725297952113-36be1c7cefb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Smart toy robot with lights, sounds, and voice interaction. Enhances learning and fun.',
    specifications: {
      'Battery': 'Built-in Rechargeable',
      'Functions': 'Voice, Music, Dance',
      'Material': 'ABS plastic',
      'Charging Time': '1.5 hours',
      'Run Time': '30 minutes',
      'Age Group': '5–10 years',
      'Dimensions': '20 x 10 x 8 cm'
    }
  },
  t6: {
    id: 't6',
    title: 'Mini Dollhouse Set',
    price: 2499,
    rating: 4.3,
    image: 'https://plus.unsplash.com/premium_photo-1743715109044-18dcafa2f1c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Beautifully crafted mini dollhouse with furniture and LED lights. Perfect for imaginative play.',
    specifications: {
      'Size': '30 x 25 x 20 cm',
      'Material': 'Wood and plastic',
      'Furniture Included': 'Yes',
      'Lights': 'Battery-powered LED',
      'Age': '6+ years',
      'Assembly': 'Required',
      'Accessories': 'Mini furniture and decor'
    }
  },
  t7: {
    id: 't7',
    title: 'Family Board Game',
    price: 799,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1577897113292-3b95936e5206?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Fun and engaging board game suitable for the whole family. Promotes strategic thinking.',
    specifications: {
      'Players': '2–6',
      'Age': '8+ years',
      'Play Time': '30–60 minutes',
      'Material': 'Cardboard and plastic',
      'Game Type': 'Strategy',
      'Contents': 'Board, Cards, Tokens',
      'Packaging': 'Box packed'
    }
  },
  t8: {
    id: 't8',
    title: 'Cute Stuffed Animal',
    price: 599,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1614414251195-573d5c568fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Soft and huggable stuffed animal made of premium plush. Perfect gift for kids.',
    specifications: {
      'Material': 'Ultra-soft plush',
      'Size': '25 cm',
      'Color': 'Light brown',
      'Washable': 'Hand wash',
      'Age Group': 'All ages',
      'Safety': 'No small parts',
      'Stuffing': 'Hypoallergenic fiber'
    }
  },

  m1: {
    id: 'm1',
    title: 'Casual Slim Fit Shirt',
    price: 899,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Premium cotton slim-fit casual shirt for men. Perfect for daily wear and semi-formal occasions.',
    specifications: {
      'Material': '100% Cotton',
      'Fit Type': 'Slim Fit',
      'Pattern': 'Solid',
      'Sleeve': 'Full Sleeve',
      'Collar': 'Button-down collar',
      'Wash Care': 'Machine wash',
      'Sizes Available': 'S, M, L, XL, XXL'
    }
  },
  m2: {
    id: 'm2',
    title: 'Classic Blue Jeans',
    price: 1499,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic blue denim jeans with comfortable stretch fabric and perfect fit for everyday wear.',
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Fit Type': 'Regular Fit',
      'Pattern': 'Solid',
      'Closure': 'Button and Zip',
      'Pockets': '5 pockets',
      'Wash Care': 'Machine wash cold',
      'Sizes Available': '30, 32, 34, 36, 38'
    }
  },
  m3: {
    id: 'm3',
    title: 'Comfortable Sports Shoes',
    price: 2499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1744838068986-8bd4aae191db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lightweight and comfortable sports shoes with breathable mesh upper and cushioned sole.',
    specifications: {
      'Upper Material': 'Mesh and synthetic',
      'Sole': 'Rubber',
      'Closure': 'Lace-up',
      'Cushioning': 'Memory foam insole',
      'Usage': 'Running, Training, Casual Wear',
      'Care': 'Wipe with a clean dry cloth',
      'Sizes Available': 'UK 6 to UK 11'
    }
  },
  m4: {
    id: 'm4',
    title: 'Elegant Formal Shoes',
    price: 3499,
    rating: 4.3,
    image: 'https://plus.unsplash.com/premium_photo-1705554330163-2e0ccc1808e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlZ2FudCUyMEZvcm1hbCUyMFNob2VzfGVufDB8fDB8fHww',
    description: 'Stylish formal shoes perfect for office wear and special occasions.',
    specifications: {
      'Material': 'Genuine Leather',
      'Fit Type': 'Regular Fit',
      'Closure': 'Slip-on',
      'Sole': 'Leather',
      'Wash Care': 'Wipe with a damp cloth',
      'Sizes Available': '6, 7, 8, 9, 10'
    }
  },
  m5: {
    id: 'm5',
    title: 'Graphic T-shirt',
    price: 699,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A trendy graphic T-shirt with bold print, perfect for casual wear.',
    specifications: {
      'Material': '100% Cotton',
      'Fit Type': 'Regular Fit',
      'Pattern': 'Graphic Print',
      'Sleeve': 'Short Sleeve',
      'Neck': 'Round Neck',
      'Wash Care': 'Machine wash',
      'Sizes Available': 'S, M, L, XL, XXL'
    }
  },
  m6: {
    id: 'm6',
    title: 'Stylish Winter Jacket',
    price: 2799,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1644364244739-917de400a60d?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Warm and stylish winter jacket for cold weather, with a comfortable and insulated design.',
    specifications: {
      'Material': 'Polyester',
      'Lining': 'Fleece',
      'Closure': 'Zipper',
      'Pockets': 'Two Side Pockets',
      'Wash Care': 'Machine wash cold',
      'Sizes Available': 'M, L, XL, XXL'
    }
  },
  m7: {
    id: 'm7',
    title: 'Aviator Sunglasses',
    price: 1199,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1567473810954-507d59716c25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic aviator sunglasses with UV protection, perfect for summer outings.',
    specifications: {
      'Material': 'Metal Frame',
      'Lens': 'UV Protection',
      'Style': 'Aviator',
      'Care': 'Clean with a soft cloth',
      'Sizes Available': 'One size'
    }
  },
  m8: {
    id: 'm8',
    title: 'Luxury Wristwatch',
    price: 4999,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589988574803-455587b19171?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A luxury wristwatch with a sleek design and precision mechanics.',
    specifications: {
      'Material': 'Stainless Steel',
      'Dial Color': 'Black',
      'Movement': 'Quartz',
      'Water Resistance': '50m',
      'Strap': 'Leather',
      'Care': 'Avoid contact with water',
      'Sizes Available': 'One size'
    }
  },

  w1: {
    id: 'w1',
    title: 'Elegant Floral Dress',
    price: 1299,
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1661380525096-7d63c5f0265b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    specifications: {
      'Material': 'Polyester',
      'Pattern': 'Floral Print',
      'Length': 'Maxi',
      'Sleeve': 'Short Sleeve',
      'Neck': 'V-neck',
      'Wash Care': 'Gentle machine wash',
      'Sizes Available': 'S, M, L, XL'
    }
  },

  w2: {
    id: 'w2',
    title: 'Stylish Handbag',
    price: 1999,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1591656852283-29bed2fe05ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R5bGlzaCUyMEhhbmRiYWd8ZW58MHx8MHx8fDA%3D',
    specifications: {
      'Material': 'Faux Leather',
      'Dimensions': '30 x 25 x 12 cm',
      'Compartments': '3 main compartments, 2 zip pockets',
      'Closure': 'Zip closure',
      'Handle': 'Dual handle with detachable shoulder strap',
      'Interior': 'Polyester lining',
      'Color': 'Available in multiple colors'
    }
  },

  w3: {
    id: 'w3',
    title: 'Comfortable Heels',
    price: 1499,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tZm9ydGFibGUlMjBIZWVsc3xlbnwwfHwwfHx8MA%3D%3D',
    specifications: {
      'Upper Material': 'Synthetic',
      'Sole': 'TPR (Thermoplastic Rubber)',
      'Heel Height': '3 inches',
      'Heel Type': 'Block Heel',
      'Closure': 'Buckle',
      'Color': 'Multiple colors available',
      'Sizes Available': 'UK 3 to UK 8'
    }
  },

  w4: {
    id: 'w4',
    title: 'Trendy Tote Bag',
    price: 1799,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1625976794763-efc500507b4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJlbmR5JTIwVG90ZSUyMEJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fashionable and spacious tote bag ideal for everyday use.',
    specifications: {
      'Material': 'Canvas',
      'Dimensions': '40 x 35 x 12 cm',
      'Compartments': '2 main compartments, 1 zip pocket',
      'Closure': 'Magnetic closure',
      'Handle': 'Double handle',
      'Color': 'Available in multiple colors'
    }
  },

  w5: {
    id: 'w5',
    title: 'Classic Sunglasses',
    price: 999,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1670718221502-42bee4ee96c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMFN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    description: 'Stylish and UV-protected sunglasses with a classic design.',
    specifications: {
      'Material': 'Plastic',
      'Frame Type': 'Full-frame',
      'Lens Color': 'Black',
      'Lens Type': 'UV Protected',
      'Sizes Available': 'One size fits all',
      'Weight': 'Lightweight'
    }
  },

  w6: {
    id: 'w6',
    title: 'Luxury Watch',
    price: 5499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D',
    description: 'High-end luxury watch with a stainless steel strap and elegant design.',
    specifications: {
      'Material': 'Stainless Steel',
      'Dial Size': '40 mm',
      'Water Resistance': '5 ATM',
      'Movement': 'Quartz',
      'Closure': 'Buckle',
      'Warranty': '2 years'
    }
  },

  w7: {
    id: 'w7',
    title: 'Genuine Leather Jacket',
    price: 3999,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VudWluZSUyMExlYXRoZXIlMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D',
    description: 'Premium quality genuine leather jacket with a modern fit.',
    specifications: {
      'Material': 'Genuine Leather',
      'Closure': 'Zipper',
      'Color': 'Black, Brown',
      'Sizes Available': 'S, M, L, XL',
      'Fit': 'Slim Fit',
      'Care Instructions': 'Dry clean only'
    }
  },

  w8: {
    id: 'w8',
    title: 'Elegant Silk Scarf',
    price: 1199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551028442-ee84b4d3a50a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlZ2FudCUyMFNpbGslMjBTY2FyZnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Soft and luxurious silk scarf with intricate patterns.',
    specifications: {
      'Material': '100% Silk',
      'Dimensions': '70 x 70 cm',
      'Pattern': 'Geometric design',
      'Color': 'Multiple colors available',
      'Care Instructions': 'Hand wash only',
      'Use': 'Perfect for winter and formal wear'
    }
  },

  g1: {
    id: 'g1',
    title: 'Premium Basmati Rice',
    price: 399,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJlbWl1bSUyMEJhc21hdGklMjBSaWNlfGVufDB8fDB8fHww',
    description: 'Finest quality aged basmati rice with long grains and aromatic flavor.',
    specifications: {
      'Type': 'Basmati Rice',
      'Quantity': '5 kg',
      'Quality': 'Premium',
      'Grain Length': 'Extra Long',
      'Aging': '24 months',
      'Packaging': 'Airtight packaging',
      'Shelf Life': '12 months'
    }
  },
  g2: {
    id: 'g2',
    title: 'Extra Virgin Olive Oil',
    price: 599,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXh0cmElMjBWaXJnaW4lMjBPbGl2ZSUyME9pbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Pure extra virgin olive oil imported from Mediterranean olive groves. Cold-pressed and unrefined.',
    specifications: {
      'Type': 'Extra Virgin Olive Oil',
      'Quantity': '500 ml',
      'Origin': 'Mediterranean',
      'Extraction': 'Cold Pressed',
      'Acidity': '< 0.8%',
      'Usage': 'Cooking, Salad dressing',
      'Shelf Life': '24 months'
    }
  },
  g3: {
    id: 'g3',
    title: 'Organic Coffee Beans',
    price: 499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Premium organic coffee beans with rich aroma and flavor. Perfect for a delightful coffee experience.',
    specifications: {
      'Type': 'Arabica Coffee Beans',
      'Quantity': '250 g',
      'Roast Level': 'Medium Dark',
      'Origin': 'South America',
      'Certification': 'Organic Certified',
      'Packaging': 'Vacuum sealed',
      'Shelf Life': '6 months'
    }
  },
  g4: {
    id: 'g4',
    title: 'Whole Wheat Pasta',
    price: 299,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1606676150052-8603db33b494?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hvbGUlMjBXaGVhdCUyMFBhc3RhfGVufDB8fDB8fHww',
    description: 'Healthy whole wheat pasta, rich in fiber and ideal for a nutritious meal.',
    specifications: {
      'Type': 'Whole Wheat Pasta',
      'Quantity': '500 g',
      'Origin': 'Italy',
      'Usage': 'Boil and serve with sauce or vegetables',
      'Shelf Life': '12 months'
    }
  },
  g5: {
    id: 'g5',
    title: 'Farm Fresh Eggs (6 pcs)',
    price: 99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1665538941694-e1705e52d1b2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFybSUyMEZyZXNoJTIwRWdncyUyMCg2JTIwcGNzKXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fresh, farm-grown eggs packed with protein and rich in flavor.',
    specifications: {
      'Type': 'Chicken Eggs',
      'Quantity': '6 pcs',
      'Freshness': 'Farm Fresh',
      'Packaging': 'Eco-friendly carton',
      'Shelf Life': '7 days'
    }
  },
  g6: {
    id: 'g6',
    title: 'Natural Organic Honey',
    price: 349,
    rating: 4.4,
    image: 'https://plus.unsplash.com/premium_photo-1664273586606-d7c9804729c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmF0dXJhbCUyME9yZ2FuaWMlMjBIb25leXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Pure organic honey sourced from the best beekeepers. No additives or preservatives.',
    specifications: {
      'Type': 'Organic Honey',
      'Quantity': '250 g',
      'Origin': 'Himalayan region',
      'Flavor': 'Natural floral flavor',
      'Packaging': 'Glass jar',
      'Shelf Life': '24 months'
    }
  },
  g7: {
    id: 'g7',
    title: 'Toned Milk (1L)',
    price: 65,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&h=400&q=80',
    description: 'Toned milk with reduced fat, perfect for your daily consumption.',
    specifications: {
      'Type': 'Toned Milk',
      'Quantity': '1L',
      'Fat Content': '3% fat',
      'Origin': 'India',
      'Packaging': 'Plastic bottle',
      'Shelf Life': '7 days'
    }
  },
  g8: {
    id: 'g8',
    title: 'Fresh Organic Tomatoes',
    rating: 4.5,
    price: 49,
    image: 'https://images.unsplash.com/photo-1643926544872-dbcd8805e870?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlc2glMjBPcmdhbmljJTIwVG9tYXRvZXN8ZW58MHx8MHx8fDA%3D',
    specifications: {
      description: 'Fresh, ripe tomatoes grown organically with no pesticides.',
      'Quantity': '500 g',
      'Type': 'Organic Tomatoes',
      'Taste': 'Tangy and juicy',
      'Origin': 'India',
      'Shelf Life': '5 days',
      'Packaging': 'Eco-friendly packaging',
      'Storage': 'Refrigerate after opening'
    }
  },

};


// Cart management
let cart = [];

// Scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Open product modal
function openProductModal(productId) {
  const product = products[productId];
  const modal = document.getElementById('productModal');
  const detailsContainer = document.getElementById('productDetails');

  // Create product details HTML
  let specsHtml = '';
  for (const [key, value] of Object.entries(product.specifications)) {
    specsHtml += `
                    <div class="spec-item">
                        <div class="spec-label">${key}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `;
  }

  detailsContainer.innerHTML = `
                <div class="product-details-left">
                    <img src="${product.image}" alt="${product.title}" class="product-details-img">
                </div>
                <div class="product-details-right">
                    <h2 class="product-details-title">${product.title}</h2>
                    <div class="product-rating">${product.rating} ★</div>
                    <div class="product-details-price">₹${product.price}</div>
                    <p class="product-details-desc">${product.description}</p>
                    <div>
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
                        <button class="buy-now-btn">Buy Now</button>
                    </div>
                    <div class="specifications">
                        <h3>Specifications</h3>
                        ${specsHtml}
                    </div>
                </div>
            `;

  modal.style.display = 'block';
}

// Close product modal
function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Open cart modal
function openCartModal() {
  updateCartDisplay();
  document.getElementById('cartModal').style.display = 'block';
}

// Close cart modal
function closeCartModal() {
  document.getElementById('cartModal').style.display = 'none';
}

// Add to cart
function addToCart(productId) {
  const product = products[productId];

  // Check if product already in cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  updateCartCount();
  // Optional: Close the product modal after adding to cart
  closeProductModal();

  // Show a confirmation message
  alert(`${product.title} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Update cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyCartContainer = document.getElementById('cartEmpty');
  const cartTotalSection = document.getElementById('cartTotalSection');
  const cartTotalElement = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    emptyCartContainer.style.display = 'block';
    cartTotalSection.style.display = 'none';
    return;
  }

  // Show cart items and total
  cartItemsContainer.style.display = 'block';
  emptyCartContainer.style.display = 'none';
  cartTotalSection.style.display = 'block';

  // Generate cart items HTML
  let cartItemsHtml = '';
  let cartTotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    cartTotal += itemTotal;

    cartItemsHtml += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${item.title}</h3>
                            <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${itemTotal}</div>
                            <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</span>
                        </div>
                    </div>
                `;
  });

  cartItemsContainer.innerHTML = cartItemsHtml;
  cartTotalElement.textContent = `₹${cartTotal}`;
}

// Close modals when clicking outside
window.onclick = function (event) {
  const productModal = document.getElementById('productModal');
  const cartModal = document.getElementById('cartModal');

  if (event.target === productModal) {
    closeProductModal();
  }

  if (event.target === cartModal) {
    closeCartModal();
  }
};

// Initialize cart count
updateCartCount();
