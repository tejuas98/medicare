import img_paracetamol from '../assets/images/medicines/gettyimages-78133192-612x612.jpg';
import img_ibuprofen from '../assets/images/medicines/gettyimages-181196577-612x612.jpg';
import img_advil from '../assets/images/medicines/gettyimages-458637499-612x612.jpg';
import img_tylenol from '../assets/images/medicines/gettyimages-2236511561-612x612.jpg';
import img_aspirin from '../assets/images/medicines/gettyimages-458677005-612x612.jpg';
import img_azithromycin from '../assets/images/medicines/gettyimages-144713364-612x612.jpg';
import img_cough_syrup from '../assets/images/medicines/gettyimages-171105811-612x612.jpg';
import img_benadryl from '../assets/images/medicines/gettyimages-1661265358-612x612.jpg';
import img_asthalin from '../assets/images/medicines/gettyimages-1559109943-612x612.jpg';
import img_otrivin from '../assets/images/medicines/gettyimages-2000095287-612x612.jpg';
import img_metformin from '../assets/images/medicines/gettyimages-471365240-612x612.jpg';
import img_insulin from '../assets/images/medicines/gettyimages-1232215391-612x612.jpg';
import img_ozempic from '../assets/images/medicines/gettyimages-1247409888-612x612.jpg';
import img_lantus from '../assets/images/medicines/gettyimages-1247410165-612x612.jpg';
import img_calcium from '../assets/images/medicines/gettyimages-57083383-612x612.jpg';
import img_vit_c from '../assets/images/medicines/gettyimages-458086715-612x612.jpg';
import img_multivitamin from '../assets/images/medicines/gettyimages-458620665-612x612.jpg';
import img_fish_oil from '../assets/images/medicines/gettyimages-475621112-612x612.jpg';
import img_vit_d3 from '../assets/images/medicines/gettyimages-868176694-612x612.jpg';
import img_glucosamine from '../assets/images/medicines/gettyimages-868176690-612x612.jpg';
import img_cetirizine from '../assets/images/medicines/gettyimages-458084547-612x612.jpg';
import img_digene from '../assets/images/medicines/gettyimages-481536889-612x612.jpg';
import img_probiotic from '../assets/images/medicines/gettyimages-494236751-612x612.jpg';
import img_refresh from '../assets/images/medicines/gettyimages-2000108530-612x612.jpg';
import img_melatonin from '../assets/images/medicines/gettyimages-2252769647-612x612.jpg';


