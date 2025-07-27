import React, { useState, useEffect } from 'react';
import { 
  MainContainer,
  Header,
  HeaderContainer,
  LogoContainer,
  LogoCircle,
  LogoLetter,
  LogoText,
  Nav,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNav,
  MobileNavLink,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroTitleText,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  AboutSection,
  AboutContainer,
  SectionTitle,
  AboutCard,
  AboutText,
  Highlight,
  MenuSection,
  MenuContainer,
  MenuSliderContainer,
  MenuCard,
  SliderControls,
  SliderButton,
  SliderTitle,
  MenuItemContent,
  MenuItemEmoji,
  MenuItemName,
  MenuItemDescription,
  MenuItemPrice,
  SliderDots,
  SliderDot,
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialHeader,
  TestimonialAvatar,
  TestimonialName,
  TestimonialRating,
  TestimonialText,
  LocationSection,
  LocationContainer,
  LocationCard,
  LocationContent,
  LocationTitle,
  LocationInfo,
  LocationItem,
  MapPlaceholder,
  MapText,
  MapSubtext,
  Footer,
  FooterContainer,
  FooterColumn,
  FooterLogo,
  LogoCircleSmall,
  LogoLetterSmall,
  FooterLogoText,
  FooterTitle,
  FooterText,
  SocialIcons,
  SocialLink,
  FooterBottom,
  FooterCopyright,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  SubmitButton,
  Confirmation,
  ConfirmationTitle,
  ConfirmationText
} from './styles';
// import './reset.css'
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Calendar, 
  Star,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  User,
  CheckCircle,
  Hamburger,
  Heart,
} from 'lucide-react';
import GlobalStyle from './ResetStyle';

const RetroRestaurantLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });
  const [isReservationSubmitted, setIsReservationSubmitted] = useState(false);

  const menuItems = [
     {
    id: 1,
    name: "Disco Burger",
    description: "Hambúrguer com carne artesanal, queijo derretido e molho especial dos anos 70",
    price: "R$ 28,90",
    image: "🍔"
  },
  {
    id: 2,
    name: "Funky Fries",
    description: "Batatas fritas crocantes com temperos especiais e molho barbecue",
    price: "R$ 16,90",
    image: "🍟"
  },
  {
    id: 3,
    name: "Retro Milkshake",
    description: "Milkshake cremoso de baunilha com chantilly e cereja",
    price: "R$ 14,90",
    image: "🥤"
  },
  {
    id: 4,
    name: "Groove Pizza",
    description: "Pizza margherita com massa artesanal e ingredientes frescos",
    price: "R$ 35,90",
    image: "🍕"
  },
  {
    id: 5,
    name: "Neon Nuggets",
    description: "Nuggets crocantes com um toque de páprica e molho neon especial",
    price: "R$ 18,90",
    image: "🍗"
  },
  {
    id: 6,
    name: "Synthwave Sundae",
    description: "Taça de sorvete tricolor com calda de morango e glitter comestível",
    price: "R$ 19,90",
    image: "🍨"
  },
  {
    id: 7,
    name: "Pac-Man Pancakes",
    description: "Panquecas fofinhas com cobertura de frutas e mel retrô",
    price: "R$ 22,90",
    image: "🥞"
  },
  {
    id: 8,
    name: "Arcade Nachos",
    description: "Nachos crocantes com cheddar, pimenta e molho de guacamole",
    price: "R$ 24,90",
    image: "🌮"
  },
  {
    id: 9,
    name: "Laser Lemonade",
    description: "Limonada rosa com gás e brilho especial, servida em copo luminoso",
    price: "R$ 12,90",
    image: "🍋"
  },
  {
    id: 10,
    name: "Boogie Brownie",
    description: "Brownie de chocolate com nozes e calda quente neon",
    price: "R$ 15,90",
    image: "🍫"
  }
  ];


  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      comment: "Ambiente incrível! Me senti nos anos 70 de verdade. A comida é fantástica!",
      avatar: "👩‍🦱"
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      comment: "Melhor experiência gastronômica da cidade. O ambiente retro é perfeito!",
      avatar: "👨‍🦲"
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      comment: "Atendimento excepcional e pratos deliciosos. Recomendo muito!",
      avatar: "👩‍🦳"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % menuItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleReservationSubmit = () => {
    if (!reservationForm.name || !reservationForm.email || !reservationForm.phone || 
        !reservationForm.date || !reservationForm.time || !reservationForm.guests) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsReservationSubmitted(true);
    setTimeout(() => {
      setIsReservationModalOpen(false);
      setIsReservationSubmitted(false);
      setReservationForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setReservationForm({
      ...reservationForm,
      [e.target.name]: e.target.value
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header>
        <HeaderContainer>
          <LogoContainer>
            <LogoCircle>
              <LogoLetter> <Hamburger/> </LogoLetter>
            </LogoCircle>
            <LogoText>ARTE FELIZ</LogoText>
          </LogoContainer>
          
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#testimonials">Avaliações</NavLink>
            <NavLink href="#location">Localização</NavLink>
          </Nav>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderContainer>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu>
            <MobileNav>
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#about">Sobre</MobileNavLink>
              <MobileNavLink href="#menu">Menu</MobileNavLink>
              <MobileNavLink href="#testimonials">Avaliações</MobileNavLink>
              <MobileNavLink href="#location">Localização</MobileNavLink>
            </MobileNav>
          </MobileMenu>
        )}
      </Header>

      <HeroSection id="home">
        <HeroContent>
          <HeroTitle>
            <HeroTitleText>GROOVE & FOOD</HeroTitleText>
          </HeroTitle>
          <HeroSubtitle>
            Uma viagem ao
passado com sabor
e aconchego
          </HeroSubtitle>
          
          <HeroButtons>
            <PrimaryButton onClick={() => setIsReservationModalOpen(true)}>
              Fazer Reserva
            </PrimaryButton>
            
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <AboutSection id="about">
        <AboutContainer>
          <SectionTitle>Nossa História</SectionTitle>
          <AboutCard>
            <AboutText>
              No restaurante <Highlight>Arte Feliz</Highlight>, cada prato é uma viagem no tempo. 
              Criado em 2020, nosso restaurante celebra a era dourada dos anos 70 e 80 com uma 
              experiência gastronômica única que combina sabores autênticos com o visual groovy da época.
            </AboutText>
            <AboutText>
              Nossos chefs especializados recriam receitas clássicas com ingredientes frescos e técnicas modernas, 
              garantindo que cada refeição seja uma experiência inesquecível em um ambiente que respira nostalgia e diversão.
            </AboutText>
          </AboutCard>
        </AboutContainer>
      </AboutSection>

      <MenuSection id="menu">
        <MenuContainer>
          <SectionTitle>Nosso Menu</SectionTitle>
          
          <MenuSliderContainer>
            <MenuCard>
              <SliderControls>
                <SliderButton onClick={prevSlide}>
                  <ChevronLeft size={24} />
                </SliderButton>
                <SliderTitle>Pratos Especiais</SliderTitle>
                <SliderButton onClick={nextSlide}>
                  <ChevronRight size={24} />
                </SliderButton>
              </SliderControls>
              
              <MenuItemContent>
                <MenuItemEmoji>{menuItems[currentSlide].image}</MenuItemEmoji>
                <MenuItemName>{menuItems[currentSlide].name}</MenuItemName>
                <MenuItemDescription>{menuItems[currentSlide].description}</MenuItemDescription>
                <MenuItemPrice>{menuItems[currentSlide].price}</MenuItemPrice>
              </MenuItemContent>
            </MenuCard>
            
            <SliderDots>
              {menuItems.map((_, index) => (
                <SliderDot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </SliderDots>
          </MenuSliderContainer>
        </MenuContainer>
      </MenuSection>

      <TestimonialsSection id="testimonials">
        <TestimonialsContainer>
          <SectionTitle>O Que Dizem Nossos Clientes</SectionTitle>
          
          <TestimonialsGrid>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialHeader>
                  <TestimonialAvatar>{testimonial.avatar}</TestimonialAvatar>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialRating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="filled" size={20} />
                    ))}
                  </TestimonialRating>
                </TestimonialHeader>
                <TestimonialText>"{testimonial.comment}"</TestimonialText>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsContainer>
      </TestimonialsSection>

      <LocationSection id="location">
        <LocationContainer>
          <SectionTitle>Onde Estamos</SectionTitle>
          
          <LocationCard>
            <LocationContent>
              <LocationTitle>Retro Bistro</LocationTitle>
              <LocationInfo>
                <LocationItem>
                  <MapPin className="icon" size={24} />
                  <span>Rua das Flores, 123 - Centro</span>
                </LocationItem>
                <LocationItem>
                  <Phone className="icon" size={24} />
                  <span>(81) 98765-4321</span>
                </LocationItem>
                <LocationItem>
                  <Mail className="icon" size={24} />
                  <span>contato@artefeliz.com</span>
                </LocationItem>
                <LocationItem>
                  <Clock className="icon" size={24} />
                  <span>Ter-Dom: 17h às 23h</span>
                </LocationItem>
              </LocationInfo>
            </LocationContent>
            
            <MapPlaceholder>
              
              <MapText>
                <iframe 
                src="https://www.google.com/maps?q=restaurantes+perto+de+Av.+Alfredo+Lisboa,+268,+Recife,+PE,+50030-150&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }} 
                loading="lazy">
                </iframe>
              </MapText>
              <MapSubtext>Integração com Google Maps API</MapSubtext>
            </MapPlaceholder>
          </LocationCard>
        </LocationContainer>
      </LocationSection>

      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo>
              <LogoCircleSmall>
                <LogoLetterSmall> <Hamburger/></LogoLetterSmall>
              </LogoCircleSmall>
              <FooterLogoText>Arte Feliz</FooterLogoText>
            </FooterLogo>
            <FooterText>
              Sabores únicos em um ambiente que respira nostalgia e diversão.
            </FooterText>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Horário de Funcionamento</FooterTitle>
            <FooterText>
              <p>Terça a Quinta: 17h - 23h</p>
              <p>Sexta e Sábado: 17h - 00h</p>
              <p>Domingo: 12h - 22h</p>
              <p>Segunda: Fechado</p>
            </FooterText>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Siga-nos</FooterTitle>
            <SocialIcons>
              <SocialLink href="#">
                <Instagram size={24} />
              </SocialLink>
              <SocialLink href="#">
                <Facebook size={24} />
              </SocialLink>
              <SocialLink href="#">
                <Twitter size={24} />
              </SocialLink>
            </SocialIcons>
          </FooterColumn>
        </FooterContainer>
        
        <FooterBottom>
          <FooterCopyright>&copy; 2025 Arte Feliz. Todos os direitos reservados. Nice to Meet You < Heart/> </FooterCopyright>
        </FooterBottom>
      </Footer>

      {/* Reservation Modal */}
      {isReservationModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <ModalTitle>Fazer Reserva</ModalTitle>
              <CloseButton onClick={() => setIsReservationModalOpen(false)}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            
            <ModalContent>
              {!isReservationSubmitted ? (
                <Form>
                  <FormGroup>
                    <FormLabel>
                      <User size={20} />
                      <span>Nome</span>
                    </FormLabel>
                    <FormInput
                      type="text"
                      name="name"
                      value={reservationForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>
                      <Mail size={20} />
                      <span>Email</span>
                    </FormLabel>
                    <FormInput
                      type="email"
                      name="email"
                      value={reservationForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>
                      <Phone size={20} />
                      <span>Telefone</span>
                    </FormLabel>
                    <FormInput
                      type="tel"
                      name="phone"
                      value={reservationForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>
                      <Calendar size={20} />
                      <span>Data</span>
                    </FormLabel>
                    <FormInput
                      type="date"
                      name="date"
                      value={reservationForm.date}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>
                      <Clock size={20} />
                      <span>Horário</span>
                    </FormLabel>
                    <FormInput
                      type="time"
                      name="time"
                      value={reservationForm.time}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>
                      <Users size={20} />
                      <span>Número de Pessoas</span>
                    </FormLabel>
                    <FormSelect
                      name="guests"
                      value={reservationForm.guests}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5">5 pessoas</option>
                      <option value="6">6+ pessoas</option>
                    </FormSelect>
                  </FormGroup>
                  
                  <SubmitButton onClick={handleReservationSubmit}>
                    Confirmar Reserva
                  </SubmitButton>
                </Form>
              ) : (
                <Confirmation>
                  <CheckCircle className="icon" size={48} />
                  <ConfirmationTitle>Reserva Confirmada!</ConfirmationTitle>
                  <ConfirmationText>
                    Obrigado! Sua reserva foi confirmada com sucesso. 
                    Você receberá um email de confirmação em breve.
                  </ConfirmationText>
                </Confirmation>
              )}
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default RetroRestaurantLanding;