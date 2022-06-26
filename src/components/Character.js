import React from "react";
import { useEffect, useState } from "react";
import { Card, Row, Col, Layout, Select, Menu, Input, Tooltip, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import backendService from "../api/BackendService";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Sider } = Layout;

const Character = () => {
  const [characters, setCharacters] = useState({});
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const handleStatus = (val) => {
    setStatus(val);
  };
  const handleGender = (val) => {
    setGender(val);
  };
  const handleInput = (val) => {
    setName(val);
  };
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
  useEffect(() => {
    backendService
      .getFilterCharacter({
        name: name ? name : "",
        status: status ? status : "",
        gender: gender ? gender : "",
      })
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        message.error({
          content:"No Character with searched features exists."
        });
      });
  }, [name, status, gender]);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          zIndex: "1",
          position: "fixed",
          height: "100%",
        }}
      >
        <Menu theme="dark">
          <Tooltip title="Press ENTER after typing name." placement="rightTop">
            <Input
              placeholder="Type name here"
              prefix={<SearchOutlined />}
              style={{ margin: "10px", maxWidth: "fit-content" }}
              onPressEnter={(e) => handleInput(e.target.value)}
            />
          </Tooltip>
          <Select
            defaultValue="Status"
            style={{
              width: "90%",
              height: "100%",
              position: "relative",
              margin: "10px",
            }}
            listHeight={128}
            onChange={(val) => {
              handleStatus(val);
            }}
          >
            <Option value="unknown">Unknown</Option>
            <Option value="alive">Alive</Option>
            <Option value="dead">Dead</Option>
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
            onChange={(val) => {
              handleGender(val);
            }}
          >
            <Option value="unknown">Unknown</Option>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
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
                <Link to={"/characters/" + item.id}>
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
