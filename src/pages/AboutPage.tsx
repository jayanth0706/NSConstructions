const AboutPage = () => {
  const team = [
    {
      name: 'Pavanagundla Jayanth',
      position: 'Founder & CEO',
      image: '/about/Founder.jpg',
      description: 'Visionary leader with 5+ years in construction industry'
    },
    {
      name: 'N Shiva Shankar',
      position: 'Chief Architect',
      image: '/about/ChiefArchitect.jpg',
      description: 'Award-winning architect specializing in sustainable design'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Head of Sales',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in customer relations and project consultancy'
    },
    {
      name: 'N Yogananda Reddy',
      position: 'Interior Design Head',
      image: '/about/InteriorDesignHead.jpg',
      description: 'Creative designer with expertise in luxury interiors'
    }
  ];

  const values = [
    {
      icon: '/about/QuickFirst.png',
      title: 'Quality First',
      description: 'We never compromise on quality and use only the finest materials and construction techniques.'
    },
    {
      icon: '/about/CustomerCentric.png',
      title: 'Customer Centric',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our success.'
    },
    {
      icon: '/about/TeamWork.png',
      title: 'Teamwork',
      description: 'We believe in collaborative effort and the power of working together towards common goals.'
    },
    {
      icon: '/about/Excellence.png',
      title: 'Excellence',
      description: 'We strive for excellence in every project and continuously improve our processes.'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-500 mb-4">
            About NS Constructions 
          </h2>
          <br/>
          <p className="font-body text-lg text-neutral-600 max-w-6xl mx-auto">
            Two decades of building dreams and crafting legacies across Hyderabad. 
            NS Constructions has grown from a small, passionate team into a trusted name 
            in the real estate industry, known for delivering high-quality residential 
            and commercial projects. With a commitment to innovation, transparency, 
            and customer satisfaction, we’ve built not just homes, but lasting relationships. 
            Every structure we create reflects our dedication to excellence, sustainability, 
            and the evolving lifestyle needs of modern families. <br/><br/>
            As we look ahead, NS Constructions remains committed to redefining urban 
            living by embracing cutting-edge technologies and sustainable building 
            practices. Our goal is not just to construct spaces, but to craft communities 
            where people feel connected, secure, and inspired. With each new project, 
            we aim to raise the benchmark in design, functionality, and quality — continuing 
            our journey of transforming skylines and enriching lives.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-lg text-neutral-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow mb-4">
                  <img src={value.icon} alt={value.title} className="h-8 w-8 object-contain" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-primary-500 mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
              Meet Our Team
            </h2>
            <p className="font-body text-lg text-neutral-600">
              Experienced professionals dedicated to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-accent-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="font-body text-neutral-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
