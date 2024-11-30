const apiFetch = async ({ payload, method, url }) => {
  try {
    const token = localStorage.getItem('token')
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
    }
    if (payload) {
      options.body = JSON.stringify(payload)
    }
    const response = await fetch(url, options)
    return response.json()
  } catch (error) {
    console.error(error)
    return error
  }
}

export default apiFetch