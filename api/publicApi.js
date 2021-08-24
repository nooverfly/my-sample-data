const moment = require('moment');

module.exports = (router) => {
  /* 测试用 demo API */
  router.get('/test/get', (req, res) => {
    const randomData = [
      {
        x: 'API1',
        y: 350,
      },
      {
        x: 'API2',
        y: 200,
      },
      {
        x: 'API3',
        y: Math.floor(Math.random() * 400) + 200,
      },
      {
        x: 'API4',
        y: 400,
      },
      {
        x: 'API5',
        y: 500,
      },
      {
        x: 'API6',
        y: Math.floor(Math.random() * 400) + 300,
      },
    ];
    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/date', (req, res) => {
    const {date} = req.query;
    const day = moment(date, 'YYYY-MM-DD');
    const randomData = [
      {
        x: day.format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 100,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD'),
        y: 200,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 400) + 200,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD'),
        y: 400,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD'),
        y: 500,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 400) + 300,
      },
    ];
    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/dateRange', (req, res) => {
    const {dateRange} = req.query;
    const ranges = dateRange.split(',');
    const day1 = moment(ranges[0], 'YYYY-MM-DD');
    const day2 = moment(ranges[1], 'YYYY-MM-DD');
    const dayCount = day2.diff(day1, 'd');
    const randomData = [];

    for (let i=0; i<dayCount; i++) {
      randomData.push({
        x: day1.add(1, 'd').format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 300) + 200,
      });
    }

    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/dateTime', (req, res) => {
    const {dateTime} = req.query;
    const day = moment(dateTime, 'YYYY-MM-DD HH:mm:ss');
    const randomData = [
      {
        x: day.format('YYYY-MM-DD HH:mm:ss'),
        y: Math.floor(Math.random() * 100) + 100,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: 200,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: Math.floor(Math.random() * 400) + 200,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: 400,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: 500,
      },
      {
        x: day.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: Math.floor(Math.random() * 400) + 300,
      },
    ];

    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/dateTimeRange', (req, res) => {
    const {dateTimeRange} = req.query;
    const dateTimes = dateTimeRange.split(',');
    const day1 = moment(dateTimes[0], 'YYYY-MM-DD HH:mm:ss');
    const day2 = moment(dateTimes[1], 'YYYY-MM-DD HH:mm:ss');
    const dayCount = day2.diff(day1, 'd');
    const randomData = [];

    for (let i=0; i<dayCount; i++) {
      randomData.push({
        x: day1.add(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
        y: Math.floor(Math.random() * 300) + 200,
      });
    }

    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/switchBtn', (req, res) => {
    const {select} = req.query;
    let randomData = [];
    if (select === 'true') {
      randomData = [
        {
          x: 'API1',
          y: 350,
        },
        {
          x: 'API2',
          y: 200,
        },
        {
          x: 'API3',
          y: Math.floor(Math.random() * 400) + 200,
        },
        {
          x: 'API4',
          y: 400,
        },
        {
          x: 'API5',
          y: 500,
        },
        {
          x: 'API6',
          y: Math.floor(Math.random() * 400) + 300,
        },
      ];
    } else {
      randomData = [
        {
          x: '周一',
          y: 350,
        },
        {
          x: '周二',
          y: 200,
        },
        {
          x: '周三',
          y: Math.floor(Math.random() * 400) + 200,
        },
        {
          x: '周四',
          y: 400,
        },
        {
          x: '周五',
          y: 500,
        },
        {
          x: '周六',
          y: Math.floor(Math.random() * 400) + 300,
        },
      ];
    }
    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/singleSelect', (req, res) => {
    const {select} = req.query;
    let randomData = [];
    if (select === 'month') {
      randomData = [
        {
          x: '1月',
          y: 350,
        },
        {
          x: '2月',
          y: 200,
        },
        {
          x: '3月',
          y: Math.floor(Math.random() * 400) + 200,
        },
        {
          x: '4月',
          y: 400,
        },
        {
          x: '5月',
          y: 500,
        },
        {
          x: '6月',
          y: Math.floor(Math.random() * 400) + 300,
        },
      ];
    } else {
      randomData = [
        {
          x: '周一',
          y: 350,
        },
        {
          x: '周二',
          y: 200,
        },
        {
          x: '周三',
          y: Math.floor(Math.random() * 400) + 200,
        },
        {
          x: '周四',
          y: 400,
        },
        {
          x: '周五',
          y: 500,
        },
        {
          x: '周六',
          y: Math.floor(Math.random() * 400) + 300,
        },
      ];
    }
    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

  router.get('/test/multiSelect', (req, res) => {
    const {select} = req.query;
    const params = select.split(',');
    const randomData = params.map(function(obj) {
      return {
        x: obj,
        y: Math.floor(Math.random() * 300) + 200,
      }
    })

    res.json({
      code: 200,
      data: randomData,
      msg: 'testGetApi success',
    });
  });

};
