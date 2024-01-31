const isDev = process.env.NODE_ENV === "development"
const MIX_PANEL_PROJECT_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_API_KEY
async function event(event: string) {
  if (isDev) return

  const headers = { accept: "text/plain", "content-type": "application/json" }
  const body = JSON.stringify([
    {
      properties: {
        token: MIX_PANEL_PROJECT_TOKEN,
      },
      event: event,
    },
  ])

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  }

  fetch("https://api.mixpanel.com/track", options)
    .then((res) => res.text())
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}
export default event
