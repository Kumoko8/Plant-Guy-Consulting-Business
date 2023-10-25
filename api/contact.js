export function handleContactFormSubmission(req, res) {
    if (req.method === 'POST') {
      // Handle form submission
      // ...
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Form submitted successfully' }));
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
  }