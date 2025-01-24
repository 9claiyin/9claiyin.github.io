var posts=["2024/06/17/hello-world/","2025/01/16/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };