import useModalState from '@/hooks/useModalState';
import {
  createApiProjectPost,
  deleteApiProject_pk_delete,
  queryAllApiProjectGet,
  updateApiProject_pk_put,
} from '@/services/ant-design-pro/Project';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Form, message, Modal } from 'antd';
import { memo, useRef, useState } from 'react';

const Project = () => {
  const actionRef = useRef<ActionType>();

  const { isOpen, setModalOpen, action } = useModalState();

  const [form] = Form.useForm<API.ProjectCreate>();

  const [currentRecord, setCurrentRecord] = useState<API.Project>();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const clomuns: ProColumns<API.Project>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: '80px',
      render: (text, record) => (
        <a
          onClick={() => {
            setCurrentRecord(record);
            setDrawerOpen(true);
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      tooltip: '唯一',
      width: '120px',
    },
    {
      title: '项目描述',
      dataIndex: 'description',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      valueType: 'dateTime',
      hideInSearch: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            setModalOpen(true, '编辑');
            setCurrentRecord(record);
            form.setFieldsValue(record);
          }}
        >
          编辑
        </a>,
        <a
          key="del"
          onClick={() => {
            Modal.confirm({
              title: '确认要删除吗？',
              content: `确定要删除项目 ${record.name} 吗？`,
              okText: '确定',
              cancelText: '取消',
              onOk: async () => {
                await deleteApiProject_pk_delete({ pk: record.id });
                actionRef?.current?.reload();
              },
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const handleFinsh = async (values: API.ProjectCreate) => {
    let res;
    if (action === '新建') {
      res = await createApiProjectPost(values);
    } else {
      res = await updateApiProject_pk_put({ pk: currentRecord?.id as number }, values);
    }
    if (res?.code === 0) {
      message.success(res.message);
      setModalOpen(false);
      actionRef?.current?.reload();
    }
  };

  return (
    <PageContainer header={{ title: null }}>
      <ProTable<API.Project>
        rowKey="id"
        actionRef={actionRef}
        headerTitle="项目列表"
        toolBarRender={() => [
          <Button key="add" type="primary" onClick={() => setModalOpen(true)}>
            <PlusOutlined />
            新增
          </Button>,
        ]}
        columns={clomuns}
        request={queryAllApiProjectGet}
      />

      {/* modal */}
      <ModalForm
        open={isOpen}
        title={`${action}项目`}
        width={400}
        form={form}
        style={{ textAlign: 'center' }}
        modalProps={{
          destroyOnClose: true,
          maskClosable: false,
          centered: true,
          onCancel: () => setModalOpen(false),
        }}
        onFinish={handleFinsh}
      >
        <ProFormText
          width="md"
          name="name"
          label="项目名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true, message: '请输入名称' }]}
        />
        <ProFormTextArea width="md" name="description" label="项目描述" />
      </ModalForm>

      {/*  */}
      <Drawer
        title={`${currentRecord?.name}详情`}
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <ProDescriptions<API.Project>
          column={2}
          columns={clomuns as any}
          dataSource={currentRecord}
        />
      </Drawer>
    </PageContainer>
  );
};

export default memo(Project);
