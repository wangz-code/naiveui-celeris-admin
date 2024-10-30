export default defineEventHandler(async (event) => {
  const { password, username } = await readBody(event);
  console.log('password log==>', password);
  if (!password || !username) return useResponseError('请输入账号和密码');

  const user = MOCK_USERS.find((item) => item.username == username);
  if (!user) return useResponseError('用户不存在');
  return useResponseSuccess(user);
});
