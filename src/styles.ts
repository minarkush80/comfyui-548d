import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6e05e, #ed8936, #e53e3e);
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: all 0.5s ease;
  background: linear-gradient(90deg, #805ad5, #d53f8c);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  &.scrolled {
    padding: 0.5rem 0;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoCircle = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #f6e05e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(360deg);
  }
`;

export const LogoLetter = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6b46c1;
  text-align: center;
`;

export const LogoText = styled.h1`
  font-size: 1.625rem;
  font-weight: bold;
  color: white;
  letter-spacing: 0.05em;
`;

export const Nav = styled.nav`
  display: none;
  gap: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #f6e05e;
  }
`;

export const MobileMenuButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  background-color: #6b46c1;
  padding: 1rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

export const MobileNavLink = styled.a`
  color: white;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f6e05e;
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
`;

export const HeroTitle = styled.div`
  margin-bottom: 2rem;
`;

export const HeroTitleText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  background: linear-gradient(90deg, #805ad5, #d53f8c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #f6e05e;
  color: #6b46c1;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #ecc94b;
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: #6b46c1;
    transform: scale(1.05);
  }
`;

export const AboutSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(90deg, #4c51bf, #805ad5);
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const AboutCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const AboutText = styled.p`
  font-size: 1.25rem;
  color: white;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Highlight = styled.span`
  color: #f6e05e;
  font-weight: bold;
`;

export const MenuSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(90deg, #ed64a6, #e53e3e);
`;

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const MenuSliderContainer = styled.div`
  position: relative;
  max-width: 56rem;
  margin: 0 auto;
`;

export const MenuCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SliderButton = styled.button`
  background-color: #f6e05e;
  color: #6b46c1;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #ecc94b;
  }
`;

export const SliderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  flex: 1;
`;

export const MenuItemContent = styled.div`
  text-align: center;
`;

export const MenuItemEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const MenuItemName = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

export const MenuItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
`;

export const MenuItemPrice = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: #f6e05e;
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

export const SliderDot = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => active ? '#f6e05e' : 'rgba(255, 255, 255, 0.5)'};
`;

// Testimonials Section
export const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(90deg, #48bb78, #4299e1);
`;

export const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const TestimonialHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const TestimonialAvatar = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const TestimonialName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  
  .filled {
    fill: #f6e05e;
  }
`;

export const TestimonialText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-style: italic;
`;

// Location Section
export const LocationSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(90deg, #805ad5, #ed64a6);
`;

export const LocationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const LocationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const LocationContent = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LocationTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  
  .icon {
    color: #f6e05e;
  }
`;

export const MapPlaceholder = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const MapIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const MapText = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #9b5de5, #00ffff);
  position: relative;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0.5rem;
    filter: contrast(110%) brightness(105%);
  }

  @media (max-width: 768px) {
    height: 200px;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;


export const MapSubtext = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
`;

// Footer
export const Footer = styled.footer`
  background-color: #1a202c;
  color: white;
  padding: 3rem 0;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const LogoCircleSmall = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f6e05e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoLetterSmall = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #6b46c1;
`;

export const FooterLogoText = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const FooterText = styled.div`
  color: #a0aec0;
  line-height: 1.5;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: #a0aec0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f6e05e;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #2d3748;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
`;

export const FooterCopyright = styled.p`
  color: #a0aec0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
  animation: ${fadeIn} 0.3s ease;
`;

export const Modal = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  max-width: 28rem;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  animation: ${scaleUp} 0.3s ease;
`;

export const ModalHeader = styled.div`
  background: linear-gradient(90deg, #805ad5, #d53f8c);
  padding: 1.5rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const CloseButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e2e8f0;
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #805ad5;
    box-shadow: 0 0 0 2px rgba(128, 90, 213, 0.2);
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #805ad5;
    box-shadow: 0 0 0 2px rgba(128, 90, 213, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #805ad5, #d53f8c);
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(90deg, #6b46c1, #b83280);
    transform: scale(1.02);
  }
`;

export const Confirmation = styled.div`
  text-align: center;
  padding: 2rem 0;
  
  .icon {
    color: #48bb78;
    margin: 0 auto 1rem;
  }
`;

export const ConfirmationTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

export const ConfirmationText = styled.p`
  color: #4a5568;
`;