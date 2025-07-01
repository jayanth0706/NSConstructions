import { useState } from 'react';
import { Filter, MapPin, Phone, Mail, MessageSquare, User } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filters = ['All', 'Apartments', 'Villa', 'Commercial', 'Plots'];

  const projects = [
    {
      id: 1,
      title: 'Willow The Villa',
      type: 'Villa',
      location: 'City Centre Mall, Hyderabad',
      status: 'Pre-Launch',
      image: [
        '/projects/Willow1.jpg',
        '/projects/Willow2.jpg',
        '/projects/Willow3.jpg',
        '/projects/Willow4.jpg',
        '/projects/Willow5.jpg',
        '/projects/Willow6.jpg'
      ],
      specs: [
        'Configuration: 6BHK + Study + Home Theatre',
        'Plot Area: 700 Sq. Yds',
        'Super Built-up Area: 8400 Sq. Ft',
        'Furnishing: Semi-Furnished (includes modular kitchen, wardrobes in all bedrooms, and air conditioners in all rooms)',
        'Air Conditioning: Available in all rooms',
        'Parking: 5-6 Covered Car Parks (Free Parking)',
      ],
      price: '₹2.0 Cr onwards',
      contact: {
        name: 'Jayanth Pavanagundla',
        phone: '+91 7981976192',
        whatsapp: '+91 7981976192',
        email: 'pjayanth.ns@gmail.com'
      }
    },
    {
      id: 2,
      title: '3 BHK Flat In Ravis Kuteer',
      type: 'Apartments',
      location: 'Manikonda, Hyderabad',
      status: 'For Sale',
      image: ['https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_87785_588002_large.jpg',
            'https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_90868_308671_large.jpg',
            'https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_41289_903378_large.jpg',
            'https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_58493_834721_large.jpg',
            'https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_55138_487128_large.jpg',
            'https://images.nobroker.in/images/8a9f8e44928a4de801928a617f3d05e9/8a9f8e44928a4de801928a617f3d05e9_15006_507831_large.jpg'
      ],
      specs: ['Configuration: 3BHK – Spacious 3-bedroom apartment designed for comfortable family living', 
            'Bedrooms: 3 – Well-ventilated and naturally lit bedrooms', 
            'Bathrooms: 3 – Modern attached bathrooms with premium fittings',
            'Balconies: 2 – Private balconies offering outdoor relaxation and ventilation',
            'Parking: Dedicated Car Parking – Safe and secure vehicle parking facility available',
            'Power Backup: Partial Backup – Ensures essential electrical support during outages'],
      price: '₹60L onwards',
      contact: {
        name: 'Nakkala Yogananda Reddy',
        phone: '+91 9846743210',
        whatsapp: '+91 9846743210',
        email: 'nyoganandareddy.ns@gmail.com'
      }
    },
    {
      id: 3,
      title: '2BHK Independent House',
      type: 'Commercial',
      location: 'Nagaram, Hyderabad',
      status: 'For Sale',
      image: ['https://housing-images.n7net.in/01c16c28/fbedaeaa590f4c31b51e0882f194092e/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-main_entrance.jpg',
              'https://housing-images.n7net.in/01c16c28/97d1c22b26a141468764bdf5498523a3/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-living_room.jpg',
              'https://housing-images.n7net.in/01c16c28/055a8b8137ad48d4bfd2f2ae6f962301/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-bedroom_one.jpg',
              'https://housing-images.n7net.in/01c16c28/5d1076e9b5aa48599238c68bd68b84d2/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-bedroom_two.jpg',
              'https://housing-images.n7net.in/01c16c28/c302d03842864e2c846f22491bff28b4/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-kitchen.jpg',
              'https://housing-images.n7net.in/01c16c28/d339631e325f45eba4fbaaf8b5f8ac96/v0/fs/2_bhk_independent_house-for-sale-kowkur-Secunderabad-others.jpg'
      ],
      specs: ['Configuration: 3BHK – Spacious 3-bedroom apartment designed for comfortable family living', 
              'Facing: South – Ensures ample natural light and vastu compliance', 
              'Total Floors: Single floor – Independent ground-level home with no upper construction',
              'Plot Area: 1,350 sq.ft. (125.42 sq.m.) – Spacious land area for independent living',
              'Additional Room: Includes a dedicated pooja room – A serene space for prayer and meditation',
              'Balcony: None – Focused indoor space with maximum utility'],
      price: '₹80L onwards',
      contact: {
        name: 'Cherala Vishnu',
        phone: '+91 6300533052',
        whatsapp: '+91 6300533052',
        email: 'cvishnu.ns@gmail.com'
      }
    },
    {
      id: 4,
      title: '146.6 Sq. Yds in Subhagruha Sukrithi Ayatana',
      type: 'Plots',
      location: 'Nandikandi, Hyderabad',
      status: 'Ongoing',
      image: ['https://subhagruha.com/uploads/81c6d9b2ec0e969f48c0aff2ace1a4da.jpg',
              'https://subhagruha.com/uploads/82ef18fa3c42a506e98cb238bd026853.jpeg',
              'https://subhagruha.com/uploads/f6647d33d7afdd7a9f361ddaf265f67c.webp',
              'https://subhagruha.com/uploads/5f69a53cf1e342a11a6e5329cc0f1977.jpeg',
              'https://subhagruha.com/uploads/9d6008ff2131e28da970f89539ef2c16.jpeg',
              'https://subhagruha.com/uploads/52664eb333b64aecb1cce023ec99f9ae.jpeg'
      ],
      specs: ['Plot Area: 33 ft x 40 ft (Approx. 146.6 Sq. Yds)', 
              'Road Access: 33 ft. & 40 ft. wide Blacktop (BT) Roads', 
              'Electricity: Available', 
              'Security: 24/7 Security Provided',
              'Plantation: Avenue Plantations throughout the layout',
              'Lighting: Street Lights on all internal roads',
              'Compound: Fully Gated with Compound Wall',
              "Amenities: Dedicated Children's Play Area",
              'Vaastu: 100% Vaastu-Compliant Plots'],
      price: '₹50L onwards',
      contact: {
        name: 'Pavanagundla Dhanush',
        phone: '+91 9550479936',
        whatsapp: '+91 9550479936',
        email: 'pdhanush.ns@gmail.com'
      }
    },
    {
      id: 5,
      title: 'Srinivas Nilayam',
      type: 'Villa',
      location: 'Uppal, Medchal',
      status: 'For Sale',
      image: ['https://a0.muscache.com/im/pictures/039cf932-d63e-415b-94eb-9e90e03493e2.jpg?im_w=1200',
              'https://a0.muscache.com/im/pictures/4da90103-6a93-4223-a320-ed377d36fd0a.jpg?im_w=720',
              'https://a0.muscache.com/im/pictures/62a01d90-f2f3-4102-a1c6-dd51d2c63d8c.jpg?im_w=720',
              'https://a0.muscache.com/im/pictures/352658d8-4980-426c-9ef9-1e52116b344d.jpg?im_w=720',
              'https://a0.muscache.com/im/pictures/f9225d9f-0718-4b8e-a2e0-82ee8a664861.jpg?im_w=720',
              'https://a0.muscache.com/im/pictures/e233f06d-98d9-4a2e-a3c1-9945c7c8f1dd.jpg?im_w=1200'
      ],
      specs: ['Configuration: 6BHK + Study + Home Theatre',
              'Plot Area: 500 Sq. Yds',
              'Super Built-up Area: 6000 Sq. Ft',
              'Furnishing: Fully Furnished (includes kitchen appliances, beds with linen, storage, and essential utilities)', 
              'Air Conditioning: Available in all rooms',
              'Bathrooms: Modern Bathrooms with Hot Water Supply',
              'Parking: 4-5 Covered Car Parks (Free Parking)',
              'Security: 24/7 Security with CCTV Surveillance',],
      price: '₹1.0 Cr onwards',
      contact: {
        name: 'Jayanth Pavanagundla',
        phone: '+91 7981976192',
        whatsapp: '+91 7981976192',
        email: 'pjayanth.ns@gmail.com'
      }
    },
    {
      id: 6,
      title: '4 BHK Independent House',
      type: 'Commercial',
      location: 'Peerzadiguda, NH 2 2, Hyderabad',
      status: 'Ongoing',
      image: ['https://img.staticmb.com/mbphoto/property/cropped_images/2023/Mar/07/Photo_h0_w320/65873735_11_1678186241960-5442_0_320.jpg',
              'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Mar/01/Photo_h0_w320/65873735_1_1677685110953-11991_0_320.jpg',
              'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Mar/01/Photo_h0_w320/65873735_1_1677685110961-25982_0_320.jpg',
              'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Mar/01/Photo_h0_w320/65873735_7_1677685110998-4357_0_320.jpg',
              'https://img.staticmb.com/mbphoto/locality/cropped_images/2021/Nov/29/Photo_h0_w320/79080_IMG_20210924_122142---SHEIK-SALEEM_0_320.jpg',
              'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Mar/01/Photo_h0_w320/65873735_4_1677685110968-12923_0_320.jpg'
      ],
      specs: ['Configuration: Spacious 4BHK with 4 bedrooms, 5 bathrooms, 2 balconies, and a Puja Room for modern family living', 
              'Carpet Area: 2,451 Sq. Ft of ample space ideal for large families seeking comfort and functionality', 
              'Furnishing: Unfurnished property allowing complete personalization of interiors',
              'Flooring: Marble and Granite flooring for a durable, low-maintenance, and premium finish',
              'Air Conditioning: Not included, offering flexibility to install as per personal preference',
              'Facing: East-facing unit preferred for sunlight and Vastu compliance',
              'Transaction Type: New Property with Freehold Ownership for complete legal rights',
              'Overlooking: Overlooks Main Road ensuring good visibility and excellent connectivity'],
      price: '₹90L onwards',
      contact: {
        name: 'Cherala Vishnu',
        phone: '+91 6300533052',
        whatsapp: '+91 6300533052',
        email: 'cvishnu.ns@gmail.com'
      }
    },
    {
      id: 7,
      title: 'Kailash Sarovar Apartment',
      type: 'Apartments',
      location: 'Hasmathpet, Hyderabad',
      status: 'For Sale',
      image: ['https://img.squareyards.com/secondaryPortal/IN_638816440691226061-300425090749749.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638816441395589450-300425090859859.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638816441390855623-300425090859859.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638816440972996569-300425090817817.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638816440014087476-300425090641641.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638816257140788199-300425040154154.jpg?aio=w-745;h-419;crop;'
      ],
      specs: ['Configuration: 2BHK Apartment with 2 Bedrooms, 2 Bathrooms, and a Balcony', 
              'Built-up Area: 1,050 Sq. Ft', 
              'Furnishing: Semi-Furnished (includes walk-in closet and basic fittings)', 
              "Amenities: Badminton Court(s), Attached Market, 24x7 Security, Balcony, Visitor's Parking, ATM's, View of Landmark, Walk-in Closet, Waste Disposal",
              "Parking: Visitor's Parking Available"],
      price: '₹55 L onwards',
      contact: {
        name: 'Nakkala Yogananda Reddy',
        phone: '+91 9846743210',
        whatsapp: '+91 9846743210',
        email: 'nyoganandareddy.ns@gmail.com'
      }
    },
    {
      id: 8,
      title: 'Fortune Villa',
      type: 'Villa',
      location: ' Balapur, Hyderabad',
      status: 'For Sale',
      image: ['https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/1a19050c-146a-4c32-962b-87f68443a11f.jpeg?im_w=1440',
              'https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/31b9fb5f-ad4e-464e-8e65-121921e89e23.jpeg?im_w=1200',
              'https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/6bdff212-9eac-4df7-8c6e-f7ed851f6c59.jpeg?im_w=720',
              'https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/95e667b8-ad76-4fb7-a1a2-8ef1608869c9.jpeg?im_w=1440',
              'https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/2323b0fe-4606-4b2e-881c-3581019acc44.jpeg?im_w=1440',
              'https://a0.muscache.com/im/pictures/hosting/Hosting-1364251031141572075/original/952cdbb8-0d2b-4ff5-956f-b638179fd3cd.jpeg?im_w=1440'
      ],
      specs: ['Configuration: 5BHK + Study + Home Theatre',
              'Plot Area: 600 Sq. Yds',
              'Super Built-up Area: 7200 Sq. Ft', 
              'Furnishing: Fully Furnished (includes Whirlpool refrigerator, microwave, gas cooker, kettle, waste compactor, mosquito net, iron, and basic kitchen utilities)', 
              'Air Conditioning: Available in all rooms with ceiling fans for added ventilation',
              'Parking: Free Parking on Premises and Ample On-Street Parking'],
      price: '₹2.5 Cr onwards',
      contact: {
        name: 'Jayanth Pavanagundla',
        phone: '+91 7981976192',
        whatsapp: '+91 7981976192',
        email: 'pjayanth.ns@gmail.com'
      }
    },
    {
      id: 9,
      title: '301 Sq.Yd. Plot in Sri Tirumala Mercury Township',
      type: 'Plots',
      location: 'Mirkhanpet, Hyderabad',
      status: 'Ongoing',
      image: ['https://img.squareyards.com/secondaryPortal/IN_638796102648162597-070425081104114.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638796102655930286-070425081105115.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638796102659492935-070425081105115.jpg?aio=w-745;h-419;crop;',
              'https://img.squareyards.com/secondaryPortal/IN_638796102667175707-070425081106116.jpg?aio=w-745;h-419;crop;',
              'https://static.squareyards.com/resources/images/hyderabad/project-image/sri-tirumala-mercury-township-project-master-plan-image1-2997.jpg?aio=w-755;h-419;crop;',
              'https://static.squareyards.com/resources/images/hyderabad/project-image/sri-tirumala-mercury-township-project-location-image1-8432.jpg?aio=w-755;h-419;crop;'
      ],
      specs: ['Configuration: Residential Plot', 
              'Plot Area: 301 Sq. Yds', 
              'Overlooking: Garden View & Landmark View',
              "Amenities: Gymnasium & Private Gym, Badminton, Tennis & Squash Courts, Kids' Play Areas, Jogging/Cycle Track, Power Backup & Electricity Backup"],
      price: '₹40 L onwards',
      contact: {
        name: 'Pavanagundla Dhanush',
        phone: '+91 9550479936',
        whatsapp: '+91 9550479936',
        email: 'pdhanush.ns@gmail.com'
      }
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => setVisibleProjects(prev => prev + 6);
  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-500 mb-4">
            Our Projects
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of residential, commercial, and luxury projects across Hyderabad
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <Filter className="h-4 w-4 inline mr-2" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const projectImage = Array.isArray(project.image) ? project.image[0] : project.image;

            return (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up border hover:border-accent-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={projectImage}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'Ongoing'
                        ? 'bg-accent-100 text-accent-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary-500 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-neutral-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="font-body text-sm">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-heading font-semibold text-lg text-accent-600">
                      {project.price}
                    </span>
                  </div>

                  <div>
                    <button
                      onClick={() => openModal(project)}
                      className="w-full border border-primary-200 text-primary-700 hover:bg-primary-50 py-2 rounded-md font-medium transition"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh] shadow-2xl relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-primary-600 mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedProject.location}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {(Array.isArray(selectedProject.image) ? selectedProject.image : [selectedProject.image]).map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project Image ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow"
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-neutral-700">Project Features:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              {selectedProject.specs.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            {/* Contact Information Section */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-3 text-neutral-700">Contact Information:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3">
                  <User className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-500">Agent Name</p>
                    <p className="font-medium text-yellow-600">{selectedProject.contact.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3">
                  <Phone className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${selectedProject.contact.phone}`} className="font-medium text-yellow-600 hover:underline">
                      {selectedProject.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3">
                  <MessageSquare className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${selectedProject.contact.whatsapp.replace(/[^\d]/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-yellow-600 hover:underline"
                    >
                      {selectedProject.contact.whatsapp}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3">
                  <Mail className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href={`mailto:${selectedProject.contact.email}`} 
                      className="font-medium text-yellow-600 hover:underline"
                    >
                      {selectedProject.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;