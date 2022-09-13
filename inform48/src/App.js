import React from 'react';
import logo from './images/logo.png';
import "@blueprintjs/core/lib/css/blueprint.css";
import './App.css';
import { Navbar, Alignment, Menu, MenuItem, MenuDivider, Button, Intent, NavbarGroup, ButtonGroup } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import AwesomeComponent from './Products';
import Clients from './Clients';


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: 0
        };

        this.onHomeClick = this.onHomeClick.bind(this);
        this.onContactClick = this.onContactClick.bind(this);
        this.onClientClick = this.onClientClick.bind(this);
        this.onProductClick = this.onProductClick.bind(this);
    }

    componentDidMount() {
        document.title = "Сервис-48 Информ";
        let url = window.location.href;

        for (let i = 0; i < document.getElementById("buGroup").childNodes.length; i++) {
            let el = document.getElementById("buGroup").children[i];
            console.log(el);

            if (el.href && el.attributes.idx && el.href === url) {
                this.setState({ activeButton: Number(el.attributes.idx.value) });
                break;
            }
        }
    }

    onHomeClick() {
        this.setState({ activeButton: 0 });
        // document.getElementById("toHome").click();
    }
    onContactClick() {
        this.setState({ activeButton: 6 });
        // document.getElementById("toContacts").click();
    }

    onClientClick() {
        this.setState({ activeButton: 4 });
        // document.getElementById("toClients").click();
    }

    onProductClick() {
        this.setState({ activeButton: 3 });
    }



    render() {
        const projectsMenu = (
            <Menu>
                <MenuItem icon="record" text='ПК "МИСС"' />
                <MenuItem icon="record" text='ПК "СММ"' />
                <MenuItem icon="record" text='ПК "X-Price"' />
                <MenuItem icon="record" text='АС "Эффективность"' />
                <MenuItem icon="record" text='АС "Прогноз"' />
                <MenuDivider />
                <MenuItem icon="record" text='ПК "WEB-МИСС"' />
            </Menu>
        );

        const uslugiMenu = (
            <Menu>
                <MenuItem icon="record" text='Разработка ПО' />
                <MenuItem icon="record" text='Разработка сайтов' />
                <MenuItem icon="record" text='Онлайн услуги' />
            </Menu>
        );



        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <Navbar className="bp4-dark" style={{ height: "35px", marginTop: "1px" }}>
                            <NavbarGroup align={Alignment.LEFT}>
                                <Navbar.Heading>
                                    <img src={logo} alt="text" height="30px" width="140px" style={{ border: "0px", marginTop: "3px" }}></img>
                                    {/* <img src={bg} height="200px" alt="The Changers" style={{ paddingTop: "3px" }}></img> */}
                                </Navbar.Heading>

                                <Navbar.Divider />
                            </NavbarGroup>
                            <NavbarGroup align={Alignment.CENTER}>
                                <div className="bp4-navbar-group bp4-align-right" id="navbarGroup">
                                    <ButtonGroup id="buGroup" fill={true} minimal={true} intent={Intent.NONE} large={false}>
                                        <Link idx={0} to="/"><Button text="О компании" id="buHome" icon="home" active={this.state.activeButton === 0 ? true : false} onClick={this.onHomeClick} /></Link>
                                        <Popover2 content={projectsMenu} placement="bottom-start">
                                            <Button text="Проекты" id="buProjects" rightIcon="caret-down" icon="projects" active={this.state.activeButton === 1 ? true : false} onClick={this.onAboutClick} />
                                        </Popover2>
                                        <Popover2 content={uslugiMenu} placement="bottom-start">
                                            <Button text="Услуги" icon="build" rightIcon="caret-down" active={this.activeButton === 2 ? true : false} onClick={this.onStudClick} />
                                        </Popover2>
                                        <Link idx={3} to="/products"><Button text="Продукты" id="product" icon="layers" active={this.state.activeButton === 3 ? true : false} onClick={this.onProductClick} /></Link>
                                        <Link idx={4} to="/clients"><Button text="Клиенты" icon="person" active={this.state.activeButton === 4 ? true : false} onClick={this.onClientClick} /></Link>
                                        <Link idx={6} to="/contacts"><Button text="Контакты" icon="envelope" active={this.state.activeButton === 6 ? true : false} onClick={this.onContactClick} /></Link>
                                    </ButtonGroup>
                                </div>
                            </NavbarGroup>
                        </Navbar>

                        {/* <div id="links" style={{ display: "none" }}>
                            <Link className="menuItem" id="toHome" itemindex={0} to="/">Главная</Link>
                            <Link className="menuItem" id="toAbout" to="/about">О нас</Link>
                            <Link className="menuItem" id="toProducts" itemindex={3} to="/products">Продукты</Link>
                            <Link className="menuItem" id="toClients" itemindex={4} to="/clients">Клиенты</Link>
                            <Link className="menuItem" id="toContacts" itemindex={6} to="/contacts">Контакты</Link>
                        </div> */}
                    </header>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/contacts" element={<Contacts />}></Route>
                        <Route path="/clients" element={<Clients />}></Route>
                        <Route path="/product" element={<AwesomeComponent />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
