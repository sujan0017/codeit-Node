const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  
  //   if (req.method === "DELETE") {
  //     return res.status(405).send("Delete not allowed.");
  //   }

  next();
};
export default logger;
