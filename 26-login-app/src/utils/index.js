export const rememberedUser = () => {
  let rememberedUser = null;
  if (localStorage.getItem('rememberMe')) {
    rememberedUser = JSON.parse(localStorage.getItem('rememberMe'));
  }
  return rememberedUser;
};
