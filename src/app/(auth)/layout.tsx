import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <div>{children}</div>
      <div>Painel de ADM</div>
    </div>
  )
}