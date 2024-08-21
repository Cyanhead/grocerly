// export type LoginPropsType = {};

export type LoginFormPropsType = {
  passwordStatus?: 'known' | 'forgot';
  setPasswordStatus: (newState: LoginFormPropsType['passwordStatus']) => void;
};
