export function getNormalizeStore(data) {
  const initialStore = {
    byId: {},
    allIdis: [],
    allowedIdis: []
  };
  return data.reduce((store, item, i) => {
    store.byId[i] = {
      id: item.id,
      name: item.name,
      description: item.description
    };
    store.allIdis.push(i);
    item.allowed && store.allowedIdis.push(i);
    return store;
  }, initialStore);
}

export const getCategoriesToDisplay = (categories, ui) => {
  // show all items
  if ((ui.blocked && ui.allowed) || (!ui.blocked && !ui.allowed)) {
    return Object.values(categories.byId);
  }
  // show blocked or allowed items
  switch (ui.allowed || ui.blocked) {
    case ui.allowed:
      return categories.allowedIdis.map(id => categories.byId[id]);
    case ui.blocked: {
      return categories.allIdis
        .filter(id => !categories.allowedIdis.includes(id))
        .map(id => categories.byId[id]);
    }
    default:
      return categories.allIdis.map(id => categories.byId[id]);
  }
};

export const makeAsyncRequest = async (url = "/", requestConfig = {}) => {
  // set up Content-type header if it's not specified in the requestConfig.headers
  if (!requestConfig.headers) {
    requestConfig.headers = { "Content-Type": "application/json" };
  } else {
    requestConfig.headers["Content-Type"] =
      !requestConfig.headers["Content-Type"] && "application/json";
  }

  return await fetch(url, requestConfig)
    .then(res => {
      if (!res.ok) {
        throw new Error(
          `Fetch data failed. Server answered with status: ${res.status}: ${
            res.statusText
          }`
        );
      }
      return res.json();
    })
    .catch(error => {
      console.error(error.message);
      return error;
    });
};
