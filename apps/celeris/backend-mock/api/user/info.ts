export default eventHandler((event) => {
  const authorization = event.headers.get('authorization');
  if (!authorization) {
    return useResponseError('token 不存在');
  }
  const user = MOCK_USERS.find((item) => item.token == authorization);
  return useResponseSuccess(user);
});
