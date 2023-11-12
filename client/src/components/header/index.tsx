import {Layout,Space,Typography,Button} from 'antd'
import {Link} from 'react-router-dom'
import styles from './index.module.css'
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { CustomButton } from '../custom-button'
import { Paths } from '../../path'
export const Header = () => {
  return (
    <div>
        <Layout.Header className={styles.header}>
            <Space>
            <TeamOutlined className={styles.teamIcon}/>
            <Link to={Paths.home}>
            <CustomButton type="link">
                <Typography.Title level={1}>Сотрудники</Typography.Title>
            </CustomButton>
            </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                <CustomButton type='text' icon={<UserOutlined/>}>Зарегистрироваться</CustomButton>
                </Link>
                <Link to={Paths.login}>
                <CustomButton type='text' icon={<LoginOutlined/>}>Войти</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    </div>
  )
}
