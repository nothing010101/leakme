const accounts = require('../accounts-data.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRFToken, X-Requested-With');
  if (req.method === 'OPTIONS') return res.status(200).end();

  let body = '';
  req.on('data', d => body += d);
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const username = params.get('project_username') || '';
    const account = accounts[username] || {};
    const trending = account.trending_info || {};

    res.status(200).json({
      ok: true,
      account: {
        username: account.username || username,
        first_name: account.first_name || username,
        avatar_image_url: account.avatar_image_url || '',
        followers_cnt: account.followers_cnt || 0,
        notable_kols_cnt: account.notable_kols_cnt || 0,
        project_type: account.project_type || 'project',
        trending_info: {
          title: trending.title || '',
          ticker: trending.ticker || null,
          price_change_24_perc: trending.price_change_24_perc || null,
          tags: [],
          date: null,
          body: trending.title || ''
        },
        is_watchlisted: false,
        is_visited: true,
        empty_tr_case: account.empty_tr_case || 0
      },
      trending_info: {
        title: trending.title || '',
        ticker: trending.ticker || null,
        price_change_24_perc: trending.price_change_24_perc || null,
        tags: [],
        date: null,
        body: trending.title || ''
      }
    });
  });
};
