import { Link } from "react-scroll";
import { Phone, Mail } from "lucide-react";
import links from "../../content/links";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import infos from "../../content/infos.jsx";
import content from "../../content/content";
import IconButton from "../interactives/IconButton";
import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { CalendarCheck2 } from "lucide-react";
import { MapPin } from "lucide-react";
import { FileText } from "lucide-react";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

function Footer() {
  return (
    <footer className="bg-primary full gap-y-[42px] text-white font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <SectionArea paddingtop={true} paddingbot={false} className="pb-[23px]">
        <SectionWrapper className="gap-[42px]">
          <div className=" w-full max-w-[1215px] flex flex-col gap-y-[80px] desktop1:flex-row desktop1:justify-between">
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
              <MotionDivDownToUp>
                <div className="h-[115px] flex justify-start items-center ">
                  <img
                    src={content.texts.navbar.logo.img}
                    alt={content.texts.navbar.logo.alt}
                    className="max-h-[115px] w-auto p-3 object-contain bg-white rounded-md"
                  ></img>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <FaWhatsapp size={22} />

                  <a
                    href={whatsappContactLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    (62) 99287-3590
                  </a>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <FaWhatsapp size={22} />
                  <a
                    href={whatsappContactLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    (62) 99334-2781
                  </a>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <FaWhatsapp size={22} />
                  <a
                    href={whatsappContactLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    (62) 99274-5417
                  </a>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <Mail />
                  <p className="text-paragraph2">ramomtendas01@gmail.com</p>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <Mail />
                  <p className="text-paragraph2">ramomtendas02@gmail.com</p>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <div>
                    <MapPin />
                  </div>
                  <p>
                    Rua dos Sabiás, Qd 07, Lt 07, <br />
                    Residencial 14 Bis, <br />
                    Trindade - Goiás <br />
                    CEP: 75.383-000
                  </p>
                </div>
              </MotionDivDownToUp>

              {/* EXPEDIENTE */}
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <div>
                    <CalendarCheck2 />
                  </div>
                  <p>
                    Segunda à Sexta: 08:00 às 18:00 <br />
                    Sábado, domingo e feriados: FECHADO{" "}
                  </p>
                </div>
              </MotionDivDownToUp>

              {/* cnpj */}
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <div>
                    <FileText />
                  </div>
                  <p>CNPJ 47.028.524/0001-54</p>
                </div>
              </MotionDivDownToUp>

              {/* Msg de observação */}

              {/* <MotionDivDownToUp>
                {" "}
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>

                  <p>obsFooter</p>
                </div>
              </MotionDivDownToUp> */}
            </div>
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MotionDivDownToUp>
                <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
                  Até mais{" "}
                </h1>
              </MotionDivDownToUp>
              {/* Texto footer */}
              <MotionDivDownToUp>
                <p className="opacity-90">
                  Agradecemos sua visita! Esperamos que em breve você se torne
                  nosso cliente e desfrute de todos os benefícios que
                  oferecemos.
                </p>
              </MotionDivDownToUp>

              {/* Ícones redes sociais */}
              <MotionDivDownToUp>
                <p className="opacity-90">Siga-nos nas redes Sociais:</p>
                <div className="mt-2 opacity-90">
                  {" "}
                  <div className="flex gap-[10px] items-center">
                    {/* Instagram icon */}
                    <MotionDivDownToUp>
                      {" "}
                      <a
                        href={links.socialMedia.instagram}
                        target="_blank"
                        aria-label="Link para o Instagram"
                      >
                        <IconButton
                          ariaLabel="Botão para o Instagram"
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="transparent"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-instagram"
                            >
                              <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                          }
                        />
                      </a>
                      {/* Instagram icon */}
                    </MotionDivDownToUp>

                    <MotionDivDownToUp>
                      {" "}
                      <a
                        href={links.socialMedia.facebook}
                        target="_blank"
                        aria-label="Link para o Facebook"
                      >
                        <IconButton
                          ariaLabel="Botão para o Facebook"
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="transparent"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                          }
                        />
                      </a>
                    </MotionDivDownToUp>

                    <MotionDivDownToUp>
                      {" "}
                      <a
                        href={links.socialMedia.x}
                        target="_blank"
                        aria-label="Link para o X"
                      >
                        <IconButton
                          ariaLabel="Botão para o X"
                          icon={
                            <svg
                              viewBox="0 0 21.573 19.5"
                              fill="transparent"
                              stroke="currentColor"
                              version="1.1"
                              id="svg4"
                              width="20"
                              height="20"
                              className=""
                            >
                              <defs id="defs8" />
                              <path
                                d="m 16.998462,0 h 3.308 l -7.227,8.26 8.502,11.24 h -6.657 l -5.2139994,-6.817 -5.966,6.817 H 0.43446256 L 8.1644626,10.665 0.00846256,0 H 6.8344626 l 4.7129994,6.231 z m -1.161,17.52 h 1.833 L 5.8384626,1.876 h -1.967 z"
                                id="path2"
                              />
                            </svg>
                          }
                        />
                      </a>
                    </MotionDivDownToUp>

                    <MotionDivDownToUp>
                      {" "}
                      <a href={links.socialMedia.linkedin} target="_blank">
                        <IconButton
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="transparent"
                              stroke="currentColor"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          }
                        />
                      </a>
                    </MotionDivDownToUp>
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MotionDivDownToUp>
                <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
                  NAVEGAÇÃO{" "}
                </h1>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-between full opacity-90">
                  <div className="w-[46%] flex flex-col gap-y-[16px]">
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="home"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[0]}
                        </span>
                      </Link>
                    </div>
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="about"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[2]}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className=" w-[46%] flex flex-col gap-y-[16px]">
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="service"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-20}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[1]}
                        </span>
                      </Link>
                    </div>
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="faq"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[3]}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>
          </div>

          <div className="hidden w-[88%] max-w-[1110px] bg-secondary"></div>

          <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
            <p className="w-full opacity-75">
              2025 - Ramom Tendas - Todos os direitos reservados
            </p>
            <p>
              <a
                className="transition hover:underline"
                target="_blank"
                href="https://www.paperstreet.com.br"
              >
                {" "}
                Gostaria de ter um site como este? Clique aqui{" "}
              </a>
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </footer>
  );
}

export default Footer;
