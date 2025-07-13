const fs = require('fs');
const http = require('http');
const url = require('url');
const nunjucks = require('nunjucks');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const posts = JSON.parse(data);
const template = fs.readFileSync(`${__dirname}/temp.html`, 'utf-8');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = nunjucks.renderString(template, { posts, showAll: true });
    res.end(html);
  } 
  else if (pathname === '/post') {
    const post = posts.find(p => p.id === Number(query.id));
    if (!post) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>Post not found</h1>');
    }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const html = nunjucks.renderString(template, { post, showAll: false });
      res.end(html);
  } 
  else if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts));

  }
   else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found.404 error!!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log("Server is running on http://localhost:8000");
});
