import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import ScrollToTop from '@/components/ScrolltoTop';
{/* Páginas padrões */}
import Home from '@/pages/Home';
import Sobre from '@/pages/Sobre';
import LinhasDeProdutos from '@/pages/LinhasDeProdutos';
import Noticias from '@/pages/Noticias';
import NoticiaDetalhe from '@/pages/NoticiaDetalhe';
import Contato from '@/pages/Contato';
import Lavadoras from '@/pages/products/Lavadoras';
import Vestimentas from '@/pages/products/Vestimentas';
import MangueirasConexoes from '@/pages/products/MangueirasConexoes';
import BicosHidrojatos from '@/pages/products/BicosHidrojatos';
import BombasAltaPressao from '@/pages/products/BombasAltaPressao';
import PecasBombas from '@/pages/products/PecasBombas';
import HidroAcessorios from '@/pages/products/HidroAcessorios';
import AcessoriosLavadora from '@/pages/products/AcessoriosLavadora';
import PaginaRobo from '@/pages/products/Robo';
{/* Lavadoras */}
import Typhoon500Trifasico from '@/pages/products/lavadoras/Typhoonjet500Trifasico';
import Typhoon350Trifasico from '@/pages/products/lavadoras/Typhoonjet350Trifasico';
import Typhoon200Trifasico from '@/pages/products/lavadoras/Typhoonjet200Trifasico';
import Typhoon170Monofasico from '@/pages/products/lavadoras/Typhoonjet170Monofasico';
import Typhoon50cvEletrica from '@/pages/products/lavadoras/Typhoonjet50cvEletrica';
import TyphoonHot from '@/pages/products/lavadoras/TyphoonHot';
{/* Vestimentas */}
import HydroShellUAP from '@/pages/products/vestimentas/HydroShellUap';
import HydroShellSAP from '@/pages/products/vestimentas/HydroShellSap';
import CapaMangueira from '@/pages/products/vestimentas/CapaMangueira';
import AirSystem from '@/pages/products/vestimentas/AirSystem';
{/* Mangueiras e conexões */}
import PoliamidaSAP1500 from '@/pages/products/mangueirasEConexoes/PoliamidaSap1500';
import PoliamidaUAP2800 from '@/pages/products/mangueirasEConexoes/PoliamidaUap2800';
import NiplesM24DKO1 from '@/pages/products/mangueirasEConexoes/NiplesM24DKO1';
import NiplesAdaptadorHP from '@/pages/products/mangueirasEConexoes/NiplesAdaptadorHP';
import MangueiraWaterblast from '@/pages/products/mangueirasEConexoes/MangueiraWaterblast';
import Mangueira10000PSI from '@/pages/products/mangueirasEConexoes/Mangueira10000Psi';
import LuvasDeUniao from '@/pages/products/mangueirasEConexoes/LuvasDeUniao';
import LuvasDeEmendaUAP from '@/pages/products/mangueirasEConexoes/LuvasDeEmendaUap';
import EngatesRapidos from '@/pages/products/mangueirasEConexoes/EngatesRapidos';
import DistribuidoresUAP from '@/pages/products/mangueirasEConexoes/DistribuidoresUAP';
import DistribuidoresFluxoSAP from '@/pages/products/mangueirasEConexoes/DistribuidorFluxoSAP';
{/* Bicos para hidrojatos */}
import PortaBicoSafira from '@/pages/products/bicoHidrojato/PortaBicoSafira';
import PortaBicoRetoELeque from '@/pages/products/bicoHidrojato/PortaBIcoRetoLeque';
import BicoRotativo600 from '@/pages/products/bicoHidrojato/BicoTurboRotativo600';
import BicoRotativo500 from '@/pages/products/bicoHidrojato/BicoTurboRotativo500';
import BicoSharkRadial from '@/pages/products/bicoHidrojato/BicoSharkRadial';
import BicoShark22K from '@/pages/products/bicoHidrojato/BicoSharkJet22K';
import BicoSafiraM10 from '@/pages/products/bicoHidrojato/BicoSafiraM10';
import BicoSafira from '@/pages/products/bicoHidrojato/BicoSafira';
import BicoRotativoTitan from '@/pages/products/bicoHidrojato/BicoRotativoTitan';
import BicoRotativoR from '@/pages/products/bicoHidrojato/BicoRotativoR';
import BicoRetoLeque from '@/pages/products/bicoHidrojato/BicoRetoLeque';
import BicoFixoFoguetinho from '@/pages/products/bicoHidrojato/BicoFixoFoguetinho';
import BicoFerret22K from '@/pages/products/bicoHidrojato/BicoFerret22K';
import BicoTorpedo from '@/pages/products/bicoHidrojato/BicoTorpedo';
import BicoAttack from '@/pages/products/bicoHidrojato/BicoAttack1-4';
{/* Bombas de alta pressão*/}
import BombaMTI600 from '@/pages/products/bombasAltaPressao/BombaMti600';
import BombaMTI50FF from '@/pages/products/bombasAltaPressao/BombaMTI50FF';
import BombaMTI500 from '@/pages/products/bombasAltaPressao/BombaMTI500';
import BombaMTI350 from '@/pages/products/bombasAltaPressao/BombaMTI350';
import BombaMTI250 from '@/pages/products/bombasAltaPressao/BombaMTI250';
import BombaMTI200 from '@/pages/products/bombasAltaPressao/BombaMTI200';
import BombaFalch125 from '@/pages/products/bombasAltaPressao/BombaFalchPump125';
import BombaFalch250 from '@/pages/products/bombasAltaPressao/BombaFalchPump250';
import BombaFalch500 from '@/pages/products/bombasAltaPressao/BombaFalchPump500';
{/*Marcas das peças de bombas para hidrojato  */}
import BombasFalch from '@/pages/products/pecasBombasHidrojato/BombasFalch';
import BombasFlow from '@/pages/products/pecasBombasHidrojato/BombasFlow';
import BombasKamat from '@/pages/products/pecasBombasHidrojato/BombasKamat';
import BombasNacionais from '@/pages/products/pecasBombasHidrojato/BombasNacionais';
import BombasNlb from '@/pages/products/pecasBombasHidrojato/BombasNlb';
import BombasWoma from '@/pages/products/pecasBombasHidrojato/BombasWoma';
{/*Robos   */}
import RoboWorker250 from '@/pages/products/robo/RoboLineWorker250';
import RoboMagnetico from '@/pages/products/robo/RoboMagneticoClimb';
import RoboLift250 from '@/pages/products/robo/RoboLift250';
{/*Hidrojatos e Acessórios   */}
import TubeClean from '@/pages/products/hidrojatoAcessorios/TubecleanMamuth';
import PowerBox2800 from '@/pages/products/hidrojatoAcessorios/PowerBoxMamuth2800';
import PistolaRotativaViper40K from '@/pages/products/hidrojatoAcessorios/PistolaRotativaViper40k';
import PistolaPneumatica2G from '@/pages/products/hidrojatoAcessorios/PistolaPneumatica2G';
import PistolaFluxoFechado from '@/pages/products/hidrojatoAcessorios/PistolaFluxoFechado';
import PistolaFluxoAberto from '@/pages/products/hidrojatoAcessorios/PistolaFluxoAberto';
import PedalFluxoAberto from '@/pages/products/hidrojatoAcessorios/PedalFluxoAberto';
import MalhaDeSeguranca from '@/pages/products/hidrojatoAcessorios/MalhaSegurança';
import LancaTuboInox from '@/pages/products/hidrojatoAcessorios/LancaETuboInox';
import LacoDeSeguranca from '@/pages/products/hidrojatoAcessorios/LacoDeSeguranca';
import DistorcedorMangueiraUAP from '@/pages/products/hidrojatoAcessorios/DistorcedorDeMangueiraUAP';
import CabecoteRotativo3d from '@/pages/products/hidrojatoAcessorios/CabecoteRotativo3d';
{/* Acessórios para Lavadoras de Alta Pressão  */}
import ValvulaReguladora550 from '@/pages/products/acessoriosLavadoras/ValvulaReguladora550Bar';
import ValvulaReguladora350 from '@/pages/products/acessoriosLavadoras/ValvularReguladora350Nar';
import ValvulaReguladora200AltaVazao from '@/pages/products/acessoriosLavadoras/ValvulaReguladora200BarAltaVazao';
import ValvulaSeguranca660 from '@/pages/products/acessoriosLavadoras/ValvulaSeguranca660Bar';
import Pistola660bar from '@/pages/products/acessoriosLavadoras/Pistola660bar';
import Pistola350bar from '@/pages/products/acessoriosLavadoras/Pistola350Bar';
import Pistola280bar from '@/pages/products/acessoriosLavadoras/Pistola280Bar';
import BicoJatoAbrasivo from '@/pages/products/acessoriosLavadoras/BicoJatoAbrasivo500Bar';
{/* Acessórios para Lavadoras de Alta Pressão  */}
import FeiraFenasucro from '@/pages/noticias/feira-fenasucro';
import FeiraNavalShore from '@/pages/noticias/feira-navalshore';

