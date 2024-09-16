<template>
  <div>
    <h1>Welcome to Our App</h1>
    <p>This is the index page</p>
    <a href="/sign-in" class="sign-in-button">Sign In with AuthKit</a>
  </div>
</template>

<style scoped>
.sign-in-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.sign-in-button:hover {
  background-color: #0056b3;
}
</style>