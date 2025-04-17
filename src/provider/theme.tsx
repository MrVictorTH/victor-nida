"use client";

import { createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class"
    },
    colorSchemes: {
        light: {
            palette: {
              action: {
                active: "rgba(0, 0, 0, 0.6)",
                disabled: "rgba(255, 255, 255, 1)",
              },
              primary: {
                main: "rgba(173, 202, 49, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              secondary: {
                main: "rgba(0, 0, 0, 0.082)",
                contrastText: "rgba(0, 0, 0, 0.475)",
              },
              success: {
                main: "rgba(18, 158, 57, 1)",
                contrastText: "rgba(18, 158, 57, 1)",
              },
              info: {
                main: "rgba(0, 0, 255, 0.6)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              warning: {
                main: "rgba(255, 152, 0, 1)",
                contrastText: "rgba(0, 0, 0, 1)",
              },
              error: {
                main: "rgba(227, 45, 45, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              text: {
                primary: "rgba(0, 0, 0, 1)",
                secondary: "rgba(0, 0, 0, 0.475)",
                disabled: "rgba(0, 0, 0, 0.38)",
              },
            },
        },
        dark: {
            palette: {
              action: {
                active: "rgba(255, 255, 255, 0.6)",
                disabled: "rgba(0, 0, 0, 1)",
              },
              background: { paper: "rgba(29, 29, 29, 1)" },
              primary: {
                main: "rgba(0 ,226, 0, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              secondary: {
                main: "rgba(255, 255, 255, 0.082)",
                contrastText: "rgba(134, 134, 134, 1)",
              },
              success: {
                main: "rgba(18, 158, 57, 1)",
                contrastText: "rgba(18, 158, 57, 1)",
              },
              info: {
                main: "rgba(0, 0, 255, 0.6)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              warning: {
                main: "rgba(255, 152, 0, 1)",
                contrastText: "rgba(0, 0, 0, 1)",
              },
              error: {
                main: "rgba(227, 45, 45, 1)",
                contrastText: "rgba(255, 255, 255, 1)",
              },
              text: {
                primary: "rgba(255, 255, 255, 0.96)",
                secondary: "rgba(255, 255, 255, 0.475)",
                disabled: "rgba(255, 255, 255, 0.38)",
              },
            },
        }
    },
    components : {
      MuiAppBar: {
        defaultProps: {
          elevation: 1,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '1.25rem',
            background: `${theme.vars.palette.background.default} !important`,
            color: `${theme.vars.palette.primary.main} !important`,
            position: 'fixed',
            width: '80%',
            top: 30,
            left: '50%',
            transform: 'translateX(-50%)',
          }),
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          loadingPosition: 'start',
        },
        styleOverrides: {
          root: {
            borderRadius: '0.75rem',
            lineHeight: '2rem',
            textTransform: 'none',
            height: '2.5rem',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            whiteSpace: 'pre-line',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
        styleOverrides: (theme) => ({
          ':root': {
            '--primary-main': theme.palette.primary.main,
            '--primary-contrastText': theme.palette.primary.contrastText,
            '--secondary-main': theme.palette.secondary.main,
            '--secondary-contrastText': theme.palette.secondary.contrastText,
            '--success-main': theme.palette.success.main,
            '--success-contrastText': theme.palette.success.contrastText,
            '--info-main': theme.palette.info.main,
            '--info-contrastText': theme.palette.info.contrastText,
            '--warning-main': theme.palette.warning.main,
            '--warning-contrastText': theme.palette.warning.contrastText,
            '--error-main': theme.palette.error.main,
            '--error-contrastText': theme.palette.error.contrastText,
            '--text-primary': theme.palette.text.primary,
            '--text-secondary': theme.palette.text.secondary,
            '--text-disabled': theme.palette.text.disabled,
            '--background-default': theme.palette.background.default,
            '--background-paper': theme.palette.background.paper,
          },
          'input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${theme.vars.palette.background.default} inset !important`,
          },
          'input::-ms-clear, input::-ms-reveal': {
            display: 'none',
          },
        }),
      }
    }
});

export default function ThemeProvider({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    const [mounted, setMounted] = useState(false);
    // เราจะ Set MUI มันทำงานฝั่ง Client เลย ให้มันทำงาน ThemeProvider(แต่ใช้ชื่อ As MuiThemeProvider เพราะเดี๋ยวชื่อซ้ำ) ตอน Mount
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }