import React from "react";
import s from './Header.module.css';
import {Affix, Button, Col, Divider, Image, PageHeader, Row} from "antd";
import {Link} from "react-router-dom";


const buttonStyle: React.CSSProperties = {
    borderRadius: 20, backgroundColor: "#242526",
    color: "rgba(255,255,255)", fontWeight: 400, fontSize: "1rem",
    lineHeight: 24, paddingTop: 10,
    paddingBottom: 10, paddingLeft: 20, display: "flex",
    paddingRight: 20, justifyContent: "center", alignItems: "center", boxSizing: "border-box",
    border: "0 solid", marginTop: 17, right: 27
};

const headerStyle: React.CSSProperties = {
    height: 64,
    width: "100%",
    background: "rgb(23,24,25)",
    zIndex: 3,
}

const Header = (props) => {
    return (
        <Affix className="affixTop" offsetTop={0}>
            <div style={headerStyle}>
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={24} lg={24} xl={18}>
                        <Row type="flex" justify="space-between">
                            <Col xs={4} sm={3} md={3} lg={2} xl={2}>
                                <Link to="/">
                                    {/*<Image width={200}*/}
                                    {/*       src="/home/eliseev/WebstormProjects/landing/src/assets/images/a.png" />*/}
                                    {/*<Image width={200}*/}
                                    {/*       src="./../assets/images/b.png" />*/}
                                    <p
                                        style={{
                                            color: '#ffffff',
                                            fontSize: '24px',
                                            lineHeight: '1',
                                            marginTop: '22px',
                                            marginLeft: '5px',
                                        }}
                                    >
                                        AntDesign
                                    </p>
                                </Link>
                            </Col>
                            <Col xs={4} sm={3} md={3} lg={2} xl={2}>
                                <Button style={buttonStyle}>
                                    Connect wallet
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </Affix>
    )
}

export default Header;