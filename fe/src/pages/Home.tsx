import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Avatar, Button, Layout, List, Typography } from "antd";
import { AppDispatch } from "../app/store";
import { UserOutlined } from "@ant-design/icons";
import {
  getStudents,
  getSubjectsById,
  selectStudentsList,
  selectStudentInfo,
} from "../app/slices/studentSlice";

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const studentsList = useSelector(selectStudentsList);
  const subjectsList = useSelector(selectStudentInfo);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <Content className="site-layout" style={{ padding: "0 50px" }}>
      <div
        style={{
          marginTop: 30,
          padding: 24,
          minHeight: 380,
          background: "white",
        }}
      >
        <Row>
          <Col span={12}>
            <Title level={5}>Students</Title>
            {studentsList ? (
              <List
                dataSource={studentsList}
                renderItem={(
                  {
                    id,
                    fullname,
                    date_of_birth,
                  }: { id: number; fullname: string; date_of_birth: string },
                  i: number
                ) => (
                  <List.Item key={i}>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title={<div>{fullname}</div>}
                      description={date_of_birth}
                    />
                    <Button
                      onClick={() => {
                        dispatch(getSubjectsById(id));
                      }}
                    >
                      Info
                    </Button>
                  </List.Item>
                )}
              />
            ) : (
              <div>No available content</div>
            )}
          </Col>
          <Col span={12}>
            <Title level={5}>Subjects</Title>
            {subjectsList ? (
              <List
                size="small"
                bordered
                dataSource={subjectsList}
                renderItem={({
                  name,
                  start_time,
                  end_time,
                }: {
                  name: string;
                  start_time: string;
                  end_time: string;
                }) => (
                  <List.Item>
                    {name}
                    <div>
                      Start: {start_time} End: {end_time}
                    </div>
                  </List.Item>
                )}
              />
            ) : (
              <div>
                You need to click on Info button from the right list to see the
                content
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Home;
