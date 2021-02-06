import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import "antd/dist/antd.css";
import {
  Table,
  ConfigProvider,
  Radio,
  Layout,
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

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const [selectColor , setSelectColor] = useState(null);
  const [chooseColor , setChooseColor] = useState(null);
  const col = [
        {
          title: "Nama",
          "dataIndex": "Nama",
        },
        {
          title: "Lightest",
          "dataIndex": "Lightest",
          render: function(v,r,i){
            return {
              props: {
                style: { background: v }
              },
            }; 
          }
        },
        {
          title: "Lighter",
          "dataIndex": "Lighter",
          render: function(v,r,i){
            return {
              props: {
                style: { background: v }
              },
            }; 
          }
        },
        {
          title: "Normal",
          "dataIndex": "Normal",
          render: function(v,r,i){
            return {
              props: {
                style: { background: v }
              },
            }; 
          }
        },
        {
          title: "Darker",
          "dataIndex": "Darker",
          render: function(v,r,i){
            return {
              props: {
                style: { background: v }
              },
            }; 
          }
        },
        {
          title: "Darkest",
          "dataIndex": "Darkest",
          render: function(v,r,i){
            return {
              props: {
                style: { background: v }
              },
            }; 
          }
        },
  ];
  const all = {
    "status": "success",
    "column": [
        {
          "column": "Nama",
          "dataIndex": "Nama"
        },
        {
          "column": "Lightest",
          "dataIndex": "Lightest",
        },
        {
          "column": "Lighter",
          "dataIndex": "Lighter",
        },
        {
          "column": "Normal",
          "dataIndex": "Normal",
        },
        {
          "column": "Darker",
          "dataIndex": "Darker",
        },
        {
          "column": "Darkest",
          "dataIndex": "Darkest",
        },
    ],
    "row": [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        },
        {
            "id": 4
        },
        {
            "id": 5
        },
        {
            "id": 6
        },
        {
            "id": 7
        },
        {
            "id": 8
        }
    ],
    "data": [
        {
            "column": "Nama",
            "data": [
                {
                    "id": 1,
                    "sampleDetailId": 1,
                    "column": "Nama",
                    "value": "Red",
                },
                {
                    "id": 2,
                    "sampleDetailId": 2,
                    "column": "Nama",
                    "value": "Green",
                },
                {
                    "id": 3,
                    "sampleDetailId": 3,
                    "column": "Nama",
                    "value": "Blue",
                },
                {
                    "id": 4,
                    "sampleDetailId": 4,
                    "column": "Nama",
                    "value": "Yellow",
                },
                {
                    "id": 5,
                    "sampleDetailId": 5,
                    "column": "Nama",
                    "value": "Purple",
                },
                {
                    "id": 6,
                    "sampleDetailId": 6,
                    "column": "Nama",
                    "value": "Brown",
                },
                {
                    "id": 7,
                    "sampleDetailId": 7,
                    "column": "Nama",
                    "value": "Orange",
                },
                {
                    "id": 8,
                    "sampleDetailId": 8,
                    "column": "Nama",
                    "value": "Grey",
                },
            ]
        },
        {
            "column": "Lightest",
            "data": [
                {
                    "id": 9,
                    "sampleDetailId": 1,
                    "column": "Lightest",
                    "value": "#ffe6e6",
                },
                {
                    "id": 10,
                    "sampleDetailId": 2,
                    "column": "Lightest",
                    "value": "#e6ffe6",
                },
                {
                    "id": 11,
                    "sampleDetailId": 3,
                    "column": "Lightest",
                    "value": "#e6e6ff",
                },
                {
                    "id": 12,
                    "sampleDetailId": 4,
                    "column": "Lightest",
                    "value": "#ffffe6",
                },
                {
                    "id": 13,
                    "sampleDetailId": 5,
                    "column": "Lightest",
                    "value": "#ffe6ff",
                },
                {
                    "id": 14,
                    "sampleDetailId": 6,
                    "column": "Lightest",
                    "value": "#faebeb",
                },
                {
                    "id": 15,
                    "sampleDetailId": 7,
                    "column": "Lightest",
                    "value": "#fff6e6",
                },
                {
                    "id": 16,
                    "sampleDetailId": 8,
                    "column": "Lightest",
                    "value": "#f2f2f2",
                },
            ]
        },
        {
            "column": "Lighter",
            "data": [
                {
                    "id": 9,
                    "sampleDetailId": 1,
                    "column": "Lighter",
                    "value": "#ff8080",
                },
                {
                    "id": 10,
                    "sampleDetailId": 2,
                    "column": "Lighter",
                    "value": "#80ff80",
                },
                {
                    "id": 11,
                    "sampleDetailId": 3,
                    "column": "Lighter",
                    "value": "#8080ff",
                },
                {
                    "id": 12,
                    "sampleDetailId": 4,
                    "column": "Lighter",
                    "value": "#ffff80",
                },
                {
                    "id": 13,
                    "sampleDetailId": 5,
                    "column": "Lighter",
                    "value": "#ff80ff",
                },
                {
                    "id": 14,
                    "sampleDetailId": 6,
                    "column": "Lighter",
                    "value": "#da7171",
                },
                {
                    "id": 15,
                    "sampleDetailId": 7,
                    "column": "Lighter",
                    "value": "#ffd280",
                },
                {
                    "id": 16,
                    "sampleDetailId": 8,
                    "column": "Lighter",
                    "value": "#bfbfbf",
                },
            ]
        },
        {
            "column": "Normal",
            "data": [
                {
                    "id": 17,
                    "sampleDetailId": 1,
                    "column": "Normal",
                    "value": "#ff0000",
                },
                {
                    "id": 18,
                    "sampleDetailId": 2,
                    "column": "Normal",
                    "value": "#00ff00",
                },
                {
                    "id": 19,
                    "sampleDetailId": 3,
                    "column": "Normal",
                    "value": "#0000ff",
                },
                {
                    "id": 20,
                    "sampleDetailId": 4,
                    "column": "Normal",
                    "value": "#ffff00",
                },
                {
                    "id": 21,
                    "sampleDetailId": 5,
                    "column": "Normal",
                    "value": "#ff00ff",
                },
                {
                    "id": 22,
                    "sampleDetailId": 6,
                    "column": "Normal",
                    "value": "#a52a2a",
                },
                {
                    "id": 23,
                    "sampleDetailId": 7,
                    "column": "Normal",
                    "value": "#ffa500",
                },
                {
                    "id": 24,
                    "sampleDetailId": 8,
                    "column": "Normal",
                    "value": "#808080",
                },
            ]
        },
        {
            "column": "Darker",
            "data": [
                {
                    "id": 25,
                    "sampleDetailId": 1,
                    "column": "Darker",
                    "value": "#800000",
                },
                {
                    "id": 26,
                    "sampleDetailId": 2,
                    "column": "Darker",
                    "value": "#008000",
                },
                {
                    "id": 27,
                    "sampleDetailId": 3,
                    "column": "Darker",
                    "value": "#000080",
                },
                {
                    "id": 28,
                    "sampleDetailId": 4,
                    "column": "Darker",
                    "value": "#808000",
                },
                {
                    "id": 29,
                    "sampleDetailId": 5,
                    "column": "Darker",
                    "value": "#800080",
                },
                {
                    "id": 30,
                    "sampleDetailId": 6,
                    "column": "Darker",
                    "value": "#651a1a",
                },
                {
                    "id": 31,
                    "sampleDetailId": 7,
                    "column": "Darker",
                    "value": "#996300",
                },
                {
                    "id": 32,
                    "sampleDetailId": 8,
                    "column": "Darker",
                    "value": "#404040",
                },
            ]
        },
        {
            "column": "Darkest",
            "data": [
                {
                    "id":33,
                    "sampleDetailId": 1,
                    "column": "Darkest",
                    "value": "#330000",
                },
                {
                    "id": 34,
                    "sampleDetailId": 2,
                    "column": "Darkest",
                    "value": "#001a00",
                },
                {
                    "id": 35,
                    "sampleDetailId": 3,
                    "column": "Darkest",
                    "value": "#000033",
                },
                {
                    "id": 36,
                    "sampleDetailId": 4,
                    "column": "Darkest",
                    "value": "#1a1a00",
                },
                {
                    "id": 37,
                    "sampleDetailId": 5,
                    "column": "Darkest",
                    "value": "#1a001a",
                },
                {
                    "id": 38,
                    "sampleDetailId": 6,
                    "column": "Darkest",
                    "value": "#290a0a",
                },
                {
                    "id": 39,
                    "sampleDetailId": 7,
                    "column": "Darkest",
                    "value": "#332100",
                },
                {
                    "id": 40,
                    "sampleDetailId": 8,
                    "column": "Darkest",
                    "value": "#1a1a1a",
                },
            ]
        },
    ]
  };
  const column = all.column.map((item, index) => {
    const title = item.column.replace('_', ' ');
    return {
      title: title,
      dataIndex: item.dataIndex,
      key: item.column,
      index: index,
    };
  });
  //console.log(all.data.filter(function(r){return r.column == "Nama"; })[0].data[0].value);
  let row = [];
  all.row.map((item, index) => {
    let temp = [];
    let key1 = 'id';
    temp[key1] = item.id;

    let newTemp = [];
    newTemp = [...temp, ...newTemp];

    for (var key in column) {
      temp[column[key].dataIndex] = all.data.filter(function(r) {
        return r.column == column[key].dataIndex;
      })[0].data[index].value;
      //console.log(a);
    }
    row.push(Object.assign({}, temp));
  });
  //setAllFilter(row);
  const [allFilter, setAllFilter] = useState(() => {
    return row;
  });

  const handleChange = (i) => {
    row = [];
    //console.log(event, i);
    setSelectColor(i);
    all.row.map((item, index) => {
      let temp = [];
      let key1 = 'id';
      temp[key1] = item.id;

      let newTemp = [];
      newTemp = [...temp, ...newTemp];

      for (var key in column) {
        temp[column[key].dataIndex] = all.data.filter(function(r) {
          return r.column == column[key].dataIndex;
        })[0].data[index].value;
        //console.log(a);
      }
      row.push(Object.assign({}, temp));
    });
    let cek_filter = [];
    row.map((item,index)=>{
      if(i != null){
        if(item.id == i){
          cek_filter.push(item);
        }
      }else{
        cek_filter.push(item);
      }
    });
    setAllFilter(cek_filter);
  };
  const onChange = e => {
    row = [];
    setChooseColor(e.target.value);
    let filter = e.target.value;
    let cat = selectColor;
    //setValue(e.target.value);
    all.row.map((item, index) => {
      let temp = [];
      let key1 = 'id';
      temp[key1] = item.id;

      let newTemp = [];
      newTemp = [...temp, ...newTemp];

      for (var key in column) {
        temp[column[key].dataIndex] = all.data.filter(function(r) {
          return r.column == column[key].dataIndex;
        })[0].data[index].value;
        //console.log(a);
      }
      row.push(Object.assign({}, temp));
    });
    let cek_filter = [];
    row.map((item,index)=>{
      if(cat == null || cat == ''){
        cek_filter.push(item);
      }else{
        if(item.id == cat){
          cek_filter.push(item);
        }
      }
    });
    let cek_all = [];
    cek_filter.map((item,index)=>{
      if(filter != null){
        if(filter == "Lightest"){
          cek_all.push({
            id: item.id,
            Nama: item.Nama,
            Lightest: item.Lightest
          })
        }else if(filter == "Lighter"){
          cek_all.push({
            id: item.id,
            Nama: item.Nama,
            Lighter: item.Lighter
          })
        }else if(filter == "Normal"){
          cek_all.push({
            id: item.id,
            Nama: item.Nama,
            Normal: item.Normal
          })
        }else if(filter == "Darker"){
          cek_all.push({
            id: item.id,
            Nama: item.Nama,
            Darker: item.Darker
          })
        }else if(filter == "Darkest"){
          cek_all.push({
            id: item.id,
            Nama: item.Nama,
            Darkest: item.Darkest
          })
        }
      }else{
        cek_all.push(item);
      }
    });
    console.log(cek_filter);
    console.log(cek_all);
    console.log(filter);
    console.log(cat);
    setAllFilter(cek_all);
  };
  console.log(column);
  return (
    <div>
      <body>
        <div id="container" style={{padding:'24px'}}/>
        <Layout className="layout">
          <Header>
          </Header>
          <Content style={{ padding: '0 50px' }}>

              <div className="site-layout-content">
                <Form labelCol={{ span: 2 }} wrapperCol={{ span: 15 }} layout="horizontal">
                  <Form.Item label="Category">
                    <Select placeholder="Choose Color" value={selectColor} onChange={(v, r) => handleChange(v)}>
                      <Select.Option key={0} value={null}>
                            All Color
                          </Select.Option>
                      ${row.map((item, index)=>{
                          return <Select.Option key={item.id} value={item.id}>
                            {item.Nama}
                          </Select.Option>
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Filter">
                    <Radio.Group onChange={onChange} value={chooseColor}>
                      <Radio value={null}>None</Radio>
                      <Radio value={'Lightest'}>Lightest</Radio>
                      <Radio value={'Lighter'}>Lighter</Radio>
                      <Radio value={'Normal'}>Normal</Radio>
                      <Radio value={'Darker'}>Darker</Radio>
                      <Radio value={'Darkest'}>Darkest</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
                <Table pagination={false} columns={col} dataSource={allFilter} bordered
                style={{ fontWeight: 700 }}
                scroll={{ x: 'calc(2050 + 100%)' }}></Table>
              </div>
          </Content>
        </Layout>
      </body>
    </div>
  );
}

export default App;
