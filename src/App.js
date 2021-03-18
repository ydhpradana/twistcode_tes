
import React, { useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import logo from './logo.png';
import './App.css';
import './index.css';
import "antd/dist/antd.css";
import { useDispatch } from 'react-redux';
import { fetchCountryPhone } from './redux/dataAll/actionCreator';
import moment from 'moment';
import { SaveOutlined } from '@ant-design/icons';
import {
  Typography,
  Table,
  ConfigProvider,
  Radio,
  Layout,
  Image,
  Button,
  Modal,
  Select,
  Form,
  Checkbox,
  InputNumber,
  DatePicker,
  Upload,
  Tabs,
  Row,
  Col,
  Input,
  TabPane,
  message,
  Tooltip,
} from 'antd';

const Registration = () => {
  const dispatch = useDispatch();
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [titleName, setTitleName] = useState(null);
  const [codePhone, setCodePhone] = useState(null);
  const [numberPhone, setNumberPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [country, setCountry] = useState(null);
  const [address, setAddress] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [ttl, setTtl] = useState(null);
  const { countryPhone } = useSelector(state => state.dataAll);
  const [countryFlag, setCountryFlag] = useState([]);
  const { confirm } = Modal;
  const [form] = Form.useForm();
  const [state, setState] = useState({
    showModal: false,
  });
  
  useEffect(() => {
    dispatch(fetchCountryPhone());
  }, [dispatch]);

  useEffect(() => {
    setCountryFlag(countryPhone);
  }, [countryPhone]);

  const optCountryFlag = countryFlag.map((r, i) => {
    return (
      <Select.Option key={i} value={r.alpha3Code}>
        <Image preview={false} src={r.flag} style={{ width: '24px'}}/> {r.name}
      </Select.Option>
    );
  });
  
  const optCountry = countryFlag.map((r, i) => {
    return (
      <Select.Option key={i} value={r.alpha3Code}>
        {r.name}
      </Select.Option>
    );
  });

  const changeCountryCode = (event, i) => {
    countryFlag.map((r, index) =>{
      if(r.alpha3Code == i.value){
        setCodePhone('+'+r.callingCodes[0]);
      }
    })
  };
  
  const changeCountry = (event, i) => {
    //console.log(i);
    setCountry(i.value);
    countryFlag.map((r, index) =>{
      if(r.alpha3Code == i.value){
        setCountryName(r.name);
      }
    })
  };

  const changeTitle = _temuan => {
    setTitleName(_temuan.target.value);
  };

function changeTTL(date, dateString) {

    // const date_format = moment(dateString).format();
    setTtl(dateString);
    
  }

  return (
  <div>
      <body>
        <div id="container"/>
        <Layout style={{ backgroundColor: 'white' }} className="layout">
          <Header style={{backgroundColor: 'white', alignSelf: 'center', padding: '10px' }}>
            <Image preview={false} width={200} src={logo} />
          </Header>
          <div style={{backgroundColor: 'orange', height: "25px", margin: "0px 20px 0px 20px", padding: "2px"}}>
            <div style={{ textAlign: 'center' }}><b>You don't have account yet, please create account</b></div>
          </div>
          <Content style={{ padding: '0px 50px 0px 50px', fontFamily: 'Raleway, sans-serif', marginTop: '50px' }}>
            <Title level={4}>Create New Account</Title>
            <Form style={{ margin:"20px 0px 10px 0px" }} layout={'vertical'}>
              <Form.Item label="Title" name="title">
                <Radio.Group
                value={titleName} onChange={changeTitle}
                >
                  <Radio value={"Mrs"}>Mrs</Radio>
                  <Radio value={"Ms"}>Ms</Radio>
                  <Radio value={"Mdm"}>Mdm</Radio>
                  <Radio value={"Mr"}>Mr</Radio>
                  <Radio value={"Dr"}>Dr</Radio>
                </Radio.Group>
              </Form.Item>
              <Row>
                <Col sm={10} md={10} style={{margin: "0px 10px 0px 0px"}}>
                  <Form.Item label="Last Name" name="lastname" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Last Name!',
                    },
                  ]}>
                    <Input value={lastName} defaultValue={lastName} onChange={event => setLastName(event.target.value)}/>
                  </Form.Item>
                </Col>
                <Col sm={10} md={10} style={{margin: "0px 0px 0px 10px"}}>
                  <Form.Item label="First Name" name="firstname" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ]}>
                    <Input value={firstName} defaultValue={firstName} onChange={event => setFirstName(event.target.value)}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={4} style={{margin: "0px 10px 0px 0px"}}>
                  <Form.Item label="Country" name="codecountry" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Country Phone Number!',
                    },
                  ]}>
                    <Select placeholder="Country Code" onChange={changeCountryCode}>
                      {optCountryFlag}
                    </Select>
                  </Form.Item>
                </Col>
                <Col sm={10} md={6} style={{margin: "0px 0px 0px 10px"}}>
                  <Form.Item label="Mobile Phone Number" name="nohp" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ]}>
                    <Input.Group compact>
                      <Input style={{ width: '20%' }} defaultValue={codePhone} value={codePhone} disabled />
                      <Input style={{ width: '75%' }} defaultValue={numberPhone} value={numberPhone} onChange={event => setNumberPhone(event.target.value)}/>
                    </Input.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Address</Title>
               <Row>
                <Col sm={20} md={20} style={{margin: "0px 10px 0px 0px"}}>
                  <Form.Item label="Address" name="address" >
                    <Input value={address} defaultValue={address} onChange={event => setAddress(event.target.value)}/>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} style={{margin: "0px 10px 0px 0px"}}>
                  <Form.Item label="Country/Location" name="country" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Country/Location!',
                    },
                  ]}>
                     <Select 
                        showSearch 
                        placeholder="Country" 
                        defaultValue={country}
                        onChange={changeCountry}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                      {optCountry}
                    </Select>
                  </Form.Item>
                </Col>
                <Col sm={10} md={10} style={{margin: "0px 0px 0px 10px"}}>
                  <Form.Item label="Province/District" name="province" 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Province/District!',
                    },
                  ]}>
                    <Select 
                        showSearch 
                        placeholder="Province" 
                        defaultValue={country}
                        onChange={value => changeCountry()}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                      {optCountry}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Contacts</Title>
              <Row>
                <Col sm={10} md={10} style={{margin: "0px 10px 0px 0px"}}>
                  <Form.Item label="Email Address" name="email" 
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please input your Email!',
                    },
                  ]}>
                    <Input value={email} defaultValue={email} onChange={event => setEmail(event.target.value)}/>
                  </Form.Item>
                </Col>
                <Col sm={10} md={10} style={{margin: "0px 0px 0px 10px"}}>
                  <Form.Item label="Birth Date" name="birthdate" >
                     <DatePicker
                        onChange={(date, dateString) => changeTTL(date, dateString)}
                        defaultValue={ttl != null ? moment(ttl, 'YYYY-MM-DD') : null}
                        format="DD-MM-YYYY"
                      />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ marginTop: 18, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div></div>
                <div>
                  <Button type="primary" onClick={()=> {
                    setState({ showModal: true });
                  }} icon={<SaveOutlined />} size={'medium'} style={{ marginRight: 15, padding: "5px" }}>
                    Create Customer
                  </Button>
                </div>
              </div>
            </Form>
            <Modal
              title="Confirmation data"
              visible={state.showModal}
              onOk={() => setState({ showModal: false})}
              onCancel={() => setState({ showModal: false})}
              // modalRender={modal => <Draggable disabled={state.disabled}>{modal}</Draggable>}
              footer={(<>
                      <Button type="default" onClick={() => setState({ showModal: false})}>Cancel</Button>
                      <Button type="primary" onClick={() => setState({ showModal: false})}> Simpan</Button>
                  </>)}
            >
              <Form form={form} layout="vertical">
                <Form.Item
                  label="Name"
                  labelAlign="left"
                  id="type"
                >
                  <Input readOnly value={titleName != null ? titleName:'' + " "+firstName != null ? firstName : '' +" "+lastName != null ? lastName : ''} />
                </Form.Item>
                <Form.Item
                  label="Mobile Phone Number"
                  labelAlign="left"
                  id="type"
                >
                  <Input readOnly value={codePhone != null ? codePhone : '' +" "+numberPhone != null ? numberPhone : '' } />
                </Form.Item>
                <Form.Item
                  label="Address"
                  labelAlign="left"
                  id="type"
                >
                  <Input readOnly value={address != null ? address : ''} />
                </Form.Item>
                <Form.Item
                  label="Country"
                  labelAlign="left"
                  id="type"
                >
                  <Input readOnly value={countryName != null ? countryName : ''} />
                </Form.Item>
                <Form.Item
                  label="Email"
                  labelAlign="left"
                  id="type"
                >
                  <Input readOnly value={email != null ? email : ''} />
                </Form.Item>
                <Form.Item
                  label="Birth date"
                  labelAlign="left"
                  id="type"
                >
                  <DatePicker
                    disabled
                    defaultValue={ttl != null ? moment(ttl, 'DD-MM-YYYY') : null}
                    format="DD-MM-YYYY"
                  />
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </body>
    </div>
  );
}


function App() {
  return (
    <Provider store={store}>
     <Registration/>
    </Provider>
  );
}
export default App;
