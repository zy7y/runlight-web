import { QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';
import { Dropdown, Input, Select, Tabs, TabsProps, Tooltip } from 'antd';
import { memo } from 'react';

import './index.less';

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
};

const MethodSelectCpn = () => {
  return (
    <Select defaultValue={methods.GET} placeholder="请求方法">
      {Object.entries(methods).map(([key, value]) => (
        <Option key={key} value={value}>
          {key}
        </Option>
      ))}
    </Select>
  );
};

const HelpTitle: React.FC<{
  title: string;
  helpTitle: string;
}> = ({ title, helpTitle }) => {
  return (
    <span style={{ textAlign: 'center' }}>
      {title}
      <Tooltip title={helpTitle}>
        <QuestionCircleOutlined style={{ marginLeft: '3px' }} />
      </Tooltip>
    </span>
  );
};
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `params`,
    children: <h2>params</h2>,
  },
  {
    key: '2',
    label: `headers`,
    children: <h1>headers</h1>,
  },
  {
    key: '3',
    label: `body`,
    children: <h2>body</h2>,
  },
  {
    key: '4',
    label: <HelpTitle title="前置" helpTitle="请求/用例执行前" />,
    children: <h2>前置</h2>,
  },
  {
    key: '5',
    label: <HelpTitle title="后置" helpTitle="请求/用例执行后" />,
    children: <h2>后置</h2>,
  },
  {
    key: '6',
    label: `test`,
    children: <h2>测试</h2>,
  },
];

const Center: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

const Postman = () => {
  const items = [
    {
      key: '1',
      label: '保存为接口',
    },
    {
      key: '2',
      label: '保存为步骤',
    },
    { key: '3', label: '保存为用例' },
  ];
  return (
    <div>
      {/* 请求方法 + 请求地址 + 发送请求 */}
      <div className="head">
        <MethodSelectCpn />
        <Input placeholder="请求地址"></Input>
        <Dropdown.Button
          style={{ flex: 1 }}
          type="primary"
          menu={{
            items,
            onClick: () => {
              console.log('first');
            },
          }}
          onClick={() => {
            console.log('send');
          }}
        >
          <SendOutlined />
          发送
        </Dropdown.Button>
      </div>
      <div className="center">
        <Center />
      </div>
      <div className="fotor"></div>
    </div>
  );
};

export default memo(Postman);
export { methods, MethodSelectCpn };
