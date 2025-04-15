'use client';

import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { APP_VERSION } from '@/const/app-const'

export default function CustomAppBar() {
    const t = useTranslations('AppBar.Menu');

    return (
        <AppBar>
            <Toolbar>
                <Box display="flex" gap={3} alignItems="center">
                    <Button>{t('home')}</Button>
                    <Button>{t('exploreCourses')}</Button>
                    <Button>{t('forum')}</Button>
                    <Button>{t('news')}</Button>
                    <Button>{t('faq')}</Button>
                    <Typography variant='body2' sx={{color: '#999'}}>
                        v {APP_VERSION}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

