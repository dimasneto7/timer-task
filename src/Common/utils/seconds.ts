export function timeForSecunds(time: string) {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(':')

  const hourInSecunds = Number(hours) * 3600
  const minutesInSecunds = Number(minutes) * 60
  return hourInSecunds + minutesInSecunds + Number(seconds)
}
