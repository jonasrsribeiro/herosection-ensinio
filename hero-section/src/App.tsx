import {
  ContainerExterno, ContainerInterno, Rectangle,
  Section, HeaderContainer, ContainerNavbar, Navbar, NavItem, Imagem, LogoImg, Seta, Perfil, Button,
  IconesFundo, InfoDiv, InfoDivDir, InfoDivEsq, Texto,
  DivContainer, SpanDegular16, SpanInter44, SpanInter16, PlayIcon, DevicesIcon,
  InterfaceExterna, InterfaceInterna, CabecalhoTexto, Titulo, TituloTexto, TituloDesc, TituloCont,
  GridSection, GridItemExterno, GridItemInterno, GridItemTitulo, GridItemConteudo, LinhaIcone, IconesGrid,
  Rodape, TextoRodape, TextoVerMais, IconeRodape, RodapeInterno,
  HoverSolucoes, HoverSolucoesInterno, HoverSolucaoItems, HoverSolucaoItem, ItemDescricao, HoverTitulo, ItemTitulo, ItemConteudo,
  HoverIdiomas, HoverIdiomasInterno, Idioma, IdiomaNome, Bandeira
} from './styles';

import IconesBackground from '/icones-background.svg'
import LogoImagem from '/logo-completo.svg';
import Pessoa from '/pessoa.svg';
import Line from '/line-header.svg';
import Arrow from '/seta-baixo.svg';
import Profile from '/profile.svg';
import Play from '/play.svg';
import Devices from '/devices.svg';
import LinhaTitulo from '/linha-titulo.svg';
import IconePasta from '/icone-pasta.svg';
import IconePlaylists from '/icone-playlists.svg';
import IconeTrilhas from '/icone-trilhas.svg';
import Foguete from '/foguete.svg';
import SetaDireita from '/seta-direita.svg';
import Brazil from '/brazil.svg';
import Usa from '/usa.svg';
import Spain from '/spain.svg';

import { useEffect, useState } from 'react';

interface Item {
  id: number;
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
}

