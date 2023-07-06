import styled from 'styled-components';

/* NavBar */

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 3rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  margin-bottom: -5.5rem;
  z-index: 999;
  backdrop-filter: blur(15px);
`;

export const Section = styled.section`
  width: 100%;
  max-width: 77rem;
  column-gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerNavbar = styled.div`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-right: 0;
  }
`;

export const NavItem = styled.a`
  color: #FFFFFF;
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 40px;
  font-family: 'Inter';

  &:hover {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const Seta = styled.img`
  margin-left: 12px;
`;

export const Perfil = styled.img`
  height: 20px;
  margin-right: 8px;
`;

export const LogoImg = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  display: flex;
  outline: 0.1rem;
  cursor: pointer;
  height: 56px;
  width: 184px;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out 0s;
  white-space: nowrap;
  border: 0.063rem solid white;
  color: white;
  background: none;
  background: ${props => (props.$primary ? '#00E1E7' : 'none')};
  border: 0.063rem solid ${props => (props.$primary ? '#00E1E7' : 'white')};
  color: ${props => (props.$primary ? 'black' : 'white')};
  margin-right: ${props => (props.$primary ? '32px' : '0px')};

  &:hover {
    transform: perspective(1px) scale(1.0388);
  }
`;

/* Parte de cima */

export const ContainerExterno = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerInterno = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`;

export const Rectangle = styled.div`
    width: 100%;
    height: 35rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(259.95deg, #5F41D9 2.25%, #41B5D9 100.27%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: -1;
`;

export const IconesFundo = styled.img`
    position: absolute;
    top: 0;
    right: 40px;
    z-index: -2;
    transform: scaleX(-1);
`;


export const Imagem = styled.img`
    width: 35rem;
    z-index: 1;
`;

export const Texto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex:start;
`;

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    height: min-content;
    margin-top: 30px;
`;

export const SpanDegular16 = styled.p`
    color: #FFFFFF;
    font-family: degular;
    font-size: 14px;
    margin-bottom: 15px;
    display: flex;
    text-align: center;

    letter-spacing: 0.19rem;
    text-transform: uppercase;
    line-height: 1rem;
    column-gap: 1rem;
`;

export const DevicesIcon = styled.img`
    margin-right: 12px;
    height: 24px;
    width: 24px;
`;

export const SpanInter44 = styled.p`
    color: #FFFFFF;
    font-family: Inter;
    font-size: 44px;    
    margin-bottom: 30px;
    line-height: 3.3rem;
    width: fit-content;
`;

export const SpanInter16 = styled.p`
    color: #FFFFFF;
    font-family: Inter;
    font-size: 16px;
    display: inline;
    gap: 2rem;
`;

export const PlayIcon = styled.img`
    margin-right: 12px;
    height: 32px;
    width: 32px;
    display: inline;
`;

export const InfoDiv = styled.div`
    height: calc(100% - 5.5rem);
    width: 100%;
    max-width: 62rem;
    display: flex;
    align-items: center;
    transform: scaleX(-1);
`;

export const InfoDivEsq = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    height: 100%;
`;

export const InfoDivDir = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flexend;
    width: 60%;
    height: 100%;
`;

/* Parte de baixo */

export const InterfaceExterna = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7rem;
  padding-bottom: 3.5rem;
  background-color: #FFFFFF;
`;

export const InterfaceInterna = styled.div`
  max-width: 77rem;
  width: 100%;
`;

export const CabecalhoTexto = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Titulo = styled.div`
  align-items: center;
  text-align: center;
`;

export const TituloTexto = styled.p`
  font-family: degular, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: 15%;
  color: #432E98;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TituloDesc = styled.p`
  max-width: 24rem;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #423D51;
  text-align: center;
`;

export const TituloCont = styled.p`
  font-family: degular, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.5%;
  color: #130C25;
  text-align: center;
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3.5rem 0px;
  border-bottom: 1px solid rgb(231, 231, 233);
`;

export const GridItemExterno = styled.div`
  width: fit-content;
  align-items: center;
  justify-content: center;
`;

export const GridItemInterno = styled.div`
  align-items: flex-start;
  column-gap: 2rem;
`;

export const GridItemTitulo = styled.div`
  font-family: degular, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.5%;
  color: #130C25;
  display: flex;
  align-items: center;
`;

export const GridItemConteudo = styled.div`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5%;
  color: #423D51;
`;

export const LinhaIcone = styled.img`
  width: 40px;
  opacity: 50%;
  margin-right: 10px;
`;

export const IconesGrid = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Rodape = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0px 0px;
  width: 100%;
  gap: 1.5rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RodapeInterno = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;

export const TextoRodape = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5%;
  color: #423D51;
  text-align: center;
`;

export const TextoVerMais = styled.p`
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #5F41D9;
`;

export const IconeRodape = styled.img`
    height: 32px;
    width: 32px;
    display: inline;
`;

/* Hover de Soluções */

export const HoverSolucoes = styled.div`
    z-index: 1000;
    top: 3.6rem;
    position: absolute;
    padding: 3rem 0px 0px;
    border-radius: 0.375rem;
    display: block;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    margin-left: 28.5rem;
`;

export const HoverSolucoesInterno = styled.div`{
    display: flex;
    background: rgb(255, 255, 255);
    border-radius: 0.5rem;
    padding: 2.3rem 2.5rem;
    flex-direction: column;
    justify-content: center;
    width: max-content;

    align-items: flex-start;
    column-gap: 2rem;
`;

export const HoverSolucaoItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    max-width: 35rem;
    align-items: flex-start;
    justify-content: space-between;
`;

export const HoverSolucaoItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const HoverTitulo = styled.p`
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 14.7px;
    margin: 0px 0px 2.5rem;
    color: #5F41D9;
    letter-spacing: 15%;
    font-family: degular, sans-serif;
`;

export const ItemDescricao = styled.div`
    margin: 0px 0px 0px 1rem;
`;

export const ItemTitulo = styled.p`
    font-size: 15px;
    font-style: degular, sans-serif;
    font-weight: 600;
    line-height: 18.75px;
    letter-spacing: 0.5%;
    cursor: pointer;
`;

export const ItemConteudo = styled.p`
    margin: 0.3rem 0px 0px;
    font-size: 13px;
    font-style: Inter, sans-serif;
    font-weight: 400;
    line-height: 19.5px;
    color: #423D51;
`;

export const HoverIdiomas = styled.div`
    z-index: 1000;
    top: 2.1rem;
    position: absolute;
    border-radius: 0.375rem;
    display: block;
    margin-left: 91rem;
    margin-top: 1.5rem;
    background: white;
`;

export const HoverIdiomasInterno = styled.button`
    display: flex;
    background: rgb(255, 255, 255);
    align-items: center;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: center;
    border: 0px solid white;
    
    &:hover{
        background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%);
    }
`;

export const Idioma = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 1.5rem 0px 0px;
`;

export const IdiomaNome = styled.p`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0em;
`;

export const Bandeira = styled.img`
    margin-right: 12px;
    height: 16px;
    width: 16px;
    display: inline;
`;
  