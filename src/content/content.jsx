import links from "./links";
import logo from "../assets/imgs/logo/logo.png";
import logoDark from "../assets/imgs/logo/logo.png";
import aboutSocialImgBackground from "../assets/imgs/about/aboutImg.png";
import trustedByImg1 from "../assets/imgs/trustedBy/item1.webp";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.webp";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.webp";
import trustedByImg4 from "../assets/imgs/trustedBy/item4.webp";
import trustedByImg5 from "../assets/imgs/trustedBy/item5.webp";
import trustedByImg6 from "../assets/imgs/trustedBy/item6.webp";
import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.webp";
import featuresImg1 from "../assets/imgs/features/featuresImg1.jpg";
import featuresImg2 from "../assets/imgs/features/featuresImg2.jpg";
import featuresImg3 from "../assets/imgs/features/featuresImg3.jpg";
import featuresImg4 from "../assets/imgs/features/featuresImg4.jpg";
import featuresImg5 from "../assets/imgs/features/featuresImg5.jpg";
import featuresImg6 from "../assets/imgs/features/featuresImg6.jpg";
import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutImgMobile1 from "../assets/imgs/about/aboutImgMobile.webp";
import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgparalaxe.png";
import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";
import MotionDivDownToUp from "../components/animation/MotionDivDownToUp";
import TypewriterComponent from "../components/animation/TypeWriter";
import ButtonWithIconNavbar from "../components/interactives/ButtonWithIconNavbar";
import imgSteps from "../assets/imgs/steps/imgSteps.jpg";

import imgTestimonial1 from "../assets/imgs/testimonialsHero/imgTestimonial1.webp";
import imgTestimonial2 from "../assets/imgs/testimonialsHero/imgTestimonial2.webp";
import imgTestimonial3 from "../assets/imgs/testimonialsHero/imgTestimonial3.webp";
import imgTestimonial4 from "../assets/imgs/testimonialsHero/imgTestimonial4.webp";
import imgTestimonial5 from "../assets/imgs/testimonialsHero/imgTestimonial5.webp";
import imgTestimonial6 from "../assets/imgs/testimonialsHero/imgTestimonial6.webp";
import imgTestimonial7 from "../assets/imgs/testimonialsHero/imgTestimonial7.webp";
import imgTestimonial8 from "../assets/imgs/testimonialsHero/imgTestimonial8.webp";
import imgTestimonial9 from "../assets/imgs/testimonialsHero/imgTestimonial9.webp";
import imgTestimonial10 from "../assets/imgs/testimonialsHero/imgTestimonial10.webp";
import imgTestimonial11 from "../assets/imgs/testimonialsHero/imgTestimonial11.webp";
import imgTestimonial12 from "../assets/imgs/testimonialsHero/imgTestimonial12.webp";

