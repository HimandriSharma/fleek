import React from "react";
import { useEffect, useState } from "react";
import { Card, Row, Col, Layout, Select, Menu, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import backendService from "../api/BackendService";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Sider } = Layout;

const Character = () => {
  const [characters, setCharacters] = useState({});
  useEffect(() => {
    backendService
      .getCharacters()
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          zIndex: "111",
          position: "fixed",
          height: "100%",
        }}
      >
        <Menu theme="dark">
          <Input
            placeholder="Search across characters"
            prefix={<SearchOutlined />}
            style={{ margin: "10px", maxWidth: "fit-content" }}
          />
          <Select
            defaultValue="Status"
            style={{
              width: "90%",
              height: "100%",
              position: "relative",
              margin: "10px",
            }}
            listHeight={128}
          >
            <Option value="Unknown">Unknown</Option>
            <Option value="Alive">Alive</Option>
            <Option value="Dead">Dead</Option>
          </Select>
          <Select
            defaultValue="Gender Filter "
            style={{
              width: "90%",
              height: "100%",
              position: "relative",
              margin: "10px",
            }}
            listHeight={128}
          >
            <Option value="Unknown">Unknown</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Menu>
      </Sider>

      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "20vw",
          zIndex: "0",
        }}
      >
        <Row gutter={16}>
          {characters.map &&
            characters.map((item) => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <Link to={"/characters/"+item.id}>
                  <Card
                    hoverable
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      margin: "10px",
                      border: "solid",
                      cursor: "pointer",
                    }}
                    bordered={true}
                    cover={
                      <img
                        alt="example"
                        src={item.image}
                        style={{ padding: "10px" }}
                      />
                    }
                  >
                    <span style={{ padding: "1px" }}>
                      <div style={{ fontSize: "1.5rem" }}>{item.name}</div>
                      <div style={{ fontSize: "1.2rem" }}>{item.species}</div>
                      <div style={{ fontSize: "1.2rem" }}>{item.status}</div>
                    </span>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </Layout>
  );
};

export default Character;
