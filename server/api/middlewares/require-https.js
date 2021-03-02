function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect(`https://${req.get('host')}${process.env.PUBLIC_URL}${req.url}`);
  }
  next();
}

export default requireHTTPS;