export const infos = {
  name: "A_Definir ",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "A_Definir", // Email desejado pelo cliente
  domain: "A_Definir", // Sem "www"
  phone: {
    ddd: "00",
    firstPart: "00000", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "20000477", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda à sexta-feira:</p>
      <p>A_Definirh</p>
    </div>
  ),

  obs: (
    <span className="italic">
      {" "}
      <i>A_Definir</i>
    </span>
  ),
  instagramProfile: "ramom.tendas", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: "Logo",
      },
      logoDark: {
        img: logoDark,
        alt: "Logo",
      },
      menuItems: ["Início", "Sobre Nós", "Serviços", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      title: (
        <h1 className="">
          <span className="text-white">
            Líder em
            <br className="hidden tablet1:flex desktop1:hidden" />{" "}
          </span>
          <TypewriterComponent
            strings={[
              "tendas para festas, ",
              "estruturas sob medida,",
              "casamentos e feiras",
            ]}
            className="text-white my-typewriter"
          />
          <p className="mt-[16px] font-medium text-paragraph4 font-secondFont leading-[28px]">
            Padrão de excelência e qualidade que você merece!
          </p>
        </h1>
      ),
      subtitle: <p></p>,
      ctaButtonText: "Falar pelo WhatsApp",
      ctaButtonInstagram: "Falar pelo Instagram",
      images: {
        background: {},
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "TENDAS PARA TODO TIPO DE EVENTO",
      title: "Coberturas sob medida para cada ocasião",
      subtitle:
        "Seja para festa, feira ou cobertura temporária, temos a estrutura certa para você ficar despreocupado.",
      card1: {
        title: "Tenda Piramidal Comum",
        subtitle: "",
        img: featuresImg1,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre sites.`,
      },
      card2: {
        title: "Tenda Piramidal Cristal",
        subtitle: "",
        img: featuresImg2,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre landing pages.`,
      },
      card3: {
        title: "Tenda Piramidal Personalizada",
        subtitle: "",
        img: featuresImg3,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre os serviços de vocês.`,
      },
      card4: {
        title: "Locação de Tendas",
        subtitle: "",
        img: featuresImg4,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre os serviços de vocês.`,
      },
      card5: {
        title: "Sombreadores Sob Medida",
        subtitle: "",
        img: featuresImg5,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre os serviços de vocês.`,
      },
      card6: {
        title: "Tenda Sanfonada Personalizada",
        subtitle: "",
        img: featuresImg6,
        buttonLabel: "Orçamento",
        buttonLink: `${links.whatsapp}Olá! Vim através do site e gostaria de saber sobre os serviços de vocês.`,
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 6,
      number1Description: "Anos no mercado",
      number2: 20,
      number2Description: "Tipos de tendas",
      number3: 100,
      number3Description: "Satisfação dos clientes",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "QUEM É A RAMOM TENDAS",
      title: "Nossa história",
      subtitle:
        "Conheça os pilares que guiam a Ramom Tendas no mercado de tendas e construção. ",
      paragraph: (
        <div>
          Com 6 anos de experiência no mercado, a Ramom Tendas se consolidou
          como uma referência em vendas e fabricação de tendas, além de atuar
          com excelência em projetos de urbanismo e construção.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Com 6 anos de experiência no mercado, a Ramom Tendas se consolidou
          como uma referência em vendas e fabricação de tendas, além de atuar
          com excelência em projetos de urbanismo e construção.
          <br />
          <br />
          Nossa missão é oferecer soluções práticas, duráveis e acessíveis,
          sempre prezando pela qualidade, agilidade e satisfação do cliente.
          <br />
          <br />
          Nosso diferencial está no atendimento humanizado, no cuidado com cada
          detalhe e na fé que impulsiona nossos projetos. Acreditamos na
          intuição, no pensamento positivo e no compromisso com quem confia em
          nosso trabalho.
          <br />
          <br />
          Cada tenda instalada ou obra concluída representa nosso esforço em ser
          a melhor escolha para nossos clientes em todo o Brasil.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImgBackground,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "REDES SOCIAIS",
        title: "Acompanhe muitas novidades e atualizações!",
        subtitle:
          "⚖️ Fique por dentro do mundo jurídico seguindo o Dr. Guilherme Miranda nas redes sociais!",
        paragraph: (
          <p>
            Acompanhe nossas postagens e mantenha-se atualizado sobre Direito
            Penal e Processual Penal, com insights também sobre Direito de
            Família, Trabalhista e Contratual. Não perca a chance de transformar
            conhecimento em poder para proteger seus direitos.
          </p>
        ),
      },
    },
    team: {
      title: "Nossa Equipe",
      subtitle: "Conheça as mentes brilhantes por trás do nosso sucesso",
      miniTag: "Team",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            arialabel1: "Link para LinkedIn",

            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            arialabel2: "Link para GitHub",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
            arialabel3: "Link para github.io",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            arialabel1: "Link para LinkedIn",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            arialabel2: "Link para GitHub",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
            arialabel3: "Link para Instagram",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            arialabel1: "Link para LinkedIn",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            arialabel2: "Link para GitHub",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
            arialabel3: "Link para Instagram",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            arialabel1: "Link para LinkedIn",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            arialabel2: "Link para Instagram",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
            arialabel3: "Link para WhatsApp",
          },
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title: (
        <p className="">
          Precisa de tendas ou construção? Fale com a Ramom Tendas!
        </p>
      ),
      subtitle:
        "Nossa equipe está pronta para atender você com soluções sob medida e qualidade garantida.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
      link: "",
    },
    trustedBy: {
      title: "Parceria com as maiores seguradoras",
      subtitle: "Confiabilidade e excelência em proteção",
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "Seguradora Porto Seguro",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "Seguradora Bradesco",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "Seguradora Liberty",
        },
        img4: {
          img: { trustedByImg4 },
          alt: "Seguradora Allianz",
        },
        img5: {
          img: { trustedByImg5 },
          alt: "Seguradora SulAmérica",
        },
        img6: {
          img: { trustedByImg6 },
          alt: "Seguradora Tokio Marine",
        },
      },
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Primeiro contato",
          cardDescription:
            "Conversamos com você para entender sua necessidade — seja tenda, obra ou projeto urbano.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Planejamento da solução",
          cardDescription:
            "Analisamos o local, prazos e objetivos para oferecer a melhor solução técnica e personalizada.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Proposta e aprovação",
          cardDescription:
            "Apresentamos a proposta detalhada com valores, prazos e condições para sua aprovação.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Execução do projeto",
          cardDescription:
            "Iniciamos a entrega: montagem da tenda ou execução da obra com qualidade, segurança e pontualidade.",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Quais tipos de eventos vocês atendem?",
          answer:
            "Atendemos uma ampla variedade de eventos, incluindo casamentos, aniversários, festas corporativas, feiras, shows e eventos comunitários. Nossas tendas são versáteis e podem ser adaptadas para diferentes ocasiões.",
        },
        question2: {
          question: "Como posso solicitar um orçamento?",
          answer:
            "Para receber um orçamento personalizado, envie-nos as seguintes informações: data do evento, local de montagem, tipo de evento, número estimado de convidados e quaisquer necessidades específicas, como decoração ou equipamentos adicionais. Com esses dados, nossa equipe preparará uma proposta sob medida para você.",
        },
        question3: {
          question: "Vocês oferecem montagem e desmontagem das tendas?",
          answer:
            "Sim, nossa equipe especializada realiza tanto a montagem quanto a desmontagem das tendas. O tempo de montagem varia conforme o tamanho e a complexidade do evento, mas garantimos agilidade e segurança em todas as etapas.",
        },
        question4: {
          question:
            "Quais são os cuidados necessários com as condições climáticas?",
          answer:
            "Nossas tendas são projetadas para oferecer proteção contra sol intenso, chuvas inesperadas e vento forte. No entanto, em condições climáticas extremas, recomendamos avaliar a viabilidade da montagem para garantir a segurança de todos os participantes.",
        },
        question5: {
          question: "A_Definir",
          answer: "A_Definir",
        },
        question6: {
          question: "A definir",
          answer: "A definir",
        },
      },
    },
    testimonialsHero: {
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
        img5: {
          img: imgTestimonial5,
          alt: "Imagem de feedback",
        },
        img6: {
          img: imgTestimonial6,
          alt: "Imagem de feedback",
        },
        img7: {
          img: imgTestimonial7,
          alt: "Imagem de feedback",
        },
        img8: {
          img: imgTestimonial8,
          alt: "Imagem de feedback",
        },
        img9: {
          img: imgTestimonial9,
          alt: "Imagem de feedback",
        },
        img10: {
          img: imgTestimonial10,
          alt: "Imagem de feedback",
        },
        img11: {
          img: imgTestimonial11,
          alt: "Imagem de feedback",
        },
        img12: {
          img: imgTestimonial12,
          alt: "Imagem de feedback",
        },
      },
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
