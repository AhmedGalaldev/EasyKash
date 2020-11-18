const getPagingData = (data: any, page: any, limit: any) => {
  const { count: totalItems, rows: transactions } = data;
  const current_page = page ? +page : 0;
  const total = Math.ceil(totalItems / limit);

  return {
    transactions,
    paging: {
      total,
      current_page,
      per_page: limit,
    },
  };
};

module.exports = getPagingData;
