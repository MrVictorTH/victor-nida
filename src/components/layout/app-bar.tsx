'use client';

import React from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { AppBar, Toolbar, Box, Button, Typography, Menu, Link, MenuItem, Divider, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslations } from 'next-intl';
import { APP_VERSION } from '@/const/app-const'
import Image from 'next/image';
import 'flag-icons/css/flag-icons.min.css';

export default function CustomAppBar() {
    const t = useTranslations('AppBar');

    const router = useRouter();
    const pathname = usePathname();
    const firstPathname = pathname.split('/')[2];
    const isSelected = (path?: string) => firstPathname === path;
    const color = (path?: string) => (isSelected(path) ? 'primary' : 'text.secondary');

    const { locale } = useParams();
    const currentLocaleIcons = locale === 'en' ? 'gb' : locale;

    const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
      setLangAnchorEl(event.currentTarget);
    };

    const handleChangeLocale = (newLocale: string) => {
      if (typeof pathname !== 'string' || typeof locale !== 'string') return;
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
      setLangAnchorEl(null);
    };

    const handleLangClose = () => {
      setLangAnchorEl(null);
    };

    return (
      <AppBar>
        <Toolbar className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-4">
            <Box className="flex cursor-pointer flex-row items-center gap-4" onClick={() => router.push('/')}>
              <Image src="/nida-logo.png" alt="logo" width={140} height={140} />
            </Box>
            <Box className="flex flex-row items-center gap-8">
              <Link href="/">
                <Typography variant="body1" fontWeight="bold" color={color()}>
                  {t('Menu.home')}
                </Typography>
              </Link>
              <Link href="/explore-course">
                <Typography variant="body1" fontWeight="bold" color={color('explore-course')}>
                  {t('Menu.exploreCourses')}
                </Typography>
              </Link>
              <Link href="/forum">
                <Typography variant="body1" fontWeight="bold" color={color('forum')}>
                  {t('Menu.forum')}
                </Typography>
              </Link>
              <Link href="/news">
                <Typography variant="body1" fontWeight="bold" color={color('news')}>
                  {t('Menu.news')}
                </Typography>
              </Link>
              <Link href="/faq">
                <Typography variant="body1" fontWeight="bold" color={color('faq')}>
                  {t('Menu.faq')}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.primary">
                v {APP_VERSION}
              </Typography>
            </Box>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconButton onClick={handleLangClick} onMouseEnter={handleLangClick}>
                <span className={`fi fi-${currentLocaleIcons}`} />
            </IconButton>
            <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleLangClose}>
              <div className="flex flex-row justify-center gap-3 px-4">
                <span
                  className={`fi fi-th cursor-pointer text-xl ${locale === 'th' ? '' : 'opacity-20'}`}
                  onClick={() => handleChangeLocale('th')}
                />
                <span
                  className={`fi fi-gb cursor-pointer text-xl ${locale === 'en' ? '' : 'opacity-20'}`}
                  onClick={() => handleChangeLocale('en')}
                />
              </div>
            </Menu>
            <Button href="/register">{t('Action.register')}</Button>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/login">
              {t('Action.login')}
            </Button>
          </div>
        </Toolbar>
    </AppBar>
    );
}

