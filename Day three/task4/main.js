function fetchPostsWithThen(count) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const limitedPosts = posts.slice(0, count);
        renderPosts(limitedPosts, "Displayed using .then()");
      })
      .catch(error => console.error('Error:', error));
  }
  async function fetchPostsWithAsync(count) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      const limitedPosts = posts.slice(0, count);
      renderPosts(limitedPosts, "Displayed using async/await");
    } catch (error) {
      console.error('Error:', error);
    }
  }
  function renderPosts(posts, title) {
    const container = document.getElementById("postsContainer");
    container.innerHTML = `<h3>${title}</h3>`;
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
      `;
      container.appendChild(card);
    });
  }
  
 
//   fetchPostsWithThen(5);
  // fetchPostsWithAsync(5);
  