export const products = [
    // Fever & Pain
    {
        id: 1, name: "Paracetamol 650mg", category: "Fever", price: 30, inStock: true, image: img_paracetamol,
        description: "Effective analgesic and antipyretic for fever reduction and mild pain.",
        dosage: "1 tablet every 6 hours after food.", usage: "Fever, Body ache, Headache.",
        rating: 4.8, reviewCount: 1240, reviews: [{ id: 1, user: "Amit S.", rating: 5, date: "2024-01-10", comment: "Works fast." }]
    },
    {
        id: 2, name: "Ibuprofen 400mg", category: "Pain Relief", price: 45, inStock: true, image: img_ibuprofen,
        description: "NSAID for relieving pain, inflammation, and stiffness.",
        dosage: "1 tablet usually after food, 2-3 times daily.", usage: "Muscle pain, Dental pain, Inflammation.",
        rating: 4.6, reviewCount: 850, reviews: [{ id: 1, user: "Sara K.", rating: 4, date: "2024-01-15", comment: "Good for back pain." }]
    },
    {
        id: 3, name: "Advil Liqui-Gels", category: "Pain Relief", price: 120, inStock: true, image: img_advil,
        description: "Liquid filled ibuprofen capsules for faster relief.",
        dosage: "1 capsule every 4-6 hours while symptoms persist.", usage: "Headache, Menstrual cramps, Backache.",
        rating: 4.7, reviewCount: 920, reviews: [{ id: 1, user: "Raj P.", rating: 5, date: "2023-12-20", comment: "Very fast acting." }]
    },
    {
        id: 4, name: "Tylenol Extra Strength", category: "Fever", price: 50, inStock: true, image: img_tylenol,
        description: "Acetaminophen based fever reducer and pain reliever.",
        dosage: "2 caplets every 6 hours. Do not exceed 6 caplets in 24 hours.", usage: "High fever, Flu symptoms.",
        rating: 4.8, reviewCount: 600, reviews: [{ id: 1, user: "Tina G.", rating: 5, date: "2024-01-05", comment: "Safe and effective." }]
    },
    // Heart
    {
        id: 5, name: "Aspirin Low Dose", category: "Heart", price: 15, inStock: true, image: img_aspirin,
        description: "Low dose aspirin for cardiovascular health.",
        dosage: "1 tablet daily or as directed by physician.", usage: "Heart attack prevention, Blood thinning.",
        rating: 4.9, reviewCount: 1500, reviews: [{ id: 1, user: "John D.", rating: 5, date: "2023-11-10", comment: "Daily essential." }]
    },
    // Antibiotic
    {
        id: 6, name: "Azithromycin 500mg", category: "Antibiotic", price: 120, inStock: true, image: img_azithromycin,
        description: "Macrolide antibiotic for bacterial infections.",
        dosage: "1 tablet daily for 3-5 days as prescribed.", usage: "Throat infection, Respiratory infection.",
        rating: 4.5, reviewCount: 340, reviews: [{ id: 1, user: "Dr. L.", rating: 5, date: "2023-10-30", comment: "Strong antibiotic." }]
    },
    // Respiratory
    {
        id: 7, name: "Cough Syrup", category: "Respiratory", price: 90, inStock: true, image: img_cough_syrup,
        description: "Effective syrup for dry and wet cough.",
        dosage: "10ml three times a day.", usage: "Persistent cough, Throat irritation.",
        rating: 4.4, reviewCount: 605, reviews: [{ id: 1, user: "Mina R.", rating: 4, date: "2023-12-12", comment: "Soothing." }]
    },
    {
        id: 8, name: "Benadryl Syrup", category: "Allergy", price: 110, inStock: true, image: img_benadryl,
        description: "Diphenhydramine formula for allergy and cough relief.",
        dosage: "5-10ml at night or as directed.", usage: "Allergy symptoms, Runny nose, Sneezing.",
        rating: 4.6, reviewCount: 780, reviews: [{ id: 1, user: "Karan J.", rating: 5, date: "2024-01-02", comment: "Stops sneezing quickly." }]
    },
    {
        id: 9, name: "Asthalin Inhaler", category: "Respiratory", price: 180, inStock: true, image: img_asthalin,
        description: "Salbutamol inhaler for quick relief from bronchospasm.",
        dosage: "1-2 puffs when breathless.", usage: "Asthma attacks, Wheezing, COPD.",
        rating: 4.9, reviewCount: 1100, reviews: [{ id: 1, user: "Vikram S.", rating: 5, date: "2023-11-20", comment: "Lifesaver." }]
    },
    {
        id: 10, name: "Otrivin Nasal Spray", category: "Respiratory", price: 60, inStock: true, image: img_otrivin,
        description: "Xylometazoline nasal decongestant drops.",
        dosage: "2 drops in each nostril, 2-3 times daily.", usage: "Blocked nose, Sinus congestion.",
        rating: 4.7, reviewCount: 1300, reviews: [{ id: 1, user: "Ria M.", rating: 5, date: "2023-12-05", comment: "Instant relief." }]
    },
    // Diabetes
    {
        id: 11, name: "Metformin 500mg", category: "Diabetes", price: 40, inStock: true, image: img_metformin,
        description: "First-line medication for Type 2 diabetes.",
        dosage: "1 tablet with dinner or as prescribed.", usage: "Blood sugar control.",
        rating: 4.6, reviewCount: 2200, reviews: [{ id: 1, user: "Anil K.", rating: 5, date: "2023-09-15", comment: "Controls sugar well." }]
    },
    {
        id: 12, name: "Insulin Vial", category: "Diabetes", price: 450, inStock: true, image: img_insulin,
        description: "Fast-acting insulin for injection.",
        dosage: "As determined by doctor.", usage: "Type 1 & Type 2 Diabetes.",
        rating: 4.8, reviewCount: 400, reviews: [{ id: 1, user: "Nurse A.", rating: 5, date: "2023-10-10", comment: "Essential." }]
    },
    {
        id: 13, name: "Ozempic Pen", category: "Diabetes", price: 3000, inStock: true, image: img_ozempic,
        description: "Semaglutide injection for blood sugar and weight management.",
        dosage: "One injection once weekly.", usage: "Diabetes management, Weight loss.",
        rating: 4.7, reviewCount: 150, reviews: [{ id: 1, user: "HealthFirst", rating: 5, date: "2024-01-20", comment: "Very effective." }]
    },
    {
        id: 14, name: "Lantus SoloStar", category: "Diabetes", price: 2500, inStock: true, image: img_lantus,
        description: "Long-acting insulin glargine pen.",
        dosage: "One injection daily at same time (usually night).", usage: "Basal insulin control.",
        rating: 4.9, reviewCount: 300, reviews: [{ id: 1, user: "SeniorCare", rating: 5, date: "2023-11-05", comment: "Easy to use pen." }]
    },
    // Supplements
    {
        id: 15, name: "Calcium Citrate", category: "Bones", price: 150, inStock: true, image: img_calcium,
        description: "Calcium supplement with high absorption.",
        dosage: "1 tablet usually after food.", usage: "Bone strength, Osteoporosis prevention.",
        rating: 4.7, reviewCount: 900, reviews: [{ id: 1, user: "Geeta P.", rating: 5, date: "2023-12-01", comment: "Good for knees." }]
    },
    {
        id: 16, name: "Vitamin C Chewable", category: "Immunity", price: 50, inStock: true, image: img_vit_c,
        description: "Daily chewable Vitamin C supplement.",
        dosage: "1 tablet daily.", usage: "Immunity boosting, Skin health.",
        rating: 4.8, reviewCount: 2100, reviews: [{ id: 1, user: "Simi L.", rating: 5, date: "2024-01-18", comment: "Tasty." }]
    },
    {
        id: 17, name: "Multivitamin Complex", category: "Energy", price: 180, inStock: true, image: img_multivitamin,
        description: "Complete multivitamin with minerals.",
        dosage: "1 tablet daily after breakfast.", usage: "Daily nutrition, Energy, Wellness.",
        rating: 4.7, reviewCount: 1850, reviews: [{ id: 1, user: "FitLife", rating: 5, date: "2023-11-25", comment: "Feel energetic." }]
    },
    {
        id: 18, name: "Fish Oil Omega-3", category: "Heart", price: 400, inStock: true, image: img_fish_oil,
        description: "Rich source of Omega-3 fatty acids.",
        dosage: "1 softgel daily with a fatty meal.", usage: "Heart health, Joint flexibility.",
        rating: 4.8, reviewCount: 800, reviews: [{ id: 1, user: "CardioFan", rating: 5, date: "2023-10-15", comment: "No fishy burps." }]
    },
    {
        id: 19, name: "Vitamin D3", category: "Bones", price: 60, inStock: true, image: img_vit_d3,
        description: "Essential vitamin for calcium absorption.",
        dosage: "1 capsule/sachet weekly or daily as prescribed.", usage: "Bone health, Immunity.",
        rating: 4.9, reviewCount: 1200, reviews: [{ id: 1, user: "SunShine", rating: 5, date: "2023-12-10", comment: "Required for indoor lifestyle." }]
    },
    {
        id: 20, name: "Glucosamine", category: "Joints", price: 350, inStock: true, image: img_glucosamine,
        description: "Supplement for cartilage protection.",
        dosage: "1 tablet twice daily.", usage: "Joint pain, Arthritis support.",
        rating: 4.6, reviewCount: 600, reviews: [{ id: 1, user: "RunnerGuy", rating: 4, date: "2023-09-20", comment: "Helps knee pain." }]
    },
    // Allergy & Gastric
    {
        id: 21, name: "Cetirizine 10mg", category: "Allergy", price: 25, inStock: true, image: img_cetirizine,
        description: "Non-drowsy antihistamine tablet.",
        dosage: "1 tablet once daily.", usage: "Allergy relief, Itching, Hives.",
        rating: 4.8, reviewCount: 1200, reviews: [{ id: 1, user: "PolenAllergy", rating: 5, date: "2024-01-22", comment: "Works all day." }]
    },
    {
        id: 22, name: "Digene Tablets", category: "Acidity", price: 20, inStock: true, image: img_digene,
        description: "Antacid chewable tablets for quick relief.",
        dosage: "Chew 2 tablets after meals.", usage: "Acidity, Gas, Indigestion.",
        rating: 4.7, reviewCount: 2500, reviews: [{ id: 1, user: "Foodie", rating: 5, date: "2023-12-30", comment: "Instant relief." }]
    },
    {
        id: 23, name: "Probiotic Capsules", category: "Digestion", price: 150, inStock: true, image: img_probiotic,
        description: "Gut health supplement with live cultures.",
        dosage: "1 capsule daily.", usage: "Gut health, Digestion, Immunity.",
        rating: 4.6, reviewCount: 700, reviews: [{ id: 1, user: "GutHappy", rating: 5, date: "2023-11-15", comment: "Improved digestion." }]
    },
    // Eye & Sleep
    {
        id: 24, name: "Refresh Tears", category: "Eye Care", price: 180, inStock: true, image: img_refresh,
        description: "Lubricating eye drops for dry eyes.",
        dosage: "1-2 drops in affected eye(s) as needed.", usage: "Dry eyes, Eye irritation.",
        rating: 4.9, reviewCount: 1600, reviews: [{ id: 1, user: "ScreenUser", rating: 5, date: "2024-01-05", comment: "Best for computer strain." }]
    },
    {
        id: 25, name: "Melatonin 3mg", category: "Sleep", price: 220, inStock: true, image: img_melatonin,
        description: "Sleep aid supplement.",
        dosage: "1 tablet 30 minutes before bedtime.", usage: "Insomnia, Jet lag.",
        rating: 4.7, reviewCount: 900, reviews: [{ id: 1, user: "SleepWell", rating: 5, date: "2023-10-25", comment: "Gentle sleep." }]
    },
    // Ayurveda
    {
        id: 26, name: "Himalaya Liv.52", category: "Ayurveda", price: 130, inStock: true, image: "https://images.unsplash.com/photo-1626429380963-44165682b146?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Herbal supplement for liver health.",
        dosage: "1-2 tablets twice daily.", usage: "Liver protection, Appetite stimulant.",
        rating: 4.9, reviewCount: 5000, reviews: [{ id: 1, user: "Rahul M.", rating: 5, date: "2024-02-01", comment: "Trusted for years." }],
        ingredients: ["Caper Bush (Himsra)", "Chicory (Kasani)", "Black Nightshade (Kakamachi)", "Arjuna", "Yarrow (Biranjasipha)"]
    },
    {
        id: 27, name: "Chyawanprash", category: "Ayurveda", price: 395, inStock: true, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Immunity booster herbal paste.",
        dosage: "1 spoonful daily due mornings.", usage: "Immunity, Energy, Respiratory health.",
        rating: 4.8, reviewCount: 3200, reviews: [{ id: 1, user: "Priya S.", rating: 5, date: "2023-12-15", comment: "Tasty and healthy." }],
        ingredients: ["Amla", "Ashwagandha", "Guduchi", "Shatavari", "Bala", "Pippali", "Cardamom"]
    },
    {
        id: 28, name: "Ashwagandha Powder", category: "Ayurveda", price: 250, inStock: true, image: "https://images.unsplash.com/photo-1611075382603-c35f08e43431?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Stress relief and vitality herb.",
        dosage: "Mix with milk at night.", usage: "Stress, Anxiety, Strength.",
        rating: 4.7, reviewCount: 1500, reviews: [{ id: 1, user: "Vikram R.", rating: 5, date: "2024-01-10", comment: "Helps with sleep." }],
        ingredients: ["100% Pure Organic Ashwagandha Root Powder"]
    },
    {
        id: 29, name: "Triphala Churna", category: "Ayurveda", price: 120, inStock: true, image: "https://images.unsplash.com/photo-1606275825220-432d447d6a7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Herbal laxative and digestive aid.",
        dosage: "1 tsp with warm water at night.", usage: "Digestion, Constipation.",
        rating: 4.6, reviewCount: 1100, reviews: [{ id: 1, user: "Grandma K.", rating: 5, date: "2023-11-20", comment: "Very effective." }]
    }
];

// Re-export as MOCK_PRODUCTS for backward compatibility
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
