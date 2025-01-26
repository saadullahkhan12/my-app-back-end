function sendResponses(res, status, data, error, message) {
  return res.status(status).json({
      success: !error,
      message: message || (error ? 'Error is occurred' : 'Success'),
      data: data || null,
      error: error || null
  });
}

export default sendResponses;