import { Toaster } from '@/components/ui/toaster';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/cb60296b-9ffe-485a-8749-51c5bd5b1041-loader.js';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Páginas padrões */}
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<LinhasDeProdutos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/lavadoras" element={<Lavadoras />} />
            <Route path="/vestimentas" element={<Vestimentas />} />
            <Route path="/mangueiras-conexoes" element={<MangueirasConexoes />} />
            <Route path="/bicos-hidrojatos" element={<BicosHidrojatos />} />
            <Route path="/bombas-alta-pressao" element={<BombasAltaPressao />} />
            <Route path="/pecas-bombas" element={<PecasBombas />} />
            <Route path="/hidrojato-acessorios" element={<HidroAcessorios />} />
            <Route path="/acessorios-lavadoras" element={<AcessoriosLavadora />} />
            <Route path="/robo" element={<PaginaRobo />} />
            {/* Lavadoras */}
            <Route path="/lavadoras/typhoon-jet-500-trifasico" element={<Typhoon500Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-350-trifasico" element={<Typhoon350Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-200-trifasico" element={<Typhoon200Trifasico />} />
            <Route path="/lavadoras/typhoon-jet-170-monofasico" element={<Typhoon170Monofasico />} />
            <Route path="/lavadoras/typhoon-jet-50cv-eletrica" element={<Typhoon50cvEletrica />} />
            <Route path="/lavadoras/typhoon-hot" element={<TyphoonHot />} />
            {/* Vestimentas */}
            <Route path="/vestimentas/hydro-shell-uap" element={<HydroShellUAP/>}/>
            <Route path="/vestimentas/hydro-shell-sap" element={<HydroShellSAP/>}/>
            <Route path="/vestimentas/capa-de-mangueira" element={<CapaMangueira/>}/>
            <Route path="/vestimentas/air-system" element={<AirSystem/>}/>
            {/* Mangueiras e conexões */}
            <Route path="/mangueiras-conexoes/poliamida-sap-1500bar" element={<PoliamidaSAP1500/>}/>
            <Route path="/mangueiras-conexoes/poliamida-uap-2800bar" element={<PoliamidaUAP2800/>}/>
            <Route path="/mangueiras-conexoes/niples-m24dko1" element={<NiplesM24DKO1/>}/>
            <Route path="/mangueiras-conexoes/niples-adaptador-hp-9-16" element={<NiplesAdaptadorHP/>}/>
            <Route path="/mangueiras-conexoes/mangueira-waterblast" element={<MangueiraWaterblast/>}/>
            <Route path="/mangueiras-conexoes/mangueira-ate-10000psi" element={<Mangueira10000PSI/>}/>
            <Route path="/mangueiras-conexoes/luvas-de-uniao" element={<LuvasDeUniao/>}/>
            <Route path="/mangueiras-conexoes/luvas-de-emenda-uap" element={<LuvasDeEmendaUAP/>}/>
            <Route path="/mangueiras-conexoes/engates-rapidos" element={<EngatesRapidos/>}/>
            <Route path="/mangueiras-conexoes/distribuidores-uap-y-t-90°" element={<DistribuidoresUAP/>}/>
            <Route path="/mangueiras-conexoes/distribuidores-fluxo-sap" element={<DistribuidoresFluxoSAP/>}/>
            {/* Bicos para hidrojatos */}
            <Route path="/bicos-hidrojatos/porta-bico-safira" element={<PortaBicoSafira/>}/>
            <Route path="/bicos-hidrojatos/porta-bico-reto-e-leque" element={<PortaBicoRetoELeque/>}/>
            <Route path="/bicos-hidrojatos/bico-turbo-rotativo-600" element={<BicoRotativo600/>}/>
            <Route path="/bicos-hidrojatos/bico-turbo-rotativo-500" element={<BicoRotativo500/>}/>
            <Route path="/bicos-hidrojatos/bico-shark-radial-40k" element={<BicoSharkRadial/>}/>
            <Route path="/bicos-hidrojatos/bico-shark-jet-22k" element={<BicoShark22K/>}/>
            <Route path="/bicos-hidrojatos/bico-safira-m10" element={<BicoSafiraM10/>}/>
            <Route path="/bicos-hidrojatos/bico-safira" element={<BicoSafira/>}/>
            <Route path="/bicos-hidrojatos/bico-rotativo-titan" element={<BicoRotativoTitan/>}/>
            <Route path="/bicos-hidrojatos/bico-rotativo-r" element={<BicoRotativoR/>}/>
            <Route path="/bicos-hidrojatos/bico-reto-e-leque" element={<BicoRetoLeque/>}/>
            <Route path="/bicos-hidrojatos/bico-fixo-foguetinho" element={<BicoFixoFoguetinho/>}/>
            <Route path="/bicos-hidrojatos/bico-ferret-22k" element={<BicoFerret22K/>}/>
            <Route path="/bicos-hidrojatos/bico-torpedo" element={<BicoTorpedo/>}/>
            <Route path="/bicos-hidrojatos/bico-attack-1-4" element={<BicoAttack/>}/>
            {/* Bombas de alta pressão*/}
            <Route path="/bombas-de-alta-pressao/bomba-mti-600" element={<BombaMTI600/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-50ff" element={<BombaMTI50FF/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-500" element={<BombaMTI500/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-350" element={<BombaMTI350/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-250" element={<BombaMTI250/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-mti-200" element={<BombaMTI200/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-falch-pump-125kw" element={<BombaFalch125/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-falch-pump-250kw" element={<BombaFalch250/>}/>
            <Route path="/bombas-de-alta-pressao/bomba-falch-pump-500kw" element={<BombaFalch500/>}/>
            {/*Marcas das peças de bombas para hidrojato   */}
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-falch" element={<BombasFalch/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-flow" element={<BombasFlow/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-kamat" element={<BombasKamat/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-nacionais" element={<BombasNacionais/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-nlb" element={<BombasNlb/>}/>
            <Route path="/pecas-para-bombas-de-hidrojatos/pecas-bombas-woma" element={<BombasWoma/>}/>
            {/*Robos  */}
            <Route path="/robo/robo-line-worker-250" element={<RoboWorker250/>}/>
            <Route path="/robo/robo-magnetico-climb-rob" element={<RoboMagnetico/>}/>
            <Route path="/robo/robo-lift-worker-250-beam" element={<RoboLift250/>}/>
            {/*Hidrojatos e Acessórios   */}
            <Route path="/hidrojatos-e-acessorios/tubeclean-mamuth" element={<TubeClean/>}/>
            <Route path="/hidrojatos-e-acessorios/powerbox-mamuth-2800" element={<PowerBox2800/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-rotativa-viper-40k" element={<PistolaRotativaViper40K/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-pneumatica-2g-mtpt-2800" element={<PistolaPneumatica2G/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-fluxo-fechado-mtff-1200" element={<PistolaFluxoFechado/>}/>
            <Route path="/hidrojatos-e-acessorios/pistola-fluxo-aberto-mtfa-1400" element={<PistolaFluxoAberto/>}/>
            <Route path="/hidrojatos-e-acessorios/pedal-fluxo-aberto-mtpa-1400" element={<PedalFluxoAberto/>}/>
            <Route path="/hidrojatos-e-acessorios/malha-de-seguranca" element={<MalhaDeSeguranca/>}/>
            <Route path="/hidrojatos-e-acessorios/lanca-e-tubo-inox" element={<LancaTuboInox/>}/>
            <Route path="/hidrojatos-e-acessorios/laco-de-seguranca" element={<LacoDeSeguranca/>}/>
            <Route path="/hidrojatos-e-acessorios/distorcedor-de-mangueira-uap" element={<DistorcedorMangueiraUAP/>}/>
            <Route path="/hidrojatos-e-acessorios/cabecote-rotativo-3d-torrent-nlb" element={<CabecoteRotativo3d/>}/>
            {/* Acessórios para Lavadoras de Alta Pressão  */}
            <Route path="/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-550bar" element={<ValvulaReguladora550/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-350bar" element={<ValvulaReguladora350/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-200bar-alta-vazao" element={<ValvulaReguladora200AltaVazao/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/valvula-de-seguranca-660bar" element={<ValvulaSeguranca660/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/pistola-660bar" element={<Pistola660bar/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/pistola-350bar" element={<Pistola350bar/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/pistola-280bar" element={<Pistola280bar/>}/>
            <Route path="/acessorios-lavadoras-de-alta-pressao/bico-jato-abrasivo-500bar" element={<BicoJatoAbrasivo/>}/>
            <Route path="/noticias/feira-fenasucro" element={<FeiraFenasucro />} />
            <Route path="/noticias/feira-navalshore" element={<FeiraNavalShore />} />
          </Routes>
        </main>
        <WhatsappButton /> 
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;