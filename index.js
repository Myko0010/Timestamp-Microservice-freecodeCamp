app.get("/api/:date?", (req, res) => {
  let { date } = req.params;
  let parsedDate;

  // If no date is provided, use current date
  if (!date) {
    parsedDate = new Date();
  } else {
    // If date is only digits, treat it as a Unix timestamp in milliseconds
    if (/^\d+$/.test(date)) {
      parsedDate = new Date(parseInt(date));
    } else {
      parsedDate = new Date(date);
    }
  }

  // Check for invalid date
  if (parsedDate.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Valid date response
  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});
