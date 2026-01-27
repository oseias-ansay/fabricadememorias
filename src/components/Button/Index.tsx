import { Container } from "./styles";

type Props = {
    title: string;
}

export function Button({ title, ...rest}: Props) {
    return (
        <Container
        {...rest}
        />
    );
}