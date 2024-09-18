import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
const Dashboard = () => {
    const stats = [
        { title: 'ผู้ใช้ทั้งหมด', value: 120 },
        { title: 'ยอดขายเดือนนี้', value: 1500 },
        { title: 'ผลิตภัณฑ์ใหม่', value: 20 },
        { title: 'คำสั่งซื้อ', value: 35 },
    ];
 
    const navigate = useNavigate();
 
    const handleLogout = () => {
        // เพิ่มโค้ดสำหรับการ logout ที่นี่ (ถ้ามี)
        navigate('/LoginAdmin'); // นำไปยังหน้า Login
    };
 
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} style={{ padding: '20px' }}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{stat.title}</Typography>
                                <Typography variant="h6">{stat.value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
 
export default Dashboard;