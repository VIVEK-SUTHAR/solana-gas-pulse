function isWithin24Hours(blockTime: number) {
  const currentTimestamp = Math.floor(Date.now() / 1000) // Current time in Unix Seconds
  const timeDifference = currentTimestamp - blockTime

  return timeDifference < 86400
}

export default isWithin24Hours
