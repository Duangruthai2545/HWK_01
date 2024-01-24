const handleExamplePost = (req, res, next) => {
  try {
    const { dataFromFrontend } = req.body;

    if (!dataFromFrontend) {
      throw new Error('Invalid data from frontend');
    }

    res.status(200).json({ success: true, message: 'successfully' });
  } catch (error) {
    console.error(error);
    next(error); 
  }
};

module.exports = {
  handleExamplePost,
};
