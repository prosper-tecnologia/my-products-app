import { Button, Typography } from "@mui/material";
import { TextInput } from "@src/components/atoms";
import { useForm } from "react-hook-form";

export interface LoginFormData {
    username: string;
    password: string;
}

interface Props {
    submit: (data: LoginFormData) => void;
}

export function LoginForm ({ submit }: Props) {
    const { control, handleSubmit } = useForm<LoginFormData>({
        defaultValues: {
            username: '',
            password: '',
        }
    });

    return (
        <form style={{ width: 300, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" textAlign="center" marginBottom={1}>Login</Typography>

            <TextInput
                label="Nome de usuário"
                name="username"
                control={control}
                rules={{ required: true }}
                style={{ marginBottom: 10 }}
            />

            <TextInput
                label="Senha"
                name="password"
                control={control}
                rules={{ required: true }}
                type="password"
                style={{ marginBottom: 10 }}
            />

            <Button
                variant="contained"
                onClick={handleSubmit(submit)}
            >
                Login
            </Button>
        </form>
    );
}