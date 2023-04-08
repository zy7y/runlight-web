import Postman from '@/components/Postman';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { memo } from 'react';

const Interface = () => {
  return (
    <PageContainer header={{ title: null }}>
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard gutter={16} ghost>
          <ProCard colSpan={8} style={{ minHeight: '50vh' }}></ProCard>
          <ProCard colSpan={16} style={{ height: '100%' }}>
            <Postman />
          </ProCard>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default memo(Interface);