interface Data {
  map(arg0: (item: Item) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  items: Item[];
}

function pegarIcone(itemId: number): string {
  if (itemId === 1) {
    return IconeTrilhas;
  } else if (itemId === 2) {
    return IconePlaylists;
  } else {
    return IconePasta;
  }
}

const Hero = () => {

  /* Controlador dos Hover */
  const [hoverSolucoes, setHoverSolucoes] = useState(false);
  const handleHoverSolucoes = () => {
    setHoverSolucoes(!hoverSolucoes);
  };
  const [hoverIdiomas, setHoverIdiomas] = useState(false);
  const handleHoverIdiomas = () => {
    setHoverIdiomas(!hoverIdiomas);
  };

  const [idioma, setIdioma] = useState('pt');

  const handleIdioma = (novoIdioma: string) => {
    setIdioma(novoIdioma);
  };

  /* Controlador dos Itens */
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch('https://json-server-neon-eight.vercel.app/items')
      .then(response => response.json())
      .then((jsonData: Data) => setData(jsonData));
  }, []);

  return (
    <div>
      <HeaderContainer>
        <Section>
          <LogoImg src={LogoImagem} />
          <ContainerNavbar>
            <Navbar>
              <NavItem onClick={handleHoverSolucoes}>Soluções <Seta src={Arrow} /></NavItem>
              <NavItem>Preços</NavItem>
              <NavItem>Academy</NavItem>
              <NavItem>Blog</NavItem>
              <NavItem>Contato</NavItem>
              <NavItem><img src={Line} /></NavItem>
              <Perfil src={Profile} />
              <NavItem> Entrar</NavItem>
              <NavItem><Button>Começar Agora</Button></NavItem>
              <NavItem onClick={handleHoverIdiomas}>{idioma.toUpperCase()} <Seta src={Arrow} /></NavItem>
            </Navbar>
          </ContainerNavbar>
        </Section>
      </HeaderContainer>

      {hoverSolucoes && (
        <HoverSolucoes>
          <HoverSolucoesInterno>
            <HoverSolucaoItems>
              <HoverSolucaoItem>
                <HoverTitulo>SOLUÇÕES PRINCIPAIS</HoverTitulo>
                <ItemDescricao>
                  <ItemTitulo>Crie uma Escola Online</ItemTitulo>
                  <ItemConteudo>Lorem ipsum dolor sit amet</ItemConteudo>
                </ItemDescricao>
                <ItemDescricao>
                  <ItemTitulo>Comunidade e rede social</ItemTitulo>
                  <ItemConteudo>Lorem ipsum dolor sit amet</ItemConteudo>
                </ItemDescricao>
                <ItemDescricao>
                  <ItemTitulo>Gamificação</ItemTitulo>
                  <ItemConteudo>Lorem ipsum dolor sit amet</ItemConteudo>
                </ItemDescricao>
                <ItemDescricao>
                  <ItemTitulo>Aplicativo Mobile</ItemTitulo>
                  <ItemConteudo>Lorem ipsum dolor sit amet</ItemConteudo>
                </ItemDescricao>
              </HoverSolucaoItem>
            </HoverSolucaoItems>
          </HoverSolucoesInterno>
        </HoverSolucoes>
      )}

      {hoverIdiomas && (
        <HoverIdiomas>
          <HoverIdiomasInterno onClick={() => handleIdioma('pt')}>
            <Idioma>
              <Bandeira src={Brazil} />
              <IdiomaNome>PT</IdiomaNome>
            </Idioma>
          </HoverIdiomasInterno>
          <HoverIdiomasInterno onClick={() => handleIdioma('en')}>
            <Idioma>
              <Bandeira src={Usa} />
              <IdiomaNome>EN</IdiomaNome>
            </Idioma>
          </HoverIdiomasInterno>
          <HoverIdiomasInterno onClick={() => handleIdioma('es')}>
            <Idioma>
              <Bandeira src={Spain} />
              <IdiomaNome>ES</IdiomaNome>
            </Idioma>
          </HoverIdiomasInterno>
        </HoverIdiomas>
      )}

      <ContainerExterno>
        <ContainerInterno>
          <Rectangle>
            <IconesFundo src={IconesBackground} />
            <InfoDiv>
              <InfoDivEsq>
                <Texto>
                  <DivContainer>
                    <DevicesIcon src={Devices} />
                    <SpanDegular16>PLATAFORMA ALL IN ONE</SpanDegular16>
                  </DivContainer>
                  <SpanInter44>Sua escola online poderosa e lucrativa</SpanInter44>
                  <SpanInter16>Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</SpanInter16>
                  <DivContainer>
                    <Button $primary>Começar agora</Button>
                    <PlayIcon src={Play} />
                    <SpanInter16>Ver vídeo</SpanInter16>
                  </DivContainer>
                </Texto>
              </InfoDivEsq>
              <InfoDivDir>
                <Imagem src={Pessoa} ></Imagem>
              </InfoDivDir>
            </InfoDiv>
          </Rectangle>
        </ContainerInterno>
      </ContainerExterno>

      <InterfaceExterna>
        <InterfaceInterna>
          <CabecalhoTexto>
            <Titulo>
              <TituloTexto><LinhaIcone src={LinhaTitulo} />PENSAMOS EM CADA DETALHE</TituloTexto>
              <TituloCont>Queremos que o aluno se sinta confortável enquanto aprende</TituloCont>
            </Titulo>
            <TituloDesc>Conheça alguns dos nossos recursos ⚡️</TituloDesc>
          </CabecalhoTexto>
          <GridSection>
            {data && data?.map((item: Item) => (
              <GridItemExterno key={item.id}>
                <GridItemInterno>
                  <IconesGrid src={pegarIcone(item.id)} />
                  <GridItemTitulo>{item.title[idioma as keyof typeof item.title]}</GridItemTitulo>
                  <GridItemConteudo>{item.description[idioma as keyof typeof item.title]}</GridItemConteudo>
                </GridItemInterno>
              </GridItemExterno>
            ))}
          </GridSection>
          <Rodape>
            <RodapeInterno>
              <IconeRodape src={Foguete} />
              <TextoRodape>Veja todos os outros recursos disponíveis para te ajudar</TextoRodape>
            </RodapeInterno>
            <RodapeInterno>
              <TextoVerMais>Ver mais</TextoVerMais>
              <IconeRodape src={SetaDireita} />
            </RodapeInterno>
          </Rodape>
        </InterfaceInterna>
      </InterfaceExterna>

    </div>
  );
};

export default Hero;