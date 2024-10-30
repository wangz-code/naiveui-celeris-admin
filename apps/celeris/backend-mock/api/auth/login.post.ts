export default defineEventHandler(async (event) => {
  const { password, username } = await readBody(event);
  console.log('password log==>', password);

  if (!password || !username || username != 'admin') {
    setResponseStatus(event, 400);
    return useResponseError('BadRequestException', 'Username and password are required');
  }
  return useResponseSuccess({
    id: '1',
    username: 'kirklin',
    fullName: 'Kirk Lin',
    email: 'hi@kirklin.cn',
    phone: '15912345678',
    avatarUrl: 'https://cdn-fusion.imgimg.cc/i/2024/5553dc14e1b5ce44.jpg',
    homePageUrl: '/dashboard/index',
    token: 'adminFakeToken',
  });
});
