export interface SourcingCategory {
  id: string;
  name: string;
  description: string;
  category: 'electronics' | 'mechanical' | 'food' | 'digital';
  image: string;
  tags?: string[];
}

export const SOURCING_EXAMPLES: SourcingCategory[] = [
  // Electronics
  {
    id: 'e1',
    name: 'Industrial Microcontrollers',
    description: 'High-performance ARM based controllers for industrial automation and robotics.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['Industrial', 'ARM']
  },
  {
    id: 'e2',
    name: 'Precision Sensor Arrays',
    description: 'Ultra-sensitive light and motion detection for precision manufacturing lines.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    tags: ['Sensors', 'Precision']
  },
  {
    id: 'e3',
    name: 'Modular Power Systems',
    description: 'High-efficiency power supply units with surge protection for critical infrastructure.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800',
    tags: ['Power', 'Modular']
  },
  {
    id: 'e4',
    name: 'Semiconductor Wafers',
    description: 'High-purity silicon wafers for advanced chip manufacturing.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Semiconductor', 'Silicon']
  },
  {
    id: 'e5',
    name: 'FPGA Development Boards',
    description: 'Advanced field-programmable gate arrays for high-speed digital signal processing.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['FPGA', 'Digital']
  },
  {
    id: 'e6',
    name: 'High-Frequency RF Modules',
    description: 'Precision radio frequency components for wireless communication systems.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=800',
    tags: ['RF', 'Wireless']
  },
  {
    id: 'e7',
    name: 'Industrial PLC Units',
    description: 'Programmable Logic Controllers for robust industrial automation and control.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=800',
    tags: ['PLC', 'Automation']
  },
  {
    id: 'e8',
    name: 'Custom PCB Assemblies',
    description: 'Turnkey printed circuit board assembly services for complex electronic designs.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800',
    tags: ['PCB', 'Custom']
  },
  // Mechanical
  {
    id: 'm1',
    name: 'Custom CNC Gear Sets',
    description: 'Hardened steel gears with micron-level tolerance for heavy machinery.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    tags: ['Steel', 'CNC']
  },
  {
    id: 'm2',
    name: 'Aerospace Fasteners',
    description: 'Lightweight, aerospace-grade titanium bolts and nuts for critical applications.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Titanium', 'Aerospace']
  },
  {
    id: 'm3',
    name: 'Hydraulic Actuators',
    description: 'Heavy-duty hydraulic systems for industrial movement and control.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tags: ['Hydraulic', 'Industrial']
  },
  {
    id: 'm4',
    name: 'Precision Bearings',
    description: 'High-speed ceramic and steel bearings for rotating machinery.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    tags: ['Bearings', 'Precision']
  },
  {
    id: 'm5',
    name: 'Pneumatic Control Valves',
    description: 'High-precision valves for automated pneumatic systems and fluid control.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    tags: ['Pneumatic', 'Valves']
  },
  {
    id: 'm6',
    name: 'Heavy-Duty Conveyor Rollers',
    description: 'Durable, high-load capacity rollers for industrial material handling systems.',
    category: 'mechanical',
    image: 'images/conveyor_rollers.png',
    tags: ['Conveyor', 'Industrial']
  },
  {
    id: 'm7',
    name: 'Precision Optical Mounts',
    description: 'Stable and adjustable mounting solutions for high-precision optical systems.',
    category: 'mechanical',
    image: 'images/optical_mounts.png',
    tags: ['Optical', 'Precision']
  },
  {
    id: 'm8',
    name: 'Custom Aluminum Extrusions',
    description: 'Tailored aluminum profiles for structural and architectural applications.',
    category: 'mechanical',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    tags: ['Aluminum', 'Structural']
  },
  // Food
  {
    id: 'f1',
    name: 'Organic Nordic Grains',
    description: 'Traditional Finnish rye and whole grains sourced from organic farms.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    tags: ['Organic', 'Finnish']
  },
  {
    id: 'f2',
    name: 'Wild Lapland Provisions',
    description: 'Hand-picked cloudberries and forest berries from the pristine Lapland wilderness.',
    category: 'food',
    image: 'images/foode.jpg',
    tags: ['Wild', 'Premium']
  },
  {
    id: 'f3',
    name: 'Artisanal Smoked Salmon',
    description: 'Cold-smoked Atlantic salmon prepared with traditional Nordic methods.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    tags: ['Smoked', 'Fresh']
  },
  {
    id: 'f4',
    name: 'Nordic Honey & Syrups',
    description: 'Pure forest honey and birch syrups from the heart of Finland.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    tags: ['Natural', 'Sweet']
  },
  // Digital Marketing
  {
    id: 'd1',
    name: 'Custom Web Development',
    description: 'High-performance React and Next.js applications tailored to your business needs.',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['Web', 'React']
  },
  {
    id: 'd2',
    name: 'Social Media Strategy',
    description: 'Comprehensive social media management and growth strategies for global brands.',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tags: ['Social', 'Growth']
  },
  {
    id: 'd3',
    name: 'SEO & Content Marketing',
    description: 'Data-driven SEO optimization and high-quality content creation to drive organic traffic.',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    tags: ['SEO', 'Content']
  },
  {
    id: 'd4',
    name: 'UI/UX Design Systems',
    description: 'Modern, accessible, and scalable design systems for digital products.',
    category: 'digital',
    image: 'images/uiux.jpg',
    tags: ['Design', 'UI/UX']
  }
];

