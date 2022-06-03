require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require('./router').default;
  const Sitemap = require('../').default;
  (
     new Sitemap(router)
        .build("https://hookwal.com")
        .save('./public/sitemap.xml')
  );