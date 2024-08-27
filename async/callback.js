import fs from "fs";

fs.readFile("../data/users.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }

  const users = JSON.parse(data);

  fs.readFile("../data/posts.json", "utf8", (error1, data1) => {
    if (error1) {
      console.log(error1);
    }

    const posts = JSON.parse(data1);

    const result = users.map((user) => {
      return posts.filter((post) => post.userId === user.id);
    });

    console.log(result);
  });

});
