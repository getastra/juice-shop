import fs = require('fs')

exports.serve = () => {
    return (req, res) => {
        fs.readFile('resources/.htaccess', 'utf-8', (err, content) => {
            if (err != null) {
              next(new Error(`Unable to retrieve htaccess file: ${err.message}`))
            }
            var fileSize = content.size
            res.status(200).end(content)
          })
    }
  }