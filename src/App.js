import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {Affix, BackTop, Button, Card, Col, Input, Layout, PageHeader, Row, Space, Typography} from "antd";
import {UpOutlined} from "@ant-design/icons";
import Header from "./components/Header/Header";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const style: React.CSSProperties = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};

const buttonStyle: React.CSSProperties = {
    borderRadius: 10, backgroundColor: "#242526",
    color: "rgba(255,255,255)", fontWeight: "bold", fontSize: "1rem",
    lineHeight: 24, paddingTop: 10,
    paddingBottom: 10, paddingLeft: 20, display: "flex",
    paddingRight: 20, justifyContent: "center", alignItems: "center", boxSizing: "border-box",
    border: "0 solid"
};

const inputStyle: React.CSSProperties = {
    borderRadius: 10, backgroundColor: "#242526",
    color: "rgba(255,255,255)", opacity: 0.7, fontSize: "1rem", justifyContent: "center", alignItems: "center", boxSizing: "border-box",
    border: "0 solid"
};

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        const {Footer, Content} = Layout;

        return (
            <Layout style={{minHeight: '100.1vh', background: "rgb(23,24,25)"}}>
                <Header/>
                <Content style={{alignSelf: "center", width: "80%", marginTop: 25}}>
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={24} lg={24} xl={18}>
                            <Row gutter={[16, {xs: 16, sm: 24, md: 32, lg: 64}]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Card bodyStyle={{paddingTop: 0}} style={{borderRadius: 20, background: "rgba(64,106,255)", color: "white"}}
                                          headStyle={{
                                              color: "white",
                                              borderBottom: "none",
                                              fontSize: 48,
                                              fontWeight: "bold"
                                          }} title="Forsage BUSD main page" bordered={false}>
                                        <Typography.Paragraph style={{marginBottom: 30, fontSize: 16, color: "white", opacity: 0.5}}>Connect
                                            wallet to Register or Login</Typography.Paragraph>
                                        <Space>
                                            <Button style={{...buttonStyle, background: "rgb(23,24,25)"}}
                                                    type="primary">
                                                Connect now
                                            </Button>
                                            <Button style={{...buttonStyle, background: "hsla(0,0%,100%,.1)"}}
                                                    type="primary">
                                                Help me
                                            </Button>
                                        </Space>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Typography.Title style={{marginBottom: 0, color: "white"}}>Account
                                        preview</Typography.Title>
                                    <Typography.Paragraph style={{fontSize: 16, color: "white", opacity: 0.5}}>Look up
                                        any Forsage BUSD member account in preview mode. Enter ID or BUSD address to
                                        preview or click Demo to view a random account.</Typography.Paragraph>
                                </Col>
                            </Row>
                            <Row gutter={48}>
                                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                    <Card bodyStyle={{paddingTop: 0}} style={{borderRadius: 20, background: "rgba(64,106,255,.2)", color: "white"}}
                                          headStyle={{
                                              color: "white",
                                              borderBottom: "none",
                                          }} title="Enter ID or BUSD wallet" bordered={false}>
                                        <Space>
                                            <Input placeholder="example: 87381" style={{...inputStyle, background: "rgb(23,24,25)"}} />
                                            <Button style={{...buttonStyle, background: "rgba(64,106,255)"}}
                                                    type="primary">
                                                Preview
                                            </Button>
                                        </Space>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                    <Card bodyStyle={{paddingTop: 0}} style={{borderRadius: 20, background: "#242526", color: "white"}}
                                          headStyle={{
                                              color: "white",
                                              borderBottom: "none",
                                          }} title="Don’t know any ID?" bordered={false}>
                                            <Button style={{...buttonStyle, background: "hsla(0,0%,100%,.1)"}}
                                                    type="primary">
                                                Check demo
                                            </Button>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Content>
            </Layout>


            // <>
            //     <Layout style={{minHeight: '100.1vh'}}>
            //         <Affix offsetTop={0}>
            //             <Row type="flex" justify="center">
            //                 <Col xs={24} sm={24} md={24} lg={24} xl={18}>
            //                     <Row>
            //                         <Col xs={4} sm={3} md={3} lg={2} xl={2}>
            //                             <Link to="/">
            //                                 <p
            //                                     style={{
            //                                         color: '#96979d',
            //                                         fontSize: '14px',
            //                                         lineHeight: '1',
            //                                         marginTop: '25px',
            //                                         marginLeft: '5px',
            //                                     }}
            //                                 >
            //                                     ЕГИСУ
            //                                     <br/>
            //                                     <b>НИОКТР</b>
            //                                 </p>
            //                             </Link>
            //                         </Col>
            //                     </Row>
            //                 </Col>
            //             </Row>
            //         </Affix>
            //         <Content>
            //             <div style={{'width': 50, zIndex: 3, textAlign: "center", alignContent: "center", left: '50%'}}>
            //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque dolore doloremque, ea
            //                 eos explicabo iusto maxime nostrum placeat repudiandae. Accusantium, architecto aut doloribus
            //                 labore minus nobis, omnis optio placeat quaerat quas quos reiciendis unde vel. Asperiores
            //                 consectetur consequatur consequuntur culpa dicta dolor dolorum enim eum harum illum itaque iure
            //                 laboriosam laborum laudantium magnam magni maiores minima natus, nihil nobis non odit officiis
            //                 quam qui quibusdam quidem quis quisquam repudiandae, sit tempora tenetur totam voluptatibus
            //                 voluptatum? Animi dolorem dolorum exercitationem expedita laudantium molestias non omnis placeat
            //                 quae, quaerat quam quia repellat repudiandae saepe suscipit, totam vel. Corporis cum cupiditate
            //
            //             </div>
            //         </Content>
            //         <Footer>
            //             footer
            //         </Footer>
            //
            //     </Layout>
            //     <BackTop/>
            // </>


            // <div>
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <Routes>
            //         {/*<Route exact path='/'*/}
            //         {/*       render={() => <Redirect to={'/profile'}/>}/>*/}
            //         <Route path='/profile/:userId?'
            //                render={withSuspense(ProfileContainer)}/>
            //         <Route path='/login' render={() => <LoginPage/>}/>
            //         <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            //     </Routes>
            // </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const LandingApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default LandingApp;