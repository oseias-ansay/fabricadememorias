import React from "react";
import { Container,LoadIndicator } from "./styles";

/* NOTE: export named conforme você importa em App.tsx: { Loading } */
export function Loading() {
  return (
    <Container>
      {/* LoadingIndicator é estilizado em styles.ts deste componente */}
      <LoadIndicator />
    </Container>
  );
}