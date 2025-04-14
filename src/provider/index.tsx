"use client";
import ThemeProvider from "./theme";

//อันนี้เราทำ Provider เพื่อเพิ่มสิทในการเข้าถึง lib ต่างเฉยๆ ---> แต่ใน Project นี้ เราจะเอาไปใช้ในกับ layout ใน file home เลย

export default function Providers({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return <ThemeProvider>{children}</ThemeProvider>;
  }