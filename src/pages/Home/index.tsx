import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <div className='flex bg-red-300'>tailwindcss-{trim(name)}</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
