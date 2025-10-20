export async function postToGoogleSheet(scriptUrl: string, formData: FormData): Promise<boolean> {
  try {
    const resp = await fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    })
    return resp.ok
  } catch (err) {
    console.error('Google Sheet post error', err)
    return false
  }
}
