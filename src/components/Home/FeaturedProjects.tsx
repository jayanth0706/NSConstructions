import{ useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  location: string;
  status: string;
  images: string[];
  specs: string[];
  price: string;
};

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Coral Villa',
      location: 'Deccan Park, Hyderabad',
      status: 'Completed',
      price: '₹1.25 Cr',
      images: [
        'https://r1imghtlak.mmtcdn.com/539344ae1ab411ec96fd0a58a9feac02.jpg',
        'https://r1imghtlak.mmtcdn.com/158a626e1ab411eca5b00a58a9feac02.jpg',
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202109071807228553-135698c00fc711eca99b0a58a9feac02.jpg',
        'https://r1imghtlak.mmtcdn.com/e48cba221ab311ec86fd0a58a9feac02.jpg'
      ],
      specs: [
        'Configuration: 4BHK + Study + Home Theatre',
        'Plot Area: 350 Sq. Yds',
        'Super Built-up Area: 4200 Sq. Ft',
        'Facing: East',
        'Furnishing: Semi-Furnished (incl. modular kitchen, wardrobes in all bedrooms, ACs in all rooms)'
      ]
    },
    {
      id: 2,
      title: 'Global Inspira Residency',
      location: 'Miyapur, Hyderabad',
      status: 'Completed',
      price: '₹1.45 Cr',
      images: [
        'https://housing-images.n7net.in/4f2250e8/b9df0272cd4d3f3fa94a99f692acd609/v0/fs/rohan_abhilasha_4-wagholi-pune-rohan_builders_and_developers_private_limited.jpeg',
        'https://housing-images.n7net.in/01c16c28/38944d6d5ac7457cbe425715d300c036/v0/fs.jpg',
        'https://housing-images.n7net.in/01c16c28/3c2d09347ddb434fb656c2b435bfcdb7/v0/fs.jpg',
        'https://housing-images.n7net.in/012c1500/a53ae5191ab79d476082806f8ff64ae4/v0/fs.jpeg'
      ],
      specs: ['Configuration: 3BHK + 3 Bathrooms + Utility + 2 Balconies', 
              'Super Built-up Area: 1600 Sq. Ft', 
              'Furnishing: Modular kitchen, wardrobes in bedrooms, false ceiling',
              'Amenities: Clubhouse, Solar Power, 24x7 Security, CCTV Surveillance',
              'Parking: 2 covered car parks']
    },
    {
      id: 3,
      title: 'NS 4-BHK Independent House',
      location: 'Peerzadiguda, Uppal',
      status: 'Completed',
      price: '₹1.15 Cr',
      images: [
        'https://housing-images.n7net.in/012c1500/1c167750a3d0cacf19bdabec1e09c0ab/v0/fs.jpeg',
        'https://housing-images.n7net.in/01c16c28/343b5c4540b5c397dd69744866814d13/v0/fs/4_bhk_independent_house-for-sale-baner-Pune-hall.jpg',
        'https://housing-images.n7net.in/01c16c28/3012fe697893654b3b08ee5fe084009e/v0/fs/4_bhk_independent_house-for-sale-baner-Pune-others.jpg',
        'https://housing-images.n7net.in/01c16c28/98b1c0bc21cf7a4bdd41892c3feb7719/v0/fs/4_bhk_independent_house-for-sale-baner-Pune-others.jpg'
      ],
      specs: ['Configuration: 4BHK + 4 Bathrooms + Pooja Room + Sit-out', 
              'Super Built-up Area: 2000 Sq. Ft | Plot Area: 180 Sq. Yds', 
              'Furnishing: Modular kitchen, wardrobes, false ceiling, LED lights',
              'Flooring: Premium vitrified tiles | Teak wood main door',
              'Utilities: Borewell + Municipal Water, Geyser, Inverter wiring',
              'Safety: CCTV, Compound Wall, Video Door Phone',
              'Parking: Covered parking for 2 cars']
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our latest masterpieces that showcase our commitment to quality and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-700 text-base mb-2 font-medium">
                  {project.price}
                </p>
                <div className="flex items-center space-x-2 text-neutral-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="font-body text-sm">{project.location}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold text-primary-500 mb-2">{selectedProject.title}</h2>
              <p className="text-neutral-700 text-lg mb-2 font-medium">{selectedProject.price}</p>
              <p className="text-neutral-600 mb-4">{selectedProject.location}</p>
              <span
                className={`inline-block mb-6 px-4 py-1 rounded-full text-sm font-medium ${
                  selectedProject.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {selectedProject.status}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedProject.title} ${i + 1}`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2">Rooms / Features</h3>
              <ul className="list-disc list-inside text-neutral-700 space-y-1">
                {selectedProject.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
