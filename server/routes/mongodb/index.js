const express = requiere('express');
const router = express.router();

const userRoutes = requiere('./uaer.js');

router.use('/user', userRoutes);

module.exports = router;