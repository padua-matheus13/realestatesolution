import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { Container, HeaderTop, ContainerOrg, ContainerMenu, ContainerListInteresse, CardImoveis, ContainerListInteresseContainer, Rodape } from './styles';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import  logo from '../../assets/images/logo.png';
import  avatar from '../../assets/images/default_user_profile.png';
import  imovel from '../../assets/images/home-photo.png';

export default function ListaImoveis() {


  const [dimmer, setDimmer] = useState('');
  const [open, setOpen] = useState(false);

  const itemParams = params => {
    setDimmer(params.effect);
    setOpen(params.openabrir);

  }


  const close = () => {
    setDimmer('');
    setOpen(false);

  }



  return (
    <Container>
      <Container>
          <HeaderTop>
            <div className="divLogo">
                <img src={logo} border="0" alt="" />
            </div>
            <div>
                <div className="divAvatar">
                        <img src={avatar} border="0" alt="" /> <br /> <label>User Name</label>
                </div>
                <br />
                <div className="buttonLogin">
                    <Link to="/" > Close </Link>
                </div>
            </div>
        </HeaderTop>
        <ContainerOrg>
            <ContainerMenu>
                <ul>
                    <Link to="/dashboard"><li>Dashboard</li></Link>
                    <hr />
                    <Link to="/listimoveis"><li>Lista de Imóveis</li></Link>
                </ul>
            </ContainerMenu>
            <ContainerListInteresse>
                <h1>Lista de Imóveis</h1>
                <ContainerListInteresseContainer>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Detalhes</button>
                    </CardImoveis>
                </ContainerListInteresseContainer>
            </ContainerListInteresse>
        </ContainerOrg>
    </Container>
      <Rodape>
          Real Estate Solution All rights reserved
      </Rodape>
      <Modal dimmer={dimmer} open={open} onClick={() => close()}>
        <Modal.Header>Detalhes Imóvel</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={imovel} />
          <Modal.Description>
            <Header>Casa localizada na Rua X nº 35
Bairro Amazonas</Header>
            <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red' onClick={() => close()}>
              Sair
            </Button>
          </Modal.Actions>
      </Modal>
    </Container>
  );
}
