import { Layout, Space, Typography, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { CustomButton } from "../custom-button";
import { Paths } from "../../path";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogOutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <Layout.Header className={styles.header}>
        <Space>
          <TeamOutlined className={styles.teamIcon} />
          <Link to={Paths.home}>
            {user ? (
              <CustomButton type="link">
                <Typography.Title level={1}>Сотрудники</Typography.Title>
              </CustomButton>
            ) : null}
          </Link>
        </Space>
        {user ? (
          <CustomButton
            type="link"
            icon={<LoginOutlined />}
            onClick={onLogOutClick}
          >
            Выйти
          </CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton type="text" icon={<UserOutlined />}>
                Зарегистрироваться
              </CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type="text" icon={<LoginOutlined />}>
                Войти
              </CustomButton>
            </Link>
          </Space>
        )}
      </Layout.Header>
    </div>
  );
};
