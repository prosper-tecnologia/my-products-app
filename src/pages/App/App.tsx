import { Box } from "@mui/material";
import { LoginForm, type LoginFormData } from "@src/components/organisms/forms/LoginForm/LoginForm";
import { api, saveToken } from "@src/services";
import { saveUser } from "@src/store/slices/userSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const containerProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const submit = useCallback((data: LoginFormData) => {
    api.post('/login', data)
      .then(({ data: user }) => {
        saveToken(user.token);
        dispatch(saveUser(user));
        navigate('/auth');
      })
      .catch((e) => console.error(e));
  }, [dispatch]);

  return (
    <Box {...containerProps}>
      <LoginForm submit={submit} />
    </Box>
  );
}
