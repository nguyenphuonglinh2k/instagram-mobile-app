export const onCheckIfFollowing = (id, following) => {
  return following.some(item => item._id === id);
};
