export const onboardingSlides = [
  {
    id: '1',
    title: 'Proven specialists',
    description: 'We check each specialist before he starts work',
    image: require('../assets/images/onboarding_1.png'),
    accent: '#20C3AF',
  },
  {
    id: '2',
    title: 'Honest ratings',
    description: 'We carefully check each specialist and put honest ratings',
    image: require('../assets/images/onboarding_2.png'),
    accent: '#FFB19D',
  },
  {
    id: '3',
    title: 'Insured orders',
    description: 'We insure each order for the amount of $500',
    image: require('../assets/images/onboarding_3.png'),
    accent: '#20C3AF',
  },
  {
    id: '4',
    title: 'Create order',
    description: "It's easy, just click on the plus",
    image: require('../assets/images/onboarding_4.png'),
    accent: '#28D9C3',
  },
];

export const categoriesList = [
  { id: 'cat-1', name: 'Courier services', icon: 'bicycle-outline', count: '24 specialists', isHot: true },
  { id: 'cat-2', name: 'Furniture works', icon: 'hammer-outline', count: '18 specialists', isHot: false },
  { id: 'cat-3', name: 'Cleaning services', icon: 'sparkles-outline', count: '32 specialists', isHot: false },
  { id: 'cat-4', name: 'Equipment repair', icon: 'construct-outline', count: '15 specialists', isHot: false },
  { id: 'cat-5', name: 'Interior design', icon: 'color-palette-outline', count: '29 specialists', isHot: true },
  { id: 'cat-6', name: 'Construction works', icon: 'business-outline', count: '41 specialists', isHot: true },
];

export const constructionSubcategories = [
  { id: 'sub-1', name: 'Welding works', icon: 'flame-outline', price: '$40 / hr' },
  { id: 'sub-2', name: 'Foundation works', icon: 'layers-outline', price: '$55 / hr' },
  { id: 'sub-3', name: 'Roofing', icon: 'home-outline', price: '$35 / hr' },
  { id: 'sub-4', name: 'Waterproofing', icon: 'water-outline', price: '$20 / hr' },
  { id: 'sub-5', name: 'Architecture', icon: 'shapes-outline', price: '$65 / hr' },
  { id: 'sub-6', name: 'Design', icon: 'brush-outline', price: '$50 / hr' },
];

export const ordersInProgress = [
  {
    id: 'ord-1',
    title: 'Balcony repair',
    price: '$24',
    category: 'Construction',
    image: require('../assets/images/order_balcony.png'),
    contractor: 'Jeremías del Pozo',
    progress: 0.75,
    status: 'In Progress',
  },
  {
    id: 'ord-2',
    title: 'Redecorating',
    price: '$60',
    category: 'Interior',
    image: require('../assets/images/order_redecorating.png'),
    contractor: 'Cole Payne',
    progress: 0.45,
    status: 'Reviewing',
  },
  {
    id: 'ord-3',
    title: 'Painting works',
    price: '$42',
    category: 'Finishing',
    image: require('../assets/images/order_painting.png'),
    contractor: 'Joel Rowe',
    progress: 0.9,
    status: 'Nearly Done',
  },
  {
    id: 'ord-4',
    title: 'Interior design',
    price: '$54',
    category: 'Design',
    image: require('../assets/images/order_interior.png'),
    contractor: 'Elva Stone',
    progress: 0.3,
    status: 'Started',
  },
  {
    id: 'ord-5',
    title: 'Joinery & Woodwork',
    price: '$38',
    category: 'Furniture',
    image: require('../assets/images/order_craft.png'),
    contractor: 'Alex Turner',
    progress: 0.6,
    status: 'In Progress',
  },
  {
    id: 'ord-6',
    title: 'Living room renovation',
    price: '$85',
    category: 'Architecture',
    image: require('../assets/images/order_living.png'),
    contractor: 'David Coleman',
    progress: 0.2,
    status: 'Pending Start',
  },
];

export const paymentServices = [
  {
    id: 'srv-1',
    name: 'Welding works',
    price: 40,
    unit: 'Hourly rate',
    image: require('../assets/images/service_welding.png'),
    selected: true,
  },
  {
    id: 'srv-2',
    name: 'Foundation works',
    price: 55,
    unit: 'Base layout',
    image: require('../assets/images/service_foundation.png'),
    selected: true,
  },
  {
    id: 'srv-3',
    name: 'Waterproofing',
    price: 20,
    unit: 'Sealant pass',
    image: require('../assets/images/service_waterproofing.png'),
    selected: true,
  },
];

export const userProfile = {
  name: 'Jeremías del Pozo',
  location: 'New York',
  id: 'ID: 1120611',
  phone: '+3746589923',
  email: 'conrad@gmail.com',
  rating: 4.9,
  reviewsCount: 128,
  avatar: require('../assets/images/profile_user.png'),
  bio:
    'I have been working in this position for over 10 years! I have created many design solutions and I think my main best quality is creativity. If you liked my work, please contact me and see the professionalism and quality of my services.',
  portfolio: [
    require('../assets/images/portfolio_1.png'),
    require('../assets/images/portfolio_2.png'),
    require('../assets/images/portfolio_3.png'),
    require('../assets/images/portfolio_4.png'),
  ],
};

export const notificationsList = [
  {
    id: 'notif-1',
    sender: 'Joel Rowe',
    company: 'Bitrow Company',
    avatar: require('../assets/images/notif_joel.png'),
    text:
      'Sorry, all the artists in the Interior Design category are busy right now. If your task is still relevant - go to the task details page and click "Extend task”.',
    time: '25m ago',
    type: 'alert',
  },
  {
    id: 'notif-2',
    sender: 'Cole Payne',
    company: 'Corporation Kraton',
    avatar: require('../assets/images/notif_cole.png'),
    text: 'We have found a contractor for your task "Cleaning services”. Please see the details.',
    time: '2h ago',
    type: 'success',
  },
  {
    id: 'notif-3',
    sender: 'Elva Stone',
    company: 'Grand Service Company',
    avatar: require('../assets/images/notif_elva.png'),
    text:
      "David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.",
    time: '1d ago',
    type: 'info',
  },
];

export const paymentCards = [
  {
    id: 'card-1',
    type: 'Visa',
    number: '3872',
    fullMask: '**** **** **** 3872',
    exp: '17/20',
    balance: '$ 25,388',
    color: '#20C3AF',
    logo: require('../assets/images/visa_logo.png'),
  },
  {
    id: 'card-2',
    type: 'Mastercard',
    number: '2873',
    fullMask: '**** **** **** 2873',
    exp: '17/2020',
    balance: '$ 14,250',
    color: '#525464',
    logo: require('../assets/images/mastercard_logo.png'),
  },
];
