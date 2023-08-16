const router = require('express').Router();

// @route   GET api/users
// @desc    Get all users

router.get('/', (req, res) => {
  res.status(200).json({
    isSuccess: true,
    msg: 'Get all users',
    data: {
      users: [
        {
          id: 1,
          name: 'John Doe',
        }
      ]
    }
  })
});

module.exports = router;