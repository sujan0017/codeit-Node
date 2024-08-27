import fs from "fs/promises";

async function getPosts() {
  try {
    const rawUsers = await fs.readFile("../data/users.json", "utf8");
    const rawPosts = await fs.readFile("../data/posts.json", "utf8");
    const rawComments = await fs.readFile("../data/comments.json", "utf8");

    const users = JSON.parse(rawUsers)
    const posts = JSON.parse(rawPosts)
    const comments = JSON.parse(rawComments)

    const result = users.map((user) => {
      return posts.filter((post) => user.id === post.userId);
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
