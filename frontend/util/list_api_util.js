export const createListing = (data) => {
    return (
    $.ajax({
      method: 'POST',
      url: 'api/lists',
      data
    })
  );}

  export const fetchList = (data) => {
          return (
        $.ajax({
            method: 'GET',
            url: 'api/lists',
            data
        })
  );}

  export const deleteListing = (listId,data) => (
    $.ajax({
      method: 'DELETE',
      url: `api/lists/${data[listId]}`,
      data
    })
  );
  