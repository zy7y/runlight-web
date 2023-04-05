import { PageContainer, ProTable } from '@ant-design/pro-components';
import { memo } from 'react';

const Config = () => {
  return (
    <PageContainer
      header={{
        title: null,
      }}
    >
      <ProTable />
    </PageContainer>
  );
};

export default memo(Config);