export const BLOG_POSTS = [
  {
    id: 'b1',
    title: 'The Future of CNC Machining in Finland',
    excerpt: 'Exploring how automation is reshaping the precision engineering landscape in the Nordics.',
    date: 'March 24, 2026',
    image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=800',
    content: `Precision engineering has always been at the heart of Finnish industrial manufacturing, but 2026 marks a turning point. Driven by advances in AI-assisted automation, CNC machining is faster, more precise, and more cost-effective than ever before.\n\nNew 5-axis machines equipped with predictive maintenance sensors are now capable of reducing downtime by over 40%, ensuring that part production remains on schedule without compromising tight tolerances. At EuroCore, our Finnish procurement hubs are constantly vetting the latest facilities to source parts that meet rigorous aerospace and medical standards.`
  },
  {
    id: 'b2',
    title: 'Sustainable Food Sourcing: From Forest to Table',
    excerpt: 'How we maintain the highest quality standards while preserving our natural ecosystems.',
    date: 'April 02, 2026',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    content: `The demand for organic, sustainably sourced food has never been higher. Consumers want to know where their food comes from, and they demand a supply chain that respects the environment. In the heart of Lapland, traditional foraging and ethical farming are setting global standards.\n\nFrom hand-picked wild cloudberries to sustainably caught Atlantic salmon, the preservation of biodiversity is vital. We work directly with certified farmers across the Nordics, running rigorous quality checks to deliver provisions that not only taste extraordinary but also support environmental harmony.`
  },
  {
    id: 'b3',
    title: 'Navigating the European Semiconductor Market in 2026',
    excerpt: 'A comprehensive guide to sourcing high-tech silicon and navigating supply chain challenges.',
    date: 'April 05, 2026',
    image: 'images/blog_semiconductors.png',
    content: `The global semiconductor shortage taught the industry a severe lesson in supply chain resilience. Today, Europe has bolstered its domestic production capabilities, driven by initiatives to create self-sustaining silicon hubs across the continent.\n\nProcurement managers must now understand the shifting dynamics of regional silicon foundries versus traditional overseas options. Through strategic alliances with emerging European chipmakers, we offer robust continuity solutions for companies relying on microcontrollers, sensor arrays, and automotive-grade chips.`
  },
  {
    id: 'b4',
    title: 'Why SEO Strategy is Essential for B2B Industrial Growth',
    excerpt: 'How digital marketing and analytics are reshaping B2B client acquisition for heavy infrastructure.',
    date: 'April 06, 2026',
    image: 'images/blog_seo_b2b.png',
    content: `Historically, B2B industrial companies relied exclusively on trade shows, cold calls, and legacy networks. However, modern procurement teams start their sourcing journey online. If your manufacturing firm cannot be easily found via search engines, you are invisible to a significant share of the market.\n\nData-driven SEO involves technical website optimization, authoritative industrial content, and targeted backlink strategies. We help legacy B2B manufacturers transition their lead generation pipelines into the 21st century by securing top rankings for high-intent queries like "precision CNC machining Europe" or "bulk hydraulic actuators."`
  },
  {
    id: 'b5',
    title: 'Innovations in Hydraulic Actuator Technology',
    excerpt: 'Exploring the latest advancements in heavy-duty industrial automation and precision control.',
    date: 'April 07, 2026',
    image: 'images/blog_hydraulics.png',
    content: `Industrial movement relies heavily on the power and precision of hydraulic systems. In harsh environments like mining operations or offshore rigs, actuators must withstand immense pressure while providing delicate control. Recently, electro-hydraulic actuators (EHAs) have emerged as the gold standard.\n\nEHAs eliminate the need for centralized hydraulic systems, replacing extensive piping with self-contained, powerful compact units. This hybrid approach significantly reduces maintenance costs and potential fluid leakages. Our networks are actively supplying these next-gen actuators to leading manufacturing plants across Europe.`
  },
  {
    id: 'b6',
    title: 'The Rise of Nordic Organic Products in Global Markets',
    excerpt: 'Understanding the global demand for pure, artisanal Nordic provisions and sustainable sourcing.',
    date: 'April 07, 2026',
    image: 'images/blog_nordic_food.png',
    content: `Around the world, culinary professionals and health-conscious consumers are seeking out Nordic ingredients. Characterized by short, intense growing seasons under the midnight sun, items like wild berries, cold-pressed seed oils, and rye possess elevated nutritional profiles and concentrated flavors.\n\nThis shift in consumer behavior represents a massive opportunity for importers. We streamline the logistics of transporting artisanal goods from remote Scandinavian producers to high-end retailers globally, maintaining strict temperature controls to ensure absolute freshness upon delivery.`
  }
];
