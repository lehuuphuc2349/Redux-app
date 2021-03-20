export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json" };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  let data;
  try {
    const reponse = await window.fetch(endpoint, config);
    data = await reponse.json();
    if (reponse.ok) {
      return data;
    }
    throw new Error(reponse.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}
client.get = function(endpoint,...customConfig = {}) {
    return client(endpoint,{...customConfig,method:'GET'})
}
client.post = function(endpoint,...customConfig={}) {
    return client(endpoint,{...customConfig,body})
}