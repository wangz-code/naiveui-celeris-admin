export default eventHandler((event) => {
  console.log('event log==>', event);
  return useResponseSuccess([
    {
      moduleNo: 'M20',
      title: '客户管理',
      functionCount: 13,
      child: [
        {
          moduleNo: 'M2001',
          title: '客户资料',
          functionCount: 13,
          child: [],
        },
      ],
    },
    {
      moduleNo: 'M80',
      title: '系统管理',
      functionCount: 16,
      child: [
        {
          moduleNo: 'M8002',
          title: '系统账号',
          functionCount: 7,
          child: [],
        },
        {
          moduleNo: 'M8003',
          title: '用户组',
          functionCount: 9,
          child: [],
        },
      ],
    },
  ]);
});
