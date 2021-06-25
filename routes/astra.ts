
exports.serve = () => {
    return (req, res) => {
      const astra = "astra testing"
      res.status(200).send(astra)
    }
  }