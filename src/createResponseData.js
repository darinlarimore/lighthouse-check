module.exports = (results, emulatedFormFactor) => {
  const audits = results.audits;
  const responseJson = {
    eventType: 'dev_Lighthouse',
    userAgent: results.userAgent,
    device: emulatedFormFactor,
    timestamp: restults.fetchTime,
    requestedUrl: results.requestedUrl,
    performanceScore: results.categories.performance.score,
    accessibilityScore: results.categories.accessibility.score
  };

  for (const audit in audits) {
    responseJson[audit + '_numericValue'] = audits[audit].numericValue;
    responseJson[audit + '_score'] = audits[audit].score;
  }

  return responseJson;
};
