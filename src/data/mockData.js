export const products = [
    {
        "name": "Paracetamol 650mg",
        "price": 30,
        "rating": 4.8,
        "reviewCount": 12,
        "description": "Effective analgesic and antipyretic for fever reduction and mild pain.",
        "dosage": "1 tablet every 6 hours after food.",
        "usage": "Fever, Body ache, Headache.",
        "details": "High-quality healthcare product sourced directly from authorized manufacturers.",
        "ingredients": [
            "Paracetamol 650mg. Contains no artificial colors."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Admin",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Great product! Fast acting."
            }
        ],
        "id": 1,
        "category": "Fever",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CzGUrrr55GdUow9dyekVuG8pXgqo6BaK7pqgB9xZoIYaalAR"
    },
    {
        "name": "Ibuprofen 400mg",
        "price": 45,
        "rating": 4.5,
        "reviewCount": 8,
        "description": "Non-steroidal anti-inflammatory drug (NSAID) for fever and inflammation.",
        "dosage": "1 tablet every 8 hours with food.",
        "usage": "High fever, muscle inflammation, dental pain.",
        "details": "Provides extended relief from fever and swelling.",
        "ingredients": [
            "Ibuprofen 400mg",
            "Titanium Dioxide."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Priya K.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Brought my fever down in 30 minutes."
            }
        ],
        "id": 2,
        "category": "Fever",
        "inStock": true,
        "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/yssbye7myd6dgld7wn2n.jpg"
    },
    {
        "name": "Naproxen 250mg",
        "price": 60,
        "rating": 4.2,
        "reviewCount": 5,
        "description": "Long-acting fever reducer and pain reliever.",
        "dosage": "1 tablet every 12 hours.",
        "usage": "Persistent fever, joint pain.",
        "details": "Powerful formula designed to keep fever at bay through the night.",
        "ingredients": [
            "Ingredients data not available for this product."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Rahul V.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Good for overnight relief."
            }
        ],
        "id": 3,
        "category": "Fever",
        "inStock": true,
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/1/HG/RV/EA/13166357/naproxen-tablets-250mg-500-mg.jpg"
    },
    {
        "name": "Diclofenac Gel 30g",
        "price": 95,
        "rating": 4.7,
        "reviewCount": 34,
        "description": "Topical analgesic gel for quick relief from muscle and joint pain.",
        "dosage": "Apply thin layer 3-4 times daily.",
        "usage": "Sprains, strains, backache.",
        "details": "Deep tissue penetration formulation.",
        "ingredients": [
            "Diclofenac Diethylamine 1.16%",
            "Menthol."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Suresh P.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Excellent for lower back pain."
            }
        ],
        "id": 4,
        "category": "Pain Relief",
        "inStock": true,
        "image": "data:image/jpeg;base64,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"
    },
    {
        "name": "Aceclofenac + Paracetamol",
        "price": 55,
        "rating": 4.6,
        "reviewCount": 21,
        "description": "Dual-action tablets for severe musculoskeletal pain.",
        "dosage": "1 tablet twice daily after meals.",
        "usage": "Arthritis pain, severe body ache.",
        "details": "Blocks pain signals and reduces swelling.",
        "ingredients": [
            "Aceclofenac 100mg",
            "Paracetamol 325mg."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Vikram J.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Highly effective for my knee pain."
            }
        ],
        "id": 5,
        "category": "Pain Relief",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kv94yRvfnHBdO6KuJbuSG7CSAssOsVPoIVjjaeueOEvNtLmQ"
    },
    {
        "name": "Aspirin 75mg",
        "price": 15,
        "rating": 4.3,
        "reviewCount": 45,
        "description": "Low-dose pain reliever and anti-inflammatory.",
        "dosage": "1 tablet daily or as directed.",
        "usage": "Mild headaches, prevention.",
        "details": "Trusted household essential.",
        "ingredients": [
            "Acetylsalicylic acid 75mg."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Admin",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Standard staple for the medical kit."
            }
        ],
        "id": 6,
        "category": "Pain Relief",
        "inStock": true,
        "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/reowbvajejs6awykdplk.jpg"
    },
    {
        "name": "Arjuna Bark Extract",
        "price": 150,
        "rating": 4.9,
        "reviewCount": 56,
        "description": "Traditional Ayurvedic supplement for cardiovascular wellness.",
        "dosage": "1-2 capsules daily.",
        "usage": "Heart muscle strength, BP support.",
        "details": "Sourced from pure Terminalia arjuna bark.",
        "ingredients": [
            "Terminalia arjuna extract 500mg."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Dr. Sharma",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Good for maintaining lipid profiles."
            }
        ],
        "id": 7,
        "category": "Heart",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/8188xRgW7QS._SX522_.jpg"
    },
    {
        "name": "Omega-3 Fish Oil",
        "price": 399,
        "rating": 4.8,
        "reviewCount": 112,
        "description": "EPA and DHA rich supplement for heart and brain health.",
        "dosage": "1 softgel daily with meal.",
        "usage": "Cholesterol management.",
        "details": "Mercury-free, enteric-coated.",
        "ingredients": [
            "Fish Oil 1000mg (EPA 180mg",
            "DHA 120mg)."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Karan T.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "No fishy aftertaste."
            }
        ],
        "id": 8,
        "category": "Heart",
        "inStock": true,
        "image": "data:image/jpeg;base64,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"
    },
    {
        "name": "Amrit Kalash Tablets",
        "price": 550,
        "rating": 4.7,
        "reviewCount": 29,
        "description": "Potent antioxidant for vitality and heart immunity.",
        "dosage": "1 tablet twice daily.",
        "usage": "Immunity, cellular protection.",
        "details": "Maharishi Ayurveda formulation with 53 herbs.",
        "ingredients": [
            "Amla",
            "Cardamom",
            "Cinnamon",
            "Herbal Blend."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Ramesh G.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Very effective for overall stamina."
            }
        ],
        "id": 9,
        "category": "Heart",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71wbzNPVWXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Ofloxacin Eye/Ear Drops",
        "price": 65,
        "rating": 4.4,
        "reviewCount": 19,
        "description": "Broad-spectrum antibacterial drops for local infections.",
        "dosage": "1-2 drops every 4-6 hours.",
        "usage": "Conjunctivitis, ear infections.",
        "details": "Sterile formulation.",
        "ingredients": [
            "Ofloxacin 0.3% w/v."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Pooja M.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Cleared up my pink eye in 3 days."
            }
        ],
        "id": 10,
        "category": "Antibiotic",
        "inStock": true,
        "image": "data:image/jpeg;base64,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"
    },
    {
        "name": "Neomycin Ointment 15g",
        "price": 40,
        "rating": 4.6,
        "reviewCount": 41,
        "description": "Topical antibiotic cream for minor cuts.",
        "dosage": "Apply small amount 1-3 times daily.",
        "usage": "Preventing infection in cuts/burns.",
        "details": "First-aid essential.",
        "ingredients": [
            "Neomycin Sulphate 0.5%."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Admin",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Always keep this in the house."
            }
        ],
        "id": 11,
        "category": "Antibiotic",
        "inStock": true,
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/10/550641159/MZ/JO/OB/25098227/neomycin-cream.jpg"
    },
    {
        "name": "Neem Extract Tablets",
        "price": 120,
        "rating": 4.5,
        "reviewCount": 33,
        "description": "Natural antibacterial blood purifier.",
        "dosage": "1 tablet twice daily.",
        "usage": "Skin infections, acne.",
        "details": "100% organic Neem extract.",
        "ingredients": [
            "Azadirachta indica extract."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Sahil K.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Helped clear up my skin."
            }
        ],
        "id": 12,
        "category": "Antibiotic",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/610a341HOEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Tulsi Drops 30ml",
        "price": 180,
        "rating": 4.9,
        "reviewCount": 210,
        "description": "Concentrated extract of 5 types of Tulsi.",
        "dosage": "1-2 drops in warm water.",
        "usage": "Cough, cold, immunity.",
        "details": "Rich in antioxidants.",
        "ingredients": [
            "Shyam",
            "Rama",
            "Sursa",
            "Nimbu",
            "Vana Tulsi."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Geeta R.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Best thing for winter colds."
            }
        ],
        "id": 13,
        "category": "Respiratory",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71Q18eowatL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Licorice (Mulethi) Chews",
        "price": 110,
        "rating": 4.4,
        "reviewCount": 14,
        "description": "Soothing herbal remedy for throat.",
        "dosage": "Chew 1-2 tablets as needed.",
        "usage": "Dry cough, sore throat.",
        "details": "Naturally sweet, coats the throat.",
        "ingredients": [
            "Glycyrrhiza glabra root."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Manoj B.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Soothes throat instantly."
            }
        ],
        "id": 14,
        "category": "Respiratory",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71NJF1c+4JL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "Chyawanprash 500g",
        "price": 220,
        "rating": 4.8,
        "reviewCount": 350,
        "description": "Classic immunity jam rich in Vitamin C.",
        "dosage": "1 teaspoon twice daily with milk.",
        "usage": "Daily immunity, digestion.",
        "details": "Traditional recipe with Amla and Ghee.",
        "ingredients": [
            "Amla",
            "Ghee",
            "Ashwagandha",
            "Honey."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Lata M.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "My family trusts this completely."
            }
        ],
        "id": 15,
        "category": "Respiratory",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71tH6y4K-SL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Cetirizine 10mg",
        "price": 20,
        "rating": 4.7,
        "reviewCount": 85,
        "description": "Fast-acting antihistamine for allergy relief.",
        "dosage": "1 tablet once daily at bedtime.",
        "usage": "Runny nose, sneezing, itching.",
        "details": "Non-sedative formula for most users.",
        "ingredients": [
            "Cetirizine Hydrochloride 10mg."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Ankit P.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Works within an hour."
            }
        ],
        "id": 16,
        "category": "Allergy",
        "inStock": true,
        "image": "https://tiimg.tistatic.com/fp/1/007/526/cetirizine-hydrochloride-tablets-ip-10mg-cetmun-10-169.jpg"
    },
    {
        "name": "Levocetirizine 5mg",
        "price": 35,
        "rating": 4.8,
        "reviewCount": 60,
        "description": "Advanced allergy relief with fewer side effects.",
        "dosage": "1 tablet in the evening.",
        "usage": "Seasonal allergies, skin hives.",
        "details": "New generation antihistamine.",
        "ingredients": [
            "Levocetirizine Dihydrochloride."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Sarah L.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Doesn't make me as drowsy as others."
            }
        ],
        "id": 17,
        "category": "Allergy",
        "inStock": true,
        "image": "https://images.apollo247.in/pub/media/catalog/product/L/E/LEV0050_1_1.jpg"
    },
    {
        "name": "Nasal Decongestant Spray",
        "price": 85,
        "rating": 4.3,
        "reviewCount": 40,
        "description": "Instant relief for blocked noses.",
        "dosage": "1 spray in each nostril twice daily.",
        "usage": "Nasal congestion, sinus pressure.",
        "details": "Fast acting relief for up to 12 hours.",
        "ingredients": [
            "Xylometazoline 0.1%."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Rajeev K.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Lifesaver during sinus season."
            }
        ],
        "id": 18,
        "category": "Allergy",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQeALdBD7NFkmhvFaS34d9L4QglLGXBGBKA&s"
    },
    {
        "name": "Karela Jamun Juice 1L",
        "price": 250,
        "rating": 4.6,
        "reviewCount": 120,
        "description": "Natural juice to regulate blood sugar levels.",
        "dosage": "30ml with water on empty stomach.",
        "usage": "Diabetes management.",
        "details": "Bitter gourd and Indian blackberry blend.",
        "ingredients": [
            "Karela Juice",
            "Jamun Seed Extract."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Mohan Das",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Blood sugar levels are stable now."
            }
        ],
        "id": 19,
        "category": "Diabetes",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlhrK1oTZa1VUIvk8W_C0EAf62ufXkT1vqg&s"
    },
    {
        "name": "Sugar Free Gold Pellets",
        "price": 220,
        "rating": 4.7,
        "reviewCount": 300,
        "description": "Low-calorie sweetener for tea and coffee.",
        "dosage": "1 pellet equals 1 tsp sugar.",
        "usage": "Calorie control, diabetic diet.",
        "details": "Made from Aspartame.",
        "ingredients": [
            "Aspartame",
            "Lactose."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Linda G.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Can't tell the difference in my tea."
            }
        ],
        "id": 20,
        "category": "Diabetes",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPdtdRvOFQwIw4Ll0hoZnPBg4IyHpe6cTEA&s"
    },
    {
        "name": "Metformin ER 500mg",
        "price": 40,
        "rating": 4.5,
        "reviewCount": 90,
        "description": "Standard first-line medication for Type 2 diabetes.",
        "dosage": "As prescribed by physician.",
        "usage": "Blood glucose control.",
        "details": "Extended release formulation.",
        "ingredients": [
            "Metformin Hydrochloride."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "User123",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Effective and affordable."
            }
        ],
        "id": 21,
        "category": "Diabetes",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Td9KpfO53IugnQI7ufGDLGGKPWjQvttLAg&s"
    },
    {
        "name": "Calcium + Vitamin D3",
        "price": 110,
        "rating": 4.8,
        "reviewCount": 150,
        "description": "Essential supplement for bone density.",
        "dosage": "1 tablet daily after main meal.",
        "usage": "Osteoporosis prevention, weak bones.",
        "details": "High absorption formula.",
        "ingredients": [
            "Calcium Carbonate 500mg",
            "Vitamin D3 250 IU."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Shanti D.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "My doctor recommended this for my knees."
            }
        ],
        "id": 22,
        "category": "Bones",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZizgCVmLv59F_dwBNkHZQtIVlRNGTFOWjiw&s"
    },
    {
        "name": "Vitamin D3 Sachet (60k IU)",
        "price": 35,
        "rating": 4.9,
        "reviewCount": 200,
        "description": "High dose weekly supplement for deficiency.",
        "dosage": "1 sachet per week with milk.",
        "usage": "Severe Vitamin D deficiency.",
        "details": "Granules dissolve easily.",
        "ingredients": [
            "Cholecalciferol 60,000 IU."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Arun T.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Raised my levels back to normal in a month."
            }
        ],
        "id": 23,
        "category": "Bones",
        "inStock": true,
        "image": "https://cdn01.pharmeasy.in/dam/productsnowatermark/031625/calcirol-60000-iu-sachet-1gm-front-2-1756894199-non-watermarked.jpg"
    },
    {
        "name": "Glucosamine MSM",
        "price": 450,
        "rating": 4.4,
        "reviewCount": 55,
        "description": "Joint and bone support supplement.",
        "dosage": "2 tablets daily.",
        "usage": "Joint stiffness, cartilage repair.",
        "details": "Supports flexibility and mobility.",
        "ingredients": [
            "Glucosamine Sulfate",
            "MSM."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Peter P.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Helps with morning stiffness."
            }
        ],
        "id": 24,
        "category": "Bones",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71A+oZn8BUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Vitamin C Chewable 500mg",
        "price": 25,
        "rating": 4.7,
        "reviewCount": 400,
        "description": "Daily immunity booster in tasty orange flavor.",
        "dosage": "1 tablet daily.",
        "usage": "Cold prevention, skin health.",
        "details": "Ascorbic acid supplement.",
        "ingredients": [
            "Vitamin C 500mg",
            "Zinc."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Neha S.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Kids love the taste."
            }
        ],
        "id": 25,
        "category": "Immunity",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/61Q-+KR3WcL.jpg"
    },
    {
        "name": "Giloy Ghan Vati",
        "price": 130,
        "rating": 4.8,
        "reviewCount": 95,
        "description": "Concentrated Ayurvedic immunity tablets.",
        "dosage": "1 tablet twice daily.",
        "usage": "Recurring infections, fever.",
        "details": "Potent anti-viral properties.",
        "ingredients": [
            "Tinospora cordifolia extract."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Ravi K.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Keeps me healthy during flu season."
            }
        ],
        "id": 26,
        "category": "Immunity",
        "inStock": true,
        "image": "https://www.patanjaliayurved.net/assets/product_images/400x500/1764043065giloy60n1.webp"
    },
    {
        "name": "Zincovit Tablets",
        "price": 105,
        "rating": 4.6,
        "reviewCount": 180,
        "description": "Multivitamin with Zinc for overall health.",
        "dosage": "1 tablet daily.",
        "usage": "Nutritional deficiency, recovery.",
        "details": "Comprehensive blend of vitamins.",
        "ingredients": [
            "Zinc",
            "Vitamins A",
            "B",
            "C",
            "D",
            "E."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Sanjay M.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Feeling more energetic."
            }
        ],
        "id": 27,
        "category": "Immunity",
        "inStock": true,
        "image": "https://images.apollo247.in/pub/media/catalog/product/Z/I/ZIN0036_1_1.jpg"
    },
    {
        "name": "Glucose D Powder",
        "price": 70,
        "rating": 4.8,
        "reviewCount": 500,
        "description": "Instant energy drink mix.",
        "dosage": "2 spoons in water.",
        "usage": "Fatigue, summer heat.",
        "details": "Rapidly absorbed glucose.",
        "ingredients": [
            "Dextrose monohydrate",
            "Calcium."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "SportsFan",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Instant pick me up."
            }
        ],
        "id": 28,
        "category": "Energy",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvjsrrkod8RVKRJ8rgj5GaJVCG8buRgafmw&s"
    },
    {
        "name": "Revital H Capsules",
        "price": 110,
        "rating": 4.5,
        "reviewCount": 320,
        "description": "Daily health supplement for men.",
        "dosage": "1 capsule daily.",
        "usage": "Stamina, stress relief.",
        "details": "Blend of Ginseng, vitamins, and minerals.",
        "ingredients": [
            "Ginseng",
            "10 Vitamins",
            "9 Minerals."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Amit B.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Good for daily work fatigue."
            }
        ],
        "id": 29,
        "category": "Energy",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/61kuT-rqijL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "ORS Sachets (Electral)",
        "price": 20,
        "rating": 4.9,
        "reviewCount": 150,
        "description": "Oral rehydration salts for dehydration.",
        "dosage": "Dissolve 1 sachet in 1L water.",
        "usage": "Diarrhea, excessive sweating.",
        "details": "WHO recommended formula.",
        "ingredients": [
            "Sodium Chloride",
            "Potassium Chloride",
            "Dextrose."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Traveler1",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Essential for travel kits."
            }
        ],
        "id": 30,
        "category": "Energy",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/51yvQkwfqdL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "name": "Volini Pain Spray",
        "price": 160,
        "rating": 4.7,
        "reviewCount": 230,
        "description": "Instant relief spray for muscle and joint pain.",
        "dosage": "Spray from 5cm distance.",
        "usage": "Back pain, sprains.",
        "details": "No massage required.",
        "ingredients": [
            "Diclofenac",
            "Methyl Salicylate."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Sunita R.",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Works like magic on backache."
            }
        ],
        "id": 31,
        "category": "Joints",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/51+HPy6wZoL.jpg"
    },
    {
        "name": "Fish Oil (Double Strength)",
        "price": 599,
        "rating": 4.6,
        "reviewCount": 80,
        "description": "High potency Omega-3 for joint flexibility.",
        "dosage": "1 softgel daily.",
        "usage": "Joint stiffness, heart health.",
        "details": "Reduces joint inflammation.",
        "ingredients": [
            "Omega 3 Fatty Acids."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "OldGen",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Knees feel much better."
            }
        ],
        "id": 32,
        "category": "Joints",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqcef0C-FloKFrNpbTOTJZrFol8xCW-dCLQ&s"
    },
    {
        "name": "Ortho Oil (Ayurvedic)",
        "price": 195,
        "rating": 4.4,
        "reviewCount": 60,
        "description": "Traditional herbal oil for massage.",
        "dosage": "Massage gently on affected area.",
        "usage": "Chronic joint pain.",
        "details": "Made with 20+ herbs.",
        "ingredients": [
            "Mahanarayan Oil",
            "Gandhapura."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Grandma",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Very soothing warmth."
            }
        ],
        "id": 33,
        "category": "Joints",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/61mTWfJXfqL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Digene Gel (Mint)",
        "price": 120,
        "rating": 4.8,
        "reviewCount": 450,
        "description": "Quick relief from acidity and gas.",
        "dosage": "2 teaspoons after meals.",
        "usage": "Heartburn, bloating.",
        "details": "Neutralizes excess acid.",
        "ingredients": [
            "Magnesium Hydroxide",
            "Simethicone."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Foodie",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Instant cooling effect."
            }
        ],
        "id": 34,
        "category": "Acidity",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9k7TVm-gH6QzwEpVeUu42UHA2Of5I5uKvw&s"
    },
    {
        "name": "Eno Fruit Salt",
        "price": 8,
        "rating": 4.9,
        "reviewCount": 1000,
        "description": "Effervescent powder for acidity.",
        "dosage": "1 sachet in water.",
        "usage": "Heavy meals, indigestion.",
        "details": "Works in 6 seconds.",
        "ingredients": [
            "Sodium Bicarbonate",
            "Citric Acid."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "User",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Classic remedy."
            }
        ],
        "id": 35,
        "category": "Acidity",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47MldKIOaA-k_LvPpCuSU2xgxrqXbKvzxaA&s"
    },
    {
        "name": "Pantoprazole 40mg",
        "price": 90,
        "rating": 4.6,
        "reviewCount": 120,
        "description": "Proton pump inhibitor for chronic acidity.",
        "dosage": "1 tablet before breakfast.",
        "usage": "GERD, ulcers.",
        "details": "Reduces acid production.",
        "ingredients": [
            "Pantoprazole Sodium."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "CorporateJoe",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Solved my morning heartburn."
            }
        ],
        "id": 36,
        "category": "Acidity",
        "inStock": true,
        "image": "https://tiimg.tistatic.com/fp/2/007/502/pantoprazole-ip-40-mg-10-x-10-tablets-802.jpg"
    },
    {
        "name": "Isabgol (Psyllium Husk)",
        "price": 140,
        "rating": 4.7,
        "reviewCount": 300,
        "description": "Natural fiber for healthy bowel movements.",
        "dosage": "1 spoon in warm water at night.",
        "usage": "Constipation, gut health.",
        "details": "100% natural husk.",
        "ingredients": [
            "Psyllium Husk."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "SeniorCitizen",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Gentle and effective."
            }
        ],
        "id": 37,
        "category": "Digestion",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71Xs3tx59zL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Pudin Hara Pearls",
        "price": 25,
        "rating": 4.8,
        "reviewCount": 500,
        "description": "Mint oil capsules for stomach ache.",
        "dosage": "1-2 pearls after meal.",
        "usage": "Gas, stomach pain.",
        "details": "Cooling relief.",
        "ingredients": [
            "Mentha Piperita Oil."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "LadyTraveler",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Must have in purse."
            }
        ],
        "id": 38,
        "category": "Digestion",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/817rRLldofL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Digestive Enzyme Syrup",
        "price": 110,
        "rating": 4.5,
        "reviewCount": 85,
        "description": "Enzyme supplement for heavy digestion.",
        "dosage": "10ml after meals.",
        "usage": "Indigestion, loss of appetite.",
        "details": "Aids breakdown of food.",
        "ingredients": [
            "Diastase",
            "Pepsin."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "PartyGoer",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Helps when I overeat."
            }
        ],
        "id": 39,
        "category": "Digestion",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/611panB3KZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Refresh Tears",
        "price": 160,
        "rating": 4.8,
        "reviewCount": 350,
        "description": "Lubricating eye drops for dry eyes.",
        "dosage": "1-2 drops as needed.",
        "usage": "Dryness, screen fatigue.",
        "details": "Mimics natural tears.",
        "ingredients": [
            "Carboxymethylcellulose 0.5%."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "DevGuy",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Relief for my computer eyes."
            }
        ],
        "id": 40,
        "category": "Eye Care",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZDBhLT8F9fMnZkxx2g1jNiSdas5s07LAnw&s"
    },
    {
        "name": "I-Kul Plus",
        "price": 75,
        "rating": 4.5,
        "reviewCount": 120,
        "description": "Cooling eye drops.",
        "dosage": "1 drop twice daily.",
        "usage": "Redness, burning sensation.",
        "details": "Contains cooling agents.",
        "ingredients": [
            "Naphazoline",
            "Menthol."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Student",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Very cooling."
            }
        ],
        "id": 41,
        "category": "Eye Care",
        "inStock": true,
        "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/5a0b744b7b0b4f7ea22999c22e13a97d.jpg"
    },
    {
        "name": "Itone Eye Drops",
        "price": 60,
        "rating": 4.4,
        "reviewCount": 90,
        "description": "Ayurvedic herbal eye drops.",
        "dosage": "2 drops at bedtime.",
        "usage": "Vision clarity, tiredness.",
        "details": "Herbal formulation.",
        "ingredients": [
            "Neem",
            "Tulsi",
            "Honey."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "OldUser",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Burns a little but cleans eyes well."
            }
        ],
        "id": 42,
        "category": "Eye Care",
        "inStock": true,
        "image": "https://d1s24u4ln0wd0i.cloudfront.net/med_op/6598_3.webp"
    },
    {
        "name": "Melatonin 5mg",
        "price": 350,
        "rating": 4.6,
        "reviewCount": 75,
        "description": "Sleep aid supplement.",
        "dosage": "1 tablet 30 mins before bed.",
        "usage": "Insomnia, jet lag.",
        "details": "Non-habit forming hormone.",
        "ingredients": [
            "Melatonin 5mg."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "Insomniac",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Finally sleeping through the night."
            }
        ],
        "id": 43,
        "category": "Sleep",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/61cgZqv7bnL.jpg"
    },
    {
        "name": "Zandu Sleep Well",
        "price": 180,
        "rating": 4.3,
        "reviewCount": 40,
        "description": "Herbal tea for relaxation.",
        "dosage": "1 cup before bed.",
        "usage": "Mild sleep issues.",
        "details": "Calming herbs.",
        "ingredients": [
            "Chamomile",
            "Ashwagandha."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "TeaLover",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Taste is mild and relaxing."
            }
        ],
        "id": 44,
        "category": "Sleep",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/71CXJFc6a3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Lavender Essential Oil",
        "price": 250,
        "rating": 4.7,
        "reviewCount": 100,
        "description": "Aromatherapy oil for deep sleep.",
        "dosage": "2 drops on pillow.",
        "usage": "Stress, anxiety sleep.",
        "details": "Pure essential oil.",
        "ingredients": [
            "Lavandula angustifolia oil."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "YogaMom",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Smell is divine, puts me out."
            }
        ],
        "id": 45,
        "category": "Sleep",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/81dWT3VBxYL.jpg"
    },
    {
        "name": "Triphala Churna",
        "price": 60,
        "rating": 4.8,
        "reviewCount": 400,
        "description": "Three-fruit blend for detox.",
        "dosage": "1 tsp with warm water.",
        "usage": "Digestion, colon cleanse.",
        "details": "Ancient rasayana.",
        "ingredients": [
            "Amla",
            "Haritaki",
            "Bibhitaki."
        ],
        "reviews": [
            {
                "id": 1,
                "user": "HealthyLiving",
                "rating": 5,
                "date": "2024-02-15",
                "comment": "Best natural laxative."
            }
        ],
        "id": 46,
        "category": "Ayurveda",
        "inStock": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfMfmPmmC81WkkW8ZlePP6ybpavV31BbaqQ&s"
    },
    {
        "name": "Ashwagandha Powder",
        "price": 150,
        "rating": 4.7,
        "description": "",
        "dosage": "",
        "usage": "",
        "details": "",
        "ingredients": [],
        "reviews": [],
        "id": 47,
        "category": "Ayurveda",
        "inStock": true,
        "image": "https://m.media-amazon.com/images/I/6195eN3CYFL.jpg"
    }
];

export const MOCK_PRODUCTS = products;

export const MOCK_USERS = [
    {
        id: 1,
        username: "Rudra",
        email: "rudra@example.com",
        phone: "9876543210",
        password: "password123",
        role: "customer",
        addressLine: "B-204, Green Valley Apts",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560001",
        profileImage: null
    },
    {
        id: 999,
        username: "Admin",
        email: "admin@medicare.com",
        phone: "9999999999",
        password: "adminpassword",
        role: "admin",
        addressLine: "Medicare HQ, Nariman Point",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400021",
        profileImage: null
    }
];