const devApis = {
  '/list': {
    code: 200,
    success: true,
    data: {
      list: [{shopName: '巴格马', shopCode: 'bagema124'}],
      totalCount: 10,
      pageSize: 10,
      pageNum: 1
    }
  },
  '/save': {
    shopName: '西坝河',
    shopCode: 'dkght5777533'
  }
}

module.exports = devApis